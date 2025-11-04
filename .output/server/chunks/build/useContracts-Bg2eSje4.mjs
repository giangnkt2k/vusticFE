import { ref } from 'vue';
import { q as useRuntimeConfig, r as useRequestHeaders } from './server.mjs';
import { u as useSanctumFetch } from './useSanctumFetch-Bq3Ox6iK.mjs';

function useContracts() {
  const runtimeConfig = useRuntimeConfig();
  let API_URL = runtimeConfig.public.API_URL + "/api/contracts";
  const headers = useRequestHeaders(["cookie"]);
  const contracts = ref([]);
  const loading = ref(false);
  const error = ref(null);
  async function fetchContracts(searchKeyWord) {
    console.log("Fetching contracts with search keyword:", searchKeyWord);
    loading.value = true;
    error.value = null;
    if (searchKeyWord) {
      API_URL += `?search=${searchKeyWord}`;
    }
    try {
      const { data } = await useSanctumFetch(API_URL);
      contracts.value = data.value || [];
      API_URL = runtimeConfig.public.API_URL + "/api/contracts";
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  }
  async function createContract(payload) {
    try {
      const formData = new FormData();
      if (payload.pdf_file) formData.append("pdf_file", payload.pdf_file);
      if (payload.name) formData.append("name", payload.name);
      if (payload.contract_number) formData.append("contract_number", payload.contract_number);
      if (payload.date_signed) formData.append("date_signed", payload.date_signed);
      if (payload.customer_id) formData.append("customer_id", payload.customer_id.toString());
      if (payload.date_desk) formData.append("date_desk", payload.date_desk);
      if (payload.contract_value) formData.append("contract_value", payload.contract_value.toString());
      if (payload.deposit) formData.append("deposit", payload.deposit.toString());
      if (payload.status !== void 0) formData.append("status", payload.status.toString());
      const { data, error: error2 } = await useSanctumFetch(API_URL, {
        method: "POST",
        body: formData
      });
      if (Array.isArray(contracts.value)) {
        contracts.value.push(data.value);
      }
      console.log("Created contract:", data, error2);
    } catch (e) {
      error.value = e;
    }
  }
  async function updateContract(id, payload) {
    const { data } = await useSanctumFetch(`${API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });
    if (Array.isArray(contracts.value)) {
      const index = contracts.value.findIndex((contract) => contract.id === id);
      if (index !== -1) {
        contracts.value[index] = data.value;
      }
    }
  }
  async function deleteContract(id) {
    try {
      await useSanctumFetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          ...headers
        }
      });
      if (Array.isArray(contracts.value)) {
        contracts.value = contracts.value.filter((contract) => contract.id !== id);
      }
      console.log("Deleted contract:", id);
    } catch (e) {
      error.value = e;
    }
  }
  async function importContractsCSV() {
  }
  async function exportContractsCSV() {
  }
  return {
    contracts,
    loading,
    error,
    createContract,
    updateContract,
    deleteContract,
    fetchContracts,
    importContractsCSV,
    exportContractsCSV
  };
}

export { useContracts as u };
//# sourceMappingURL=useContracts-Bg2eSje4.mjs.map

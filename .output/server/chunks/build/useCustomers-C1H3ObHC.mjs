import { ref } from 'vue';
import { q as useRuntimeConfig, r as useRequestHeaders } from './server.mjs';
import { u as useSanctumFetch } from './useSanctumFetch-Bq3Ox6iK.mjs';

function useCustomers() {
  const runtimeConfig = useRuntimeConfig();
  let API_URL = runtimeConfig.public.API_URL + "/api/customers";
  const headers = useRequestHeaders(["cookie"]);
  const customers = ref([]);
  const loading = ref(false);
  const error = ref(null);
  async function fetchCustomers(searchKeyWord) {
    customers.value = [];
    loading.value = true;
    error.value = null;
    if (searchKeyWord !== void 0 && searchKeyWord !== "") {
      API_URL += `?search=${searchKeyWord}`;
    }
    try {
      console.log("Fetching customers with search keyword:", searchKeyWord);
      const { data } = await useSanctumFetch(API_URL);
      customers.value = data.value || [];
      API_URL = runtimeConfig.public.API_URL + "/api/customers";
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  }
  async function createCustomer(payload) {
    try {
      const { data } = await useSanctumFetch(API_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          ...headers
        }
      });
      console.log("Created customer:", data.value);
    } catch (e) {
      error.value = e;
    }
  }
  async function updateCustomer(id, payload) {
    const { data } = await useSanctumFetch(`${API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });
    if (Array.isArray(customers.value)) {
      const index = customers.value.findIndex((customer) => customer.id === id);
      if (index !== -1) {
        customers.value[index] = data.value;
      }
    } else if ("data" in customers.value) {
      const index = customers.value.data.findIndex((customer) => customer.id === id);
      if (index !== -1) {
        customers.value.data[index] = data.value;
      }
    }
  }
  async function deleteCustomer(id) {
    try {
      await useSanctumFetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          ...headers
        }
      });
      console.log("Deleted customer:", id);
      if (Array.isArray(customers.value)) {
        customers.value = customers.value.filter((customer) => customer.id !== id);
      } else if ("data" in customers.value) {
        customers.value.data = customers.value.data.filter((customer) => customer.id !== id);
      }
    } catch (e) {
      error.value = e;
    }
  }
  async function importCustomersCSV() {
  }
  async function exportCustomersCSV() {
  }
  return {
    customers,
    loading,
    error,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    fetchCustomers,
    importCustomersCSV,
    exportCustomersCSV
  };
}

export { useCustomers as u };
//# sourceMappingURL=useCustomers-C1H3ObHC.mjs.map

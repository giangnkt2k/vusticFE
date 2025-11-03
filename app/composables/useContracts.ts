import { ref } from 'vue'
// import type { Contract } from '~/models/contract'

export function useContracts() {
  const runtimeConfig = useRuntimeConfig()
  let API_URL = runtimeConfig.public.API_URL + '/api/contracts'

  const headers = useRequestHeaders(['cookie'])
  const contracts = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchContracts(searchKeyWord) {
    console.log('Fetching contracts with search keyword:', searchKeyWord)
    loading.value = true
    error.value = null
    if (searchKeyWord) {
      API_URL += `?search=${searchKeyWord}`
    }
    try {
      const { data } = await useSanctumFetch(API_URL)
      contracts.value = data.value || []
      API_URL = runtimeConfig.public.API_URL + '/api/contracts' // reset API_URL after fetch
    }
    catch (e) {
      error.value = e
    }
    finally {
      loading.value = false
    }
  }

  async function createContract(payload) {
    try {
      const formData = new FormData()
      formData.append('pdf_file', payload.pdf_file)
      formData.append('name', payload.name)
      formData.append('contract_number', payload.contract_number)
      formData.append('date_signed', payload.date_signed)
      formData.append('customer_id', payload.customer_id)
      formData.append('date_desk', payload.date_desk)
      formData.append('contract_value', payload.contract_value)
      formData.append('deposit', payload.deposit)
      formData.append('status', payload.status)
      const { data, error } = await useSanctumFetch(API_URL, {
        method: 'POST',
        body: formData,
      })
      contracts.value.push(data.value)
      console.log('Created contract:', data, error)
    }
    catch (e) {
      error.value = e
    }
  }

  async function updateContract(id, payload) {
    const { data } = await useSanctumFetch(`${API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })
    const index = contracts.value.findIndex(contract => contract.id === id)
    if (index !== -1) {
      contracts.value[index] = data.value
    }
  }

  async function deleteContract(id) {
    try {
      await useSanctumFetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          ...headers,
        },
      })
      contracts.value = contracts.value.filter(contract => contract.id !== id)
      console.log('Deleted contract:', id)
    }
    catch (e) {
      error.value = e
    }
  }

  async function importContractsCSV() {
    // ...implement CSV import
  }

  async function exportContractsCSV() {
    // ...implement CSV export
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
    exportContractsCSV,
  }
}

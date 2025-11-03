import { ref } from 'vue'

export function useCustomers() {
  const runtimeConfig = useRuntimeConfig()
  let API_URL = runtimeConfig.public.API_URL + '/api/customers'

  const headers = useRequestHeaders(['cookie'])
  const customers = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchCustomers(searchKeyWord) {
    customers.value = []
    loading.value = true
    error.value = null
    if (searchKeyWord !== undefined && searchKeyWord !== '') {
      API_URL += `?search=${searchKeyWord}`
    }
    try {
      console.log('Fetching customers with search keyword:', searchKeyWord)
      const { data } = await useSanctumFetch(API_URL)
      customers.value = data.value || []
      API_URL = runtimeConfig.public.API_URL + '/api/customers' // reset API_URL after fetch
    }
    catch (e) {
      error.value = e
    }
    finally {
      loading.value = false
    }
  }

  async function createCustomer(payload) {
    try {
      const { data } = await useSanctumFetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      })
      console.log('Created customer:', data.value)
    }
    catch (e) {
      error.value = e
    }
  }

  async function updateCustomer(id, payload) {
    const { data } = await useSanctumFetch(`${API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })
    const index = customers.value.findIndex(customer => customer.id === id)
    if (index !== -1) {
      customers.value[index] = data.value
    }
  }

  async function deleteCustomer(id) {
    try {
      await useSanctumFetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          ...headers,
        },
      })
      console.log('Deleted customer:', id)
      customers.value = customers.value.filter(customer => customer.id !== id)
    }
    catch (e) {
      error.value = e
    }
  }

  async function importCustomersCSV() {
    // ...implement CSV import
  }

  async function exportCustomersCSV() {
    // ...implement CSV export
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
    exportCustomersCSV,
  }
}

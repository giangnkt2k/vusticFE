import { ref } from 'vue'
import type { Customer, PaginatedResponse } from '~/types/customer'

export function useCustomers() {
  const runtimeConfig = useRuntimeConfig()
  let API_URL = runtimeConfig.public.API_URL + '/api/customers'

  const headers = useRequestHeaders(['cookie'])
  const customers = ref<PaginatedResponse<Customer> | Customer[]>([])
  const loading = ref<boolean>(false)
  const error = ref<Error | null>(null)

  async function fetchCustomers(searchKeyWord?: string) {
    customers.value = []
    loading.value = true
    error.value = null
    if (searchKeyWord !== undefined && searchKeyWord !== '') {
      API_URL += `?search=${searchKeyWord}`
    }
    try {
      console.log('Fetching customers with search keyword:', searchKeyWord)
      const { data } = await useSanctumFetch(API_URL)
      customers.value = data.value as PaginatedResponse<Customer> || []
      API_URL = runtimeConfig.public.API_URL + '/api/customers' // reset API_URL after fetch
    }
    catch (e) {
      error.value = e as Error
    }
    finally {
      loading.value = false
    }
  }

  async function createCustomer(payload: Partial<Customer>) {
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
      error.value = e as Error
    }
  }

  async function updateCustomer(id: number, payload: Partial<Customer>) {
    const { data } = await useSanctumFetch(`${API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })
    if (Array.isArray(customers.value)) {
      const index = customers.value.findIndex((customer: Customer) => customer.id === id)
      if (index !== -1) {
        customers.value[index] = data.value as Customer
      }
    }
    else if ('data' in customers.value) {
      const index = customers.value.data.findIndex((customer: Customer) => customer.id === id)
      if (index !== -1) {
        customers.value.data[index] = data.value as Customer
      }
    }
  }

  async function deleteCustomer(id: number) {
    try {
      await useSanctumFetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          ...headers,
        },
      })
      console.log('Deleted customer:', id)
      if (Array.isArray(customers.value)) {
        customers.value = customers.value.filter((customer: Customer) => customer.id !== id)
      }
      else if ('data' in customers.value) {
        customers.value.data = customers.value.data.filter((customer: Customer) => customer.id !== id)
      }
    }
    catch (e) {
      error.value = e as Error
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

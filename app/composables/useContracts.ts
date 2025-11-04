import { ref } from 'vue'
import type { Contract } from '~/types/contract'
import type { PaginatedResponse } from '~/types/customer'

export function useContracts() {
  const runtimeConfig = useRuntimeConfig()
  let API_URL = runtimeConfig.public.API_URL + '/api/contracts'

  const headers = useRequestHeaders(['cookie'])
  const contracts = ref<Contract[] | PaginatedResponse<Contract>>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchContracts(searchKeyWord?: string) {
    console.log('Fetching contracts with search keyword:', searchKeyWord)
    loading.value = true
    error.value = null
    if (searchKeyWord) {
      API_URL += `?search=${searchKeyWord}`
    }
    try {
      const { data } = await useSanctumFetch(API_URL)
      contracts.value = (data.value as Contract[] | PaginatedResponse<Contract>) || []
      API_URL = runtimeConfig.public.API_URL + '/api/contracts' // reset API_URL after fetch
    }
    catch (e) {
      error.value = e as Error
    }
    finally {
      loading.value = false
    }
  }

  async function createContract(payload: Partial<Contract>) {
    try {
      const formData = new FormData()
      if (payload.pdf_file) formData.append('pdf_file', payload.pdf_file)
      if (payload.name) formData.append('name', payload.name)
      if (payload.contract_number) formData.append('contract_number', payload.contract_number)
      if (payload.date_signed) formData.append('date_signed', payload.date_signed)
      if (payload.customer_id) formData.append('customer_id', payload.customer_id.toString())
      if (payload.date_desk) formData.append('date_desk', payload.date_desk)
      if (payload.contract_value) formData.append('contract_value', payload.contract_value.toString())
      if (payload.deposit) formData.append('deposit', payload.deposit.toString())
      if (payload.status !== undefined) formData.append('status', payload.status.toString())
      const { data, error } = await useSanctumFetch(API_URL, {
        method: 'POST',
        body: formData,
      })
      if (Array.isArray(contracts.value)) {
        contracts.value.push(data.value as Contract)
      }
      console.log('Created contract:', data, error)
    }
    catch (e) {
      error.value = e as Error
    }
  }

  async function updateContract(id: number, payload: Partial<Contract>) {
    const { data } = await useSanctumFetch(`${API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })
    if (Array.isArray(contracts.value)) {
      const index = contracts.value.findIndex((contract: Contract) => contract.id === id)
      if (index !== -1) {
        contracts.value[index] = data.value as Contract
      }
    }
  }

  async function deleteContract(id: number) {
    try {
      await useSanctumFetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          ...headers,
        },
      })
      if (Array.isArray(contracts.value)) {
        contracts.value = contracts.value.filter((contract: Contract) => contract.id !== id)
      }
      console.log('Deleted contract:', id)
    }
    catch (e) {
      error.value = e as Error
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

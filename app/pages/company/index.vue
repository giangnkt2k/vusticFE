<script setup lang="ts">
// Create customer
import { ref } from 'vue'

definePageMeta({
  layout: 'default',
  middleware: ['sanctum:auth'],
})
const tableCustomerFields = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'company', label: 'Company' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'address', label: 'Address' },

]
const { customers, fetchCustomers, createCustomer, updateCustomer, deleteCustomer } = useCustomers()
await fetchCustomers()
const dataTable = ref([])
dataTable.value = [...customers.value]
const showCreateDialog = ref(false)
const form = ref({ name: '', email: '', phone: '', address: '', company_tax_code: '' })

async function submitCreateCustomer() {
  await createCustomer(form.value)
  showCreateDialog.value = false
  form.value = { name: '', email: '', phone: '', address: '', company_tax_code: '' }
  await fetchCustomers()
}
// Update customer
const showUpdateDialog = ref(false)
const openUpdateDialog = (customer) => {
  form.value = { ...customer }
  showUpdateDialog.value = true
}
async function submitUpdateCustomer() {
  await updateCustomer(form.value.id, form.value)
  showUpdateDialog.value = false
  form.value = { name: '', email: '', phone: '', address: '', company_tax_code: '' }
  await fetchCustomers()
}
// Delete customer
const handleDeleteCustomer = async (id) => {
  await deleteCustomer(id)
  await fetchCustomers()
}
// search customer
const searchQuery = ref('')
const searchingCustomer = async () => {
  await fetchCustomers(searchQuery.value)
  dataTable.value = [...customers.value]
  console.log('Searched customers:', dataTable)
  searchQuery.value = ''
}
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex items-center justify-between p-4">
      <div class="flex space-x-2">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="px-4 py-2 border rounded-lg"
        >
        <button
          class="px-4 py-2 text-white bg-blue-600 rounded-lg"
          @click="searchingCustomer"
        >
          Search
        </button>
      </div>
      <button
        class="px-4 py-2 text-white bg-green-600 rounded-lg"
        @click="showCreateDialog = true"
      >
        Create New Customer
      </button>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th
            v-for="field in tableCustomerFields"
            :key="field.key"
            scope="col"
            class="px-6 py-3"
          >
            {{ field.label }}
          </th>
          <th
            scope="col"
            class="px-6 py-3"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="customer in dataTable"
          :key="customer.id"
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ customer.id }}
          </th>
          <td class="px-6 py-4">
            {{ customer.name }}
          </td>
          <td class="px-6 py-4">
            {{ customer.company_tax_code }}
          </td>
          <td class="px-6 py-4">
            {{ customer.email }}
          </td>
          <td class="px-6 py-4">
            {{ customer.phone }}
          </td>
          <td class="px-6 py-4">
            {{ customer.address }}
          </td>
          <td class="px-6 py-4">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-1"
              @click="openUpdateDialog(customer)"
            >Edit</a>
            <a
              href="#"
              class="font-medium text-red-600 dark:text-red-500 hover:underline"
              @click="handleDeleteCustomer(customer.id)"
            >Delete</a>
          </td>
        </tr>
        <tr v-if="dataTable.length === 0">
          <td
            colspan="7"
            class="px-6 py-4 text-center text-gray-500"
          >
            No customers found
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Create Customer Dialog -->
    <div
      v-if="showCreateDialog"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
    >
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          @click="showCreateDialog = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          /></svg>
        </button>
        <h2 class="text-xl font-bold mb-4">
          Create Customer
        </h2>
        <form @submit.prevent="submitCreateCustomer">
          <div class="mb-3">
            <label class="block text-sm font-medium mb-1">Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-3 py-2 border rounded-lg"
            >
          </div>
          <div class="mb-3">
            <label class="block text-sm font-medium mb-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-3 py-2 border rounded-lg"
            >
          </div>
          <div class="mb-3">
            <label class="block text-sm font-medium mb-1">Phone</label>
            <input
              v-model="form.phone"
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
            >
          </div>
          <div class="mb-3">
            <label class="block text-sm font-medium mb-1">Address</label>
            <input
              v-model="form.address"
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
            >
          </div>
          <div class="mb-3">
            <label class="block text-sm font-medium mb-1">Company Tax Code </label>
            <input
              v-model="form.company_tax_code"
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
            >
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <button
              type="button"
              class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700"
              @click="showCreateDialog = false"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 rounded-lg bg-green-600 text-white"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- End Create Customer Dialog -->
    <!-- Update Customer Dialog -->
    <div
      v-if="showUpdateDialog"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
    >
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          @click="showUpdateDialog = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          /></svg>
        </button>
        <h2 class="text-xl font-bold mb-4">
          Update Customer
        </h2>
        <form @submit.prevent="submitUpdateCustomer">
          <div class="mb-3">
            <label class="block text-sm font-medium mb-1">Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-3 py-2 border rounded-lg"
            >
          </div>
          <div class="mb-3">
            <label class="block text-sm font-medium mb-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-3 py-2 border rounded-lg"
            >
          </div>
          <div class="mb-3">
            <label class="block text-sm font-medium mb-1">Phone</label>
            <input
              v-model="form.phone"
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
            >
          </div>
          <div class="mb-3">
            <label class="block text-sm font-medium mb-1">Address</label>
            <input
              v-model="form.address"
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
            >
          </div>
          <div class="mb-3">
            <label class="block text-sm font-medium mb-1">Company Tax Code </label>
            <input
              v-model="form.company_tax_code"
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
            >
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <button
              type="button"
              class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700"
              @click="showUpdateDialog = false"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 rounded-lg bg-green-600 text-white"
              @click="submitUpdateCustomer"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

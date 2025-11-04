<script setup lang="ts">
// Create customer
import { ref } from 'vue'
import type { Customer, PaginatedResponse } from '~/types/customer'

definePageMeta({
  layout: 'default',
  middleware: ['sanctum:auth'],
})
const tableCustomerFields = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Tên khách hàng' },
  { key: 'company_name', label: 'Tên công ty' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Điện thoại' },
  { key: 'address', label: 'Địa chỉ' },
  { key: 'contact_point', label: 'Mối liên hệ' },
  { key: 'company_tax_code', label: 'Mã số thuế công ty' },
  { key: 'note', label: 'Ghi chú' },
]
const searchQuery = ref<string | undefined>(undefined)
const { customers, fetchCustomers, updateCustomer, deleteCustomer } = await useCustomers()
await fetchCustomers(searchQuery.value)
const dataTable = ref<Customer[]>([])
dataTable.value = Array.isArray(customers.value) ? [...customers.value] : [...(customers.value as PaginatedResponse<Customer>).data]

const showDeleteDialog = ref(false)
const customerToDelete = ref<Customer | null>(null)
const form = ref<Partial<Customer> & { id?: number }>({ name: '', email: '', phone: '', address: '', company_tax_code: '' })

// Update customer
const showUpdateDialog = ref(false)
const openUpdateDialog = (customer: Customer) => {
  form.value = { ...customer }
  showUpdateDialog.value = true
}
async function submitUpdateCustomer() {
  await updateCustomer(form.value.id!, form.value)
  showUpdateDialog.value = false
  form.value = { name: '', email: '', phone: '', address: '', company_tax_code: '' }
  dataTable.value = []
  await fetchCustomers(searchQuery.value)
  dataTable.value = Array.isArray(customers.value) ? [...customers.value] : [...(customers.value as PaginatedResponse<Customer>).data]
}
// async function reloadDataTable() {
//   dataTable.value = []
//   dataTable.value = [...customers.value]
// }
// Delete customer
const openDeleteDialog = (customer: Customer) => {
  customerToDelete.value = customer
  showDeleteDialog.value = true
}

const handleDeleteCustomer = async () => {
  if (customerToDelete.value) {
    try {
      await deleteCustomer(customerToDelete.value.id!)
      // Đóng dialog trước
      showDeleteDialog.value = false
      customerToDelete.value = null
      // Cập nhật lại danh sách từ server
      await fetchCustomers(searchQuery.value)
      dataTable.value = Array.isArray(customers.value) ? [...customers.value] : [...(customers.value as PaginatedResponse<Customer>).data]
      console.log('Customer deleted successfully, table updated', customers.value)
    }
    catch (error) {
      console.error('Error deleting customer:', error)
      // Có thể thêm thông báo lỗi ở đây
    }
  }
}

const cancelDelete = () => {
  showDeleteDialog.value = false
  customerToDelete.value = null
}
// search customer
const searchingCustomer = async () => {
  await fetchCustomers(searchQuery.value)
  dataTable.value = Array.isArray(customers.value) ? [...customers.value] : [...(customers.value as PaginatedResponse<Customer>).data]
  console.log('Searched customers:', dataTable)
  searchQuery.value = undefined
}
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-4">
      <div class="flex space-x-2 md:col-span-2 col-span-1 md:justify-start justify-between">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="border rounded-lg"
        >
        <UButton
          class=" bg-blue-600 rounded-lg"
          @click="searchingCustomer"
        >
          Tìm kiếm
        </UButton>
      </div>
      <UButton
        to="/customers/create"
        class="col-span-1 bg-green-600 rounded-lg md:justify-self-end justify-center"
      >
        Thêm khách hàng
      </UButton>
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
            {{ customer.company_name }}
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
            {{ customer.contact_point }}
          </td>
          <td class="px-6 py-4">
            {{ customer.company_tax_code }}
          </td>
          <td class="px-6 py-4">
            {{ customer.note }}
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
              @click="openDeleteDialog(customer)"
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
    <!-- Delete Confirmation Dialog -->
    <div
      v-if="showDeleteDialog"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
    >
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          @click="cancelDelete"
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
        <div class="text-center">
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg
              class="h-6 w-6 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            Xác nhận xóa khách hàng
          </h3>
          <p class="text-sm text-gray-500 mb-6">
            Bạn có chắc chắn muốn xóa khách hàng <strong>"{{ customerToDelete?.name }}"</strong> không?
            Hành động này không thể hoàn tác.
          </p>
          <div class="flex justify-center gap-3">
            <button
              type="button"
              class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
              @click="cancelDelete"
            >
              Hủy
            </button>
            <button
              type="button"
              class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              @click="handleDeleteCustomer"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End Delete Confirmation Dialog -->
  </div>
</template>

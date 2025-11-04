<script setup lang="ts">
import type { TableColumn, DropdownMenuItem } from '@nuxt/ui'
import { useClipboard } from '@vueuse/core'
import type { Contract } from '~/types/contract'
import type { PaginatedResponse } from '~/types/customer'

interface Pagination {
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Array<{ url: string | null, label: string, active: boolean }>
  next_page_url: string | null
  prev_page_url: string | null
  per_page: number
  to: number
  total: number
  current_page: number
}
const toast = useToast()
const { copy } = useClipboard()
// const table = useTemplateRef('table')
const { contracts, fetchContracts, deleteContract } = useContracts()
await fetchContracts()

const searchQuery = ref('')

const data = ref<Contract[]>(
  Array.isArray(contracts.value) ? contracts.value : (contracts.value as PaginatedResponse<Contract>).data || [],
)
const paginationFetch = ref<Pagination>({
  first_page_url: Array.isArray(contracts.value) ? '' : (contracts.value as PaginatedResponse<Contract>).first_page_url || '',
  from: Array.isArray(contracts.value) ? 0 : (contracts.value as PaginatedResponse<Contract>).from || 0,
  last_page: Array.isArray(contracts.value) ? 1 : (contracts.value as PaginatedResponse<Contract>).last_page || 1,
  last_page_url: Array.isArray(contracts.value) ? '' : (contracts.value as PaginatedResponse<Contract>).last_page_url || '',
  links: Array.isArray(contracts.value) ? [] : (contracts.value as PaginatedResponse<Contract>).links || [],
  next_page_url: Array.isArray(contracts.value) ? null : (contracts.value as PaginatedResponse<Contract>).next_page_url || null,
  prev_page_url: Array.isArray(contracts.value) ? null : (contracts.value as PaginatedResponse<Contract>).prev_page_url || null,
  per_page: Array.isArray(contracts.value) ? 10 : (contracts.value as PaginatedResponse<Contract>).per_page || 10,
  to: Array.isArray(contracts.value) ? 0 : (contracts.value as PaginatedResponse<Contract>).to || 0,
  total: Array.isArray(contracts.value) ? 0 : (contracts.value as PaginatedResponse<Contract>).total || 0,
  current_page: Array.isArray(contracts.value) ? 1 : (contracts.value as PaginatedResponse<Contract>).current_page || 1,
})

const columns: TableColumn<Contract>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Tên hợp đồng',
  },
  {
    accessorKey: 'contract_number',
    header: 'Số hợp đồng',
  },
  {
    accessorKey: 'date_signed',
    header: 'Ngày ký',
  },
  {
    accessorKey: 'customer.name',
    header: 'Khách hàng',
  },
  {
    accessorKey: 'date_desk',
    header: 'Ngày bàn giao',
  },
  {
    accessorKey: 'contract_value',
    header: 'Giá trị hợp đồng',
  },
  {
    accessorKey: 'deposit',
    header: 'Tiền đặt cọc',
  },
  {
    accessorKey: 'status',
    header: 'Trạng thái',
  },
  {
    accessorKey: 'pdf_file',
    header: 'Tệp PDF',
  },
  {
    id: 'action',
  },
]

const searchingContracts = async () => {
  await fetchContracts(searchQuery.value)
  if (Array.isArray(contracts.value)) {
    data.value = [...contracts.value]
  }
  else if ((contracts.value as PaginatedResponse<Contract>).data) {
    data.value = [...(contracts.value as PaginatedResponse<Contract>).data]
  }
}

const refreshTable = async () => {
  await fetchContracts()
  if (Array.isArray(contracts.value)) {
    data.value = [...contracts.value]
  }
  else if (contracts.value && typeof contracts.value === 'object' && 'data' in contracts.value) {
    data.value = [...(contracts.value as PaginatedResponse<Contract>).data]
  }
}

const handleDeleteContract = async (contractId: number) => {
  try {
    await deleteContract(contractId)
    toast.add({
      title: 'Success',
      description: 'Contract deleted successfully!',
      color: 'success',
      icon: 'i-lucide-circle-check',
    })
    // Refresh the table after deletion
    await refreshTable()
  }
  catch {
    toast.add({
      title: 'Error',
      description: 'Failed to delete contract',
      color: 'error',
      icon: 'i-lucide-circle-x',
    })
  }
}

function getDropdownActions(contract: Contract): DropdownMenuItem[][] {
  return [
    [
      {
        label: 'Copy contract Id',
        icon: 'i-lucide-copy',
        onSelect: () => {
          copy(contract.id?.toString() || '')

          toast.add({
            title: 'Contract ID copied to clipboard!',
            color: 'success',
            icon: 'i-lucide-circle-check',
          })
        },
      },
    ],
    [
      {
        label: 'Edit',
        icon: 'i-lucide-edit',
      },
      {
        label: 'Delete',
        icon: 'i-lucide-trash',
        color: 'error',
        onSelect: () => {
          if (contract.id) {
            handleDeleteContract(contract.id)
          }
        },
      },
    ],
  ]
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-4">
      <div class="flex space-x-2">
        <UInput
          v-model="searchQuery"
          icon="i-lucide-search"
          size="md"
          variant="outline"
          placeholder="Search..."
        />
        <UButton
          class="text-white bg-blue-600 rounded-lg"
          @click="searchingContracts"
        >
          Search
        </UButton>
      </div>
      <UButton
        to="/contracts/create"
        target="_blank"
      >
        Thêm hợp đồng
      </UButton>
    </div>
    <UTable
      :data="data"
      :columns="columns"
      class="flex-1"
    >
      <template #name-cell="{ row }">
        <div class="flex items-center gap-3">
          <div>
            <p class="font-medium text-highlighted">
              {{ row.original.name }}
            </p>
            <p>
              {{ row.original.position }}
            </p>
          </div>
        </div>
      </template>
      <template #action-cell="{ row }">
        <UDropdownMenu :items="getDropdownActions(row.original)">
          <UButton
            icon="i-lucide-ellipsis-vertical"
            color="neutral"
            variant="ghost"
            aria-label="Actions"
          />
        </UDropdownMenu>
      </template>
    </UTable>
    <div class="flex justify-center border-t border-default pt-4">
      <UPagination
        :default-page="paginationFetch.current_page"
        :items-per-page="paginationFetch.per_page"
        :total="paginationFetch.total"
      />
    </div>
  </div>
</template>

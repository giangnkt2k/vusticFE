<script setup lang="ts">
import type { TableColumn, DropdownMenuItem } from '@nuxt/ui'
import { getPaginationRowModel } from '@tanstack/vue-table'
import { useClipboard } from '@vueuse/core'

interface Contract {
  id: number
  name: string
  contract_number: string
  date_signed: string
  customer: {
    id: number
    name: string
  }
  date_desk: string
  contract_value: number
  deposit: number
  status: string
  pdf_file: string
}
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
}
const toast = useToast()
const { copy } = useClipboard()
// const table = useTemplateRef('table')
const { contracts, fetchContracts } = useContracts()
await fetchContracts()
const data = ref<Contract[]>([
  ...contracts.value.data,
])
console.log('qưeee', contracts.value.to)
const paginationFetch = ref<Pagination>({
  first_page_url: contracts.value.first_page_url,
  from: contracts.value.from,
  last_page: contracts.value.last_page,
  last_page_url: contracts.value.last_page_url,
  links: contracts.value.links,
  next_page_url: contracts.value.next_page_url,
  prev_page_url: contracts.value.prev_page_url,
  per_page: contracts.value.per_page,
  to: contracts.value.to,
  total: contracts.value.total,
  current_page: contracts.value.current_page,
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

function getDropdownActions(contract: Contract): DropdownMenuItem[][] {
  return [
    [
      {
        label: 'Copy contract Id',
        icon: 'i-lucide-copy',
        onSelect: () => {
          copy(contract.id.toString())

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
      },
    ],
  ]
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-4">
      <!-- <div class="flex space-x-2">
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
      </div> -->
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

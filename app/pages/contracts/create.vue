<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
const ACCEPTED_IMAGE_TYPES = ['application/pdf']

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

const schema = z.object({
  name: z.string().min(2, 'Must be at least 2 characters'),
  contract_number: z.string().min(2, 'Must be at least 2 characters'),
  date_desk: z.string(),
  date_signed: z.string(),
  customer_id: z.number().min(1, 'Must select a customer'),
  contract_value: z.number().min(0, 'Must be a positive number'),
  deposit: z.number().min(0, 'Must be a positive number'),
  status: z.string().min(0, 'Must be at least 2 characters'),
  pdf_file: z
    .instanceof(File, {
      message: 'Please select a pdf file.',
    })
    .refine(file => file.size <= MAX_FILE_SIZE, {
      message: `The pdf file is too large. Please choose a pdf file smaller than ${formatBytes(MAX_FILE_SIZE)}.`,
    })
    .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: 'Please upload a valid pdf file (application/pdf).',
    }),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: 'giang',
  contract_number: '12',
  date_desk: '2025-09-13',
  date_signed: '2025-09-12',
  customer_id: 1,
  contract_value: 1000000,
  deposit: 100000,
  status: '1',
  pdf_file: undefined,
})

const toast = useToast()
const { createContract } = useContracts()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  await createContract(event.data)
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  navigateTo('/contracts')
}
</script>

<template>
  <div>
    <UCard variant="subtle">
      <template #header>
        <div class="flex justify-between">
          <h2 class="text-lg font-medium">
            Create Contract
          </h2>
          <UButton to="/contracts">
            Back to Contracts
          </UButton>
        </div>
      </template>
      <template #default>
        <div style="place-self: center;">
          <UContainer>
            <UForm
              :schema="schema"
              :state="state"
              class="space-y-4 flex flex-col gap-2"
              @submit="onSubmit"
            >
              <div class="flex items-center gap-4">
                <UFormField
                  label="Tên hợp đồng"
                  name="name"
                >
                  <UInput
                    v-model="state.name"
                    placeholder="Enter contract name"
                  />
                </UFormField>

                <UFormField
                  label="Số hợp đồng"
                  name="contract_number"
                >
                  <UInput
                    v-model="state.contract_number"
                    placeholder="Enter contract number"
                  />
                </UFormField>
                <UFormField
                  label="Ngày ký"
                  name="date_signed"
                >
                  <UInput
                    v-model="state.date_signed"
                    type="date"
                  />
                </UFormField>
                <UFormField
                  label="Ngày bàn giao"
                  name="date_desk"
                >
                  <UInput
                    v-model="state.date_desk"
                    type="date"
                  />
                </UFormField>
              </div>

              <div class="flex items-center gap-4">
                <UFormField
                  label="Customer ID"
                  name="customer_id"
                >
                  <UInput
                    v-model="state.customer_id"
                    placeholder="Customer ID"
                    type="number"
                  />
                </UFormField>
                <UFormField
                  label="Giá trị hợp đồng"
                  name="contract_value"
                >
                  <UInput
                    v-model="state.contract_value"
                    type="number"
                  />
                </UFormField>
                <UFormField
                  label="Tiền đã thu"
                  name="deposit"
                >
                  <UInput
                    v-model="state.deposit"
                    type="number"
                  />
                </UFormField>
              </div>
              <UFormField
                label="Trạng thái"
                name="status"
              >
                <UInput
                  v-model="state.status"
                  placeholder="Trạng thái"
                />
              </UFormField>

              <UFormField
                name="pdf_file"
                label="File hợp đồng (PDF)"
                description="PDF. 2MB Max."
              >
                <UFileUpload
                  v-model="state.pdf_file"
                  class="w-96 min-h-48"
                />
              </UFormField>
              <UButton
                icon="i-lucide-rocket"
                size="md"
                type="submit"
                class="text-center w-2xl"
              >
                Create Contract
              </UButton>
            </UForm>
          </UContainer>
        </div>
      </template>
      <template #footer>
        <h1>Create Contract</h1>
      </template>
    </UCard>
  </div>
</template>

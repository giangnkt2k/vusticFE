<script setup lang="ts">
import { reactive } from 'vue'
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(1, { message: 'Phone is required' }),
  company_name: z.string().min(1, { message: 'Company name is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
  contact_point: z.string().min(1, { message: 'Contact point is required' }),
  note: z.string().optional(),
  company_tax_code: z.string().optional(),
})
type Schema = z.output<typeof schema>
const state = reactive<Partial<Schema>>({
  name: undefined,
  email: undefined,
  phone: undefined,
  company_name: undefined,
  address: undefined,
  contact_point: undefined,
  note: undefined,
  company_tax_code: undefined,
})
const { createCustomer } = useCustomers()
async function handleSubmit(event: FormSubmitEvent<Schema>) {
  await createCustomer(event.data)
  Object.assign(state, {
    name: undefined,
    email: undefined,
    phone: undefined,
    company_name: undefined,
    address: undefined,
    contact_point: undefined,
    note: undefined,
    company_tax_code: undefined,
  })
  console.log(event.data)
  alert('Lưu khách hàng thành công')
  navigateTo('/customers')
}
</script>

<template>
  <div>
    <UCard variant="subtle">
      <template #header>
        <div class="flex justify-between">
          <h2 class="text-lg font-medium">
            Thêm khách hàng mới
          </h2>
          <UButton to="/customers">
            Quay lại danh sách khách hàng
          </UButton>
        </div>
      </template>
      <template #default>
        <div class="w-full max-w-2xl mx-auto px-4">
          <UForm
            class="space-y-4"
            :schema="schema"
            :state="state"
            @submit="handleSubmit"
          >
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <UFormField
                label="Tên khách hàng"
                name="name"
              >
                <UInput
                  v-model="state.name"
                  placeholder="Enter customer name"
                />
              </UFormField>

              <UFormField
                label="Email"
                name="email"
              >
                <UInput
                  v-model="state.email"
                  type="email"
                  placeholder="Enter email address"
                />
              </UFormField>

              <UFormField
                label="Số điện thoại"
                name="phone"
              >
                <UInput
                  v-model="state.phone"
                  type="text"
                  placeholder="Enter phone number"
                />
              </UFormField>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <UFormField
                label="Tên công ty"
                name="company_name"
              >
                <UInput
                  v-model="state.company_name"
                  type="text"
                  placeholder="Enter company name"
                />
              </UFormField>
              <UFormField
                label="Mã số thuế công ty"
                name="company_tax_code"
              >
                <UInput
                  v-model="state.company_tax_code"
                  type="text"
                  placeholder="Enter company tax code (optional)"
                />
              </UFormField>
              <UFormField
                label="Địa chỉ"
                name="address"
              >
                <UInput
                  v-model="state.address"
                  type="text"
                  placeholder="Enter address"
                />
              </UFormField>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <UFormField
                label="Người liên hệ"
                name="contact_point"
              >
                <UInput
                  v-model="state.contact_point"
                  type="text"
                  placeholder="Enter contact person"
                />
              </UFormField>

              <UFormField
                label="Ghi chú"
                name="note"
                class="col-span-1 md:col-span-2"
              >
                <UTextarea
                  v-model="state.note"
                  placeholder="Enter additional notes (optional)"
                  :rows="3"
                />
              </UFormField>
            </div>

            <UButton
              type="submit"
              color="primary"
              variant="solid"
              size="lg"
              class="w-full mt-6"
            >
              Lưu khách hàng
            </UButton>
          </UForm>
        </div>
      </template>
    </UCard>
  </div>
</template>

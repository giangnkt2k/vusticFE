// app/models/contract.ts
export interface Contract {
  id?: number
  name?: string
  contract_number?: string
  date_signed: string
  customer_id: number | string
  date_desk: string
  contract_value: number
  deposit: number
  status: number | string
  pdf_file?: File | null
  created_at?: string
  updated_at?: string
  position?: string
}

export const contractSchema = {
  date_signed: '',
  customer_id: '',
  date_desk: '',
  contract_value: 0,
  deposit: 0,
  status: 0,
  pdf_file: null,
}

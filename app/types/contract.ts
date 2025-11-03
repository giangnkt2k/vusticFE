// app/models/contract.ts
export interface Contract {
  id?: number
  date_signed: string
  customer_id: string
  date_desk: string
  contract_value: number
  deposit: number
  status: number
  pdf_file?: File | null
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

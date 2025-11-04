export interface Customer {
  id?: number
  name: string
  email: string
  phone: string
  address: string
  company_name?: string
  contact_point?: string
  company_tax_code: string
  note?: string
  created_at?: string
  updated_at?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  current_page: number
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Array<{
    url: string | null
    label: string
    active: boolean
  }>
  next_page_url: string | null
  prev_page_url: string | null
  per_page: number
  to: number
  total: number
}

export const customerSchema = {
  name: '',
  email: '',
  phone: '',
  address: '',
  company_name: '',
  contact_point: '',
  company_tax_code: '',
  note: '',
}

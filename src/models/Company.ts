import { ICurrency } from '~/models/Currency'

export interface ICompany {
  companyId: number
  companyName: string
  companyAddress: string
  phoneNo: string
  country: string
  baseCurrencyId: number
  baseCurrency?: ICurrency
}

import { ICurrency } from '~/models/Currency'
import { useApi } from '../axiosConfig'

const currencies: ICurrency[] = [
  {
    currencyId: 1,
    currencyCode: 'CAD',
    currencyName: 'Canadian Dollar',
  },
  {
    currencyId: 2,
    currencyCode: 'USD',
    currencyName: 'US Dollar',
  },
]

export async function getCurrencies() {
  const response = await useApi().get<ICurrency[]>('/Currency')
  const currencies = response.data
  return currencies
}

export async function addCurrency(currency: ICurrency) {
  currency.currencyId = currencies.length
  currencies.push(currency)
  return currency
}

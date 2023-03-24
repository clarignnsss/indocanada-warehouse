import { ICurrency } from '~/models/Currency'

const currencies: ICurrency[] = [
  {
    Id: 1,
    CurrencyCode: 'CAD',
    CurrencyName: 'Canadian Dollar',
  },
  {
    Id: 2,
    CurrencyCode: 'USD',
    CurrencyName: 'US Dollar',
  },
]

export function getCurrencies() {
  return currencies
}

export async function addCurrency(currency: ICurrency) {
  currency.Id = currencies.length
  currencies.push(currency)
  return currency
}

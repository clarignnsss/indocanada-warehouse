import { ICompany } from '~/models/Company'
// import { useApi } from '../axiosConfig'

const companies: ICompany[] = [
  {
    companyId: 1,
    companyName: 'PT Indofood Sukses Makmur',
    companyAddress: 'Jalan Jenderal Sudirman Kav. 76-78, Jakarta Selatan',
    phoneNo: '6221 5793 7500',
    country: 'Indonesia',
    baseCurrencyId: 1,
  },

  {
    companyId: 2,
    companyName: 'PT Mayora Indah',
    companyAddress: 'Jalan Daan Mogot KM 18. No.23, Kalideres',
    phoneNo: '(021) 5446389',
    country: 'Indonesia',
    baseCurrencyId: 2,
  },

  {
    companyId: 3,
    companyName: 'PT Astra International Tbk',
    companyAddress:'Menara Astra Lt 58-63, Jl. Jendral Sudirman Kav 5-6, Jakarta',
    phoneNo: '(021) 508 43 888',
    country: 'Indonesia',
    baseCurrencyId: 3,
  },

  {
    companyId: 4,
    companyName: 'Tokopedia',
    companyAddress:
      'Jl. Prof.Dr. Satrio Kav 11, Prof. Dr. Satrio, Satrio, Jakarta Selatan',
    phoneNo: '(021) 7341688',
    country: 'Indonesia',
    baseCurrencyId: 4,
  },
]

export async function getCompanies() {
//   const response = await useApi().get<ICompany[]>('/Company')
//   const companies = response.data
  return companies
}

export async function addCompany(Company: ICompany) {
  //Company.companyId = Company.companyId
  companies.push(Company)
  return Company
}

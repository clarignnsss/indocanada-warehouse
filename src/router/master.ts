import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/master/company',
    name: 'Company',
    component: () => import('~/views/master/company/CompanyView.vue')
  },
  {
    path: '/master/currency',
    name: 'Currency',
    component: () => import('~/views/master/currency/CurrencyView.vue')
  },
  {
    path: '/master/currency/add',
    name: 'CurrencyAdd',
    component: () => import('~/views/master/currency/CurrencyAddView.vue')
  },
]

export default routes

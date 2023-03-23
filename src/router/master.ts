import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/master/company',
    name: 'Company',
    component: () => import('../views/master/company/CompanyView.vue')
  }
]

export default routes

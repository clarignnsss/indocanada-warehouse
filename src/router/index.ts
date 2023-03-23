import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import masterRoutes from './master'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/SecondView.vue'),
  },
  ...masterRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.length < 1) {
    next('/')
  } else {
    next()
  }
})

export default router

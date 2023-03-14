import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: '/second',
    name: 'second',
    component: () => import('../views/SecondView.vue'),
  }
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

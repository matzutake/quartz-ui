import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'components',
    component: () => import('@/views/Components.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

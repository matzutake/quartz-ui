import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/Layout.vue'),
    redirect: '/components/',
    children: [
      {
        path: '/components/',
        name: 'home',
        component: () => import('@/views/Components.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

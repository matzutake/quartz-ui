import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Routes
import Home from '@/views/Components.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

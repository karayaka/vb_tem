// Composables
import { createRouter, createWebHistory } from 'vue-router'
import AdminHome from '@/views/admin_views/AdminHome.vue'

const routes = [
  {
    path: '/',
    component: AdminHome,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home_views/Home.vue'),
      },
    ],
  },
  {
    path: '/login',
    name:'login',
    component: () => import('@/views/security/Login.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

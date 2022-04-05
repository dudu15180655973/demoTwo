import Vue from 'vue'
import VueRouter from 'vue-router'
import Mepage from '@/views/Mepage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/mepage',
    component: Mepage,
    children: [
      {
        path: 'search',
        component: () => import('@/components/Search')
      }
    ]
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart')
  },
  {
    path: '/category',
    component: () => import('@/views/Category')
  },
  {
    path: '/topic',
    component: () => import('@/views/Topic')
  },
  {
    path: '/user',
    component: () => import('@/views/User')
  },
  {
    path: '/',
    redirect: '/mepage'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

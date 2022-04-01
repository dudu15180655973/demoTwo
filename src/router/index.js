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

import Vue from 'vue'
import VueRouter from 'vue-router'
import Mepage from '@/views/Mepage'
import { setTimeout } from 'core-js'
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

// 路由拦截,未登录状态不能进入购物车页面
router.beforeEach((to, from, next) => {
  // console.log(to, 'to')
  // 获取到token
  let token = localStorage.getItem('token')
  // 判断是否进入购物车页面
  if (to.path == '/cart') {
    // 判断是否登录:是否有token
    if (token) {
      // 如果有token就不拦截，继续执行
      next()
    } else {
      Vue.prototype.$toast('请先登录')
      setTimeout(() => {
        // 没有登录自动跳转到登录页
        next('/user')
      }, 1000)
    }
  }
  // 适配所有页面
  next()
})

export default router

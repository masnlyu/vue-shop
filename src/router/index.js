import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '@/components/pages/Login'
import Dashboard from '@/components/pages/Dashboard'
import Product from '@/components/pages/Product'
import testOder from '@/components/pages/TestOder'
import Oders from '@/components/pages/Oders'

Vue.use(VueRouter)

const routes = [
  //meta: { requiresAuth: true }是跳轉時是否驗證的依據與導航守衛配合
  {
    // 若路徑不對自動自動導向回Login
    path:'*',
    redirect:'Login'
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  //   meta: { requiresAuth: true }
  // },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard,
    children:[
      {
        path:'product',
        name:'Product',
        component:Product,
        meta: { requiresAuth: true },
      },
      {
        path:'oders',
        name:'Oders',
        component:Oders,
        meta: { requiresAuth: true },
      },
      {
        path:'testOder',
        name:'testOder',
        component:testOder,
        meta: { requiresAuth: true },
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

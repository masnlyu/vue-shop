import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeContent from '../views/HomeContent.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'
import ViewProducts from '../views/ViewProducts.vue'

import Login from '@/components/pages/Login'
import Dashboard from '@/components/pages/Dashboard'
import Products from '@/components/pages/Products'
import testOrder from '@/components/pages/TestOrder'
import cheakorder from '@/components/pages/CheakOrder'
import Orders from '@/components/pages/Orders'
import Coupons from '@/components/pages/Coupons'

Vue.use(VueRouter)

const routes = [
  //meta: { requiresAuth: true }是跳轉時是否驗證的依據與導航守衛配合
  {
    // 若路徑不對自動自動導向回Login
    path: '*',
    redirect: 'Login'
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  //   meta: { requiresAuth: true }
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products,
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders,
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: Coupons,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/',
    name: 'index',
    component: Home,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: HomeContent,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'news',
        name: 'News',
        component: News,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact,
      },
      {
        path: 'viewproducts',
        name: 'ViewProducts',
        component: ViewProducts,
        redirect: '/viewproducts/order',
        children: [
          {
            path: 'order',
            name: 'Order',
            component: testOrder,
          }
        ]
      },
      {
        path: 'cheakOrder/:orderId',
        name: 'CheakOrder',
        component: cheakorder,
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

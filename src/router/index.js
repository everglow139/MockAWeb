import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import the pages
import Company from '../pages/Company'
import Products from '@/pages/Products'
import Research from '@/pages/Research'
import Safety from '@/pages/Safety'
import Home from '@/pages/Home'
import Talking from '@/pages/Talking'
export default new Router({
  routes: [
    {
      path: '/company',
      name: 'Company',
      component: Company,
      meta: { requiresAuth: false }
      
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: { requiresAuth: false }
    },
    {
      path: '/research',
      name: 'Research',
      component: Research,
      meta: { requiresAuth: false }
    },
    {
      path: '/safety',
      name: 'Safety',
      component: Safety,
      meta: { requiresAuth: false }
    },
    {
      path:'/talking',
      name:'Talking',
      component: Talking
    },
    {
      path: '/',
      redirect: '/home',
      meta: { requiresAuth: true }
    }
  ]
})
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/franchises',
    name: 'franchises',
    component: () => import(/* webpackChunkName: "franchises" */'../views/franchises/Index.vue'),
    children: [{
      path: ':id',
      name: 'franchise-details',
      component: () => import(/* webpackChunkName: "franchise-edit" */'../views/franchises/Edit.vue')
    }, {
      path: ':id/edit',
      name: 'franchise-edit',
      component: () => import(/* webpackChunkName: "franchise-edit" */'../views/franchises/Edit.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

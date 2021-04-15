import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import(/* webpackChunkName: "Welcome" */'../views/Welcomepage.vue')
  },
  {
    path: '/writefriendship',
    name: 'Write',
    component: () => import(/* webpackChunkName: "Write" */'../views/Writepage.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "List" */'../views/Friendshiplist.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

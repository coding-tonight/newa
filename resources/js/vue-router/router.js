import { createWebHistory , createRouter}  from 'vue-router'

import Home from '../views/Homepage/index.vue'


const routes = [
  {
    path: '/',
    component: Home,
    name: '/home'
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
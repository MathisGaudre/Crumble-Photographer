import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Terms from '../views/Terms.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/terms', name: 'Terms', component: Terms },
  { path: '/photos/:type', name: 'Portfolio', component: Portfolio, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
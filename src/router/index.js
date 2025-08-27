import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Terms from '../views/Terms.vue'
//import PortraitPhoto from '../views/PortraitPhoto.vue'
//import EsportPhoto from '../views/EsportPhoto.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/terms', name: 'Terms', component: Terms }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
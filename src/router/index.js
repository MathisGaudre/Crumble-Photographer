import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
//import PortraitPhoto from '../views/PortraitPhoto.vue'
//import EsportPhoto from '../views/EsportPhoto.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  //{ path: '/portrait', name: 'PortraitPhoto', component: PortraitPhoto },
  //{ path: '/esport', name: 'EsportPhoto', component: EsportPhoto },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
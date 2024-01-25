import Vue from 'vue'
import HomeView from '../views/HomeView.vue'
import VueRouter from 'vue-router'
import moviedetiVue from '@/views/moviedeti.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie/:id',
    name:"movieDetails",
  component:moviedetiVue
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

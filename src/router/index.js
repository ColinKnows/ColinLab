import { createRouter, createWebHistory,} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/assets',
      name: 'assets',
      component: () => import('../views/AssetsView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/transacations',
      name: 'transacations',
      component: () => import('../views/TransacationsView.vue')
    },
    // {
    //   path: '*',
    //   redirect:'/home'
    // }
  ]
})

export default router

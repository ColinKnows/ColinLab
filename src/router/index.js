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
      name: 'Home',
      component: HomeView,
      // children:[
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: HomeView
      // },
      // {
      //   path: '/',
      //   redirect:'/home'
      // }]
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../components/Detail.vue')
    },
    {
      path: '/assets',
      name: 'Assets',
      component: () => import('../views/AssetsView.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/transacations',
      name: 'Transacations',
      component: () => import('../views/TransacationsView.vue')
    },
  ]
})

export default router

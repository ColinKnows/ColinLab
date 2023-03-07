import { createRouter, createWebHistory,} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AssetsView from '../views/AssetsView.vue'
import Web3View from '../views/Web3View.vue'
import Detail from '../components/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/Detail/:id/:num',
      name: 'Detail',
      component:Detail,
    },
    {
      path: '/Assets',
      name: 'Assets',
      component: AssetsView,
    },
    {
      path: '/Web3',
      name: 'Web3',
      component: Web3View,
    },
  ]
})

export default router

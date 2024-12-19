import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/layout/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'HomeView',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
      },
      {
        path: 'gameResult',
        name: 'GameResultView',
        component: () => import(/* webpackChunkName: "gameResult" */ '../views/GameResultView.vue'),
      },
      {
        path: 'contact',
        name: 'ContactView',
        component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

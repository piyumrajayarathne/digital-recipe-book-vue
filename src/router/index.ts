import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import RecipeDetail from '../pages/RecipeDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/recipe/:id',
      name: 'RecipeDetail',
      component: RecipeDetail,
      
    },
  ],
})

export default router

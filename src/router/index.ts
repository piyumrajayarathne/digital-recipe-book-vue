import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import RecipeDetail from '../pages/RecipeDetail.vue'
import Login from '../pages/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
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
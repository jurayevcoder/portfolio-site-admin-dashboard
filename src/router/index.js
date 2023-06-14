import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [

      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error/Error.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {


  let token = localStorage.getItem('token')

  if (to.name !== "login" && !token) {
    next({ name: 'login' })
  } else {
    next()
  }

})

export default router

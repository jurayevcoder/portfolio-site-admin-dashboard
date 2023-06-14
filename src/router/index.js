import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/admin-dashboard',
          name: 'home',
          component: () => import('../views/Home/Home.vue')
        },
        {
          path: '/projects',
          name: 'project',
          component: () => import('../views/Project/Project.vue')
        },
        {
          path: '/posts',
          name: 'post',
          component: () => import('../views/Post/Post.vue')
        },
        {
          path: '/infos',
          name: 'info',
          component: () => import('../views/Info/Info.vue')
        },
      ]
    },
    {
      path: '/login-admin',
      name: 'login',
      component: () => import('../views/Login/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error/Error.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {


//   let token = localStorage.getItem('token')

//   if (to.name !== "login" && !token) {
//     next({ name: 'login' })
//   } else {
//     next()
//   }

// })

export default router

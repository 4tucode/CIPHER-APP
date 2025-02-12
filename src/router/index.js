import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/db/firebase'
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/passwords',
    name: 'passwords',
    component: () => import('../views/PasswordsView.vue'),
    meta: {requiresAuth: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( (to, from, next) =>{
  auth.onAuthStateChanged( (user) => {
    if( to.meta.requiresAuth && !user ){ 
      // si la ruta requiere autenticación y el usuario no está autenticado 
      next({name: 'login'}) // redirige al login
    }else if( user && ( to.name === 'login' || to.name === 'register') ){
      // si el usuario está autenticado y forzosamente quiere ir al login o register
      next({name: 'passwords'}) // Se le redirige a password o cualquier otra ruta deseada
    }else{
      next() // permito navegar si la ruta no requiere autenticación
    }
  })
})
export default router

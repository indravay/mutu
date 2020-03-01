import Vue from 'vue'
import VueRouter from 'vue-router'
import { default as mutuRoutes } from '../modules/mutu/routes';
import { default as setupRoutes } from '../modules/setup/routes';
import { default as userRoutes } from '../modules/user/routes';
import store from '../store/index.js'

Vue.use(VueRouter)

const appRoutes = [

]
const routes = [...mutuRoutes, ...setupRoutes, ...userRoutes, ...appRoutes];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      let auth = store.getters['auth/isAuth']
      console.log(auth)
      if (!localStorage.getItem('token')) {
          next({ name: 'user-login' })
      } else {
          next()
      }
  } else {
      next()
  }
})

export default router

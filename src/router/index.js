import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import login from '../pages/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: home
    },
    {
      name: 'login',
      path: '/login',
      component: login
    }
  ]
})

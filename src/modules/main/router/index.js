import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login'
import naigation from '../pages/naigation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/naigation',
      name: 'naigation',
      component: naigation
    }
  ]
})

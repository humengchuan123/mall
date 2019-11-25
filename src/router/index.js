import Vue from 'vue'
import Router from 'vue-router'
import mallHeader from '../components/header/header'
// import mallFooter from '../components/footer/footer'
// import mallIndex from '../pages/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mallHeader',
      component: mallHeader
    }
    // {
    //   path: '/',
    //   name: 'mallFooter',
    //   component: mallFooter
    // },
    // {
    //   path: '/index',
    //   name: 'mallIndex',
    //   component: mallIndex,
    //   redirect: { name: 'mallIndex' },
    //   children: []
    // }
  ]
})

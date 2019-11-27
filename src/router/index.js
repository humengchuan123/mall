import Vue from 'vue'
import Router from 'vue-router'
import mallHeader from '../components/header/header'
import mallFooter from '../components/footer/footer'
import mallIndex from '../pages/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'default',
      path: '/',
      components: {
        header: mallHeader,
        index: mallIndex,
        footer: mallFooter
      }
    }
    // {
    //   path: '/',
    //   name: 'mallIndex',
    //   component: mallIndex
    // },
    // {
    //   path: '/',
    //   name: 'mallHeader',
    //   component: mallHeader
    // },
    // {
    //   path: '/',
    //   name: 'mallFooter',
    //   component: mallFooter
    // }
  ]
})

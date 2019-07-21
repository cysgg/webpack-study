import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import account from '@/components/account'
import goodsList from '@/components/goodsList'
import login from '@/components/login'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/account',
      component: account,
      children :[{
        path : 'login',
        component : login
      },{
        path : 'register',
        component : register
      }]
    },
    {path:'/goodslist',component: goodsList},
  
  ]
})

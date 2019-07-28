// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Header } from 'mint-ui';


Vue.config.productionTip = false
Vue.component(Header.name, Header);
/* eslint-disable no-new */
// Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

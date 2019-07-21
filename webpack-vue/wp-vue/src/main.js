// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Button } from 'mint-ui'

import './lib/mui/css/mui.min.css'


Vue.component('mybtn', Button);

Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

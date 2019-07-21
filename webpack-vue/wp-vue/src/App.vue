<template>
  <div id="app">
    <h1 @click="show">这是登录组件，使用.Vue文件定义出来的</h1>
    <mybtn type="primary">primary</mybtn>
    <button type="button" class="mui-btn mui-btn-royal">
      紫色
    </button>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodsList">GoodsList</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    // name: 'App'
    data(){
      return {};
    },
    methods: {
      show(){
       Toast({
            message: 'cys提示',
            position: 'middle',
            duration: 1000
          });
      }
    },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

import Vue from 'vue'
import App from './App.vue'
import router from './router'

require("babel-core/register");
require("babel-polyfill");

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

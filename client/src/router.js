import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Signup from './views/Signup.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
      name: "login",
      path: "/login",
      component: Login
    },
    {
      name: "home",
      path: "/home",
      component: Home
    },
    {
      name: 'signup',
      path: '/',
      component: Signup
    }
  ],
  mode: 'history'
});

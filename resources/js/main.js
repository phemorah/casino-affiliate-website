import { createApp } from 'vue'
require('./bootstrap');
window.Vue = require('vue');
import App from './App.vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import  router from './routes';
import vuetify from './vuetify';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen,faTrash,faCamera, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//
import store from './store'
//
library.add(faPen,faTrash,faCamera,faSignOutAlt)

import Toaster from "@meforma/vue-toaster";
// import Toaster from 'v-toaster'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'

const myApp = createApp(App);


myApp.component('font-awesome-icon', FontAwesomeIcon)

function loggedIn() {
  return localStorage.getItem('token')
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if (loggedIn()) {
      next({
        path: '/admin/casinos',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

// optional set default imeout, the default is 10000 (10 seconds).
myApp.use(Toaster, {timeout: 5000})

myApp.use(VueAxios, axios)

myApp.use(router).use(vuetify).use(store).mount('#app')

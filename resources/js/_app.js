 import Vue from 'vue'
 require('./bootstrap');
 window.Vue = require('vue');

 import App from './App.vue';
 import VueAxios from 'vue-axios';
 import VueRouter from 'vue-router';
 import axios from 'axios';
 import { routes } from './routes';
 import vuetify from './vuetify';
 
 import { library } from '@fortawesome/fontawesome-svg-core'
 import { faPen,faTrash,faCamera, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

 import store from './store'

 library.add(faPen,faTrash,faCamera,faSignOutAlt)

 Vue.component('font-awesome-icon', FontAwesomeIcon)

import Toaster from 'v-toaster'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'
// optional set default imeout, the default is 10000 (10 seconds).

 Vue.use(Toaster, {timeout: 5000})
//  Vue.use(VueRouter);
 Vue.use(VueRouter, VueAxios, axios);

 function loggedIn() {
    return localStorage.getItem('token')
 }
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

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


 const app = new Vue({
     el: '#app',
     router: router,
     render: h => h(App),
     vuetify,
     store
 });

/* */
import { createStore } from 'vuex'
import userModule from './modules/currentuser.modules'
import casinoModule from './modules/casino'
import globalModule from './modules/global'
//
export default createStore({
  state: {
    userState: userModule.state,
    casinoState: casinoModule.state,
    globalState: globalModule
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    userModule,
    casinoModule,
    globalModule
  },
  getters: {
      fetchCurrentUser: function(state){
        return state.userState.userList
      },
      fetchCasinos: function(state){
        return state.casinoState.casinos
      }
  }
})
/* */
/* *
import Vue from 'vue'
import Vuex from 'vuex'
import currentUser from './modules/currentUser'
import casino from './modules/casino'
import global from './modules/global'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        currentUser,
        casino,
        global
    }
})
/* */

// import Vue from 'vue'
import Vuex from 'vuex'

import currentUser from './modules/currentUser'
import casino from './modules/casino'
import global from './modules/global'

// Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        currentUser,
        casino,
        global
    }
})

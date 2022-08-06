import axios from "axios"

const state = {
 casino: {
     all: {},
     one: {}
 }
//  casinos: {}
}

const mutations = {
    STORE_CASINO(state, payload) {
        state.casino.all = payload
    },
    SHOW_CASINO(state, payload){
        state.casino.one = payload
    }
}

const actions = {
    fetchCasinos({commit}) {
        axios.get('/api/casinos').then(response => {
            if(response.status >= 200 && response.status < 300) {
                commit('STORE_CASINO', response.data)
            }
        }).catch((errors) => {
          console.log(errors + "Failed Fetching Casinos")
        })
    },
    deleteCasino(id) {
        axios.get('/api/delete/casino/'+id).then(response => {
          if(response.status >= 200 && response.status < 300) {
            // this.fetchAllCasinos()
          }
        })
    },
    showCasino({commit}, id) {
        axios.get('/api/casino/'+id).then(response => {
          if(response.status >= 200 && response.status < 300) {
            //   console.log(response.data);
            commit('SHOW_CASINO', response.data)
          }
        })
    }
}

const getters = {}


export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}
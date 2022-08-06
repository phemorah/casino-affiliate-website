import axios from "axios"

const state = {
    user: {},
    loggedIn: false
}

const mutations = {
    logoutUser(state) {
        state.loggedIn = false
        localStorage.removeItem('token')
        window.location.replace("/login");
    },
    setUser( state, data) {
        state.user = data
        state.loggedIn = true
    }
}


const actions = {
    logoutUser( {commit} ) {
        axios.post('/api/user/logout').then((response) => {
            commit('logoutUser')
            this.$toaster.info(response.data.message)
        }).catch((errors) => {
            console.log(errors + 'LOGOUT REQUEST FAILED')
        })
    },
    getCurrentUser({commit}) {
      axios.get('/api/user')
      .then( response => {
        commit('setUser', response.data)
      }).catch(error => console.log(error + 'No Current User'))
    },

    loginUser( {}, user) {
        axios.post('/api/user/login', {
            email: user.email,
            password: user.password,
            device_name: user.device_name
        })
        .then( response => {
            if( response.data.access_token ) {
                // Save token
                localStorage.setItem("token", response.data.access_token)
                window.location.replace("/admin/casinos");
                this.$toaster.success('Logged In Successfully!')
            }
        })

    }
}

const getters = {
  getCurrentUserState: function(state){
    return state.user;
  },
  getLoggedInState: function(state){
    return state.loggedIn;
  }
}


export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}

export default {
  namespaced: true,
  state: {
    userList: {
      user: {},
      loggedIn: false,
      logTest: 19
    },
    errors: {}
  },
  mutations: {
    LOGOUT_USER(state) {
        state.userList.loggedIn = false
        state.userList.user = {}
        localStorage.removeItem('token')
        window.location.replace("/login")
    },
    SET_USER( state, data) {
        state.userList.user = data
        state.userList.loggedIn = true
    }
  },
  actions: {
    logoutUser( {commit} ) {
      axios.get('/api/user/logout').then((response) => {
          // alert('logout4')
            commit('LOGOUT_USER')
            this.$toaster.info(response.data.message)
        }).catch((errors) => {
            console.log(errors + 'LOGOUT REQUEST FAILED')
        })
    },
    getCurrentUser({commit}) {
      axios.get('/api/user')
      .then( response => {
        // console.log(response.data)
        commit('SET_USER', response.data)
      }).catch(error => console.log(error + 'No Current User'))
    },

    loginUser( {commit}, payload) {
      // axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/user/login', {
          email: payload.email,
          password: payload.password,
          device_name: payload.device_name
        })
        .then( response => {
          // console.log(response)
          // console.log(response.data)
          if( response.data.access_token ) {
            commit('SET_USER', response.data)
            // Save token
            localStorage.setItem("token", response.data.access_token)
            window.location.replace("/admin/casinos");
            this.$toaster.success('Logged In Successfully!')
          }
        }).catch((errors) => {
          this.errors = errors.response.data.errors
          console.log(this.errors.email);
        })
      // })
      /*
      /* */
    }
  }
}


<template>
  <v-app style="height:100vh;">
    <AdminNavigator v-if="authenticated"/>
    <ClientNavigator v-else/>
    <router-view></router-view>
  </v-app>  

</template>

<script>
import AdminNavigator from './components/admin/AdminNavigator-Old.vue' 
import ClientNavigator from './components/client/ClientNavigator.vue' 
import EventBus from './eventbus'

export default {

  components: {
    AdminNavigator,
    ClientNavigator
  },
  data() {
    return {
      authenticated: false,
      currentUser: {},
      token: localStorage.getItem('token')
    }
  },
  methods: {
    authCheck() {
      axios.get('api/user').then(response => {
        if(response.status >= 200 && response.status < 300) {
          this.authenticated = true
        }
      }).catch(err => this.authenticated = false)
    }
  },
  mounted() {
    var self = this
    this.authCheck()
    EventBus.$on('authCheck', function(payload) {
      self.authCheck()
    })

    window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
     axios.get('/api/user').then((response) => {
       this.currentUser = response.data
      //  console.log(this.token);
     }).catch((errors) => {
       console.log(errors);
     })
  }

}
</script>

<style>

</style>
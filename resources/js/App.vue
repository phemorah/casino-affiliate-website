<template>
  <v-app>
    <AdminNavigator v-if="token"/>
    <ClientNavigator v-else/>
    <router-view></router-view>
    <!-- <h2>check - {{ token }}</h2> -->
  </v-app>

</template>

<script>
import AdminNavigator from './components/admin/AdminNavigator.vue';
import ClientNavigator from './components/client/ClientNavigator.vue';
import { mapGetters } from 'vuex';
// import { mapState } from 'vuex';

export default {
  components: {
    AdminNavigator,
    ClientNavigator
  },
  data() {
    return{
      token: false
    }
  },
  created() {
    //  This header would be required here in the main component for axios to be used everytime it's being called in this application
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token")
    this.token = localStorage.getItem("token")
    // this.$store.dispatch('userModule/getCurrentUser')
  },
  computed: mapGetters({
    // currentUser: "fetchCurrentUser"
  })
}
</script>

<style>

</style>

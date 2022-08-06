<template>
  <div>
    <v-toolbar dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-img :src="'/assets/logo.jpg'" height="85px" width="0px"></v-img>
      <v-toolbar-title>Admin Panel</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link
        to="/admin/addCountry"
        style="text-decoration:none"
      ><p class="ml-3 mt-2 white--text" style="font-size:19x">Add Country</p></router-link>

      <router-link
        to="/admin/countries"
        style="text-decoration:none"
      ><p class="ml-3 mt-2 white--text" style="font-size:19x">Countries</p></router-link>

      <router-link
        to="/admin/casinos"
        style="text-decoration:none"
      ><p class="ml-3 mt-2 white--text" style="font-size:19x">Casino Brands</p></router-link>

      <router-link
        to="/admin/addCasino"
        style="text-decoration:none"
      ><p class="ml-3 mt-2 white--text" style="font-size:19x">Create Casino</p></router-link>

      <!-- <v-btn @click="() => $router.push('casinos')">Casinos </v-btn> -->
      <!-- <v-btn class="ml-2" @click="() => $router.push('addCasino')">Add Casino </v-btn> -->

      <v-btn
        class="hidden-sm-and-down info font-weight-bold white--text ml-3"
        @click="$router.push({name: 'register'})"
      >
        Create Admin
      </v-btn>

      <v-btn class="mx-2" fab dark medium color="red" @click="logout()">
        <font-awesome-icon icon="sign-out-alt" style="font-size:25px"></font-awesome-icon>
      </v-btn>
    </v-toolbar>
    </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('userModule/logoutUser')
    }
  },
  computed: {
    // currentUser: {
    //     get() {
    //         return this.$store.state.currentUser.user
    //     }
    // }
  }
}
</script>

<style>

</style>
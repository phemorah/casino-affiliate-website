<template>
   <span>
      <v-app-bar color="black" dark>
          <v-toolbar-title>
            <router-link to="/" class="white--text" style="text-decoration:none">
              <v-img :src="'/assets/logo.jpg'" class="mt-1" height="60px" width="200px"></v-img>
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>

          <v-tabs>
            <v-tab @click="$router.push({name: 'home'})">Home</v-tab>
            <v-tab>Casino Brands</v-tab>
            <v-tab>Countries</v-tab>
          </v-tabs>

          <v-spacer></v-spacer>
          <v-btn
           text
           class="hidden-sm-and-down white font-weight-bold black--text"
           @click="$router.push({name: 'login'})"
          >Login
          </v-btn>
      </v-app-bar>
  </span>

</template>

<script>
export default {

}
</script>

<style>

</style>
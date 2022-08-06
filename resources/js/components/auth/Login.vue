<template>
  <div class="pa-0" style="max-height:100vh;overflow:hidden;background-color:white;height:100vh;">
    <v-img src="/assets/casino_house.jfif" height="350px" width="100vw"></v-img>

      <v-card class="mx-auto elevation-5 text-center pa-5" max-width="350" style="border-radius:20px;position:relative;top:-100px;">
          <v-card-subtitle class="title black--text pa-1">
              Login Now
          </v-card-subtitle>
          <v-card-subtitle class="pa-1"> </v-card-subtitle>
          <v-text-field
             hide-details
             color="black"
             label="Email"
             v-model="user.email"
          ></v-text-field>
          <p class="text-danger" v-text="errors.email"></p>
          <v-text-field color="black" label="Password" type="password" v-model="user.password"></v-text-field>
          <p class="text-danger" v-text="errors.password"></p> 
          <v-card-actions>
              <v-btn
                 color="black"
                 dark
                 block
                 rounded
                 @click="loginHandler"
               >
               Login
              </v-btn>
          </v-card-actions>
          <div class="row text-center"><br></div>
          <div class="row">
            <div class="col-md-6 text-right">
                <router-link to="/admin/register">Create New Account!</router-link>
            </div>
          </div>
      </v-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: '',
                password: '',
                device_name: 'browser'
            },
            errors: {}
        }
    },
    methods: {
        loginHandler() {
            // alert('ready')
            this.$store.dispatch('userModule/loginUser', this.user)
        }
    }
}
</script>

<style>

</style>
<template>
  <div>
      <div class="row justify-content-center">
          <div class="col-md-6">
              <div class="card">
                  <div class="card-header">Create User</div>
                  <div class="card-body">
                      <div class="form-group">
                          <label for="name">Name</label>
                          <input type="text" class="form-control" name="name" v-model="formData.name">
                          <p class="text-danger" v-text="errors.name"></p>
                      </div>
                  </div>
                  <div class="card-body">
                      <div class="form-group">
                          <label for="email">Email</label>
                          <input type="text" class="form-control" name="email" v-model="formData.email">
                          <p class="text-danger" v-text="errors.email"></p>
                      </div>
                  </div>
                  <div class="card-body">
                      <div class="form-group">
                          <label for="password">Password</label>
                          <input type="password" class="form-control" name="password" v-model="formData.password">
                          <p class="text-danger" v-text="errors.password"></p>
                      </div>
                      <div class="form-group">
                          <label for="password_confirmation">Password Confirmation</label>
                          <input type="password" class="form-control" name="password_confirmation" v-model="formData.password_confirmation">
                          <p class="text-danger" v-text="errors.password_confirmation"></p>
                      </div>
                      <div class="row">
                          <div class="col-md-6">
                              <div class="form-group">
                                  <button class="btn btn-primary" @click="registerUser">Register</button>
                              </div>
                          </div>
                          <div class="col-md-6 text-right">
                              <router-link to="/login">Already have an Account?</router-link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// import EventBus from '../../eventbus'
export default {
    data() {
     return {
         formData: {
            name: '',
             email: '',
             password: '',
             password_confirmation: ''
         },
         errors: {}
     }
    },
    methods: {
        registerUser() {
            // alert(this.formData.name)
         axios.post('/api/register', this.formData, {
          headers: {
            "Content-Type": "application/json"
          }}).then((response) => {
            console.log(response.data);
            this.formData.name = this.formData.email = this.formData.password = this.formData.password_confirmation = ''
            this.errors = {}
            this.$router.push('/login')
            this.$toaster.success('Account created successfully, now you can login!')
            // EventBus.$emit('authCheck')
            this.$router.push('/admin/casinos')
         }).catch(errors => {
             this.errors = errors.response.data.errors
             console.log(errors.response.data.errors);
         })
     }
    }
}
</script>

<style>

</style>

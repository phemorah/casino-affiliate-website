<template>
 <div>
  
  <v-container fluid fill-height>
    <v-layout class="mt-10" align-center justify-center>
      <v-form
        ref="form"
      >
        <h2 class="center">Assign <strong>{{ casino.name }}</strong> to a Country!</h2>
          
        <v-row align="center">
          <v-col cols="6">
            <v-select
              v-model="select"
              :hint="`${select.country}, ${select.country_abbreviate}`"
              :items="countries"
              item-text="country"
              item-value="id"
              label="Select"
              persistent-hint
              single-line
            ></v-select>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-btn
          color="info"
          class="mr-4"
          @click="assignCountry()"
        >
          Assign
        </v-btn>
      </v-form>
    </v-layout>
  </v-container>  
 </div>
</template>

<script>
 export default {
   props: ['casino'],
    data() {
        return {
          select: { country: 'Nigeria', country_abbreviate: 'NG' },
          countries: [],
          country_selected: ''
        }
    },
    methods: {
      fetchCountries() {
            axios.get('/api/countries').then(response => {
                if(response.status >= 200 && response.status < 300) {
                  this.countries = response.data
                }
            }).catch((errors) => {
              console.log(errors)
            })
      },
      assignCountry() {
          const FormData = require('form-data');
          const formData = new FormData();

          formData.append('country_id', this.select);
          formData.append('casino_id', this.casino.id);

          axios.post('/api/add/casinoCountry', formData).then(response => {
              if(response.status >= 200 && response.status < 300){
                this.$router.push({name: 'casinoCountries', params: this.casino})
                // console.log(response.data.message);
                this.$toaster.success(response.data.message)
              }
          }).catch((errors) => console.log(errors))
      }
    },
    mounted() {
      this.fetchCountries()
    }
 }
</script>
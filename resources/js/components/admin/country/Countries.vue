<template>
  <v-container fluid fill-height>
    <v-main class="mt-1" align-center justify-center>
      <h2 class="center">Countries Added</h2>
      <v-simple-table dark>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">#</th>
              <th class="text-left"></th>
              <th class="text-left">COUNTRY</th>
              <th class="text-left">CURRENCY</th>
              <th class="text-left">ABBREV</th>
              <th class="text-left">CURRENCY SYMBOL</th>
              <th class="text-left"></th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(country, index) in countries" :key="index">
                <td>{{ index+1 }}</td>
                <td>
                  <div v-if="country.country_logo">
                    <img :src="url+'/countries/'+country.country_logo" class="mt-2 mb-2" style="height:100px;width:100px">
                  </div>
                </td>
                <td>{{ country.country_currency }}</td>
                <td>{{ country.country_abbreviate }}%</td>
                <td v-if="checkCountriesAssigned">
                <td>{{ country.currency_symbol }}</td>
                <td>
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    large
                    color="cyan"
                    v-on:click="() => $router.push({name: 'editCountry', params: {country}})"
                    >
                      <font-awesome-icon icon="pen" />
                    </v-btn>
                </td>
                <td>
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    large
                    color="red"
                    v-on:click="deleteCountry(country.id)"
                    >
                      <font-awesome-icon icon="trash" />
                    </v-btn>
                </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-main>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        countries: [],
        url: window.location.origin
      }
    },
    methods: {
        fetchCountries() {
            axios.get('/api/countries').then(response => {
                if(response.status >= 200 && response.status < 300) {
                    // console.log(response.data.message);
                  this.countries = response.data
                }
            }).catch((errors) => {
              console.log(errors)
            })
        },

        deleteCountry(id) {
          axios.get('/api/delete/casino/'+id).then(response => {
            if(response.status >= 200 && response.status < 300) {
              // alert(response.data.message)
              this.fetchCountries()
            }
          })
        }
    },
    mounted() {
      return this.fetchCountries()
    },
    computed: {
      checkCountriesAssigned(countries) {
        return (countries.length > 0) ? countries.length : null
      }
    }
  }
</script>

<style>

</style>

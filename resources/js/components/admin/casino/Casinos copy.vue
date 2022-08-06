<template>
  <v-container fluid fill-height>
    <v-main class="mt-1" align-center justify-center>
      <h2 class="center">All Casino Records</h2>
      <v-simple-table dark>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left"></th>
              <th class="text-left">NAME </th>
              <th class="text-left">BONUS</th>
              <th class="text-left">COUNTRIES</th>
              <th class="text-left">AFFILIATE LINK</th>
              <th>DESCRIPTION</th>
              <th class="text-left"></th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="casino in $store.state.casinoModule.casinos" :key="casino.id">
                <td>
                  <div v-if="casino.logo">
                    <img :src="$store.state.global.url+'/casinos/'+casino.logo" class="mt-2 mb-2" style="height:100px;width:100px">
                  </div>
                </td>
                <td>{{ casino.name }}</td>
                <td>{{ casino.bonus }}%</td>
                <td v-if="casinoCountriesTotal(casino.countries)">
                  {{ casino.countries.length }}
                  <small>
                    <br><router-link :to="{name:'casinoCountries', params: {casino}}" style="text-decoration:none"><p class="ml-3 mt-2 info--text" style="font-size:19x">View Countries</p></router-link>
                    <router-link :to="{name:'assignCountry', params: {casino}}" style="text-decoration:none"><p class="ml-3 mt-2 primary--text" style="font-size:19x">Assign Country</p></router-link>
                  </small>
                </td>
                <td v-else>0
                  <small>
                    <router-link
                      :to="{name:'assignCountry', params: {casino}}"
                      style="text-decoration:none"
                    >
                    <p class="ml-3 mt-2 primary--text" style="font-size:19x">Assign Country</p></router-link>
                  </small>
                </td>
                <td>{{ casino.affiliate_link }}</td>
                <td>{{ (casino.description) ? casino.description : 'Empty' }}</td>
                <td>
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    large
                    color="cyan"
                    v-on:click="() => $router.push({name: 'EditCasino', params: {casino}})"
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
                    v-on:click="deleteCasino(casino.id)"
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
    computed: {
      checkCountriesAssigned: {
        get() {
          // return (countries.length > 0) ? countries.length : null
        }
      }
    },
    methods: {
        casinoCountriesTotal(countyArray) {
          return countyArray.length
        }
    },
    created() {
      this.$store.dispatch('casinoModule/fetchCasinos')
    }
  }
</script>

<style>

</style>
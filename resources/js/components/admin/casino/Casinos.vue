<template>
  <v-table theme="dark">
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
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="casino in casinos" :key="casino.id">
          <td>
            <div v-if="casino.logo">
              <img :src="$store.state.globalState.state.url+'/casinos/'+casino.logo" class="mt-2 mb-2" style="height:100px;width:100px">
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
          <td v-else>
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
              v-on:click="() => $router.push({name: 'editCasino', params: {casino: JSON.stringify(casino)}})"
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
          <td>
            <Child :casino="casino"/>
          </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>

  // import { mapGetters } from 'vuex'
  import Child from './Child'

  export default {
    components: {
      Child
    },
    data() {
      return {
        // casinos: {}
      }
    },
    computed: {
      checkCountriesAssigned: {
          get() {
              // return (countries.length > 0) ? countries.length : null
        }
      },
      casinos() {
        return this.$store.state.casinoState.casino.all
      }
    },
    // computed: mapGetters({
    //   currentUser: "fetchCurrentUser",
    //   casinos: "fetchCasinos"
    // }),
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
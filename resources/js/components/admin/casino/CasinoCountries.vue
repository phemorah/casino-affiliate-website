<template>
  <div style="background-color:white;height:100vh">
      <v-container>
          <div class="row">
              <div class="col-md-3 col-sm-3 col-xs-12">
                  <v-card outlined>
                      <v-card-title>{{ casino.name }} Casino Countries</v-card-title>
                      <v-divider></v-divider>
                      <template>
                        <v-btn
                            @click="() => {
                                casino = casinoItem
                            }"
                             v-for="casinoItem in casinos" 
                             :key="casinoItem.id" 
                             class="ml-3 mt-2 white--text mb-1" 
                             style="font-size:12px;width:90%" 
                             color="black"
                        >{{ casinoItem.name }}</v-btn>
                      </template>
                  </v-card>
              </div>
              <div class="col-md-9 col-sm-9 col-xs-12">
                  <v-divider></v-divider>
                  <div class="row text-center">
                      <div class="col-md-3 col-sm-6 col-xs-12" v-for="casinoCountry in casino.countries" :key="casinoCountry.id">
                          {{ showCountry(casinoCountry.country_id) }}
                          <v-hover v-slot:default="{ hover }">
                              <v-card
                                class="mx-auto"
                                color="grey lighten-4"
                                max-width="600"
                              >
                                <v-img
                                    class="white--text align-end"
                                    :aspect-ratio="16/9"
                                    height="200px"
                                    :src="'/countries/'+country.country_logo"
                                >
                                    <v-expand-transition>
                                        <div v-if="hover" class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text" style="height:100%">
                                            <v-btn v-if="hover" outlined>VIEW</v-btn>
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                                <v-card-text class="text--primary" style="margin-bottom:-8px">{{ country.country }}</v-card-text>
                                <v-card-text class="text--primary">
                                    <div>Casino Price</div>
                                </v-card-text>
                              </v-card>
                          </v-hover>
                      </div>
                  </div>
              </div>
          </div>
      </v-container>
  </div>
</template>

<script>
export default {
    props: ['casino'],
    data() {
        return {
            casinos: [],
            country: {}
        }
    },
    methods: {
        showCountry(id) {
            axios.get('/api/country/' + id).then(response => {
                this.country = response.data
            })
        }
    },
    mounted() {
        // this.casinos = this.route.query.casinos
        // this.getAssignedCasinos()
    }
}
</script>

<style>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: 0.8;
        position: absolute;
        width: 100%;
    }
</style>
<template>
  <div class="mt-5">
      <v-container>
          <div class="row">
              <div class="col-md-5 col-sm-5 col-xs-12">
                <v-img
                    style="height:500px" 
                    :src="'/casinos/' + brand.logo"
                ></v-img>
              </div>
              <div class="col-md-7 col-sm-7 col-xs-12">
                  <div class="pl-6">
                      <p class="display-1 mb-0">{{ brand.name }}</p>
                      <v-card-actions class="pa-0">
                          <p class="headline font-weight-light pt-3">
                              {{ brand.bonus }}%
                          </p>
                          <v-spacer></v-spacer>                          
                      </v-card-actions>
                      <p v-if="brand.description" class="subtitle-1 font-weight-thin">{{ brand.description }}</p>
                      <p v-else class="subtitle-1 font-weight-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis asperiores perferendis autem provident quam facere, placeat veniam nostrum commodi error dolorem ab minima saepe nemo molestiae tempora facilis architecto.</p>
                      <v-btn class="primary white--text" outlined tile dense>SIGN UP</v-btn>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-sm-12 col-xs-12 col-md-12">
                  <v-tabs>
                      <v-tab>Description</v-tab>
                          <v-tab-item>
                              <p class="pt-10 subtitle-1 font-weight-thin" v-if="brand.description">
                                  {{ brand.description }}
                              </p>
                              <p class="pt-10 subtitle-1 font-weight-thin" v-else>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iure unde nam recusandae molestias dignissimos alias eum labore assumenda, natus obcaecati aliquid, et voluptatem nisi aspernatur sed ratione dolor sit.
                              </p>
                          </v-tab-item>
                  </v-tabs>
                  <v-card-text class="pa-0 pt-4" tile outlined>
                      <p class="subtitle-1 font-weight-light pt-3 text-center">
                          OTHER CASINO BRANDS
                      </p>
                      <v-divider></v-divider>
                      <div class="row text-center">
                          <div class="col-md-2 col-sm-4 col-xs-12 text-center" v-for="brandItem in brands" :key="brandItem.id">
                              <v-hover v-slot:default="{ hover }" open-delay="240">
                                  <v-card :elevation="hover ? 16 : 2">
                                      <v-img :src="'/casinos/' + brandItem.logo" height="200px" class="white--text align-end">
                                          <v-card-title>{{ brandItem.name }}</v-card-title>
                                      </v-img>
                                      <v-card-text class="text-primary text-center">
                                          <div>{{ brandItem.bonus }}% Bonus</div>
                                          <div>{{ brandItem.name }}</div>
                                      </v-card-text>
                                      <div class="text-center">
                                        <v-btn
                                            class="ma-2" 
                                            outlined color="info"
                                            @click="() => {
                                                brand = brandItem
                                                $router.push({name: 'details', query: {brand:brandItem}})
                                            }"
                                        >View Casino</v-btn>
                                      </div>
                                  </v-card>
                              </v-hover>
                          </div>
                      </div>
                  </v-card-text>
              </div>
          </div>
      </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            brands: [],
            brand: ''
        }
    },
    methods: {
        getLatestCasino() {
            axios.get('/api/latestCasinos').then((response) => {
                this.brands = response.data
            }).catch((errors) => console.log(errors))
        }
    },
    mounted() {
        this.brand = this.$route.query.brand
        this.getLatestCasino()
    }
}
</script>

<style>

</style>
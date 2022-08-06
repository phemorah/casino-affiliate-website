<template>
  <div>
    <!-- Promo Offer -->
    <v-container fluid class="promo">
      <v-main>
          <div class="text-right mr-15" style="margin-top:2%">
              <h1 class="display-2 white--text">Special Offer</h1>
              <h1 class="display-1 white--text">25% Promo</h1>
          </div>
      </v-main>
    </v-container>

    <!-- Intro -->
    <v-container style="background-color:black;margin-top:-10px;" fill-width fluid>
      <v-layout row>
          <v-flex xs12 class="text-xs-center display-1 white--text font-weight-black ma-10">
              About Our Casino Affiliate Marketing
          </v-flex>
      </v-layout>
      <v-row style="margin-top:60px">
          <v-col cols="6">
              <v-container>
                <p class="white--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam quos vero, veniam odio unde ipsa provident odit nostrum numquam eius sapiente adipisci aperiam, consequuntur earum inventore facilis expedita obcaecati.</p>
                <v-btn depressed color="error">Get Started</v-btn>
              </v-container>
          </v-col>
          <v-col cols="6">
            <v-col cols="10">
                <v-row dense>
                    <v-col
                    v-for="casino in casinos"
                    :key="casino.id"
                    :cols="casino.flex"
                    >
                        <v-card>
                            <v-img
                            :src="'casinos/'+casino.logo"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="100px"
                            >
                                <v-card-title v-text="casino.name"></v-card-title>
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
          </v-col>
      </v-row>
    </v-container>

    <!-- Brands -->
    <v-container style="background-color:black;" fill-width fluid>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 white--text font-weight-black ma-10">
                CASINO BRANDS
            </v-flex>
        </v-layout>
          <v-row no-gutters style="margin-top:10px">
            <v-col :cols="12">
                <div class="row">
                    <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" v-for="brand in brands" :key="brand.id">
                        <v-hover
                            v-slot:default="{ hover }"
                            open-delay="240"
                        >
                            <v-card :elevation="hover ? 16 : 2">
                                <v-img
                                    class="white--text align-end"
                                    height="200px"
                                    :src="'casinos/'+brand.logo"
                                >
                                    <v-card-title>{{ brand.name }}</v-card-title>
                                </v-img>
                                <v-card-text class="text--primary text-center">
                                    <div>
                                        UP TO {{ brand.bonus }}% OFF
                                    </div>
                                    <div>Don't Miss Out</div>
                                </v-card-text>
                                <div class="text-center">
                                    <v-btn
                                        href=""
                                        class="ma-2"
                                        outlined
                                        color="info"
                                        @click="$router.push({name: 'details', query: {brand}})"
                                    >Explore</v-btn>
                                </div>
                            </v-card>
                        </v-hover>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>

    <v-container>

    </v-container>
  </div>
</template>

<script>
export default {
     data: () => ({
      casinos: [],
      brands: []
    }),
    methods: {
        getCasinos() {
            axios.get('/api/casinos/10').then((response) => {
                let casinos = response.data
               casinos = casinos.map((casino, index) => {
                   casino.flex = (index == 0) ? 12 : 4
                   return casino
                })
                this.casinos = casinos
            }).catch((errors) => {
                console.log(errors);
            })
        },
        getBrands() {
            axios.get('/api/casinos/4').then((response) => {
                this.brands = response.data
            }).catch((errors) => {
                console.log(errors);
            })
        }
    },
    mounted() {
        this.getCasinos()
        this.getBrands()
    }
}
</script>

<style>
    .brands {
        width: 20px;
        height: 50px;
        margin-right: 10px;
    }
    .promo {
        background: url('/assets/hero-banner.jpg');
        background-size: cover;
        width: 100%;
        height: 100vh;
    }
</style>

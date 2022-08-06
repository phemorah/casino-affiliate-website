<template>
    <!-- Intro -->
    <v-container style="background-color:black;margin-top:-10px;" fill-width fluid>
      <v-layout row>
         <v-row>
            <v-flex xs6 class="text-xs-center display-1 text-white font-weight-black ma-10">
                About Our Casino Affiliate Marketing
            </v-flex>
        </v-row>
        <v-row style="margin-top:60px">
            <v-col cols="6">
                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam quos vero, veniam odio unde ipsa provident odit nostrum numquam eius sapiente adipisci aperiam, consequuntur earum inventore facilis expedita obcaecati.</p>
                <v-btn depressed color="error">Get Started</v-btn>
            </v-col>
        </v-row>
      </v-layout>
      <v-layout>
        <v-row style="margin-top:60px">
            <v-col cols="12" class="text-white">
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
                                class="text-white align-end"
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
      </v-layout>
    </v-container>
</template>

<script>
export default {
    name: "About",

    data: () => ({
      casinos: [],
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
    },
    mounted() {
        this.getCasinos()
    }
}
</script>

<style>

</style>

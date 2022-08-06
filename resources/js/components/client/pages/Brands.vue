<template>
    <!-- Brands -->
    <v-container style="background-color:black;" fill-width fluid>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 text-white font-weight-black ma-10">
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
                                    class="text-white align-end"
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

</template>

<script>

export default {
    name: "Brands",
     data: () => ({
      brands: []
    }),
    methods: {
        getBrands() {
            axios.get('/api/casinos/4').then((response) => {
                this.brands = response.data
            }).catch((errors) => {
                console.log(errors);
            })
        }
    },
    mounted() {
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
</style>

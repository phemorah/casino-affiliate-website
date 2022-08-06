<template>
 <v-container fluid fill-height>
    <v-main class="mt-10" align-center justify-center>
        <h2 class="center">Add a new Country</h2>
        <v-form
            ref="form"
        >
            <v-text-field
            :counter="35"
            label="Name"
            v-model="country_name"
            required
            ></v-text-field>

            <v-text-field
            label="Country Abbreviate. Eg: (NG, USA)"
            v-model="country_abbr"
            required
            ></v-text-field>

            <v-text-field
            v-model="currency"
            label="Country Currency. Eg: (NGN, USD)"
            required
            ></v-text-field>

            <v-text-field
            v-model="currency_symbol"
            label="Currency Symbol (optional)"
            ></v-text-field>
            
            <v-row class="mb-2">
            <font-awesome-icon
            icon="camera" 
            class="mt-4 ml-2" 
            style="font-size:30px;margin-right:-20px"
            />
            <v-file-input label="Country Logo" show-size v-model="country_logo"></v-file-input>
            </v-row>  

            <v-btn
            color="success"
            class="mr-4"
            @click="addCountry()"
            >
            Submit
            </v-btn>
        </v-form>
    </v-main>
 </v-container>  
</template>

<script>
 export default {
    data() {
        return {
            country_name: '',
            country_abbr: '',
            currency: '',
            currency_symbol: '',
            country_logo: null
        }
    },
    methods: {
        addCountry() {
            const FormData = require('form-data');
            const formData = new FormData();

            formData.append('country_name', this.country_name);
            formData.append('country_abbr', this.country_abbr);
            formData.append('currency', this.currency);
            formData.append('currency_symbol', this.currency_symbol);
            formData.append('country_logo', this.country_logo);

            axios.post('/api/addCountry', formData).then(response => {
                if(response.status >= 200 && response.status < 300){
                  this.$router.push('/admin/countries')
                  this.$toaster.success(response.data.message)
                }
            }).catch((errors) => console.log(errors))
        }
    }
 }
</script>
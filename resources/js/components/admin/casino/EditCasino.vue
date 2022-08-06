<template>
   <v-container>
     <!-- count - {{ casi.name }} -->
  <v-form
    ref="form"
  >
    <v-text-field
      dark
      :counter="35"
      label="Name"
      v-model="casino.name"
      required
    ></v-text-field>

    <v-text-field
      dark
      label="Bonus"
      v-model="casino.bonus"
      required
    ></v-text-field>

    <v-text-field
      dark
      v-model="casino.link"
      label="Affiliate Link"
      required
    ></v-text-field>

    <v-row class="mb-2">
     <font-awesome-icon
      icon="camera"
      class="white--text mt-4 ml-2"
      style="font-size:30px;margin-right:-20px"
     />
     <v-file-input truncate-length="15" label="Image" show-size dark v-model="casino.image"></v-file-input>
    </v-row>

    <!-- <div class="row">
      <div class="col-md-3" v-if="casino.image">
          <img :src="casino.image" class="img-responsive" height="70" width="90">
        </div>
        <div class="col-md-6">
            <input type="file" v-on:change="onImageChange" class="form-control">
        </div>
    </div> -->

    <v-btn
      color="success"
      class="mr-4"
      @click="editCasino()"
    >
      Submit
    </v-btn>
  </v-form>
 </v-container>
</template>

<script>
export default {
  data() {
    return {
      // casi: this.$store.state.casinoState.casino.one
    }
  },
    props: {
      casino: {
        type: Object,
      }
    },
    setup(props){
      const casino = JSON.parse(props.casino)
      return {
        casino
      }
    },
    methods: {
      onImageChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createImage(files[0]);
      },
      createImage(file) {
        let reader = new FileReader();
        let vm = this;
        reader.onload = (e) => {
            vm.casino.image = e.target.result;
        };
        reader.readAsDataURL(file);
      },
        editCasino() {
            const FormData = require('form-data');
            const formData = new FormData();

            formData.append('name', this.casino.name);
            formData.append('bonus', this.casino.bonus);
            formData.append('link', this.casino.link);
            formData.append('image', this.casino.image);

            axios.post('/api/edit/casino/' + this.casino.id, formData).then(response => {
                if(response.status >= 200 && response.status < 300){
                  // console.log(response.data);
                    this.$router.push('casinos')
                }
            })
        }
    },
    computed: {
      casi() {
        // return this.$store.state.casinoState.casino.one
      }
    },
    created() {
      // this.$store.dispatch('casinoModule/showCasino', this.casino.id)
    }
}
</script>

<style>

</style>
<template>
  <v-container fluid fill-height>
    <v-main class="mt-1" align-center justify-center>
      <h2 class="center">Add New Casino</h2>
      <v-form ref="form" method="post" enctype="multipart/form-data">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              :counter="35"
              label="Name"
              v-model="name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Bonus"
              v-model="bonus"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="link"
              label="Affiliate Link"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-textarea
                counter
                label="Description"
                v-model="description"
              ></v-textarea>
          </v-col>

          <div class="row">
            <div class="col-md-3" v-if="image">
                <img :src="image" class="img-responsive" height="70" width="90">
              </div>
              <div class="col-md-6">
                  <input type="file" v-on:change="onImageChange" class="form-control">
              </div>
          </div>

          <v-col cols="12" md="4">
            <!-- <v-row class="mb-2">
            <font-awesome-icon
              icon="camera"
              class="mt-4 ml-2"
              style="font-size:30px;margin-right:-20px"
            />
            <v-file-input label="Image" show-size v-model="image"></v-file-input>
            </v-row> -->

            <!-- <v-file-input
              filled
              show-size
              v-model="image"
              label="Upload Image"
              prepend-icon="mdi-camera"
            ref="image"
            accept="image/*"
            ></v-file-input> -->
          </v-col>

          <!-- <v-col cols="12" md="4">
            <v-row class="mb-2">
            <font-awesome-icon
              icon="camera"
              class="mt-4 ml-2"
              style="font-size:30px;margin-right:-20px"
            />
            <v-file-input label="Image" show-size v-model="image"></v-file-input>
            </v-row>
          </v-col> -->

            <!-- <div class="col-md-3">
                <button class="btn btn-success btn-block" @click="uploadImage">Upload Image</button>
            </div> -->

          <v-col cols="12" md="4">
            <v-btn
              color="success"
              class="mr-4"
              @click="addCasino()"
            >
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-main>
  </v-container>
</template>

<script>
 export default {
    data() {
        return {
            name: '',
            nameRules: [
              v => !!v || 'Name is required',
              v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            bonus: null,
            link: '',
            image: 0,
            description: ''
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
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        // uploadImage(){
        //         axios.post('/api/casino',{image: this.image}).then(response => {
        //            if(response.status >= 200 && response.status < 300){
        //               // console.log(response.data.feedback);
        //               this.$toaster.success('A new Casino has been added successfully!')
        //               this.$router.push('casinos')
        //             }else{
        //               console.log(response + 'err_femi')
        //             }
        //         }).catch((errors) => console.log(errors + 'kilode'))
        // },
        addCasino() {
            const FormData = require('form-data');
            const formData = new FormData();

            formData.append('name', this.name);
            formData.append('bonus', this.bonus);
            formData.append('link', this.link);
            formData.append('image', this.image);
            formData.append('description', this.description);

            // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
            axios.post('/api/casino', formData).then(response => {
                if(response.status >= 200 && response.status < 300){
                  // console.log(response.data);
                  // this.$toaster.success('A new Casino has been added successfully!')
                  this.$router.push('casinos')
                }else{
                  console.log(response + 'err_femi')
                }
            }).catch((errors) => console.log(errors + 'kilode'))
        }
    }
 }
</script>
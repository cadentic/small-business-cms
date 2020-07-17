<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12 pa-5">
              <v-card-text>
                <v-form>
                  <h1 style="text-align: center;" class="mt-5 mb-10">{{ form_title }}</h1>
                  <p style="text-align: center;" class="mb-5">{{ message }}</p>

                  <v-text-field
                    name="login"
                    prepend-icon="person"
                    type="text"
                    placeholder="Email or username"
                    v-model="email"
                    v-show="!showpassword"
                  />
                  <v-btn color="success large" v-show="!showpassword" block="true" tile @click="sendotp">Send</v-btn>
                  <v-text-field
                    name="OTP"
                    prepend-icon="lock"
                    type="text"
                    placeholder="OTP"
                    v-model="OTP"
                    v-show="showpassword"
                  />
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-show="showpassword"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="success large" block="true" tile v-show="showpassword" @click="handleFormSubmission">Send</v-btn>
              </v-card-actions>
              <div class="pa-3 help-link-group">
                  <a v-for="(link, i) in footer_links" :href="link.url" target="_blank" rel="" :key="i">{{ link.title }} | </a>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <ChatComponent/>
  </v-app>
</template>

<style scoped>
  #inspire {
    background: none;
  }
  .help-link-group a{
    color:rgb(218, 36, 36);
  }
</style>
<script>
  import ChatComponent from './components/ChatComponent.vue';
  import axios from 'axios';
  export default {
    components: { ChatComponent },
    data: () => ({
      form_title: "",
      message: "",
      footer_links: {},
      showpassword: false,
      errors: {},
      email: '',
      password: '',
      OTP: ''
    }),
    mounted() {
      axios.get('/json/forgot-password.json')
      .then(response => {
        this.form_title = response.data.heading_title;
        this.message = response.data.explanation_text;
        this.footer_links = response.data.footer_links;
      })
      .catch(err => {
        this.errors.push(err);
      })
    },
    methods: {
      handleFormSubmission() {
        let data = {
          'emailotp': this.OTP
        }
        axios.post('/validateemail', data).then((res) => {
          if(res.data.validated){
            let passdata = {
              'email': this.email,
              'password': this.password
            };
            axios.post('/forgot-password', passdata).then((res)=>{
              if(res.data==='password changed'){
                window.location.href = '/login';
              }
            }).catch((e)=>{console.log(e);});
          }
        });
      },
      sendotp() {
        let data = {
          'email': this.email
        };
        axios.post('/sendemail', data).then((res)=>{
          this.showpassword = true;
        })
      }
    }
  }
</script>

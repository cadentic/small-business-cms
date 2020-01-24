<template>
  <v-app id="inspire">
    <v-content>
      <div>
        <v-container>
            <h1>Enquiry Us</h1>
            <div>
              <v-alert v-if="success" type="success" outlined>
                Your message has been sent.
                <a href="/">Go to home</a>
              </v-alert>
                <v-form ref="form" v-model="valid">
                    <v-text-field :rules="nameRule" v-model="form_data.name" label="Name" name="name" outlined></v-text-field>
                    <v-text-field :rules="emailRule" v-model="form_data.email" type="email" label="Email" name="email" outlined></v-text-field>
                    <v-textarea :rules="messageRule" v-model="form_data.message" label="Message" rows="5" outlined></v-textarea>
                    <v-btn @click="submit"  :loading="loading" color="primary" outlined>Submit</v-btn>
                </v-form>
            </div>
        </v-container>
      </div>
      <footer :class="init_data.footer.class" :style="'background:' + init_data.footer.style.bgcolor" >
          <div class="secpage">
              <v-container>
                  <v-row>
                      <v-col cols="sm">
                          <a :href="item.link" v-for="(item, id) in init_data.footer.container1" :key="id">{{ item.text }}</a>
                      </v-col>
                      <v-col cols="sm">
                          <a :href="item.link" v-for="(item, id) in init_data.footer.container2" :key="id">{{ item.text }}</a>
                      </v-col>
                      <v-col cols="sm">
                          <a :href="item.link" v-for="(item, id) in init_data.footer.container3" :key="id">{{ item.text }}</a>
                      </v-col>
                      <v-col cols="sm">
                          <a :href="item.link" v-for="(item, id) in init_data.footer.container4" :key="id">{{ item.text }}</a>
                      </v-col>
                  </v-row>
              </v-container>
          </div>
          <div class="divide40"></div>
          <div class="socialico">
              <a class="wow rollIn" data-wow-duration="2.5s" data-wow-delay=".2s" :href="item.link" :style="'background:' + item.bgcolor" v-for="(item, id) in init_data.footer.socialicon" :key="id"><i :class="item.class"></i></a>
          </div>
      </footer>
      <div class="copyright">
          <p>{{ init_data.footer.copyright }}</p>
      </div>
    </v-content>
    <ChatComponent/>
  </v-app>
</template>

<style scoped>
  #inspire {
    background: none;
  }
  .cards-wrapper {
    background: #e9e8e9;
  }
  .cards-wrapper-title {
    color: #da251c;
    font-weight: lighter;
    text-align: center;
  }
  .help-link-group a{
    color:rgb(218, 36, 36);
  }
</style>
<script>
  import downloadcard from "./components/downloadcard.vue";
  import ChatComponent from './components/ChatComponent.vue';
  import axios from 'axios'
  export default {
    components: {downloadcard, ChatComponent }, 
    data() {
      return {
        errors: {},
        init_data: {},
        download_resources: {},
        drawer : false,
            menus : [{title:"Invoice",icon:"home",href:'/invoice'},{title:"Enquiry",icon:"person",href:'/enquiry'}],
            form_data : {
                name : '',
                email : '',
                message : '',
            },
            loading : false,
            success : false,
            valid : true,
            nameRule : [
              v => !!v || "Name is required",
              v => (v&&v.length <= 100) || "Name must be less than 100 characters"
            ],
            emailRule : [
              v => !!v || "Email is required",
              v => /.+@.+/.test(v) || 'Enter Valid Email address',
              v => (v&&v.length <= 100) || "Email must be less than 100 characters"
            ],
            messageRule : [
              v => !!v || "Message is required",
              v => (v&&v.length <= 10000) || "Enter valid message"
            ]
      }
    },
    mounted() {
      axios.get('json/innerblank.json')
      .then(response => {
        this.init_data = response.data;
      })
      .catch(e => {
        this.errors.push(e)
      });

      // Get downloadable resources links
      axios.get('json/download_resources.json')
      .then( response => {
        this.download_resources = response.data;
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    methods :{
      async submit(){
        await this.$refs.form.validate();
        if(this.valid){
          this.loading = true
          axios.post('/enquiry',this.form_data)
          .then(res=>{
            this.loading = false
            this.$refs.form.reset()
            this.success = true
          })
          .catch(err=>{
            this.loading = false
            // console.log("Something went wrong")
          })
        }
      },
      go(to){
        window.location.href  = to
      }
    }
  }
</script>
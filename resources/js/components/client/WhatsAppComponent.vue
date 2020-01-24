<template>
  <v-app>
    <toolbar></toolbar>
    <v-appbar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-appbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <h4>Offcanvas Menu</h4>
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container>
        <v-row>
           <v-col cols=6>

             <v-layout row> 
              <v-flex>
                <h1>Opt in to WhatsApp notifications and stay connected with GoDaddy</h1>
                <ul>
                  <v-list-item> <v-icon size="5">mdi-checkbox-blank-circle </v-icon> &nbsp; Renewed notices</v-list-item>
                  <v-list-item> <v-icon size="5">mdi-checkbox-blank-circle </v-icon> &nbsp; Activation and how to messages</v-list-item>
                  <v-list-item> <v-icon size="5">mdi-checkbox-blank-circle </v-icon> &nbsp; Product news and updates</v-list-item>
                  <v-list-item> <v-icon size="5">mdi-checkbox-blank-circle </v-icon> &nbsp; Accounts informations and alerts</v-list-item>
                  <v-list-item> <v-icon size="5">mdi-checkbox-blank-circle </v-icon> &nbsp; Connect with GoDaddy Guides</v-list-item>
                </ul>

                <p> To get started, opt in below. </p>
                <hr>
                <h4> You are currently opted in to receive Whatsapp communications</h4>
              </v-flex>
             </v-layout> 

             <v-layout row> 
               <v-flex xs-12>
                 <v-text-field v-model="phone" @change="phoneNumberChanged" label="Primary Phone(*)" placeholder="+91 776027 16 107"></v-text-field>
               </v-flex>
               <v-flex p>
                 <v-btn tile dark>Update</v-btn>
               </v-flex>
             </v-layout>

             <v-layout row>
               <v-btn tile outlined>Opt Out</v-btn>
             </v-layout>

             <v-layout row>
                <ul style="padding-top: 20px;">
                  <li><span>* Don't include spaces</span></li>
                  <li><span>** Change to this number will be reflected in your GoDaddy account</span></li>
                </ul>
             </v-layout>

           </v-col>
           <v-col cols=6>
             <div>
                <img style="display:block; height: 100vh;" src="./assets/Whatsapp/image_whasapp.png" alt="Opt in to whatsapp notification">
             </div>
           </v-col>
        </v-row> 
    </v-container>    

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
    <ChatComponent/>
  </v-app>
</template>

<script>
import toolbar from "./shared/toolbar.vue";
import ChatComponent from './components/ChatComponent.vue';

export default {
  components: { toolbar, ChatComponent },
  data: () => ({
    drawer : false,
    offsetTop: 0,
    topbarStyle: "background:#fff; padding:0px 130px; border-color:#fff;",
    init_data: {},
    error: {},
    phone: ""
  }),
  created() {
    axios.get('json/innerblank.json')
    .then(response => {
      this.init_data = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
  },
  methods: {
    // Trigger the input changed event
    phoneNumberChanged() {
      console.log(this.phone);
    }
  }
};
</script>
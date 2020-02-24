<template>
  <v-app>
    <toolbar></toolbar>
    <v-container>
        <v-row>
           <v-col cols=6>

             <v-layout row>
              <v-flex>
                  <h1>{{ data.title }}</h1>
                <ul>
                    <v-list-item v-for="item in data.items" :key="item"> <v-icon size="5">mdi-checkbox-blank-circle </v-icon> &nbsp; {{ item }}</v-list-item>
                </ul>

                <p>{{ data.paragraph }}</p>
                <hr>
                <h4>{{ data.subtitle }}</h4>
              </v-flex>
             </v-layout>

             <v-layout row>
               <v-flex xs-12>
                 <v-text-field v-model="phone" @change="phoneNumberChanged" :label="data.phone.label" :placeholder="data.phone.placeholder"></v-text-field>
               </v-flex>
               <v-flex p>
                   <v-btn tile dark>{{ data.button1 }}</v-btn>
               </v-flex>
             </v-layout>

             <v-layout row>
                 <v-btn tile outlined>{{ data.button2 }}</v-btn>
             </v-layout>

             <v-layout row>
                <ul style="padding-top: 20px;">
                    <li v-for="(item, index) in data.notes" :key="index"><span>{{ item }}</span></li>
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
    offsetTop: 0,
    topbarStyle: "background:#fff; padding:0px 130px; border-color:#fff;",
    init_data: {},
    data: {},
    error: {},
    phone: "",

  }),
  mounted() {
    axios.get('json/innerblank.json')
    .then(response => {
      this.init_data = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
    axios.get('json/whatsapp.json')
    .then(response => {
      this.data = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });

  },
  methods: {
    // Trigger the input changed event
    phoneNumberChanged() {
      console.log(this.phone);
    },

  }
};
</script>
<style>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>

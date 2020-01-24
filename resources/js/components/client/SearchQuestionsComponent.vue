<template>
    <v-app>
        <toolbar></toolbar>
        <div>
            <v-container>
                <h2 class="bold">Hi {{username}}, how can we help you ?</h2>
                <v-row class="nowrap-overflow">
                    <v-col cols=11> 
                        <v-text-field style="border-radius: 0 !important;" type="text" height="10" outlined clearable>
                            <template v-slot:append-outer>
                                <v-btn large tile color="success" id="search-btn" elevation="0">
                                    <v-icon >mdi-magnify</v-icon>
                                </v-btn>
                            </template>
                        </v-text-field>
                    </v-col>
                </v-row> 
                <v-row class="nowrap-overflow">
                    <v-col cols=8> 
                        <h3>Popular questions</h3>
                        <ul class="popular-question-list">
                            <li v-for="(question, key) in popular_questions_list" :key="key">
                                <a :href="question.link">{{ question.content }}</a></li>
                            
                        </ul>
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
        </div>
        <ChatComponent/>
    </v-app>
</template>

<style scoped>
    .nowrap-overflow {
        flex-wrap: nowrap;
        overflow-x: auto;
    }
    .popular-question-list li a{
        font-size: 20px;
        color: rgb(230, 131, 11);
    }
    #search-btn {
        position:relative !important;
        top: -15px;
        left: -10px;
        height: 55px;
    }
</style>
<script>
import toolbar from "./shared/toolbar.vue";
import ChatComponent from './components/ChatComponent.vue';

export default {
  components: { toolbar, ChatComponent },
  data: () => ({
    offsetTop: 0,
    topbarStyle: "background:#fff; padding:0px 130px; border-color:#fff;",
    username: "sayantan",
    init_data: {},
    popular_questions_list: {}
  }),
  created() {
    axios.get('json/innerblank.json')
    .then(response => {
      this.init_data = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });

    // Get popular answers
    axios.get('json/popular_answers.json')
    .then(response => {
      this.popular_questions_list = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
  },
  methods: {
    
  }
};
</script>
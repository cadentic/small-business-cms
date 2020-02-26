<template>
  <v-app id="inspire">
    <toolbar></toolbar>
    <v-content>
      <div>
        <v-container class="fill-height">
            <v-row>
              <v-col cols="12">
                  <h1>{{ download_resources.title }}</h1>
              </v-col>
              <v-col cols="8">
                  <p>{{ download_resources.description }}</p>
              </v-col>
            </v-row>
        </v-container>
      </div>
      <div class="cards-wrapper mb-7">
        <v-container
          class="fill-height"
        >
            <v-row>
              <v-col cols="12">
                  <h2 class="cards-wrapper-title">{{ download_resources.listTitle }}</h2>
              </v-col>
            </v-row>

            <v-row align="stretch" justify="start">
              <v-col cols="4" xs="12" sm="6" md="4" v-for="(resource, index) in download_resources.list" :key="index">
                <downloadcard
                              :title="resource.title"
                              :downloadlink="resource.link"
                              :pdf="resource.type == 'pdf'"
                              :doc="resource.type == 'doc'"
                              :xls="resource.type == 'xls'"/>
              </v-col>
            </v-row>
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
  import toolbar from "./shared/toolbar.vue";
  import ChatComponent from './components/ChatComponent.vue';

  export default {
    components: { toolbar, downloadcard, ChatComponent },
    data() {
      return {
        errors: {},
        init_data: {},
        download_resources: {}
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
  }
</script>

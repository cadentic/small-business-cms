<template>
  <div>
    <topBar></topBar>

    <topSwiper></topSwiper>

    <v-app-bar class="py-3" dense v-bind:style="topbarStyle" v-scroll="onScroll">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="(item, id) in init_data.section1.nav" :key="id">
          <a :href="item.link">{{item.text}}</a>
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">
                <span class="fa fa-envelope"></span> {{init_data.section1.contact.title}}
                <span class="caret"></span>
              </v-btn>
            </template>
            <v-list>
              <v-list-item-title v-for="(item, id) in init_data.section1.contact.option" :key="id">{{ item }}</v-list-item-title>
            </v-list>
          </v-menu>
        </div>
      </v-toolbar-items>
    </v-app-bar>

    <div style="background:#E6F5FF; ">
      <v-container>
        <v-row>
          <v-col>
            <h3>{{init_data.section1.h3_1}}</h3>

            <ul type="disc" :style= init_data.section1.style_1>
              <li style="font-size:20px; font-weight:bold;">{{init_data.section1.li}}</li>
            </ul>
            <p>
              {{init_data.section1.li}}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12">
            <h3>{{init_data.section1.h3_2}}</h3>
            <ul type="disc" v-for="item1 in init_data.section1.ul" :key="item1.id" :style= init_data.section1.style_1>
              <li>{{item1}}</li>
            </ul>

            <h4
              style="margin-bottom:30px;"
            >{{init_data.section1.h4_1}}</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12">
            <h4>{{init_data.section1.h4_2}}</h4>

            <ul type="disc" v-for="item1 in init_data.section1.ul_2" :key="item1.id" style="list-style-type: disc;">
              <li>{{item1}}</li>

            </ul>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12"></v-col>
        </v-row>
      </v-container>
      <div
        class="hg"
        id="pg3"
        style="height:500px; transition:2s;font-size:40px;
				text-align:center;padding:100px;"
      >Page 3</div>
      <div
        class="hg"
        id="pg4"
        style="height:500px; transition:2s;font-size:40px;
				text-align:center;padding:100px;"
      >Page 4</div>
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
  </div>
</template>

<script>
import topBar from "./shared/topBar.vue";
import topSwiper from "./shared/swiperCarousel.vue";

export default {
  props:['filename'],
  components: { topBar, topSwiper },
  data: () => ({
    offsetTop: 0,
    topbarStyle: "background:#fff; padding:0px 130px; border-color:#fff;",
    init_data: {}
  }),
  created() {
    axios.get('../json/innerblank/'+this.filename+'.json')
    .then(response => {
      this.init_data = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
  },
  methods: {
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      if (this.offsetTop >= 600) {
        this.topbarStyle =
          "background:#fff; padding:0px 130px; border-color:#fff; position: fixed; top: 0px; left: 0px; right: 0px; z-index: 100;";
      } else {
        this.topbarStyle =
          "background:#fff; padding:0px 130px; border-color:#fff; position: static; top: 0px; left: 0px; right: 0px; z-index: 100;";
      }
    }
  }
};
</script>

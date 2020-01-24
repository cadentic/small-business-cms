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
            <h3>NDEDGE INFORMATICS PRIVATE LIMITED COMPANY PROFILE</h3>

            <ul type="disc" style="list-style-type: disc;">
              <li style="font-size:20px; font-weight:bold;">INTRODUCTION</li>
            </ul>
            <p>
              Ndedge Informatics Private Limited is a leading global multi-skilled IT solution company with competent workforce and strong presence in India. With several years of expertise, quality delivery of service and quality integrated methodologies; Ndedge Informatics Private Limited have been able to carve out a niche for themselves as one of the most notable trailblazers in the IT Industry in India.
              <br />Ndedge Informatics Private Limited uses an extremely competent global delivery method in providing quality-based solutions and professional services to its esteemed clients.
              <br />Our strongest advantage is our excellent pool of our skilled workforce; our skilled resource is recruited from the finest the industry can boast of in India. We can boast of a vibrant skilled resource that provides a vibrant combination of technological skills and strategic IT consultancy services.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12">
            <h3>Ndedge Informatics Private Limited offers</h3>
            <ul type="disc" style="list-style-type: disc;">
              <li>a full range of Oracle database administration configuration and support including or excluding real application cluster and dataguard.</li>
              <li>Oracle cloud infrastructure configuration and support.</li>
              <li>Virtual environment to cloud migration by Ravello.</li>
              <li>BP for XaaS, DB2,laaS,Paas, and SaaS-enabled business environments ,</li>
              <li>Setting up or implementing on-premise environments with Oracle data appliances,</li>
              <li>zero downtime migration for Oracle databases,</li>
              <li>licensing for different OS, like Oracle Solaris and Oracle Linux ,Easy to use architecture for Oracle E-business suite,</li>
              <li>On-premise to cloud migration,</li>
              <li>Providing server hardware and network components from different vendors, Oracle Partners Network.</li>
              <li>Support and configuration oracle sign-on.</li>
            </ul>

            <h4
              style="margin-bottom:30px;"
            >Ndedge Informatics Private Limited has a solid client base that spans across several industries; in our focus market segment we have accumulated an enviable list of clients because of our customer centric approach.</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12">
            <h4>Ndedge Informatics Private Limited competitive advantage and source of value to our esteemed client stems not only from our expertise in rendering IT professional services, but from several aspect of our business model which consist of</h4>

            <ul type="disc" style="list-style-type: disc;">
              <li>technology and business competency centers,</li>
              <li>rigorous programme and project management,</li>
              <li>state of the art computing and communication infrastructure, client-centric approach account management,</li>
              <li>Innovative offshore development approach and business continuity preparedness.We remain focus on our prime objective which is delivering high quality solutions to our clients</li>
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
  components: { topBar, topSwiper },
  data: () => ({
    offsetTop: 0,
    topbarStyle: "background:#fff; padding:0px 130px; border-color:#fff;",
    init_data: {}
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
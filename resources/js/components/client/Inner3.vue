<template>
	  <div>
        <topBar></topBar>

        <!-- sidebar -->
        <div class="sidebar-menu">
            <ul>
                <li v-for="(item, id) in init_data.sidebar" :key="id">
                    <a :href="item.link"><i :class="item.icon_class"></i>{{ item.text }}</a>
                </li>
            </ul>
        </div>
        
        <section id="topextsec">
          <div class="leftext col-lg-4 col-md-4 col-sm-4">
            <div class="imgext1">
              <img src="assets/images/img1.png" alt="" />
            </div>
            <div class="imgextt2">
              <img src="assets/images/img2.png" alt="" />
            </div>

          </div>
          <div class="rightext col-lg-7 col-md-7 col-sm-7">
            <h2>Would you like to change the default language?</h2>
            <a href="">Select Now</a>
            <a href="">No Thanks</a>

          </div>
          <div class="rightico col-lg-1 col-md-1 col-sm-1">
            <i class="clo fa fa-close"></i>
          </div>

          <hr />

          <nav class="extnav">

            <ul>
              <li><a href="#topsolu">Top Solution</a></li>
              <li class="bdr"><a href="">Partners Info</a></li>
              <li class="bdr"><a href="">Whats New</a></li>
              <li class="bdr"><a href="">Happy Clients</a></li>
              <li class="bdr"><a href="">Other Division</a></li>

            </ul>
          </nav>
        </section>

        <!-- hero area -->
        <section class="soft-define-area home" :id="init_data.section1.id">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h2>{{ init_data.section1.title }}</h2>
                        </div>
                    </div>
                </div>
              <div class="row">
                  <div class="col-md-6">
                      <div class="soft-define-img wow fadeIn">
                          <img :src="init_data.section1.image" alt="Softwar Define Access">
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="soft-define-content">
                          <h3>{{ init_data.section1.title_sub }}</h3>
                          <p>{{ init_data.section1.description1 }}</p>
                          <p>{{ init_data.section1.description2 }}</p>
                          <p>{{ init_data.section1.description3 }}</p>
                      </div>
                      <div class="soft-define-btn">
                          <v-dialog
                              v-model="dialog"
                                    @keydown.esc="HidePlyr()"
                                    @keydown.space="HidePlyr()"
                                    @click:outside="HidePlyr()"
                                :max-width="init_data.section1.dialog.max_width"
                              >
                              <template v-slot:activator="{ on }">
                                  <a v-on="on" class="default-btn" :style="'color:' + init_data.section1.button1.style.color">{{ init_data.section1.button1.text }}</a>
                                  <a :href="init_data.section1.button2.link" class="second-btn">{{ init_data.section1.button2.text }}</a>
                              </template>
                              <template lang="pug">
                                  <video-player>
                                      <source :src="init_data.section1.video.src" type="video/mp4"/>
                                  </video-player>
                              </template>
                          </v-dialog>
                      </div>
                  </div>
                </div>
            </div>
        </section>

        <v-app-bar dense v-bind:style="topbarStyle" v-scroll="onScroll">
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text class="nav-link-btn" v-for="(item, id) in init_data.section2.nav" :key="id"><a :href="item.link" class="white-link">{{ item.text }}</a></v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <div class="text-center">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn
                              text
                              v-on="on"
                            >
                                <span class="fa fa-envelope"></span>{{ init_data.section2.contact.label }}
                                <span class="caret"></span>
                            </v-btn>
                        </template>
                        <v-list>          
                            <v-list-item-title v-for="(item, id) in init_data.section2.contact.option" :key="id">{{ item }}</v-list-item-title>
                        </v-list>
                    </v-menu>
                </div>
            </v-toolbar-items>
        </v-app-bar>

        <div :class="init_data.section3.class" :id="init_data.section3.id" :style="'height:' + init_data.section3.style.height + '; transition:' + init_data.section3.style.transition + '; background:' + init_data.section3.style.background + '; padding-top:' + init_data.section3.style.padding_top">
            <h3 :style="'font-size:' + init_data.section3.title.style.font_size + '; color:' + init_data.section3.title.style.color">{{ init_data.section3.title.text }}</h3>
            <ul type="disc" style="list-style-type: disc;" >
                <li v-for="(item, id) in init_data.section3.contents" :key="id">{{ item }}</li>
            </ul>
            <h4 :style="'font-size:' + init_data.section3.title_sub.style.font_size + '; color:' + init_data.section3.title_sub.style.color + '; margin-bottom:' + init_data.section3.title_sub.style.margin_bottom + '; padding-bottom:' + init_data.section3.title_sub.style.padding_bottom">{{ init_data.section3.title_sub.text }}</h4>
        </div>
        
        <div :class="init_data.section4.class" :id="init_data.section4.id" :style="'height:' + init_data.section4.style.height + '; transition:' + init_data.section4.style.transition + '; background:' + init_data.section4.style.background + '; padding-top:' + init_data.section4.style.padding_top + '; font-size:' + init_data.section4.style.font_size">
            <h3 :style="'font-size:' + init_data.section4.title.style.font_size + '; color:' + init_data.section4.title.style.color + '; padding-top:' + init_data.section4.title.style.padding_top">{{ init_data.section4.title.text }}</h3>
            <ul type="disc" style="list-style-type: disc;" >
                <li v-for="(item, id) in init_data.section4.contents" :key="id">{{ item }}</li>
            </ul>
        </div>
        
        <section :id="init_data.section6.id">
          <v-container>
              <v-row>
                  <v-col cols="sm" v-for="(item, id) in init_data.section6.container1" :key="id">
                      <div class="cardWrap"> 
                          <a class="card" :href="item.link">
                              <div class="front blue-p-blue">
                                  <img class="img-responsive" :src="item.image" alt="Artificial Intelligence Data Scientist" title="Artificial Intelligence Data Scientist">
                                  <p>{{ item.description }}</p>
                              </div>
                              <div class="back p-blue-d-gray">
                                  <img class="img-responsive" :src="item.image" alt="Artificial Intelligence Data Scientist" title="Artificial Intelligence Data Scientist">
                                  <div>
                                      <p>{{ item.description }}</p>
                                      <button class="button">{{ item.button_text }}</button>
                                  </div>
                              </div>
                          </a>
                      </div>
                  </v-col>
              </v-row>
          </v-container>
          
          <v-container>
              <v-row>
                  <v-col cols="sm" v-for="(item, id) in init_data.section6.container2" :key="id">
                      <div class="cardWrap"> 
                          <a class="card" :href="item.link">
                              <div class="front blue-p-blue">
                                  <img class="img-responsive" :src="item.image" alt="Artificial Intelligence Data Scientist" title="Artificial Intelligence Data Scientist">
                                  <p>{{ item.description }}</p>
                              </div>
                              <div class="back p-blue-d-gray">
                                  <img class="img-responsive" :src="item.image" alt="Artificial Intelligence Data Scientist" title="Artificial Intelligence Data Scientist">
                                  <div>
                                      <p>{{ item.description }}</p>
                                      <button class="button">{{ item.button_text }}</button>
                                  </div>
                              </div>
                          </a>
                      </div>
                  </v-col>
              </v-row>
          </v-container>
        </section>

        <div class="dark-blue-bg-container" :id="init_data.section7.id" :style="'background-color:' + init_data.section7.style.bgcolor + '; margin-left:' + init_data.section7.style.margin_left + '; margin-right:' + init_data.section7.style.margin_right">
            <div class="sticky-menu-scroll-container">
                <span id="AJobLikeMineSection" class="sticky-Id-menu"></span>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-10 col-md-offset-1" id='long-thing'>
                        <h2 class="h1 clear-headline text-center">{{ init_data.section7.text }}</h2>
                    </div>
                </div>
            </div>
        </div>

<section :class="init_data.section8.class" :style="'background:' + init_data.section8.style.bgcolor + '; margin-left:' + init_data.section8.style.margin_left + '; margin-right:' + init_data.section8.style.margin_right">
          <div class="">
              <v-container>
                  <v-row no-gutters>
                      <v-col cols="sm" v-for="(item, id) in init_data.section8.container" :key="id">        
                          <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                              <div class="flipper property-items">
                                  <div class="front center-block text-center itemS" :style="'min-height:' + item.background_minheight + '; background: url(' + item.background + ') center top / cover no-repeat;'">
                                      <div class="bottom_block">
                                          <span class="name">{{ item.name }}</span>
                                          <p class="designation">{{ item.title }}</p>
                                      </div>
                                  </div>
                                  <div class="back text-center itemS" style="min-height: 618px;">
                                      <div class="back-logo center-block img-circle ">
                                          <img :src="item.image" class="img-responsive" alt="img">
                                      </div>
                                      <span class="name" >{{ item.name }}</span>
                                      <p class="designation" :style="'font-size: ' + item.font_size">{{ item.title }}</p>
                                      <p class="details" :style="'font-size: ' + item.font_size">{{ item.description }}</p>
                                  </div>
                              </div>
                          </div>
                      </v-col>
                  </v-row>
              </v-container>
          </div>
      </section>

      <section :id="init_data.section9.id" class="brand-lightest-gray">
          <div class="container" :style="'padding-top:' + init_data.section9.style.padding_top + '; width:' + init_data.section9.style.width + '; background:' + init_data.section9.style.bgcolor">
              <div class="row">
                  <div class="col-12">
                      <div class="row">
                          <div class="col-md-12">
                              <br>
                              <br>
                              <h2 class="text-center headline blue-heading" :style="'font-size:' + init_data.section9.title.style.font_size + '; color:' + init_data.section9.title.style.color">{{ init_data.section9.title.text }}</h2>
                              <h3 class="text-center blue-heading" :style="'font-size:' + init_data.section9.description.style.font_size + '; color:' + init_data.section9.description.style.color + '; font-family:' + init_data.section9.description.style.font_family">{{ init_data.section9.description.text }}</h3>
                              <br>
                              <br>
                          </div>
                      </div>

                      <v-container>
                          <v-row>
                              <v-col cols="sm" v-for="(item, id) in init_data.section9.container1" :key="id">
                                  <div class="hover-menu">
                                      <a :href="item.link" class="overlay-btn" :aria-label="item.description + ' in ' + item.title + ' Careers'"></a>
                                      <img :src="item.image" alt="SOFTWARE" class="img-responsive"> <span></span>
                                      <div class="profile">
                                          <h3>{{ item.title }}</h3>
                                          <button class="btn btn-success">{{ item.description }}</button>
                                      </div>
                                  </div>
                              </v-col>
                          </v-row>
                      </v-container>

                      <v-container>
                          <v-row justify="center">
                              <v-col cols="3" v-for="(item, id) in init_data.section9.container2" :key="id">
                                  <div class="hover-menu">
                                      <a :href="item.link" class="overlay-btn" :aria-label="item.description + ' in ' + item.title + ' Careers'"></a>
                                      <img :src="item.image" alt="SOFTWARE" class="img-responsive"> <span></span>
                                      <div class="profile">
                                          <h3>{{ item.title }}</h3>
                                          <button class="btn btn-success">{{ item.description }}</button>
                                      </div>
                                  </div>
                              </v-col>
                          </v-row>
                      </v-container>

                      <v-container>
                          <v-row>
                              <v-col cols="sm" v-for="(item, id) in init_data.section9.container3" :key="id">
                                  <div class="hover-menu">
                                      <a :href="item.link" class="overlay-btn" :aria-label="item.description + ' in ' + item.title + ' Careers'"></a>
                                      <img :src="item.image" alt="SOFTWARE" class="img-responsive"> <span></span>
                                      <div class="profile">
                                          <h3>{{ item.title }}</h3>
                                          <button class="btn btn-success">{{ item.description }}</button>
                                      </div>
                                  </div>
                              </v-col>
                          </v-row>
                      </v-container>
                  </div>
              </div>
          </div>
      </section>
      <!--END-#My changes -->

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
    import topBar from './shared/topBar.vue'
    import videoPlayer from 'vuetify-media-player/src/components/video-player.vue';
    import 'vuetify-media-player/src/style.styl';
  
    export default {
    components: {  topBar, videoPlayer },
    data: () => ({
      offsetTop: 0,
      topbarStyle: 'background:#4d41b3;  border-bottom:1px solid #fff;',
      dialog: false,
      init_data: {}
    }),
		mounted() {
			const app = document.createElement('div');
			app.setAttribute('data-app', true);
			document.body.append(app);
		},
    methods: {
      HidePlyr(){
        this.dialog = false;
      	document.getElementsByTagName('video')[0].pause(1);
      },
      onScroll (){
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
        if (this.offsetTop >= 780 ) {
          this.topbarStyle = "background:#4d41b3;  border-bottom:1px solid #fff; position: fixed; top: 0px; left: 0px; right: 0px; z-index: 100;"
        }else{
          this.topbarStyle = "background:#4d41b3;  border-bottom:1px solid #fff;"
        }
      }
    },
    created() {
        axios.get('json/inner3.json')
        .then(response => {
          this.init_data = response.data;
        })
        .catch(e => {
          this.errors.push(e)
        });
      },

    }
</script>
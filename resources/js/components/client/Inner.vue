<template>
  <div>
    <topBar></topBar>

    <section>

<div :style="'background:' + init_data.section1.bgcolor + ';'" class="dmc-anchor-info dmr base-blowout clip-content no-border" :data-config-metrics-group= init_data.section1.data-config-metrics-group :data-config-metrics-title=  init_data.section1.data-config-metrics-group>
  <div class="row full" :data-owner= init_data.section1.data-owner>
    <div class="col full " :style= init_data.section1.div1S>

            <h1 id="fw-pagetitle" class="":data-owner= init_data.section1.data-owner :style = init_data.section1.h11S>{{ init_data.section1.title }}</h1>

    </div>
  </div>
    <div class="row halves" :data-owner= init_data.section1.data-owner :style= init_data.section1.div2S>
        <div class="col-md-6 col-sm-12 half">

            <div class="info-image">


  <!--DM Image-->
  <div class="dm-img init loaded" :src="init_data.section1.image_wrap" :alt= init_data.section1.image_wrap_alt :title= init_data.section1.image_wrap_title>

  <img :src="init_data.section1.image" :alt= init_data.section1.image_wrap_alt :title= init_data.section1.image_wrap_title></div>

            </div>

        </div>
        <div class="col-md-6 col-sm-12 half">

            <div class="info-content clip color_FFFFFF" :data-more-text= init_data.section1.data-more-text style=""><div class="clip-wrap">

                <h2 :style="'font-size:' + init_data.section1.sub_title.font_size + ';' + 'color:' + init_data.section1.sub_title.color + ';' + 'font-family:' + init_data.section1.sub_title.font_family + ';'">
                      {{ init_data.section1.sub_title.text }}</h2>

                <div class="info-description" :style="'font-size:' + init_data.section1.description.font_size + ';' + 'color:' + init_data.section1.description.color + ';' + 'font-family:' + init_data.section1.description.font_family + ';'">
                    <p>{{ init_data.section1.description.text1 }}</p>
                    <p>{{ init_data.section1.description.text2 }}</p>
                    <p>{{ init_data.section1.description.text3 }}</p>

                </div>

            </div><div class="clip-over"><p><a href="javascript:void(0)">{{ init_data.section1.show_more.text }}</a></p></div></div>

      <ul class="cta">
                <li>

                    <div class="lightbox-link" :data-lightbox-id= init_data.section1.data-lightbox-id>

                        <a class="dmc-button atlantic pal-1" :href="init_data.section1.button[0].link" :data-config-metrics-item= init_data.section1.data-config-metrics-item style=''>

                                    {{ init_data.section1.button[0].text }}

                        </a>

                    </div>

                </li>

                <li>

                        <a :style=  init_data.section1.a1S class="dmc-button atlantic pal-5" :href="init_data.section1.button[1].link" :data-config-metrics-item= init_data.section1.data-config-metrics-item>

                                    {{ init_data.section1.button[1].text }}

                        </a>

                </li>

            </ul>

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
          <span class="fa fa-envelope"></span> Contact
          <span class="caret"></span>
        </v-btn>
      </template>
      <v-list>
          <v-list-item-title>Call Now</v-list-item-title>
          <v-list-item-title>Page 1-2</v-list-item-title>
          <v-list-item-title>Page 1-3</v-list-item-title>
      </v-list>
    </v-menu>
  </div>
  </v-toolbar-items>
</v-app-bar>

        <section class="content" :id="init_data.section3.id" :style="'background:' + init_data.section3.bgcolor + ';'">
          <h3 :style="'font-size:' + init_data.section3.title.font_size + ';' + 'color:' + init_data.section3.title.color + ';' + 'font-family:' + init_data.section3.title.font_family + ';'">{{ init_data.section3.title.text }}</h3>

          <h4 :style="'font-size:' + init_data.section3.sub_title.font_size + ';' + 'color:' + init_data.section3.sub_title.color + ';' + 'font-weight:' + init_data.section3.sub_title.font_weight + ';'">{{ init_data.section3.sub_title.text }}</h4>
          <p :style="'font-size:' + init_data.section3.description.font_size + ';' + 'color:' + init_data.section3.description.color + ';'">{{ init_data.section3.description.text }}</p>






        </section>

        <div class="hg content" :id="init_data.section4.id" :style="init_data.section4.style">
        <h3 :style='init_data.section4.title.style'>{{ init_data.section4.title.text }}</h3>
          <ul type="disc" :style="init_data.section4.description.style">
            <li v-for="(text_item, id) in init_data.section4.description.text" :key="id">{{ text_item }}</li>
          </ul>

          <h4 :style="init_data.section4.sub_title.style">{{ init_data.section4.sub_title.text }}</h4>


        </div>
        <div class="hg content" :id="init_data.section5.id" :style="init_data.section5.style">



          <h4 :style='init_data.section5.title.style'>{{ init_data.section5.title.text }}</h4>


          <ul type="disc" :style="init_data.section5.description.style">
            <li v-for="(text_item, id) in init_data.section5.description.text" :key="id">{{ text_item }}</li>
          </ul>



        </div>

      <section :id="init_data.section6.id">
          <v-container>
              <v-row>
                  <v-col cols="sm" v-for="(item, id) in init_data.section6.container1" :key="id">
                      <div class="cardWrap">
                          <a class="card" :href="item.link">
                              <div class="front blue-p-blue">
                                  <img class="img-responsive" :src="item.image" :alt= init_data.section6.alt :title= init_data.section6.title>
                                  <p>{{ item.description }}</p>
                              </div>
                              <div class="back p-blue-d-gray">
                                  <img class="img-responsive" :src="item.image" :alt= init_data.section6.alt :title= init_data.section6.title>
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
                                  <img class="img-responsive" :src="item.image" :alt= init_data.section6.alt :title= init_data.section6.title>
                                  <p>{{ item.description }}</p>
                              </div>
                              <div class="back p-blue-d-gray">
                                  <img class="img-responsive" :src="item.image" :alt= init_data.section6.alt :title= init_data.section6.title>
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
                                          <img :src="item.image" class="img-responsive" :alt= init_data.section8.alt>
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
                                      <img :src="item.image" :alt= init_data.section9.alt class="img-responsive"> <span></span>
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
                                      <img :src="item.image" :alt=  init_data.section9.alt class="img-responsive"> <span></span>
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
                                      <img :src="item.image" :alt=  init_data.section9.alt class="img-responsive"> <span></span>
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
              <a class="wow rollIn" data-wow-duration= init_data.footer.data-wow-duration data-wow-delay= init_data.footer.data-wow-delay :href="item.link" :style="'background:' + item.bgcolor" v-for="(item, id) in init_data.footer.socialicon" :key="id"><i :class="item.class"></i></a>
          </div>
      </footer>
      <div class="copyright">
          <p>{{ init_data.footer.copyright }}</p>
      </div>


  </div>
</template>

<script>
    import topBar from './shared/topBar.vue'

    export default {
      props:['filename'],
      components: {  topBar },
      data: () => ({
        offsetTop: 0,
        topbarStyle: 'background:#4d41b3;  border-bottom:1px solid #fff;',
        init_data: {},
      }),
      methods: {
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
        console.log(this.filename);
        axios.get('../json/inner/'+this.filename+'.json')
        .then(response => {
          this.init_data = response.data;
        })
        .catch(e => {
          this.errors.push(e)
        });
      },
    };
</script>

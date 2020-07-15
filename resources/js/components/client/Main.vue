<template>
  <div class="flexibility">

    <mainPageTopBar :style="'order:' + init_data.header.order" :init_data="init_data.header"></mainPageTopBar>

    <!-- Tab panes -->
    <section class="backgrounds" v-click-outside="resetClickClass" style="display: none;">
      <div class="horizontal-menu">
        <nav class="horizon-nav">
          <ul>
            <li class="num1" @click="()=>{toSlide(1);bgli(1);}">
              <a v-bind:class="{'bgli':clickClass === 1}">Product & Services</a>
            </li>
            <li class="num2" @click="()=>{toSlide(2);bgli(2);}">
              <a v-bind:class="{'bgli':clickClass === 2}">Tools</a>
            </li>
            <li class="num3" @click="()=>{toSlide(3);bgli(3);}">
              <a v-bind:class="{'bgli':clickClass === 3}">Sequrity</a>
            </li>
            <li class="num4" @click="()=>{toSlide(4);bgli(4);}">
              <a v-bind:class="{'bgli':clickClass === 4}">Comunity</a>
            </li>
            <li class="num5" @click="()=>{toSlide(5);bgli(5);}">
              <a v-bind:class="{'bgli':clickClass === 5}">Customer portal</a>
            </li>
            <li class="num6" @click="()=>{toSlide(6);bgli(6);}">
              <a v-bind:class="{'bgli':clickClass === 6}">Sign in</a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- swiper -->
      <swiper
        :options="swiperOptionX"
        ref="mySwiper"
        v-bind:style="showSwiper ? 'display:block' : 'display:none' "
      >
        <swiper-slide v-for="index in 7" :key="index">
          <tabbedSlide></tabbedSlide>
        </swiper-slide>
      </swiper>
    </section>

    <topSwiper :filename="filename" :style="'order:' + pagedata.banner.id"></topSwiper>

    <div id="topsolusec" :style="'height:120px; order:' + pagedata.crt.id">
      <swiper :options="swiperOption" :style="pagedata.crt.bg_color">
        <swiper-slide v-for="(value, id) in pagedata.crt.class_name" :key="id">
          <div :class="value"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>

    <section class="videointro" :style="'order:' + pagedata.video.id">
      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          max-width="50%"
          @keydown.esc="HidePlyr()"
          @keydown.space="HidePlyr()"
          @click:outside="HidePlyr()"
        >
          <template lang="pug">
            <video-player>
              <source :src="pagedata.video.player.src" :type="pagedata.video.player.type"/>
            </video-player>
          </template>
        </v-dialog>
      </v-row>

      <v-container>
        <v-row>
          <v-col cols="sm">
            <h2>{{pagedata.video.detail.title}}</h2>
            <p>{{pagedata.video.detail.content}}</p>
            <button style="background: #ffffff; padding: 8px;" @click="clickDlg">{{pagedata.video.detail.opendlg_btn}}</button>
          </v-col>

          <v-col cols="sm">
            <template lang="pug">
              <video-player>
                <source :src="pagedata.video.player.src" :type="pagedata.video.player.type"/>
              </video-player>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <footer class="secfooter" :style="'order:' + pagedata.social_link.id">
      <div class="socialico">
        <a class="wow rollIn"
          v-for="(value, id) in pagedata.social_link.link" :key="id"
          :href="value.url"
          :style="'background:' + value.bg_color"
          :data-wow-duration="value.duration"
          :data-wow-delay="value.delay"
        >
          <i :class="value.icon_name"></i>
        </a>
      </div>
    </footer>
    <div class="copyright" :style="'background:' + pagedata.footer.bg_color + ' !important;' + 'order:' + pagedata.footer.id">
      <p>{{pagedata.footer.text}}</p>
    </div>
  </div>
</template>

<script>
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import topextsec from "./shared/topextsec.vue";
import mainPageTopBar from "./shared/mainPageTopBar.vue";
import tabbedSlide from "./shared/tabbedSlide.vue";
import topSwiper from "./shared/top_swiper.vue";
import videoPlayer from 'vuetify-media-player/src/components/video-player.vue';
import 'vuetify-media-player/src/style.styl';
import axios from 'axios'

export default {
  props:['filename'],
  name: "maincomponent",
  created() {
    const app = document.createElement('div');
    app.setAttribute('data-app', true);
    document.body.append(app);
    axios.get('../json/client_main/'+this.filename+'.json')
    .then(response => {
      this.pagedata = response.data; console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    });
  },
  data() {
    return {
      init_data: {},
      pagedata: [],
      dialog: false,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      showBehindWhatsNew: false,
      showMainMenu: true,
      clickClass: 0,
      showSwiper: false,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionX: {
        slidesPerView: 1,
        loop: true
      },
      swiperOption1: {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 2500,
          reverseDirection: true
        }
      },
      swiperOptionInner: {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      swiperOptionh: {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      video: {
          sources: [{
              src: 'assets/images/video.mp4',
              type: 'video/mp4'
          }],
          options: {
              autoplay: true,
              volume: 0.6,
              poster: 'poster.png'
          }
      }
    };
  },
  components: {
    topextsec,
    mainPageTopBar,
    swiper,
    swiperSlide,
    tabbedSlide,
    topSwiper,
    videoPlayer
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.data_loading();
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    data_loading() {
        axios.get('../json/client_main.json')
            .then(res => {
                this.init_data = res.data;
            }).catch(err => {
            // console.log(err)
        })
    },
    HidePlyr() {
      this.dialog = false;
      document.getElementsByTagName('video')[1].pause(1);
    },
    revealBehind() {
      this.showBehindWhatsNew = !this.showBehindWhatsNew;
    },
    toSlide(i) {
      this.$refs.mySwiper.swiper.slideTo(i, 900);
    },
    bgli(num) {
      if (this.clickClass !== num) {
        this.clickClass = num;
        this.showSwiper = true;
      }
    },
    resetClickClass() {
      this.clickClass = 0;
      this.showSwiper = false;
    },
    clickDlg() {
      this.dialog = true;
      document.getElementsByTagName('video')[0].pause(1);
    },
    handleOnPlay() {
        this.console.log('video is paused');
    }
  },
  directives: {
    "click-outside": {
      bind(el, binding, vnode) {
        var vm = vnode.context;
        var callback = binding.value;

        el.clickOutsideEvent = function(event) {
          if (!(el == event.target || el.contains(event.target))) {
            return callback.call(vm, event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      }
    }
  }
};
</script>

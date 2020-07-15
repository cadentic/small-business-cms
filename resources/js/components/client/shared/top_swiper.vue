<template>
  <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-12 nopadding" :style="'order:' + pagedata.banner.banner1.id">

      <div class="logo">
        <img :src="pagedata.banner.banner1.bg_img" alt="Avatar" class="image">
        <div class="logo-overlay"></div>
          <div class="logo-content">
            <h4  class="logo-title">{{pagedata.banner.banner1.title}}</h4>
            <div class="logo-link">
              <ul class="flexibility">
                <li v-for="(value, id) in pagedata.banner.banner1.link" :key="id" :style="'order:' + value.id">
                  <a :href="value.url">{{value.text}}</a>
                </li>
              </ul>
            </div>
        </div>
      </div>

    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 nopadding" :style="'order:' + pagedata.banner.banner2.id">
      <div class="logo">
        <img :src="pagedata.banner.banner2.bg_img" alt="Avatar" class="image">
        <div class="logo-overlay"></div>
          <div class="logo-content">
            <h4  class="logo-title">{{pagedata.banner.banner2.title}}</h4>
            <div class="logo-link">
              <ul class="flexibility">
                <li v-for="(value, id) in pagedata.banner.banner2.link" :key="id" :style="'order:' + value.id">
                  <a :href="value.url">{{value.text}}</a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 nopadding" :style="'order:' + pagedata.banner.banner3.id">
      <template>
        <swiper :options="swiperOption" ref="mySwiper" style="display: block; height: 100%; margin: 0px;">
          <swiper-slide v-for="(item, i) in pagedata.banner.banner3.bg_img" :key="i" id="carouselStyle" style="height: 600px;">
            <div class="swiper-bg" :style="'background-image:' + item">
              <!-- <div v-html="item.content" style="padding-top: 50%;"></div> -->
              <div style="padding-top: 50%;">
                <h4>{{pagedata.banner.banner3.title}}</h4>
                <p>{{pagedata.banner.banner3.content}}</p>
                <a v-for="(value, id) in pagedata.banner.banner3.link" :key="id" :href="value.url">{{value.text}}</a>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </template>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props:['filename'],
  name: 'topSwiper',
  created() {
    axios.get('../json/client_main/'+this.filename+'.json')
    .then(response => {
      this.pagedata = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
  },
  data() {
    return {
      pagedata: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      images: [
        {
          url: "url(assets/images/banner3.jpg)",
          content:
            "<h4>Hello world</h4>" +
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>" +
            '<a href="#">Read More</a>' +
            '<a href="#">Get Quote</a>'
        },
        {
          url: "url(/assets/images/banner4.jpg)",
          content:
            "<h4>Hello world</h4>" +
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>" +
            '<a href="#">Read More</a>' +
            '<a href="#">Get Quote</a>'
        },
        {
          url: "url(/assets/images/banner5.jpg)",
          content:
            "<h4>Hello world</h4>" +
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>" +
            '<a href="#">Read More</a>' +
            '<a href="#">Get Quote</a>'
        },
        {
          url: "url(/assets/images/5042_banner_2.jpg)",
          content:
            "<h4>Hello world</h4>" +
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>" +
            '<a href="#">Read More</a>' +
            '<a href="#">Get Quote</a>'
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    toSlide(i) {
      this.$refs.mySwiper.swiper.slideTo(i, 900);
    },
  },
};
</script>
<style lang="css">
.nopadding {
  padding: 0 !important;
  margin: 0 !important;
}

.swiper-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
}

#carouselStyle {
  margin: 20px 5px;
  margin: 0;
  font-size: 14px;
  color: #fff;
  height: 100%;
  text-align: center;
}

#carouselStyle h4 {
  color: #fff;
  font-size: 24px;
}

#carouselStyle a {
  color: #fff;
  width: 100%;
  border: 2px #f4f4f4 solid;
  padding: 8px 26px;
  margin: 25px 5px;
  border-radius: 25px;
  font-weight: normal;
  font-size: 15px;
}

#carouselStyle a:hover {
  color: #1f2040;
  background: #fff;
}

.v-carousel__controls__item {
  border-radius: 0;
  background: #fff;
}

.v-carousel__controls__item :hover {
  background: #fff;
}

.v-item--active {
  background: #fff;
}

.logo {
  position: relative;
  min-height: auto;
  overflow: hidden;
  text-align: center;
  padding: 0;
  margin: 0;
}

.logo:hover .logo-overlay {
  height: 100%;
  opacity: 0.8;
}
.logo:hover .logo-content {
  top: 50%;
  opacity: 1;
}
.logo:hover .logo-link {
  display: block;
}

.image {
  height: 100%;
  object-fit: cover;
}
.logo-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: .5s ease;
  opacity: 0;
}

.logo-content {
  color: white;
  font-size: 20px;
  position: absolute;
  padding: 0 10%;
  top: 100%;
  left: 0%;
  opacity: 0;
  -webkit-transform: translate(0%, -50%);
  -ms-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
  transition: .5s ease;
  text-align: center;
}

.logo-title {
  text-transform: uppercase;
  width: 100%;
}

.logo-link {
  display: block;
  align-items: center;
  border-top: 1px solid #ccc;
  margin-top: 20px;
  width: 100%;
}
.logo-link > ul {
  padding: 0px !important;
}

.logo-link ul li {
  margin-top: 25px;
  border: 0;
  width: 100%;
}

.logo-content > h4 {
  color: #fff;
  font-size: 30px;
}

.logo-link a {
  color: #fff !important;
  width: 100% !important;
  border: 2px #f4f4f4 solid;
  padding: 8px 26px;
  border-radius: 25px;
  font-weight: normal;
  font-size: 15px;
}
.logo-link a:hover {
  color: #1f2040 !important;
  background: #fff;
}

.logo > .logo-overlay > .logo-content > .logo-link a {
  min-width: 100%;
}

</style>

<template>
<div>
    <!-- Tab panes -->
    <section class="backgrounds" v-click-outside="resetClickClass">
        <div class="horizontal-menu">
        <nav class="horizon-nav">
        <ul>
        <li class="num1" @click="()=>{toSlide(1);bgli(1);}" ><a v-bind:class="{'bgli':clickClass === 1}">Product & Services</a></li>
        <li class="num2" @click="()=>{toSlide(2);bgli(2);}" ><a v-bind:class="{'bgli':clickClass === 2}">Tools</a></li>
        <li class="num3" @click="()=>{toSlide(3);bgli(3);}" ><a  v-bind:class="{'bgli':clickClass === 3}">Sequrity</a></li>
        <li class="num4" @click="()=>{toSlide(4);bgli(4);}" ><a  v-bind:class="{'bgli':clickClass === 4}">Comunity</a></li>
        <li class="num5" @click="()=>{toSlide(5);bgli(5);}" ><a  v-bind:class="{'bgli':clickClass === 5}">Customer portal</a></li>
        <li class="num6" @click="()=>{toSlide(6);bgli(6);}" ><a v-bind:class="{'bgli':clickClass === 6}" >Sign in</a></li>
        </ul>
        </nav>
    </div>

      <!-- swiper -->
      <swiper :options="swiperOptionX" ref="mySwiper" v-bind:style="showSwiper ? 'display:block' : 'display:none' ">
        <swiper-slide v-for="index in 7" :key="index">
          <tabbedSlide></tabbedSlide>
        </swiper-slide>
      </swiper>

  </section>
</div>
</template>
<script>
    // require styles
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import tabbedSlide from './tabbedSlide.vue'
export default{
  directives:{
  'click-outside':{
        bind(el, binding, vnode) {
              var vm = vnode.context;
              var callback = binding.value;

              el.clickOutsideEvent = function (event) {
                  if (!(el == event.target || el.contains(event.target))) {
                      return callback.call(vm, event);
                  }
              };
              document.body.addEventListener('click', el.clickOutsideEvent);
          },
          unbind(el) {
              document.body.removeEventListener('click', el.clickOutsideEvent);
          }

      }
    },
  data:()=>({
    clickClass: 0,
    showSwiper: false,
    swiperOptionX: {
           slidesPerView: 1,
          loop: true,
        }
  }), 
  components: { 
          swiper,
        swiperSlide,
        tabbedSlide
     },
  methods: {
    toSlide(i) {      
        this.$refs.mySwiper.swiper.slideTo(i, 900)
    }, 
    bgli(num){
      if(this.clickClass !== num){
        this.clickClass = num
        this.showSwiper = true
      }
    },
    resetClickClass(){
      this.clickClass = 0
      this.showSwiper = false
    }

  }

}
</script>

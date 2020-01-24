<template>
  <div>
    <topBar></topBar>

	<div class="sidebar-menu">
		<ul>
			<li v-for="(item, id) in init_data.sidebar" :key="id">
				<a :href="item.link"><i :class="item.icon_class"></i>{{ item.text }}</a>
			</li>
		</ul>
	</div>

	<topSwiper></topSwiper>

 	<v-app-bar dense v-bind:style="topbarStyle" v-scroll="onScroll" style="height: 105px !important;">
      <v-toolbar-items class="hidden-sm-and-down">
		<v-btn text v-for="(item, id) in init_data.appbar" :key="id"><a :href="item.link">{{ item.text }}</a></v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer> 
    </v-app-bar>
	
	<span  id="anchor5"></span>

    	<section :class="init_data.section1.class" :style="init_data.section1.style">
			<div class="heading"><h2 :style="init_data.title_style">{{ init_data.section1.title }}</h2></div>
			<v-container class="grey lighten-5">
				<v-row>
					<v-col cols="sm">
						<div class="whyconleft wow slideInLeft">
							<v-carousel delimiter-icon="mdi-minus" cycle :show-arrows="false"  class="crpr wow slideInLeft">
								<v-carousel-item v-for="(item, id) in init_data.section1.carousel1" :key="id">
									<v-sheet>
										<v-row>
											<div class="item testimon">
												<span class="stick" ></span><h3>{{ item.title }}</h3>
												<p>{{ item.description }}</p>
												<a :href="item.button.link">{{ item.button.text }}</a>
											</div>
										</v-row>
									</v-sheet>
								</v-carousel-item>
							</v-carousel>
						</div>
					</v-col>
					<v-col cols="sm">
						<div class="whyconleft wow slideInRight">
							<v-carousel delimiter-icon="mdi-minus" cycle :show-arrows="false"  class="crpr wow slideInLeft">
								<v-carousel-item v-for="(item, id) in init_data.section1.carousel2" :key="id">
									<v-sheet>
										<v-row>
											<div class="item testimon">
												<span class="stick" ></span><h3>{{ item.title }}</h3>
												<p>{{ item.description }}</p>
												<a :href="item.button.link">{{ item.button.text }}</a>
											</div>
										</v-row>
									</v-sheet>
								</v-carousel-item>
							</v-carousel>
						</div>
					</v-col>
				</v-row>
			</v-container>
	
		</section>
		<span  id="anchor4"></span>

    <section :style="init_data.section2.style" :id="init_data.section2.id">
      <v-container>
        <v-row>
          <v-col cols="4">
            <div class="whyconleft wow slideInLeft">
              <h2>{{ init_data.section2.title }}</h2>
              <img :src="init_data.section2.image" alt />
            </div>
          </v-col>

          <v-col cols="8">
            <div class="whyconright wow slideInRight">
              <v-row>
                <v-col cols="sm" v-for="(item, id) in init_data.section2.content1" :key="id">
                  <div class="concon">
                    <i :class="item.icon"></i>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                    <a :href="item.button.link">{{ item.button.text }}</a>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="sm" v-for="(item, id) in init_data.section2.content2" :key="id">
                  <div class="concon">
                    <i :class="item.icon"></i>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                    <a :href="item.button.link">{{ item.button.text }}</a>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
	
	<span  ref="whatsNew"   id="anchor3"></span>
    <section :id="init_data.section3.id" :style="init_data.section3.style" :class="init_data.section3.class">
		<div class="container">
			<div class="whats-slide-position">
		<!-- section title -->
		<div class="whats-new-title">
			<h2 class="wow bounceInDown">{{init_data.section3.title}}</h2>
		</div>   

		<!-- swiper -->
		<swiper :options="swiperOptionh" v-if="showBehindWhatsNew">
			<swiper-slide v-for="(swiperside, id) in init_data.section3.swipersides" :key="id"> 
				<div class="blog-container" data-hash="first"> 
					<i class="fa  fa-times" @click="revealBehind"></i> 
					<div class="banner-bl-slide"> <div id="myCarousel5" class="carousel slide" data-ride="carousel"> 
						<swiper :options="swiperOptionInner"> 
							<swiper-slide v-for="(swiperside_slide, id) in swiperside.swiper" :key="id">
								<div class="item "> 
									<img :src="swiperside_slide">
								</div>
							</swiper-slide>
							<div class="swiper-pagination" slot="pagination"></div>
						</swiper> 
					</div>
				</div>
				<div class="cont"> 
					<h2>{{ swiperside.title }}</h2> 
					<p>{{ swiperside.description }}</p>
					<a :href="swiperside.button1.link">{{ swiperside.button1.text }}</a>
					<a :href="swiperside.button2.link">{{ swiperside.button2.text }}</a>
				</div>
				<div class="banner"> 
					<img :src="swiperside.banner" alt=""/> 
				</div>
			</div>
			</swiper-slide>			
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
		</swiper>



  <v-carousel hide-delimiters  v-else>
    <v-carousel-item v-for="(carousel, id) in init_data.section3.carousels" :key="id">
      <v-sheet>
        <v-row style="background: #e6f5ff;">
        	<div class="item whats-new-carousel" @click="revealBehind" v-for="(item, id) in carousel.content" :key="id">
				<div class="whats-img">
					<img :src="item.image" alt="">
				</div>
				<div class="whats-content">
					<h3>{{ item.title }} <i class="fa fa-arrow-right"></i></h3>
					<p>{{ item.description }}</p>
				</div>
			</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
					
</div>
</div>
</section>

<span  id="anchor2"></span>
<section :id="init_data.section4.id" :style="init_data.section4.style"  :class="init_data.section4.class" >
	<div class="heading wow bounceInDown"><h2 :style="init_data.section4.title_style">{{ init_data.section4.title }}</h2></div>
		<v-carousel hide-delimiters height="120px">
		<v-carousel-item v-for="(carousel, id) in init_data.section4.carousels" :key="id">
			<v-sheet>
			<v-row :style="carousel.style">
				<div class="padcl" v-for="(item, id) in carousel.contents" :key="id">
					<div class="cl-single"></div>
				</div>
			</v-row>
			</v-sheet>
		</v-carousel-item>
		</v-carousel>
</section>

<span id="anchor1"></span>
<section class="secclients" >
</section>

<section :id="init_data.section5.id" :class="init_data.section5.class" :style="init_data.section5.style" >
	<v-expansion-panels accordion>
	<v-expansion-panel>
	<v-expansion-panel-header :style="init_data.section5.title_style1">
		<h2 :style="init_data.section5.title_style2">{{ init_data.section5.title }}</h2>
	</v-expansion-panel-header>
	<v-expansion-panel-content>

	<v-carousel height="100px"  hide-delimiters>
		<v-carousel-item v-for="(carousel, id) in init_data.section5.carousels" :key="id">
		<v-sheet>
			<v-row>
				<div class="divislide owl-carousel" v-for="(sheet, id) in carousel.sheets" :key="id">
					<div class="divi-single" v-for="(content, id) in sheet.contents" :key="id"> </div>
				</div>
			</v-row>
		</v-sheet>
		</v-carousel-item>
	</v-carousel>

	</v-expansion-panel-content>
	</v-expansion-panel>
	</v-expansion-panels>
</section>

	<span id="anchor0"></span>
	<section class="contact-area" :id="init_data.contactarea.id" :style="init_data.contactarea.style">
		<div class="container">
			<div class="section-title text-center purple-text">
				<h2>{{ init_data.contactarea.title }}</h2>
				<p>{{ init_data.contactarea.description }}</p>
			</div>
			<form action="">
				<div class="row">
					<div class="col-md-4 mb-50" v-for="(input, id) in init_data.contactarea.inputs" :key="id">
						<input :type="input.type" :id="input.id" :name="input.name" :placeholder="input.placeholder">
						<label for="name">{{ input.label }}</label>
					</div>
					<div class="col-md-4 mb-50">
						<select>
							<option v-for="(option, id) in init_data.contactarea.region" :key="id">{{ option }}</option>
						</select>
					</div>
					<div class="col-md-4 mb-50">
						<select>
							<option v-for="(option, id) in init_data.contactarea.inquirytype" :key="id">{{ option }}</option>
						</select>
					</div>
					<div class="col-md-12 mb-50">
						<textarea :placeholder="init_data.contactarea.message.placeholder"></textarea>
					</div>
					<div class="col-md-12 text-center">
						<button :type="init_data.contactarea.button.type" :class="init_data.contactarea.button.class">{{ init_data.contactarea.button.label }}</button>
					</div>
				</div>
			</form>
		</div>
	</section>

	<footer :class="init_data.footer.class" :style="'background:' + init_data.footer.style.bgcolor" >
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
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import topSwiper from "./shared/swiperCarousel.vue";
import topBar from "./shared/topBar.vue";


export default {
    name: 'carousel',
    data() {
      return {
		  init_data: {},
		dialog: false,
		colors: [
			'primary',
			'secondary',
			'yellow darken-2',
			'red',
			'orange',
        ],
      
	    offsetTop: 0,

	    topbarStyle: 'background: rgb(230, 245, 255); padding: 30px 75px; border-color: rgb(255, 255, 255); position: static; top: 0px; left: 0px; right: 0px; z-index: 100;',
        
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
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
		    swiperOptionX: {
           slidesPerView: 1,
          loop: true,
        },
        swiperOption1: {
          direction: 'vertical',
          loop: true,
          autoplay: {
            delay: 2500,
            reverseDirection: true,
        }
        },
        swiperOptionInner:{
        	 spaceBetween: 30,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        swiperOptionh:{
        	 spaceBetween: 30,
          centeredSlides: true,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    components: { 
		swiper,
        swiperSlide,
        topSwiper,
        topBar
     },
     computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
	},
    // mounted() {
    //   this.swiper.slideTo(3, 1000, false)
    // },
    methods:{
		
    	toSlide(i) {      
			this.$refs.mySwiper.swiper.slideTo(i, 900)
		}, 
		bgli(num){
			if(this.clickClass !== num){
				this.clickClass = num
				this.showSwiper = true
			}
        },

        revealBehind() {
      this.showBehindWhatsNew = !this.showBehindWhatsNew;
    },
        onScroll (){
            let top = this.$refs.whatsNew.offsetTop
            
            this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
            if(top){
                if(this.offsetTop<(top-550) || this.offsetTop > (top+ 800)){
                
                this.showBehindWhatsNew = false;
            }
            }
            
	      if (this.offsetTop >= 780 ) {
	        this.topbarStyle = "background: rgb(230, 245, 255); padding: 30px 75px; border-color: rgb(255, 255, 255); position: fixed; top: 0px; left: 0px; right: 0px; z-index: 100;"
	      }else{
	        this.topbarStyle = "background: rgb(230, 245, 255); padding: 30px 75px; border-color: rgb(255, 255, 255); position: static; top: 0px; left: 0px; right: 0px; z-index: 100;"
	      }
	    }
	},
	created() {
    axios.get('json/innerblank2.json')
    .then(response => {
      this.init_data = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
  },
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
	}
}
</script>
<style lang="scss">
    .v-carousel__controls__item{
        background: rgba(0,0,0,.0) !important;
		span{
		    background: rgba(0,0,0,.0) !important;
       i{
		    background: rgba(0,0,0,.0) !important;
		&:hover{
        background: rgba(0,0,0,.0) !important;
		}
	   }
		}
        
    }
    .stepRow label{
        font-size: 0.875rem !important;
        font-weight: bold !important;
    }
    .stepRow select{
        font-size: 0.875rem !important;
        font-weight: bold !important;
    }
    .stepRow textarea{
        font-size: 0.875rem !important;
        font-weight: bold !important;
	}
	header.v-sheet.v-sheet--tile.theme--light.v-toolbar.v-toolbar--dense.v-app-bar.v-app-bar--is-scrolled{
		height: 105px !important;
	}
	#whycon .concon p{
		margin-bottom: 16px;
		font-family: "Roboto", sans-serif;
		line-height: 1.5;
	}
	.v-window__next{
		right: 0;
	}
	.theme--dark.v-sheet {
		background-color: #fefefe !important;
		border-color: #fefefe !important;
		color: #000 !important;
	}
</style>
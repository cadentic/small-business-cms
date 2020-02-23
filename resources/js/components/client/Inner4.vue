<template>
	<div>
    <topBar></topBar>
    
	<div>
		
			<!-- sidebar -->
	<div class="sidebar-menu">
		<ul>
			<li><a href="#"><i class="fa fa-users"></i> {{init_data.sidebar[0].text}}</a></li>
			<li><a href="#"><i class="fa fa-line-chart" aria-hidden="true"></i> {{init_data.sidebar[1].text}}</a></li>
			<li><a href="#"><i class="fa fa-cogs" aria-hidden="true"></i> {{init_data.sidebar[2].text}}</a></li>
			<li><a href="#"><i class="fa fa-desktop"></i> {{init_data.sidebar[3].text}}</a></li>
		</ul>
	</div>

	<!-- video banner -->
      <v-row no-gutters>
      <v-col cols="8">
        <video autoplay loop muted>
        <source :src="init_data.video_banner.src" type="video/mp4">
      </video>
      </v-col>
      <v-col cols="4">
        <div class="banner-content" style="padding-top: 8em;">
            <div class="banner-title">
              <p>{{ init_data.video_banner.title.p }}</p>
              <h3>{{ init_data.video_banner.title.h3 }}</h3>
            </div>
            <div class="banner-btn">
              <a :href="init_data.video_banner.btn.link">{{ init_data.video_banner.btn.text }}</a>
            </div>
            <div class="banner-text">
              <h3>{{init_data.video_banner.text.h3.text1}} <span>{{init_data.video_banner.text.h3.span1}}</span> {{init_data.video_banner.text.h3.text2}} <span>{{init_data.video_banner.text.h3.span}}2</span></h3>
              <p>{{init_data.video_banner.text.p}}</p>
            </div>
            </div>
      </v-col>
    </v-row>


	<!-- nav -->
	<v-app-bar dense   v-bind:style="topbarStyle"  v-scroll="onScroll">
  <v-toolbar-items class="hidden-sm-and-down">
	  <v-btn text class="nav-link-btn" v-for="(item, id) in init_data.appbar.nav" :key="id"><a :href="item.link" class="white-link">{{ item.text }}</a></v-btn>
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
		<span class="white-link">
          <span class="fa fa-envelope"></span> 
          <span>{{ init_data.appbar.contact.label }}</span>
          <span class="caret"></span>
      </span>
        </v-btn>
      </template>
      <v-list>          
          <v-list-item-title v-for="(item, id) in init_data.appbar.option" :key="id">{{ item }}</v-list-item-title>
      </v-list>
    </v-menu>
  </div>
  </v-toolbar-items>
</v-app-bar>

	<!-- innovation-area -->
	<section class="innovation-area" :id="init_data.innovation.id">
		<div class="innovation-top-area"></div>
		<div class="container">
			<div class="main-innovation">
				<div class="row">
					<div class="col-md-5">
						<div class="innovation-title">
							<h2>{{init_data.innovation.title}} {{offsetTop}}</h2>
						</div>
						<div class="innovation-social-icon">
							<a :href="item.link" v-for="(item, id) in init_data.innovation.icons" :key="id"><i :class="item.class"></i></a>
						</div>
					</div>
					<div class="col-md-7">

						<div class="innovation-content-title">
							<h2>{{init_data.innovation.sub_title}}</h2>
						</div>
						<div class="innovation-content">
							<p v-for="(item, id) in init_data.innovation.descriptions" :key="id">{{ item }}</p>
							<div class="innovation-btn">
								<a :href="init_data.innovation.button.link" class="default-btn" style="color:white;">{{ init_data.innovation.button.text }}</a>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>
	</section>

	<v-carousel height="auto" hide-delimiters :id="init_data.carousel.id">
		<v-carousel-item v-for="(item, id) in init_data.carousel.items" :key="id">
		<v-sheet tile>
			<v-row>
					<div class="item">
				<div class="video-img">
					<img :src="item.image" alt="">
					<div class="video-content">
						<h2>{{ item.title }}</h2>
					</div>
					<div class="video-play-btn">
						<a class="play-btn" @click="showVideo(1)"><i class="fa fa-play-circle-o"></i></a>
					</div>
					<div class="video-area">
						<span class="video-close" @click="showVideo(0)" v-bind:style="displayVideo === 1 ? 'display:block' : '' ">X</span>
						<iframe :src="item.iframe" frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen v-bind:style="displayVideo === 1 ? 'display:block' : '' "></iframe>

					</div>
				</div>
				</div>
			</v-row>
		</v-sheet>
		</v-carousel-item>
	</v-carousel>
	</div>

	<!-- inner4 testimonial  -->
	<div :class="init_data.testimonial.class">
		<v-container>
		  <v-carousel height="auto"  style="background:red;">
		    <v-carousel-item v-for="(item, id) in init_data.testimonial.carousel" :key="id">
		      <v-sheet tile>
		        <v-row align="center" justify="center">
		          <v-col cols="sm">
						<div class="testimonial-img">
							<img :src="item.image" alt="">
						</div>
		          </v-col>
		          <v-col cols="sm">		          	
						<div class="testimonial-title">
							<h2>{{ item.title }}</h2>
							<p>{{ item.description }}</p>
						</div>
						<div class="testimonial-btn">
							<ul>
								<li v-for="(button, id) in item.buttons" :key="id"><a :href="button.link" class="default-btn" style="color:white;">{{button.text}}</a></li>
							</ul>
						</div>
		          </v-col>
		        </v-row>
		      </v-sheet>
		    </v-carousel-item>
		  </v-carousel>
		    </v-container>
	</div>


	<!-- vartical nav -->
	<section :id="init_data.about.id">
		<div class="section-title what-we text-center">
			<h2>{{ init_data.about.title }}</h2>
		</div>
		<div class="vartical-nav">
			<div class="container">
				<div class="tab">
					<button class="tablinks active" onmouseover="openCity(event, 'tab-1')">{{ init_data.about.tabs[0].text }}</button>
					<button class="tablinks" onmouseover="openCity(event, 'tab-2')">{{ init_data.about.tabs[1].text }}</button>
					<button class="tablinks" onmouseover="openCity(event, 'tab-3')">{{ init_data.about.tabs[2].text }}</button>
					<button class="tablinks" onmouseover="openCity(event, 'tab-4')">{{ init_data.about.tabs[3].text }}</button>
					<button class="tablinks" onmouseover="openCity(event, 'tab-5')">{{ init_data.about.tabs[4].text }}</button>
				</div>

				<div :id="init_data.about.current_tabcontent.id" class="tabcontent" style="display: block">
					<h3>{{ init_data.about.current_tabcontent.title }}</h3>
					<p>{{ init_data.about.current_tabcontent.description1 }}</p>
					<p>{{ init_data.about.current_tabcontent.description2 }}</p>
					<p>{{ init_data.about.current_tabcontent.description3 }}</p>
					
					<a :href="init_data.about.current_tabcontent.button.link" class="tabcontent-btn">{{ init_data.about.current_tabcontent.button.text }}</a>
				</div>

				<div :id="content.id" class="tabcontent" v-for="(content, id) in init_data.about.tabcontents" :key="id">
					<h3>{{ content.title }}</h3>
					<p>{{ content.description1 }}</p>
					<p>{{ content.description2 }}</p>
					<p>{{ content.description3 }}</p>
					
					<a :href="content.button.link" class="tabcontent-btn">{{ content.button.text }}</a>
				</div>

				<div class="clearfix"></div>
			</div>
		</div>
	</section>

	<!-- innovation-OFFERINGS-area -->
	<section class="innovation-area" :id="init_data.offerings.id">
		<div class="innovation-top-area text-center">
			<h2 class="offerings-title">{{ init_data.offerings.title }}</h2>
		</div>
		<div class="container">
			<div class="main-innovation">
				<div class="row">
					<div class="col-md-5">
						<div class="innovation-title">
							<h2>{{ init_data.offerings.sub_title }}</h2>
						</div>
						<div class="innovation-social-icon">
							<a :href="icon.link" v-for="(icon, id) in init_data.offerings.icons" :key="id"><i :class="icon.class"></i></a>
						</div>
					</div>
					<div class="col-md-7">
						<div class="innovation-content">
							<p>{{ init_data.offerings.description }}</p>
						</div>
					</div>
				</div> <!-- row -->

			</div>
			<div class="row">
				<!-- OFFERINGS box  -->
				<!-- single offering box start-->
				<div class="col-md-6" v-for="(content, id) in init_data.offerings.contents" :key="id">
					<div class="offerings-box">
						<div class="offerings-img">
							<img :src="content.image" alt="">
						</div>
						<div class="offerings-content">
							<h3><a href="#">{{ content.title }}</a></h3>
							<p>{{ content.description }}</p>
						</div>
					</div>
				</div>
				<!-- single offering box end -->
			</div> <!-- row -->
		</div>
	</section>

	<!-- our partners start  -->
	<div class="ourpartners-area" :id="init_data.partners.id">
		<div class="container">
			<!-- partners title -->
			<div class="ourpartners-title">
				<h2>{{ init_data.partners.title }}</h2>
				<p>{{ init_data.partners.description }}</p>
			</div>
			<div class="row">
				<!-- single partner start-->
				<div class="col-md-6 col-lg-4" v-for="(content, id) in init_data.partners.contents" :key="id">
					<div class="partner-box">
						<div class="partner-img">
							<img :src="content.image" alt="">
						</div>
						<div class="partner-content">
							<h3>{{ content.title }}</h3>
							<p>{{ content.description }}</p>
						</div>
					</div>
				</div>
				<!-- single partner end-->
			</div>
		</div>
	</div>

	<!-- featured work -->
	<section class="featured-work" :id="init_data.work.id">
		<div class="container">
			<div class="section-title purple-text text-center">
				<h2>{{init_data.work.title}}</h2>
			</div>
			<div class="row">
				<div class="col-md-4 col-sm-6" v-for="(content, id) in init_data.work.contents" :key="id">
					<div class="single-featured-work bg-1">
						<a href="#" class="featured-wrapper" title="Speedy Quality for a Smart Home Solution">
							<div class="featured-tag">
								<span><i class="fa fa-leaf" aria-hidden="true"></i>{{ content.tag }}</span>
							</div>
							<div class="featured-title">
								<h2>{{ content.title }}</h2>
							</div>
							<div class="featured-footer">
								<p><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span> <span
										class="view">{{ content.button }}</span></p>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 text-center">
					<div class="view-all-btn">
						<a  class="white-link" href="#">{{ init_data.work.button }}<span><i class="fa fa-play" aria-hidden="true"></i></span></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- latast thinking -->
	<template>
	<swiper :options="swiperOption" ref="mySwiper" style="display: block; height: 100%; margin: 0px;">
		<swiper-slide v-for="(item, i) in images" :key="i" style="height: 330px;">
			<div v-html="item.content"></div>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
	</swiper>
	</template>

	<!-- event area -->
	<section class="event-area">
		<div :class="content.class" v-for="(content, id) in init_data.eventarea" :key="id">
			<div class="container">
				<div class="section-title text-center purple-text">
					<h2>{{ content.title }}</h2>
				</div>
				<div class="row">
					<div class="col-md-4 col-sm-6">
						<div class="event-content">
							<span>{{ content.tag }}</span>
							<h3>{{ content.sub_title }}</h3>
							<p>{{ content.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="contact-area" :id="init_data.contactarea.id">
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

	<!-- footer -->
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
	import "swiper/dist/css/swiper.css";
	import { swiper, swiperSlide } from "vue-awesome-swiper";

	export default {
      components: {  topBar, swiper, swiperSlide },
	  data: () => ({
	    offsetTop: 0,
	    topbarStyle: 'background:#4d41b3;  border-bottom:1px solid #fff;',
		displayVideo: 0,
		swiperOption: {
			slidesPerView: 3,
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
		init_data: {},
		images: [
			{
				content:
					"<div class='thinking-wrapper bg-1'>" +
						"<div class='single-think'>" +
							"<div class='think-tag'><span><i class='fa fa-book' aria-hidden='true'></i> E-book</span></div>" +
							"<div class='thinking-text'>" +
								"<h4><a href='#'>achieving digital dexterity</a></h4>" +
								"<p>Here's how 21 organizations world wide are taking the right...</p>" +
							"</div>" +
							"<div class='thinking-footer'>" +
								"<a href='#'><span class='icon'><i class='fa fa-play' aria-hidden='true'></i></span>" +
									"<span class='view'>View</span></a>" +
							"</div>" +
						"</div>" +
					"</div>"
			},
			{
				content:
					"<div class='thinking-wrapper bg-2'>" +
						"<div class='single-think'>" +
							"<div class='think-tag'><span><i class='fa fa-book' aria-hidden='true'></i> E-book</span></div>" +
							"<div class='thinking-text'>" +
								"<h4><a href='#'>virtual digital surrogates & blockchain: the...</a></h4>" +
								"<p>amid a lack of user0center design and standard protocols...</p>" +
							"</div>" +
							"<div class='thinking-footer'>" +
								"<a href='#'><span class='icon'><i class='fa fa-play' aria-hidden='true'></i></span>" +
									"<span class='view'>View</span></a>" +
							"</div>" +
						"</div>" +
					"</div>"
			},
			{
				content:
					"<div class='thinking-wrapper bg-3'>" +
						"<div class='single-think'>" +
							"<div class='think-tag'><span><i class='fa fa-book' aria-hidden='true'></i> E-book</span></div>" +
							"<div class='thinking-text'>" +
								"<h4><a href='#'>the journey to intelligent ERP</a></h4>" +
								"<p>tapping open-source integration to cut production planning...</p>" +
							"</div>" +
							"<div class='thinking-footer'>" +
								"<a href='#'><span class='icon'><i class='fa fa-play' aria-hidden='true'></i></span>" +
									"<span class='view'>View</span></a>" +
							"</div>" +
						"</div>" +
					"</div>"
			}
		]
	  }),
	  methods: {
	    onScroll (){
	      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
	      if (this.offsetTop >= 660 ) {
	        this.topbarStyle = "background:#4d41b3;  border-bottom:1px solid #fff; position: fixed; top: 0px; left: 0px; right: 0px; z-index: 100;"
	      }else{
	        this.topbarStyle = "background:#4d41b3;  border-bottom:1px solid #fff;"
	      }
	    },
	    showVideo(num){
	    	this.displayVideo = num
		},
		toSlide(i) {
			this.$refs.mySwiper.swiper.slideTo(i, 900);
		},
	  },
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		mounted() {
			this.swiper.slideTo(3, 1000, false);
		},
		created() {
        axios.get('json/inner4.json')
        .then(response => {
          this.init_data = response.data;
        })
        .catch(e => {
          this.errors.push(e)
        });
      },
	};
</script>
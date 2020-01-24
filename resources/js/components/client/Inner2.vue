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


	<!-- pg1 -->
	<div class="hg after-nav" :id="init_data.section3.id">
		<div class="container">
			<!-- section title -->
			<div class="sd-access section-title">
				<h2>init_data.section3.title</h2>
			</div>
			<div class="row">
				<!-- single sd-access start-->
				<div class="col-sm-6" v-for="(item, id) in init_data.section3.content" :key="id">
					<div class="single-sd-access">
						<div class="sd-access-img wow fadeIn">
							<img :src="item.image" alt="sd-access">
						</div>
						<div class="sd-access-content">
							<h2>{{ item.title }}</h2>
							<p>{{ item.description }}</p>
						</div>
					</div>
				</div>
				<!-- single sd-access end -->
			</div>
			<div class="row">
				<div :class="init_data.section3.button_wrap.class" :style="'text-align:' + init_data.section3.button_wrap.style.text_align + '; width:' + init_data.section3.button_wrap.style.width">
					<a :href="item.link" :class="item.class" :style="'color:' + item.style.color + '; margin-right:' + item.style.margin_right" v-for="(item, id) in init_data.section3.button_wrap.buttons" :key="id">{{ item.text }}</a>
				</div>
			</div>
		</div>

	</div>

	<!-- call to action area -->
	<section :class="init_data.section4.class">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="section-title text-white">
						<h2>{{ init_data.section4.title }}</h2>
					</div>
					<div class="cta-content text-center">
						<p>{{ init_data.section4.description }}</p>
						<a :href="init_data.section4.button.link" :class="init_data.section4.button.class">{{ init_data.section4.button.text }}</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- csd-access-area -->
	<div class="csd-access-area " :id="init_data.section5.id">

		<div class="container">
			<div class="row">
				<!-- seciton title -->
				<div class="section-title">
					<h2>{{ init_data.section5.section5_sub.title }}</h2>
				</div>
				<div class="row">
					<!-- csd-access-content -->
					<div class="col-lg-3 col-sm-6" v-for="(item, id) in init_data.section5.section5_sub.contents" :key="id">
						<div class="csd-access-content">
							<h2><a :href="item.link">{{ item.text }}</a></h2>
							<p>{{ item.description }} <a :href="item.description_link"> {{ item.description_label }}</a></p>
						</div>
					</div>
					<!-- csd-access-content end-->
				</div>
				<!-- csd-access-btn-area -->
				<div :class="init_data.section5.section5_sub.button_wrap.class" :style="'text-align:' + init_data.section5.section5_sub.button_wrap.style.text_align + '; width:' + init_data.section5.section5_sub.button_wrap.style.width">
					<a :href="item.link" :class="item.class" :style="'color:' + item.style.color + '; margin-right:' + item.style.margin_right" v-for="(item, id) in init_data.section5.section5_sub.button_wrap.buttons" :key="id">{{ item.text }}</a>
				</div>
			</div>
		</div> <!-- container -->

		<!-- csd-flexibility -->
		<div class="csd-flexibility">
			<div class="container">
				<div class="csd-flexibility-title">
					<h2>{{ init_data.section5.section5_sub1.title }}</h2>
				</div>
				<div class="csd-flexibility-content">
					<p>{{ init_data.section5.section5_sub1.description1 }}</p>
					<p>{{ init_data.section5.section5_sub1.description2 }}</p>
				</div>
				<!-- csd-access-btn-area -->
				<div :class="init_data.section5.section5_sub1.button_wrap.class" :style="'text-align:' + init_data.section5.section5_sub1.button_wrap.style.text_align + '; width:' + init_data.section5.section5_sub1.button_wrap.style.width">
					<a :href="item.link" :class="item.class" :style="'color:' + item.style.color + '; margin-right:' + item.style.margin_right" v-for="(item, id) in init_data.section5.section5_sub1.button_wrap.buttons" :key="id">{{ item.text }}</a>
				</div>
			</div>
		</div>
	</div>

	<!-- getstart area -->
	<section :class="init_data.section6.class">
		<div class="container">
			<div class="row">
				<div class="col-sm-6" v-for="(item, id) in init_data.section6.contents" :key="id">
					<div class="single-start">
						<div class="start-img wow fadeIn">
							<img :src="item.image" alt="">
						</div>
						<div class="success-content">
							<h3>{{ item.title }}</h3>
							<p>{{ item.description }}</p>
							<a :href="item.button.link" :class="item.button.class">{{ item.button.text }} <i :class="item.button.icon"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- success area -->
	<section :class="init_data.section7.class" :id="init_data.section7.id">
		<div class="container">
			<div class="section-title">
				<h2>{{ init_data.section7.title }}</h2>
			</div>
			<div class="row">
				<div class="col-sm-4" v-for="(item, id) in init_data.section7.contents" :key="id">
					<div class="single-start">
						<div class="start-img wow fadeIn">
							<img :src="item.image" alt="">
						</div>
						<div class="success-content">
							<h3>{{ item.title }}</h3>
							<p>{{ item.description }}</p>
							<a :href="item.button.link" :class="item.button.class">{{ item.button.text }} <i :class="item.button.icon"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-center">
					<div class="see-all-btn">
						<a :href="init_data.section7.button.link">{{ init_data.section7.button.text }}</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- cadentic about -->
	<div :class="init_data.section8.class">
		<div class="container">
			<!-- about title -->
			<div class="cadentic-about-title">
				<h2>{{ init_data.section8.title }}</h2>
			</div>
			<!-- cadentic about content -->
			<div class="cadentic-about-content">
				<ul>
					<li v-for="(item, id) in init_data.section8.contents" :key="id">{{ item }}</li>
				</ul>
			</div>
		</div>
	</div>

	<div :class="init_data.section9.class" :id="init_data.section9.id">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="section-title">
						<h2 class="text-left">{{ init_data.section9.title }}</h2>
					</div>
					<div class="partnar-content">
						<p v-for="(item, id) in init_data.section9.descriptions" :key="id">{{ item.description_left }} <a :href="item.button.link">{{ item.button.text }}</a> {{ item.description_right }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>


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
	import videoPlayer from 'vuetify-media-player/src/components/video-player.vue';
	import 'vuetify-media-player/src/style.styl';

	export default {
      components: { topBar, videoPlayer },
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
        axios.get('json/inner2.json')
        .then(response => {
		  this.init_data = response.data;
		  console.log(this.init_data)
        })
        .catch(e => {
          this.errors.push(e)
        });
      },
	};


</script>
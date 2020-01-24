<template>
  <v-carousel cycle :show-arrows="false" hide-delimiters>
    <v-carousel-item v-for="(item, id) in init_data" :key="id">
      <v-sheet tile>
        <v-row>
          <div :class="item.class">
            <div :class="item.sub_class" :style="item.style">
              <h1 :style="item.title_style">{{ item.title }}</h1>
              <img :style="item.image_style" :src="item.image" alt />
              <a
                :href="item.button1.link"
                :style="item.button1.style"
              >{{ item.button1.text }}</a>
              <a
                :href="item.button2.link"
                :style="item.button2.style"
              >{{ item.button2.text }}</a>
            </div>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<style lang="css">
.nopadding {
  padding: 0 !important;
  margin: 0 !important;
}

#CardStyle {
  position: relative;
  min-height: auto;
  overflow: hidden;
  text-align: center;
  padding: 0;
  margin: 0;
}

#CardStyle > img {
  height: 100%;
  object-fit: cover;
}

#CardStyle > .card-img-overlay {
  background: #f4f4f4;
  color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
}

#CardStyle:hover > .card-img-overlay {
  visibility: visible;
  opacity: 0.7;
  border-radius: 0;
  background: black;
}

#CardStyle > .card-img-overlay > .card-title {
  padding-top: 5px;
  text-transform: uppercase;
  width: 100%;
}

#CardStyle > .card-img-overlay h4 {
  color: #fff;
  font-size: 24px;
}

#CardStyle > .card-img-overlay a {
  color: #fff;
  width: 100% !important;
  border: 2px #f4f4f4 solid;
  padding: 8px 26px;
  margin: 25px 5px;
  border-radius: 25px;
  font-weight: normal;
  font-size: 15px;
}

#CardStyle > .card-img-overlay a:hover {
  color: #1f2040;
  background: #fff;
}

#CardStyle .card-footer {
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  margin-top: 20px;
  width: 100%;
}

#CardStyle .card-footer ul li {
  margin-top: 25px;
  border: 0;
  width: 100%;
}

#CardStyle .card-footer a {
  min-width: 100%;
}

#carouselStyle {
  margin: 20px 5px;
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
</style>
<script>
export default {
  data() {
    return {
      images: [
        {
          url: "assets/images/banner3.jpg",
          content: '<a href="#">Read More</a>' + '<a href="#">Get Quote</a>'
        },
        {
          url: "assets/images/banner4.jpg",
          content: '<a href="#">Read More</a>' + '<a href="#">Get Quote</a>'
        },
        {
          url: "assets/images/banner5.jpg",
          content: '<a href="#">Read More</a>' + '<a href="#">Get Quote</a>'
        },
        {
          url: "assets/images/5042_banner_2.jpg",
          content:
            "<h4>Hello world</h4>" +
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor</p>" +
            '<a href="#">Read More</a>' +
            '<a href="#">Get Quote</a>'
        }
      ],
      init_data: {}
    };
  },
  created() {
    axios.get('json/swipercarousel.json')
    .then(response => {
      this.init_data = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
  }
};
</script>
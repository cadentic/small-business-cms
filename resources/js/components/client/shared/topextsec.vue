<template>
  <div>
    <v-alert
      border="left"
      close-text="Close Alert"
      color="deep-purple accent-4"
      dark
      dismissible
      :id=init_data.id
    >
      <v-row no-gutter>
        <v-col cols="4">
          <div v-for="(image_banner, index) in init_data.image_banner" :key='index' :class=image_banner.class>
            <img :src=image_banner.src alt />
          </div>
        </v-col>

        <v-col cols="sm">
          <div class="white--text rightext">
            <h2>{{ init_data.title }}</h2>
            <a href v-for="(button, index) in init_data.button_wrap" :key='index' class="white--text">{{ button.text }}</a>
          </div>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

  <script>
    import axios from 'axios'
    export default {
      data: () => ({
        init_data: {}
      }),
      mounted: function() {
        this.data_loading();
        this.fadeIn();
      },
      methods: {
        fadeIn() {
          let topextsec = document.getElementById("topextsec");
          window.setTimeout(function() {
            topextsec.style.display = "block";
          }, 3000);
        },
        close(e) {
          if (e.target.classList.contains("v-icon")) {
            let topextsec = document.getElementById("topextsec");
            topextsec.style.display = "none";
            this.fadeIn();
          }
        },
        data_loading() {
            axios.get('/json/topextsec.json')
                .then(res => {
                    this.init_data = res.data;
                    this.fadeIn();
                }).catch(err => {
                // console.log(err)
            })
        }
      }
    };
</script>
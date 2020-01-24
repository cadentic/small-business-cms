<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12 pa-5">
              <v-card-text>
                <v-form @submit="handleFormSubmission">
                  <h1 style="text-align: center;" class="mt-5 mb-10">{{ form_title }}</h1>
                  <p style="text-align: center;" class="mb-5">{{ message }}</p>

                  <v-text-field
                    name="login"
                    prepend-icon="person"
                    type="text"
                    placeholder="Email or username"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-show="showpassword"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="success large" block="true" tile>Send</v-btn>
              </v-card-actions>
              <div class="pa-3 help-link-group">
                  <a v-for="(link, i) in footer_links" :href="link.url" target="_blank" rel="" :key="i">{{ link.title }} | </a>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <ChatComponent/>
  </v-app>
</template>

<style scoped>
  #inspire {
    background: none;
  }
  .help-link-group a{
    color:rgb(218, 36, 36);
  }
</style>
<script>
  import ChatComponent from './components/ChatComponent.vue';

  export default {
    components: { ChatComponent },
    data() {
      return {
        form_title: "",
        message: "",
        footer_links: {},
        showpassword: false,
        errors: {}
      }
    },
    mounted() {
      axios.get('/json/forgot-password.json')
      .then(response => {
        this.form_title = response.data.heading_title;
        this.message = response.data.explanation_text;
        this.footer_links = response.data.footer_links;
      })
      .catch(err => {
        this.errors.push(err);
      })
    },
    methods: {
      handleFormSubmission() {
        
      }
    }
  }
</script>
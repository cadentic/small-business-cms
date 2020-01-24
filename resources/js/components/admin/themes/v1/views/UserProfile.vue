<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="4"
      >
        <material-card class="v-card-profile">
          <v-avatar
            slot="offset"
            class="mx-auto d-block elevation-6"
            size="130"
          >
            <img
              src="../assets/img/faces/face-2.jpg"
            >
          </v-avatar>
          <v-card-text class="text-center">
            <h2 class="mb-3">
              Chet Faker
            </h2>

            <h5 class="font-weight-light">
              @chetfaker
            </h5>

            <div class="font-weight mt-4 mb-2 text-center">
              <span>"I like the way you work it</span><br>
              <span>No diggity</span><br>
              <span>I wanna bag it up"</span>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-space-around mt-2">
            <div v-for="info in details">
              <h3> {{info.title}} </h3>
              <small>{{info.subTitle}}</small>
            </div>
          </v-card-actions>
        </material-card>
      </v-col>
      <v-col
        cols="12"
        md="8"
      >
        <material-card
          color="green"
          title="Edit Profile"
          text="Complete your profile"
        >
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Company (disabled)"
                    disabled
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    class="purple-input"
                    label="User Name"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Email Address"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="First Name"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Last Name"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Adress"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="City"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Country"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn color="success">
                    Update Profile
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        details: [
          {
            title: '12',
            subTitle: 'Files',
          },
          {
            title: '2GB',
            subTitle: 'Used',
          },
          {
            title: '24,6$',
            subTitle: 'Spent',
          },
        ],
      }
    },
  }
</script>

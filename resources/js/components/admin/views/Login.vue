<template>
    <div class="login">
        <v-container fluid fill-height class="loginOverlay">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4>
                <v-card>
                    <v-card-title>
                        <h4>Cadentic account sign in</h4>
                    </v-card-title>
                    <v-card-text class="pt-4">
                        <v-form ref="form" @submit.prevent="submit">
                            <v-text-field
                            label="Username"
                            v-model="email"
                            required
                            append-icon="fa-info-circle"
                            ></v-text-field>
                            <v-text-field
                            label="Password"
                            v-model="password"
                            append-icon="fa-info-circle"
                            required
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="submit" class="green white--text">Sign in</v-btn>
                        <a class="link-color" href="">Need help?</a>
                    </v-card-actions>
                </v-card>
                <v-card>
                    <v-card-title>
                        <h5>Don't have an Cadentic Account?</h5>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn @click="create" outlined color="black" class="create">Create Account</v-btn>
                        <v-row >
                            <span class="row-item border">Cadentic</span>
                            <a class="link-color row-item border" href="">Terms of use</a>
                            <a class="link-color row-item" href="">Privacy Policy</a>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-flex>
          </v-layout>
       </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
      email: '',
      password: ''
    }),
    methods: {
        submit () {
            axios.post('/save-json/login', { email: this.email, password: this.password})
                 .then(() => alert('Saved!'))
                 .catch(error => console.error(error));
        },
        create () {

        }
    }
}
</script>

<style scoped>
.login {
    height: 100vh;
    background-image: url('../assets/background-image.jpg');
}

h4 {
    font-size: 1em !important;
    padding: 1em;
    color: black;
}

.v-card {
    text-align: center;
    margin: 1em;
}

.v-card__title {
    justify-content: center;
}

.v-btn {
    width: 100%;
}

.link-color {
    color: #d38841;
    text-decoration: none;
}

.v-card {
    padding: 1em;
}

.v-card__actions {
    display: block;
}

.green {
    margin-bottom: 1em;
}

.create {
    text-transform: capitalize;
    margin-bottom: 1em;
}

.row {
    font-size: 0.7em;
    justify-content: center;
}

.row-item {
    padding: 0 0.7em;
}

.border {
    border-right: 1px solid black;
}
</style>

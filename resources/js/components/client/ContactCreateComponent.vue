<template>
    <v-app style="background: #fff !important;">
        <div>
            <toolbar></toolbar>

            <v-container>
                <h1>New Ticket</h1>
                <v-row>
                    <v-col cols=10 offset-md=1>
                        <v-card class="pa-7" elevation=10 outlined>
                            <h4 class="title pt-3">ADD A NEW TICKET</h4>
                            <v-form>
                                <v-row class="nowrap-overflow">
                                    <v-col cols=4 offset-md="1">
                                        <span class="subtitle-1">First name :</span> 
                                    </v-col>
                                    <v-col cols=6> 
                                        <v-text-field :value="ticket_form_data.firstname" dense outlined readonly />
                                    </v-col>
                                </v-row>

                                <v-row class="nowrap-overflow">
                                    <v-col cols=4 offset-md="1">
                                        Last name :
                                    </v-col>
                                    <v-col cols=6> 
                                        <v-text-field :value="ticket_form_data.lastname" dense outlined readonly />
                                    </v-col>
                                </v-row>

                                <v-row class="nowrap-overflow">
                                    <v-col cols=4 offset-md="1">
                                        Email :
                                    </v-col>
                                    <v-col cols=6> 
                                        <v-text-field :value="ticket_form_data.mail" dense outlined readonly />
                                    </v-col>
                                </v-row>

                                <v-row class="nowrap-overflow">
                                    <v-col cols=4 offset-md="1">
                                        Company (<span class="red--text">*</span>) :
                                    </v-col>
                                    <v-col cols=6> 
                                        <v-text-field :value="ticket_form_data.company" dense outlined required readonly />
                                    </v-col>
                                </v-row>

                                <v-row class="nowrap-overflow">
                                    <v-col cols=4 offset-md="1">
                                        Subject (<span class="red--text">*</span>) :
                                    </v-col>
                                    <v-col cols=6> 
                                        <v-text-field v-model="ticket_form_data.subject" dense outlined required name="subject" @change="handleOnChangeEvent"/>
                                    </v-col>
                                </v-row>

                                <v-row class="nowrap-overflow">
                                    <v-col cols=4 offset-md="1">
                                        Additional Contacts <i>(Add additional contact emails here, separate multiple emails with a semi-colon or comma)</i>  :
                                    </v-col>
                                    <v-col cols=6> 
                                        <v-text-field v-model="ticket_form_data.additional" dense outlined required name="additional" @change="handleOnChangeEvent"/>
                                    </v-col>
                                </v-row>

                                <!-- Details field -->
                                <v-row class="nowrap-overflow">
                                    <v-col cols=4 offset-md="1">
                                        Details (<span class="red--text">*</span>)
                                    </v-col>
                                    <v-col cols=6> 
                                        <v-textarea
                                            outlined
                                            dense 
                                            required
                                            name="details"
                                            v-model="ticket_form_data.details"
                                            @change="handleOnChangeEvent"></v-textarea>
                                    </v-col>
                                </v-row>

                                <!-- Category field -->
                                <v-row class="nowrap-overflow">
                                    <v-col cols=4 offset-md="1">
                                        Category (<span class="red--text">*</span>)
                                    </v-col>
                                    <v-col cols=6> 
                                        <v-select
                                            name="category"
                                            outlined
                                            required
                                            dense 
                                            v-model="ticket_form_data.category"
                                            :items="categories_list"
                                            @change="handleOnChangeEvent"></v-select>
                                        </v-col>
                                </v-row>

                                <!-- Country field -->
                                <v-row class="nowrap-overflow">
                                    <v-col cols=4 offset-md="1">
                                        Country (<span class="red--text">*</span>)
                                    </v-col>
                                    <v-col cols=6> 
                                        <v-select
                                            name="country"
                                            outlined
                                            required
                                            dense
                                            v-model="ticket_form_data.country"
                                            :items="countries_list"
                                            @change="handleOnChangeEvent"></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols=4 offset-md="1">
                                        <b>Attach document</b> (If you receive a large file error please Zip your attachment)
                                    </v-col>
                                    <v-col cols=6> 
                                        <v-file-input
                                            v-model="ticket_form_data.files"
                                            color="deep-purple accent-4"
                                            counter
                                            multiple
                                            dense
                                            tile
                                            style="z-index: 2000;"
                                            placeholder="Select your files"
                                            prepend-icon=""
                                            outlined
                                            :show-size="1000">

                                            <template v-slot:append>
                                                    <v-icon>mdi-file-upload</v-icon>
                                            </template>
                                            <template v-slot:selection="{ index, text }">
                                                <v-chip
                                                    v-if="index < 3"
                                                    color="green darken-1" dark label small>
                                                    {{ text }}
                                                </v-chip>

                                                <span
                                                    v-else-if="index === 2"
                                                    class="overline grey--text text--darken-3 mx-2">
                                                    +{{ files.length - 2 }} File(s)
                                                </span>
                                            </template>
                                        </v-file-input>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols=8 offset-md=1>
                                        <p>By submitting this request you understand and agree to Oracle <span class="red--text">Terms of Use</span> and <span class="red--text">Privacy Policy</span></p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols=2 offset-md=10>
                                        <v-btn tile color="success" @click="submitTicketForm">Submit</v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>    

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
        <ChatComponent/>
    </v-app>
</template>

<style scoped>
    .nowrap-overflow {
        flex-wrap: nowrap;
        overflow-x: auto;
    }
    .popular-question-list li a{
        font-size: 20px;
        color: rgb(230, 131, 11);
    }
    #search-btn {
        position:relative !important;
        top: -15px;
        left: -10px;
        height: 55px;
    }
</style>
<script>
import toolbar from './shared/toolbar.vue';
import ChatComponent from './components/ChatComponent.vue';

export default {
  components: {toolbar, ChatComponent },
  data: () => ({
    offsetTop: 0,
    topbarStyle: "background:#fff; padding:0px 130px; border-color:#fff;",
    ticket_form_data: {
        firstname: "",
        lastname: "",
        mail: "",
        company: "",
        subject: "",
        additional: "",
        details: "",
        category: "",
        country: "",
        files: [],
    },
    categories_list: [],
    countries_list: [],
    init_data: {},
    contact_history_list: {}
  }),
  created() {
    axios.get('json/innerblank.json')
    .then(response => {
      this.init_data = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });

    // Set user prefilled informations
    this.ticket_form_data.firstname = "Sayantan";
    this.ticket_form_data.lastname = "Chakraborty";
    this.ticket_form_data.mail = "example@example.com";
    this.ticket_form_data.company = "Ndegde Informatics Private Limited";

  },
  methods: {
    submitTicketForm() {

        // Send the form with axios
        // axios.post('', this.ticket_form_data);
    },
    handleOnChangeEvent(value) {
        // this.ticket_form_data is dynamically updated so you can use it for whatever you wamnt
        console.log(this.ticket_form_data);
    }
  }
};
</script>
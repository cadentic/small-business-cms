<template>
    <v-app style="background: white;">
        <div>
            <toolbar></toolbar>

            <v-container>
                <h2 class=" mt-5">Ticket communication history <span class="overline">Ticket {{ ticket }}</span></h2>
                <v-row class="nowrap-overflow">
                    <v-col cols=12>
                        <v-expansion-panels model="panel" focusable multiple hover>
                            <v-expansion-panel v-for="(contact, index) in contact_history_list" :key="index">
                                <v-expansion-panel-header><b>{{contact.author + ' via channel \'' + contact.channel + '\' ' + contact.date}}</b></v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <br>{{contact.body}}
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
              <strong>Subject:</strong> {{this.subject}}
            </v-container>
            <v-container>
              <v-row>
                <strong>Admin replied:</strong> <div v-html="this.reply"></div>
              </v-row>
            </v-container>
            <v-container>
                <h1 class="ticket-subject mb-5">Which track is enabled now ?</h1>
                <v-row>
                    <v-col cols=8 offset-md="2">
                        <v-card class="pa-5" elevation=10 outlined>
                            <h4 class="title pt-3">UPDATE THIS TICKET</h4>
                            <v-form>
                                <v-row class="nowrap-overflow">
                                    <v-col cols=12>
                                        <label class="subtitle-1">Do you still need assistance ?</label>
                                        <v-select
                                            name="assistance"
                                            outlined
                                            dense
                                            tile
                                            v-model="ticket_update_form_data.assistance"
                                            :items="assistance_options"
                                            @change="handleOnChangeEvent"></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols=12>
                                        <label class="subtitle-1">Add information to your ticket <span class="red--text">*</span></label>
                                        <v-textarea
                                            outlined
                                            tile
                                            name="informationss"
                                            v-model="ticket_update_form_data.informations"
                                            @change="handleOnChangeEvent"></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols=12>
                                        <label class="subtitle-1">Attach additional documents to your ticket</label>
                                        <v-file-input
                                            v-model="ticket_update_form_data.files"
                                            color="deep-purple accent-4"
                                            counter
                                            multiple
                                            dense
                                            tile
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
                                    <v-col cols=12>
                                        <label class="subtitle-1">Add or delete contacts</label>
                                        <v-text-field v-model="ticket_update_form_data.contacts" dense tile outlined name="contacts" @change="handleOnChangeEvent"/>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols=2 offset-md="10">
                                        <v-btn tile color="success" @click="submitTicketForm">Update</v-btn>
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
  components: {toolbar, ChatComponent},
  props: {
      ticket: {
          type: String,
          required: true
      }
  },
  data: () => ({
    offsetTop: 0,
    topbarStyle: "background:#fff; padding:0px 130px; border-color:#fff;",
    init_data: {},
    assistance_options: ['Yes, please keep this ticket open', '...'],
    contact_history_list: {},
    ticket_update_form_data: {
        files: [],
        informations: "",
        assistance: "",
        documents: "",
        contacts: ""
    },
    reply: '',
    subject: ''
  }),
  props: ['ticket'],
  created() {
    axios.get('/json/innerblank.json')
    .then(response => {
      this.init_data = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
    // Get popular answers
    axios.get('/json/contact_history.json')
    .then(response => {
      this.contact_history_list = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
    let id = window.location.href.substring(window.location.href.lastIndexOf('/')+1);
    axios.get('/json/tickets/'+this.ticket+'.json')
    .then(response => {
      this.reply = response.data[response.data.length-1].reply;
      this.subject = response.data[0].subject;
    })
    .catch(e => {
      this.errors.push(e)
    });
    // Fiil default informations into the form
    this.ticket_update_form_data.contacts = "example1@example.com; example2@example.com; example3@example.com"
  },
  methods: {
    submitTicketForm() {
        // Send the form with axios
        // axios.post('', this.ticket_form_data);
        let id = window.location.href.substring(window.location.href.lastIndexOf('/')+1);
        axios.post('/contact/'+id, this.ticket_update_form_data).then((res)=>{console.log(res);}).catch((e)=>{console.log(e);});
    },
    handleOnChangeEvent(value) {
        // this.ticket_form_data is dynamically updated so you can use it for whatever you wamnt
        console.log(this.ticket_update_form_data);
    }
  }
};
</script>

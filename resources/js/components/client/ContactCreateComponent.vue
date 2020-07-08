<template>
    <v-app style="background: #fff !important;">
        <div>
            <toolbar></toolbar>

            <v-container>
                <h1>{{ contactCreate.title }}</h1>
                <v-row>
                    <v-col cols=10 offset-md=1>
                        <v-card class="pa-7" :elevation="contactCreate.content.elevation" outlined>
                            <h4 class="title pt-3">{{ contactCreate.content.title }}</h4>
                            <v-form>
                                <v-row class="nowrap-overflow" v-for="(item, index) in contactCreate.content.fields" :key="index">
                                    <v-col cols=4 offset-md="1">
                                        <span class="subtitle-1" v-html="item.label"></span>
                                    </v-col>
                                    <v-col cols=6>
                                        <v-text-field v-if="item.type === 'textfield'" v-model="ticket_form_data[item.model]" :value="ticket_form_data[item.model]" :required="item.required" :readonly="item.readonly" dense outlined @change="onChangeHandlers[item.onChangeHandler]" />
                                        <v-textarea
                                            v-else-if="item.type === 'textarea'"
                                            outlined
                                            dense
                                            :required="item.required"
                                            v-model="ticket_form_data[item.model]"
                                            @change="onChangeHandlers[item.onChangeHandler]"
                                            ></v-textarea>
                                        <v-select
                                            v-else-if="item.type === 'select'"
                                            outlined
                                            :required="item.required"
                                            dense
                                            v-model="ticket_form_data[item.model]"
                                            :items="item.items"
                                            @change="onChangeHandlers[item.onChangeHandler]"></v-select>
                                        <v-file-input
                                            v-else-if="item.type === 'file'"
                                            v-model="ticket_form_data[item.model]"
                                            :counter="item.counter"
                                            :multiple="item.multiple"
                                            dense
                                            tile
                                            :style="item.style"
                                            :placeholder="item.placeholder"
                                            prepend-icon=""
                                            outlined
                                            :show-size="item.showSize"
                                            name="files">

                                            <template v-slot:append>
                                                <v-icon>{{ item.icon }}</v-icon>
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
                                        <p v-html="contactCreate.content.paragraph"></p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols=2 offset-md=10>
                                        <v-btn tile :color="contactCreate.content.button.color" @click="submitTicketForm">{{ contactCreate.content.button.label }}</v-btn>
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
    contactCreate: {content: {}},
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
        files: []
    },
    categories_list: [],
    countries_list: [],
    init_data: {},
    contact_history_list: {},
    onChangeHandlers: {}
  }),
  created() {
    axios.get('json/innerblank.json')
    .then(response => {
      this.init_data = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
    axios.get('json/contact-create.json')
    .then(response => {
      this.contactCreate = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });

    // Set user prefilled informations
    this.ticket_form_data.firstname = "Sayantan";
    this.ticket_form_data.lastname = "Chakrobarty";
    this.ticket_form_data.mail = "example@example.com";
    this.ticket_form_data.company = "Ndegde Informatics Private Limited";

    this.onChangeHandlers.subject = this.handleOnChangeEvent;
    this.onChangeHandlers.additional = this.handleOnChangeEvent;
    this.onChangeHandlers.details = this.handleOnChangeEvent;
    this.onChangeHandlers.category = this.handleOnChangeEvent;
    this.onChangeHandlers.country = this.handleOnChangeEvent;
  },
  methods: {
    submitTicketForm() {

        // Send the form with axios
        // axios.post('', this.ticket_form_data);
        for(let i=0; i<this.ticket_form_data.files.length; ++i)
        {
            this.ticket_form_data.files[i] = this.ticket_form_data.files[i].toDataUrl();
        }
        axios.post('/contact-us', this.ticket_form_data).then((res)=>{console.log(res);});
        console.log(this.ticket_form_data);
    },
    handleOnChangeEvent(value) {
        // this.ticket_form_data is dynamically updated so you can use it for whatever you wamnt
        console.log(this.ticket_form_data);
    }
  }
};
</script>

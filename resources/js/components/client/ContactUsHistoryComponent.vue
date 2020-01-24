<template>
    <v-app>
        <div>
            <toolbar></toolbar>

            <v-container>
                <h2 class="bold">My tickets</h2>
                <v-row class="nowrap-overflow">
                    <v-col cols=12> 
                        <v-card>
                            <v-card-title>
                                List of tickets
                                <v-spacer></v-spacer>
                                <v-text-field
                                    v-model="search"
                                    append-icon="search"
                                    label="Search"
                                    single-line
                                    hide-details
                                ></v-text-field>
                            </v-card-title>
                            <v-data-table
                                :headers="headers"
                                :items="tickets"
                                :search="search">

                                <template v-slot:item.subject="{ item }">
                                    <a class="orange--text" :href="current_path + item.ticket_number">{{ item.subject }}</a>
                                </template>
                            </v-data-table>
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
  components: {toolbar,  ChatComponent},
  data: () => ({
    offsetTop: 0,
    topbarStyle: "background:#fff; padding:0px 130px; border-color:#fff;",
    search: '',
        headers: [
          { text: 'Ticket#', align: 'left', value: 'ticket_number'},
          { text: 'Subject', value: 'subject' },
          { text: 'Status', value: 'status' },
          { text: 'Date created', value: 'created_date' },
          { text: 'Date closed', value: 'closed_date' },
        ],
        tickets: [
          {
            ticket_number: '112035689',
            subject: 'Which track is enabled now ?',
            status: 'Customer updated',
            created_date: '12/30/2019',
            closed_date: ''
          },
          {
            ticket_number: '174835689',
            subject: 'We pay for partnership ?',
            status: 'Closed',
            created_date: '12/30/2019',
            closed_date: '01/01/2020'
          },
          {
            ticket_number: '1726456700',
            subject: 'Membership renewal ?',
            status: 'Customer updated',
            created_date: '12/09/2019',
            closed_date: ''
          },
        ],
    init_data: {},
    current_path: "",
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

    // Get current path
    this.current_path = location.pathname + '/';

  },
  methods: {
    
  }
};
</script>
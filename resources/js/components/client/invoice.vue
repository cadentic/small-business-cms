<template>
  <v-app id="inspire" style="background-color:#f2f2f2 !important;">
    <v-content>
      <div>
      <v-container>
        <div v-if="success">
          <v-alert type="success" outlined>
            Invoice created.
          </v-alert>
        </div>
        <v-row>
          <v-col cols="12" sm="8">
            <v-card class="pa-5">
              <v-form ref="form" v-model="valid">
                <h2>Cadentic</h2>
                <div>
                  GSTIN : 1921928201382
                  <br>
                  CIN : UUISYF9873IOUS308
                </div>
                <div>
                  <h1 style="display:inline-block !important;">Invoice # <v-text-field :rules="mainRule" style="display:inline-block !important;" v-model="invoice_detail.invoice_no" label="Enter invoice number"></v-text-field></h1>
                </div>
                <div>
                  <v-textarea label="Enter a Brief Description or Summary" rows="2" :auto-grow="auto_grow" v-model="invoice_detail.description"></v-textarea>
                </div>
                <v-row>
                  <v-col cols="12" sm="6">
                    BILLING TO
                    <v-text-field :rules="mainRule" label="Select a customer" v-model="invoice_detail.billing_detail.customer"></v-text-field>
                    <v-row>
                      <v-col>
                        ISSUED DATE
                        <v-menu
                        ref="menu_issued"
                        v-model="menu_issued"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="invoice_detail.billing_detail.issued_date"
                            placeholder="Select Date"
                            prepend-icon="event"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="invoice_detail.billing_detail.issued_date" no-title @input="menu_issued = false"></v-date-picker>
                      </v-menu>
                      </v-col>
                      <v-col>
                        EXPIRY DATE
                        <v-menu
                        ref="menu_expiry"
                        v-model="menu_expiry"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="invoice_detail.billing_detail.expiry_date"
                            placeholder="Select Date"
                            prepend-icon="event"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="invoice_detail.billing_detail.expiry_date" no-title @input="menu_expiry = false"></v-date-picker>
                      </v-menu>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" sm="6">
                    BILLING ADDRESS
                    <v-text-field :rules="mainRule" label="Enter Billing Address" v-model="invoice_detail.billing_detail.billing_address"></v-text-field>
                    SHIPPING ADDRESS
                    <v-text-field :rules="mainRule" label="Enter Shipping Address" v-model="invoice_detail.billing_detail.shipping_address"></v-text-field>
                    PLACE OF SUPPLY
                    <v-text-field :rules="mainRule" label="Enter place of supply" v-model="invoice_detail.billing_detail.place_of_supply"></v-text-field>
                    TAX IN %
                    <v-text-field label="Tax" v-model="invoice_detail.tax"></v-text-field>
                  </v-col>
                </v-row>
                <br>
                <v-divider></v-divider>
                <br>
                <div>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <th class="text-left">DESCRIPTION</th>
                        <th class="text-left">RATE/ITEM</th>
                        <th class="text-left">QUANTITY</th>
                        <th class="text-left">TOTAL</th>
                        <th></th>
                      </thead>
                      <tbody>
                        <tr v-for="(i,index) in items" :key="index">
                          <!-- <td><v-select :items="select" placeholder="Select an item" v-model="i.description"></v-select></td> -->
                          <td><v-autocomplete :items="select" placeholder="Select an item" v-model="i.description"></v-autocomplete></td>
                          <td><v-text-field type="number" v-model="i.rate"></v-text-field></td>
                          <td><v-text-field type="number" v-model="i.quantity"></v-text-field></td>
                          <td>{{get_total(i)}}</td>
                          <td><v-btn @click="delete_item(index)" color="red" icon><v-icon>mdi-delete</v-icon></v-btn></td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <v-btn text color="blue" @click="add_item"> <v-icon>mdi-plus</v-icon> Add item</v-btn>
                  <h3 class="text-right">Total amount : {{total_amount()}}</h3>
                </div>
                <div>
                  <br>
                  <br>
                  <br>
                  <br>
                  <v-textarea height="1" :auto-grow="auto_grow" label="Add Customer Notes" v-model="invoice_detail.customer_notes"></v-textarea>
                  <br>
                  <br>
                  <br>
                  <br>
                  <v-textarea height="1" :auto-grow="auto_grow" label="Add Terms and Conditions" v-model="invoice_detail.terms_and_conditions"></v-textarea>
                </div>
              </v-form>
              <br><br>
              <div class="text-center">
                cadentic
                <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
              <div class="text-center">
                <v-btn block tile large color="primary accent-4"> <v-icon>mdi-check</v-icon> Finalize Issue</v-btn>
                <br>
                <v-btn block  tile large @click="submit"> <v-icon>mdi-content-save</v-icon> Save invoice</v-btn>
                <v-btn block large tile @click="clearform()"> <v-icon>mdi-close</v-icon> Delete Invoice</v-btn>
              </div>        
              <br>
              <div>
                <h4>Settings :</h4>
                <div class="text-center">
                  <v-btn tile block large>Enable partial payment <v-icon>mdi-radiobox-blank</v-icon></v-btn>
                  <v-btn tile block large>Change invoice label <v-icon>mdi-arrow-right</v-icon></v-btn>
                </div>
              </div>
          </v-col>
        </v-row>
      </v-container>
      </div>
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
    </v-content>
    <ChatComponent/>
  </v-app>
</template>

<style scoped>
  #inspire {
    background: none;
  }
  .cards-wrapper {
    background: #e9e8e9;
  }
  .cards-wrapper-title {
    color: #da251c;
    font-weight: lighter;
    text-align: center;
  }
  .help-link-group a{
    color:rgb(218, 36, 36);
  }
</style>
<script>
  import downloadcard from "./components/downloadcard.vue";
  import ChatComponent from './components/ChatComponent.vue';
  import axios from 'axios'
  export default {
    components: {downloadcard, ChatComponent }, 
    data() {
      return {
        menu_issued : false,
        menu_expiry : false,
        valid :true,
        drawer : false,
        menus : [{title:"Invoice",icon:"home",href:'/whatsapp/invoice'},{title:"Enquiry",icon:"person",href:'/whatsapp/enquiry'}],
        auto_grow : true,
        menu1 : false,
        date : new Date().toISOString().substr(0, 10),
        select : ['Pen','Book','Copy'],
        items : [],
        invoice_detail : {
          tax : 0,
          invoice_no : '',
          description : '',
          billing_detail : {
            customer : '',
            issued_date : '',
            expiry_date : '',
            billing_address : '',
            shipping_address : '',
            place_of_supply : ''
          },
          customer_notes : '',
          terms_and_conditions : '',
        },
        mainRule : [
          v => !!v || "This field is required",
          v => (v&&v.length <= 100) || "This field must be less than 100 characters"
        ],
        loading : false,
        success : false,
        errors: {},
        init_data: {},
        download_resources: {},
        drawer : false,
            menus : [{title:"Invoice",icon:"home",href:'/invoice'},{title:"Enquiry",icon:"person",href:'/enquiry'}],
            form_data : {
                name : 'adsas',
                email : 'ad@aslkdj',
                message : 'akldjsalk',
            },
            loading : false,
            success : false,
            valid : true,
            nameRule : [
              v => !!v || "Name is required",
              v => (v&&v.length <= 100) || "Name must be less than 100 characters"
            ],
            emailRule : [
              v => !!v || "Email is required",
              v => /.+@.+/.test(v) || 'Enter Valid Email address',
              v => (v&&v.length <= 100) || "Email must be less than 100 characters"
            ],
            messageRule : [
              v => !!v || "Message is required",
              v => (v&&v.length <= 10000) || "Enter valid message"
            ]
      }
    },
    mounted() {
      axios.get('json/innerblank.json')
      .then(response => {
        this.init_data = response.data;
      })
      .catch(e => {
        this.errors.push(e)
      });
      axios.get('/products/all')
      .then(res=>{
        this.select = res.data
      })
      .catch(err=>{
      })
    },
    methods :{
      add_item(){
        this.items.push({description:"",rate:0,quantity:1,total:0})
      },
      get_total(i){
        return i.total = (i.rate*i.quantity);
      },
      total_amount(){
        var total  = 0
        this.items.forEach(e => {
            total += e.total
        });
        this.total = total
        this.total += this.total*this.invoice_detail.tax/100
        return this.total
      },
      go(to){
        window.location.href  = to
      },
      async submit(){
        await this.$refs.form.validate()
        if(this.valid){
          this.loading = true
          var data = {}
          data.invoice_detail = this.invoice_detail
          data.items = this.items
          data.total_amount = this.total
          data.date = Date()
          axios.post('/invoice/create',{data:data})
          .then(res=>{
            this.$refs.form.reset()
            this.loading = false
            this.success = true
            window.scroll(0,0)
            setTimeout(() => {
              this.success = false
            }, 3000);
          })
          .catch(err=>{
            // console.log(err)
            this.loadng = false
          })
        }
        else{
          window.scroll(0,0)
        }
      },
      delete_item(index){
        if (index > -1) {
          this.items.splice(index, 1);
        }
      },
      clearform(){
        this.$refs.form.reset();
      }
    },
  }
</script>
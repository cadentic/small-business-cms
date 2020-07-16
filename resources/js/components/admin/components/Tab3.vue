<template>
    <v-card flat>
        <v-card-text>
            <v-container fluid>
                <v-row no-gutters>
                    <v-col cols="10">
                        <div class="service-title ">
                            <h4>Service Request For...</h4>
                        </div>
                        <div class="bottomLeft" v-if="editorActive" >
                            <div>
                                <vue-editor v-model="content"></vue-editor>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="2">
                        <div class="service-title-link">
                            <a href="#">Give Feedback...</a>
                            <a href="#">Customize Page</a>
                        </div>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="4">
                      <div class="left-technical-btn d-block d-md-inline float-md-left mt-2 ml-2">
                          <v-btn @click="showEditor">Create new SR</v-btn>
                      </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="left-technical-btn d-block d-md-inline float-md-left mt-2 ml-2" v-if="editorActive">
                        <v-btn @click="submitsr(0)">Submit</v-btn>
                    </div>
                  </v-col>
                </v-row>
                <br/>
                <div v-for="history in this.history">
                  <v-row>
                      <v-expansion-panels
                              accordion focusable>
                          <v-expansion-panel  style="margin-bottom: 3em">
                              <v-expansion-panel-header class="knowledge-link-title">
                                  <div class="left-title-icon9">
                                      <i class="fa fa-caret-right title-caret-right "></i>
                                      <i class="fa fa-sort-down title-downarrow "></i>
                                  </div>
                                  <span>{{history.subject}}</span>
                                  <div class="right-gear-icon">
                                      <i class="fa fa-cog"></i>
                                      <i class="fa fa-sort-down"></i>
                                  </div>
                              </v-expansion-panel-header>
                              <v-expansion-panel-content>
                                  <!-- Service Request Contents -->
                                  <div class="service-request-contents technical-service-content position-relative">
                                      <!-- Service Top Bar -->
                                      <v-row no-gutters>
                                          <v-col cols="4">
                                              <div class="left-technical-btn d-block d-md-inline float-md-left mt-2 ml-2">
                                                  <v-btn @click="showEditor">Reply</v-btn>
                                              </div>
                                          </v-col>
                                          <v-col cols="4">
                                            <div class="left-technical-btn d-block d-md-inline float-md-left mt-2 ml-2" v-if="editorActive">
                                                <v-btn @click="submitsr(history.ticket_number)">Submit</v-btn>
                                            </div>
                                          </v-col>
                                          <v-col cols="4">
                                              <div class="service-top-bar text-md-right">
                                                  <span>Support Identifier</span>
                                                  <input type="text" placeholder="Type name,number, description">
                                                  <i class="fa fa-sort-down"></i>
                                              </div>
                                          </v-col>
                                      </v-row>
                                      <!-- Service Top Bar End -->
                                      <!-- Service Top Options -->
                                      <div class="service-top-options d-flex justify-content-between">
                                          <v-row no-gutters>
                                              <v-col cols="6">
                                                  <!-- Left Options -->
                                                  <div class="service-option-left d-block d-md-flex">
                                                      <!-- View Option Menu -->
                                                      <div class="service-view-option">
                                                          <select name="" id="">
                                                              <option value="" selected>View</option>
                                                              <option value="" >Large</option>
                                                              <option value="" >Lanscape</option>
                                                              <option value="" >Small</option>
                                                          </select>
                                                          <!-- View Option Menu End -->
                                                          <a href="#"><i class="fa fa-star"></i></a>
                                                          <a href="#"><i class="fa fa-user"></i></a>
                                                          <a href="#"><i class="fa fa-copy"></i></a>
                                                      </div></div>
                                              </v-col>
                                              <v-col cols="5">
                                                  <!-- Right Options -->
                                                  <div class="service-top-option-right d-block text-right d-md-flex">
                                                      <form action="#" class="form-md-inline">
                                                          <select name="" id="">
                                                              <option value="" selected>Problem Summary</option>
                                                              <option value="" selected>Problem Title</option>
                                                              <option value="" selected>Problem Description</option>
                                                          </select>
                                                          <input type="text">
                                                          <i class="fa fa-search fa-rotate-90"></i>

                                                      </form>
                                                  </div>
                                              </v-col>
                                              <v-col cols="1">
                                                  <a href="#">Advanced</a>
                                              </v-col>
                                          </v-row>
                                      </div>
                                      <!-- Service Top Options -->
                                      <!-- Service Request Options -->
                                      <div class="service-request-options">
                                          <table class="service-request-table">
                                              <thead>
                                              <tr>
                                                  <th class="summary">Problem Summary</th>
                                                  <th class="technicalSR">Technical SR #</th>
                                                  <th class="star"><i class="fa fa-star"></i></th>
                                                  <th class="product">Product</th>
                                                  <th class="severity">Severity</th>
                                                  <th class="contact">Contact</th>
                                                  <th class="status">Status</th>
                                                  <th class="last-update">Last Update<i class="fa fa-sort-up"></i><i class="fa fa-sort-down"></i></th>
                                                  <th class="support-identifier">Support Identifier</th>
                                              </tr>
                                              </thead>
                                              <tbody>
                                              <tr>
                                                  <td><a href="#">{{history.subject}}</a></td>
                                                  <td><a href="#">{{history.ticket_number}}</a></td>
                                                  <td class="star"><span><i class="fa fa-star"></i></span></td>
                                                  <td><a href="#"><span class="sr-only">Blank</span></a></td>
                                                  <td><a href="#">3-standard</a></td>
                                                  <td><a href="#">sayantan chakrab...</a></td>
                                                  <td><a href="#"><i class="fa fa-exclamation-triangle"></i>{{history.status}}</a></td>
                                                  <td><a href="#">{{history.created_date}}</a></td>
                                                  <td><a href="#">22034691 (Nded...)</a></td>
                                              </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                      <!-- Service Request Options End -->
                                  </div>
                              </v-expansion-panel-content>
                          </v-expansion-panel>
                      </v-expansion-panels>
                      <!-- </v-row>
                      </v-container>
                      <v-container fluid>
                      <v-row> -->
                  </v-row>
                </div>

            </v-container>

        </v-card-text>
    </v-card>
</template>

<script>
  import axios from 'axios';
  import { VueEditor } from "vue2-editor";
    export default {
        name: "Tab3",
        components: {
          VueEditor
        },
        data () {
            return {
                editorActive: false,
                descriptionLong: true,
                tab: null,
                kbtab: null,
                katab: null,
                pstab: null,
                pptab: null,
                cqltab: null,
                cqltab1: null,
                alert: true,
                checkbox: false,
                history: [],
                content: ''
            }
        },
        created() {
          axios.get('../../json/contact-us-history.json')
          .then(response => {
            this.history = response.data.tickets;
          })
          .catch(e => {
            this.errors.push(e)
          });
        },
        methods:{
            showEditor(){
                this.editorActive = !this.editorActive
            },
            submitsr(id){
              if(id!==0){
                axios.get('/json/tickets/'+id+'.json').then((res)=>{
                   let ticket = res.data;
                   ticket.push({'reply': this.content, 'replier': 'admin'});
                   let data = {
                     'to': '/json/tickets/'+id+'.json',
                     'ticket': ticket
                   };
                   axios.post('../../save-to-json', data).then(()=>{console.log(data);}).catch((e)=>{console.log(e);});
                 })
                   .catch((e)=>{console.log(e);});
              }
              else{
                axios.get('/json/contact-us-history.json').then((res)=>{
                  let tickets = res.data.tickets;
                  let id = tickets[tickets.length-1].ticket_number + 1;
                  console.log(id);
                  let ticket = [{'content': this.content, 'replier': 'admin'}]
                  let data = {
                    'to': '/json/tickets/'+id+'.json',
                    'ticket': ticket
                  };
                  axios.post('../../save-to-json', data).then(()=>{console.log(data);}).catch((e)=>{console.log(e);});
                }).catch((e)=>{console.log(e);});
              }
            }
        }
    }
</script>

<style scoped>
</style>

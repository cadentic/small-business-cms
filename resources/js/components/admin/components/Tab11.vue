<template>
  <v-app>
      <v-content>
          <div v-if="loading">

          </div>
          <v-container v-else>
              <h1>Invoices</h1>
              <div v-if="dialog" class="text-center">
                  <v-dialog v-model="dialog" width="500">
                      <v-card>
                          <v-card-title>
                              Invoice Detail
                          </v-card-title>
                          <v-card-text>
                              <div>
                                    Invoice No : {{tmpdata['invoice_detail']['invoice_no']}}
                                    <br>
                                    Description : {{tmpdata['invoice_detail']['description']}}
                                    <br>
                                    Billing To : {{tmpdata['invoice_detail']['billing_detail']['customer']}}
                                    <br>
                                    Issued Date : {{tmpdata['invoice_detail']['billing_detail']['issued_date']}}
                                    <br>
                                    Expiry Date : {{tmpdata['invoice_detail']['billing_detail']['expiry_date']}}
                                    <br>
                                    <v-divider></v-divider>
                                    <br>
                                    Billing Address : {{tmpdata['invoice_detail']['billing_detail']['billing_address']}}
                                    <br>
                                    Shipping Address : {{tmpdata['invoice_detail']['billing_detail']['shipping_address']}}
                                    <br>
                                    Place of Supply : {{tmpdata['invoice_detail']['billing_detail']['place_of_supply']}}
                                    <br>
                                    <v-divider></v-divider>
                                    <br>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                            <th class="text-left">DESCRIPTION</th>
                                            <th class="text-left">RATE/ITEM</th>
                                            <th class="text-left">QUANTITY</th>
                                            <th class="text-left">TOTAL</th>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(a,index) in tmpdata['items']" :key="index">
                                                <td>{{a.description}}</td>
                                                <td>{{a.rate}}</td>
                                                <td>{{a.quantity}}</td>
                                                <td>{{a.total}}</td>
                                            </tr>
                                            </tbody>
                                        </template>
                                        </v-simple-table>
                                        <p>Total Amount : {{tmpdata['total_amount']}}</p>
                                        <br>
                                        <p>Customer Notes : {{tmpdata['invoice_detail']['customer_notes']}}</p>
                                        <p>Terms and Conditions : {{tmpdata['invoice_detail']['terms_and_conditions']}} </p>

                              </div>

                          </v-card-text>
                          <v-card-actions >
                              <div class="text-right">
                                <v-btn @click="dialog = !dialog" outlined color="primary">Close</v-btn>
                              </div>
                          </v-card-actions>
                      </v-card>
                  </v-dialog>
              </div>
              <div v-for="(i,index) in invoices" :key="index">
                <v-row>
                    <v-col cols="12" sm="4">
                        <p>
                            Invoice No : {{i['invoice_detail']['invoice_no']}}
                        </p>
                        <p>
                            Customer : {{i['invoice_detail']['billing_detail']['customer']}}
                        </p>
                        <p>
                            Issued Date : {{i['invoice_detail']['billing_detail']['issued_date']}}
                        </p>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-btn color="primary" outlined rounded @click="show_detail(i)">View Details</v-btn>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
              </div>
          </v-container>
      </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
    
export default {
    data : function(){
        return{
            invoices : [],
            dialog : false,
            tmpdata : {},
            loading : true,
        }
    },
    mounted(){
        axios.get('/invoices/all')
        .then(res=>{
            this.invoices = res.data.reverse()
            this.loading = false
        })
        .catch(err=>{
            console.log("Error")
            this.loading = false
        })
    },
    methods : {
        go(to){
            window.location.href = to
        },
        show_detail(i){
            this.tmpdata = i
            this.dialog = !this.dialog
        }
    }
}
</script>

<style>

</style>
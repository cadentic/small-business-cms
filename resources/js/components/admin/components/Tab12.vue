<template>
  <v-app>
      <v-content>
          <div v-if="loading" class="text-center mt-10">
              <h1>Loading</h1>
              <v-progress-circular indeterminate color="primary" :size="70" :width="7"></v-progress-circular>
          </div>
          <v-container v-else>
                <h2>Manage products</h2>
                <v-tabs v-model="tab" background-color="light-blue" dark centered>
                    <v-tabs-slider color="blue"></v-tabs-slider>
                    <v-tab>
                        My products
                    </v-tab>
                    <v-tab>
                        Add product
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <h3>All products</h3>
                        <div>
                            <div>
                                <v-list>
                                    <v-list-item-group>
                                        <v-list-item v-for="(e,index) in products" :key="index">
                                            <v-list-item-content>
                                                <v-list-item-title>{{e}}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </div>
                        </div>
                    </v-tab-item>
                    <v-tab-item>
                        <h3>Add new product</h3>
                        <v-alert type="success" v-if="success" outlined>Item added successfully</v-alert>
                        <v-form>
                            <v-text-field label="Product Name" v-model="name">
                            </v-text-field>
                            <v-btn @click="add" rounded color="primary">Add <v-icon>mdi-plus</v-icon></v-btn>
                        </v-form>
                    </v-tab-item>
                </v-tabs-items>
          </v-container>
      </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
    name: "enquiry",
    data : function(){
        return {
            tab : null,
            headers : [{text:"Product Name"}],
            products : [],
            loading : true,
            name : '',
            success : false,
        }
    },
    methods:{
        add(){
            axios.post('/product/add',{'name':this.name})
            .then(res=>{
                this.success = true
                this.name = ''
            })
            .catch(err=>{
                // console.log(error)
            })
        },
        go(to){
            window.location.href  = to
        },
    },
    mounted(){
        axios.get('/products/all')
        .then(res=>{
            this.products = res.data
            this.loading = false
        })
        .catch(err=>{
            // console.log(err)
        })
    }
    
}
</script>

<style>

</style>
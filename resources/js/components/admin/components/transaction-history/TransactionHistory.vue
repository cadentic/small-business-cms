<template>
    <v-card flat>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <v-data-table
                                :loading="data_loading"
                                :headers="headers"
                                :items="items"
                                :mobile-breakpoint="0"
                                loading-text="Please wait ....."
                                :options.sync="pagination"
                                :items-per-page="5"
                                @update:options="getData"
                                :server-items-length="totalRecords"
                                :footer-props="{
                                  showFirstLastPage: true,
                                  'items-per-page-options': [5,10,15,20],
                               }"
                        >
                            <template slot="item" slot-scope="props">
                                <tr>
                                    <td class="caption">
                                        {{ props.item.date}}
                                    </td>
                                    <td class="caption">
                                        {{ props.item.type}} to <span class="colored_link">{{props.item.user}}</span>
                                        for project (<span class="colored_link">{{props.item.project}}</span>)
                                    </td>
                                    <td class="caption">
                                        <v-icon v-if="props.item.invoice_url">mdi-file-pdf</v-icon>
                                    </td>
                                    <td class="caption">
                                        {{ props.item.currency}}
                                    </td>
                                    <td class="caption">
                                        {{ props.item.amount}}
                                    </td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
    import axios from "axios";
    import fields from "./fields";

    export default {
        data: () => ({
            headers: fields,
            totalRecords: 0,
            data_loading: false,
            items: [],
            pagination: {}
        }),
        methods: {
            getData() {
                this.data_loading = true;
                this.items = [];
                axios.get("/transaction-history").then((res) => {
                    this.items = res.data;
                    this.totalRecords = this.items.length;
                    this.data_loading = false;
                }, (err) => {

                    this.data_loading = false;
                })
            }
        }
    }
</script>
<style scoped>
    .colored_link {
        color:#2982BF;
        font-weight: bolder;
    }
</style>
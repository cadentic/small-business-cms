<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" lg="9">
                <v-row>
                    <v-col cols="12" lg="4">
                        <v-row class="py-1">
                            <div class="col-md-8 py-1">
                                <span class="sales_title"> Sales Dashboard </span>
                            </div>
                            <div class="col-md-4 py-1">
                                <span><small> Today </small> <v-icon>mdi-menu-swap</v-icon></span>
                            </div>
                        </v-row>
                        <v-card
                                v-for="stats in statsCards"
                                :key="stats.title"
                                max-width="344"
                                class="mx-auto mt-2"
                        >
                            <v-card-actions :class="`${stats.type}--text py-1`">
                                <div class="ml-2 p1-1 mt-2">
                                    {{ stats.title }}
                                </div>
                                <v-spacer/>
                                <v-icon :class="`${stats.type}--text`">
                                    {{ stats.icon }}
                                </v-icon>
                            </v-card-actions>
                            <v-card-title class="py-1">
                                {{ stats.value }}
                            </v-card-title>
                        </v-card>
                    </v-col>

                    <v-col
                            cols="12"
                            lg="8"
                            style="max-height: 250px;"
                    >
                        <v-row>
                            <div class="col-12">
                                Graph
                            </div>
                        </v-row>

                        <div class="">
                            <div v-if="!isChartShow" class="text-center d-flex justify-space-around align-center" style="height: 350px">
                                <v-progress-circular
                                           v-for="variant in variants"
                                           :color="variant"
                                           :key="variant"
                                           indeterminate
                                ></v-progress-circular>
                            </div>
                            <v-card  v-if="isChartShow"
                                    class="mx-auto"
                                    max-height="350"
                         ria>
                                <v-card-actions class="px-0 py-0">
                                    <v-tabs>
                                        <v-tab>Sales</v-tab>
                                        <v-tab>Overviews</v-tab>
                                        <v-spacer/>
                                        <div class="d-flex align-center black--text">
                                            <span class="text--secondary">Show Period: &nbsp;</span>
                                            <span> Last 2 weeks</span>
                                        </div>
                                        <v-icon>mdi-menu-swap</v-icon>
                                    </v-tabs>
                                </v-card-actions>

                                <v-divider inset/>

                                <v-card-text class="pt-0">
                                    <v-card-actions class="p1-2 pt-2 pb-1">
                                        <div>
                                            Total Sales
                                        </div>
                                    </v-card-actions>
                                    <v-card-title class="pl-2 py-0">
                                        <span class=" black--text">{{activityChart.data.total}} &nbsp;</span>
                                        <small>
                                            <small>Units</small>
                                        </small>
                                    </v-card-title>
                                    <chartist
                                            ratio="ct-major-second"
                                            :data="activityChart.data"
                                            :options="activityChart.options"
                                            type="Bar"

                                    />
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">Top Selling Today</v-col>
                        <v-col cols="12" class="d-flex justify-space-around">
                            <v-progress-circular
                                    value="100"
                                    color="#68B3C8"
                                    :size="125"
                                    width="10"
                            >341
                            </v-progress-circular>
                            <v-progress-circular
                                    value="100"
                                    color="#68B3C8"
                                    :size="125"
                                    width="10"
                            >301
                            </v-progress-circular>

                            <v-progress-circular
                                    value="75"
                                    color="#68B3C8"
                                    :size="125"
                                    rotate="180"
                                    width="10"
                            >219
                            </v-progress-circular>

                            <v-progress-circular
                                    value="50"
                                    color="#68B3C8"
                                    :size="125"
                                    rotate="90"
                                    width="10"
                            >190
                            </v-progress-circular>
                        </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" lg="6">
                        <v-card>
                            <v-card-title><small>New Order</small></v-card-title>
                            <v-divider></v-divider>
                                <v-list dense>
                                    <v-list-item
                                            v-for="(user, i) in usersData"
                                            :key="i"
                                    >
                                        <v-list-item-avatar width="100"  class="py-0 my-0">
                                            <strong> {{ user.name }} </strong>
                                        </v-list-item-avatar>
                                        <v-list-item-content class="py-0 my-0">
                                            <v-col cols="12">
                                                <v-row>
                                                    <div class="userContent"> <span> {{ user.content}} </span> </div>
                                                    <v-spacer></v-spacer>
                                                    <div class="userVal"> <span> {{ user.value }} </span> </div>
                                                </v-row>
                                            </v-col>
                                        </v-list-item-content>

                                        <v-list-item-action class="py-0 my-0">
                                            <div :class="`${user.class} userComplete`"></div>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <div>Team Members</div>
                        <v-row>
                            <v-col cols="12" lg="4" v-for="(member, i) in agentData" :key="i">
                                <v-card>
                                    <v-card-title class="py-0 justify-end pr-2">
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                    </v-card-title>
                                    <v-card-text class="pt-2 pb-0 text-center">
                                        <v-avatar color="grey" size="36"></v-avatar>
                                        <br>
                                        <small>{{member.job}}</small>
                                    </v-card-text>
                                    <v-card-actions class="justify-center">
                                        <strong><small> {{ member.name }} </small></strong>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>

            <v-col
                    cols="12"
                    lg="3"
            >
                <v-row>
                    <v-col cols="12">
                        <!--<v-card color="#fafafa">-->
                            <!--<v-card-text>-->
                                <div class="quick_link">
                                    <v-col cols="12 px-0">
                                        <div class="content-title"> Quick Link </div>
                                    </v-col>
                                    <v-btn color="#486dc5" class="quick-link-btn">
                                        <v-icon>mdi-plus</v-icon>
                                        <v-spacer></v-spacer>
                                        <span>Creat New Product</span>
                                        <v-spacer></v-spacer>
                                    </v-btn>
                                    <v-btn color="#00aaf2" class="quick-link-btn">
                                        <v-icon>mdi-file-document-edit-outline</v-icon>
                                        <v-spacer></v-spacer>
                                        <span>Customer Comments</span>
                                        <v-spacer></v-spacer>
                                    </v-btn>
                                    <v-btn color="#0082c0" class="quick-link-btn">
                                        <v-icon>mdi-tune</v-icon>
                                        <v-spacer></v-spacer>
                                        <span>Store Settings </span>
                                        <v-spacer></v-spacer>
                                    </v-btn>
                                </div>

                                <div class="agent_support mt-2">
                                    <p class="content-title"> Agent Support </p>
                                    <v-text-field
                                            flat
                                            solo
                                            rounded
                                            hide-details
                                            label="Search your agent"
                                            class="hidden-sm-and-down agent-search-input"
                                    ></v-text-field>
                                    <div class="agent_body">
                                        <v-list-item
                                                v-for="(agent, i) in agentData"
                                                :key="i"
                                        >
                                            <v-list-item-avatar>
                                                <div class="agent_img">
                                                    <div><a :class="`${agent.type} marker`">&nbsp</a></div>
                                                </div>
                                            </v-list-item-avatar>

                                            <v-list-item-content>
                                                <v-list-item-subtitle v-text="agent.job"></v-list-item-subtitle>
                                                <v-list-item-title v-text="agent.name"></v-list-item-title>
                                            </v-list-item-content>

                                            <v-list-item-action>{{ agent.value }}</v-list-item-action>
                                        </v-list-item>
                                    </div>
                                </div>

                                <div class="download_app mt-4">
                            <div class="mb-2"> Download Our App </div>
                            <v-col cols="8">
                                <v-btn class="d-flex align-center" block>
                                    <v-icon>mdi-apple</v-icon>
                                    <v-spacer></v-spacer>
                                    <div>
                                        <small class="float-left"> Download on the </small><br>
                                        <span> Apple Store </span>
                                    </div>
                                </v-btn>
                            </v-col>
                            <v-col cols="8">
                                <v-btn class="d-flex align-center">
                                    <v-icon class="mr-2">mdi-google-plus</v-icon>
                                    <v-spacer></v-spacer>
                                    <div>
                                        <small class="float-left"> Get it on </small><br>
                                        <span> Google Play </span>
                                    </div>
                                </v-btn>
                            </v-col>
                        </div>
                            <!--</v-card-text>-->
                        <!--</v-card>-->
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                isChartShow: false,
                variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],
                statsCards: [
                    {
                        type: 'success',
                        icon: 'mdi-chevron-up-circle-outline',
                        title: 'Product Sold',
                        value: '7,939',
                        percent: '19',
                    },
                    {
                        type: 'error',
                        icon: 'mdi-chevron-down-circle-outline',
                        title: 'New Customers',
                        value: '3,868',
                        percent: '3',
                    },
                    {
                        type: 'success',
                        icon: 'mdi-chevron-up-circle-outline',
                        title: 'Gross Profit',
                        value: '$37,939',
                        percent: '19',
                    },
                    {
                        type: 'error',
                        icon: 'mdi-chevron-down-circle-outline',
                        title: 'New Profit',
                        value: '$30.129',
                        percent: '1.1',
                    },
                ],
                activityChart: {
                    data: {
                        total: '7,939',
                        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S'],
                        series: [
                            [542, 543, 520, 680, 653, 753, 326, 542, 543, 520, 680, 653, 753, 326],
                        ],
                    },
                    options: {
                        lineSmooth: true,
                        seriesBarDistance: 5,
                        axisX: {
                            showGrid: false,
                        },
                        height: '240px',
                    },
                },
                agentData: [
                    {
                        type: "success",
                        job: "Leader",
                        name: "Reonaldo Bullins",
                        value: ""
                    },
                    {
                        type: "error",
                        job: "Accountant",
                        name: "Genie Brawner",
                        value: "1m"
                    },
                    {
                        type: "success",
                        job: "Designer",
                        name: "Chris Sandavol",
                        value: ""
                    },
                    {
                        type: "success",
                        job: "Seller",
                        name: "Leone Royer",
                        value: ""
                    },
                    {
                        type: "warning",
                        job: "Advisor",
                        name: "Dominic Lagman",
                        value: ""
                    },
                    {
                        type: "error",
                        job: "HR Manager",
                        name: "Zina Triano",
                        value: "10m"
                    }
                ],
                usersData: [
                    {
                        name: "John Mayers",
                        content: "UI/Ux Admin Dashboard",
                        value: "$1,301",
                        class: "success"
                    },
                    {
                        name: "Kelly Brown",
                        content: "UI/Ux Admin Dashboard",
                        value: "$1,941",
                        class: "error"
                    },
                    {
                        name: "John Mayers",
                        content: "UI/Ux Admin Dashboard",
                        value: "$1,301",
                        class: "success"
                    },
                    {
                        name: "John Mayers",
                        content: "UI/Ux Admin Dashboard",
                        value: "$1,301",
                        class: "success"
                    },
                    {
                        name: "Jery Lingard",
                        content: "UI/Ux Admin Dashboard",
                        value: "$6,301",
                        class: "warning"
                    },
                    {
                        name: "Jery Lingard",
                        content: "UI/Ux Admin Dashboard",
                        value: "$6,301",
                        class: "warning"
                    },
                    {
                        name: "John Mayers",
                        content: "UI/Ux Admin Dashboard",
                        value: "$1,301",
                        class: "success"
                    }
                ],
            }
        },
        mounted() {
            setTimeout(function () {
                this.isChartShow = true
            }.bind(this), 3000)
        },
        methods: {
        },
    }
</script>

<style lang="scss">
    .ct-bar {
        stroke: #68B3C8 !important;
        fill: none;
        stroke-width: 15px;
        stroke-linecap: round;
    }
    .quick-link-btn {
        color: #ffffff !important;
        text-transform: none;
        width: 100%;
        margin-bottom: 10px;
    }
    .agent-search-input {
        .v-input__slot {
            min-height: 30px;
        }
    }
    .agent_img div {
        width: 30px;
        height: 30px;
        background: gray;
        border-radius: 30px;
        margin-top: 10px;
        .marker {
            width: 8px;
            height: 8px !important;
            border-radius: 8px;
            padding-left: 8px;
            font-size: 8px;
            position: relative;
            top: 14px;
            left: 14px;
        }
    }

    .userComplete {
        width: 14px;
        height: 14px;
        border-radius: 50%;
    }
</style>

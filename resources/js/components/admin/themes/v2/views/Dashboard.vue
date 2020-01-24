<template>
    <v-container fluid>
        <v-col cols="12">
            <v-row justify="space-between" align="center">
                <div><h3>DASHBOARD</h3></div>
                <v-breadcrumbs :items="items" divider=">" class="py-0"></v-breadcrumbs>
            </v-row>
        </v-col>
        <v-row>
            <template v-for="stats in lstatsCards">
                <v-col cols="6" lg="2">
                    <v-card
                            max-width="344"
                            class="mx-auto mt-2"
                    >
                        <v-card-text class="py-0 px-0">
                            <v-list two-line class="py-0 px-0">
                                <v-list-item>
                                    <v-list-item-avatar>
                                        <v-icon
                                                :color="stats.type"
                                                v-text="stats.icon"
                                                size="40"
                                        ></v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-subtitle>
                                            <small>{{stats.title}}</small>
                                        </v-list-item-subtitle>
                                        <v-list-item-title><h2>{{stats.value}}</h2></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-col>
            </template>
        </v-row>
        <v-row>
            <v-col cols="12" lg="8" style="max-height: 250px;">
                    <div v-if="!isChartShow" class="text-center d-flex justify-space-around align-center" style="height: 100%;" >
                        <v-progress-circular
                                v-for="variant in variants"
                                :color="variant"
                                :key="variant"
                                indeterminate
                        ></v-progress-circular>
                    </div>
                    <v-card v-if="isChartShow"
                            class="mx-auto"
                            max-height="250"
                    >
                        <v-card-text class="px-5 py-5">
                            <h3>TODAY'S TRENDS</h3>
                            <h4 class="font-weight-light pb-5">10th Mar 2019. 04:20 PM</h4>
                            <chartist
                                    ratio="ct-major-second"
                                    :data="activityChart.data"
                                    :options="activityChart.options"
                                    type="Line"
                                    style="height: 90px"
                            />
                        </v-card-text>
                        <v-card-actions class="justify-end pb-4">
                            <v-avatar color="#d70206" size="15"></v-avatar>
                            Today
                            <v-avatar color="#f05b4f" size="15" class="ml-2 mr-1"></v-avatar>
                            Yesterday
                        </v-card-actions>
                    </v-card>
            </v-col>

            <v-col
                    cols="12"
                    lg="4"
            >
                <v-card>
                    <v-list class="py-0">
                        <v-list-item v-for="(stats, i) in netStats" :key="i">
                            <v-list-item-content class="">
                                <v-list-item-title v-text="stats.text"></v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action :style="`color: ${stats.color}`">{{ stats.value }}</v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" lg="4">
                <v-card>
                    <v-card-text class="py-5 px-5">
                        <v-row justify="space-between" no-gutters>
                            <div>
                                <h3>UNSOLVED TICKET</h3>
                                <h4 class="font-weight-light">
                                    <small>Across help desk this month</small>
                                </h4>
                            </div>
                            <v-btn icon>
                                <v-icon>mdi-dots-horizontal</v-icon>
                            </v-btn>
                        </v-row>

                        <v-list dense>
                            <v-list-item
                                    v-for="(data, i) in unsolvedData"
                                    :key="i"
                                    class="py-0 my-0 px-0 mx-0"
                            >
                                <v-list-item-content class="py-0 my-0 px-0 mx-0">
                                    <v-row no-gutters>
                                        <div class="userContent"><span> {{ data.name}} </span></div>
                                        <v-spacer></v-spacer>
                                        <div class="userVal"><span> {{ data.val }} </span></div>
                                    </v-row>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="4">
                <v-card>
                    <v-card-text class="py-5 px-5">
                        <v-row justify="space-between" no-gutters>
                            <div>
                                <h3>CUSTOMER SATISFATION</h3>
                                <h4 class="font-weight-light">
                                    <small>Across help desk this month</small>
                                </h4>
                            </div>
                            <v-btn icon>
                                <v-icon>mdi-dots-horizontal</v-icon>
                            </v-btn>
                        </v-row>
                        <div class="my-3">
                            <h5 class="font-weight-regular py-2">Responser received</h5>
                            <h2>390</h2>
                        </div>

                        <v-list dense>
                            <v-list-item v-for="(data, i) in progressiveData" class="py-0 my-0 px-0 mx-0" :key="i">
                                <v-list-item-content class="py-0 my-0 px-0 mx-0">
                                    <v-row no-gutters>
                                        <div><span>  Positive</span></div>
                                        <v-spacer></v-spacer>
                                        <v-rating
                                                v-model="data.select"
                                                dense
                                                length="10"
                                                size="20"
                                                empty-icon="mdi-account-outline"
                                                full-icon="mdi-account"
                                                background-color="grey"
                                                :color="data.color"
                                                readonly
                                        ></v-rating>
                                        <v-spacer></v-spacer>
                                        <div>{{data.value}}</div>
                                    </v-row>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="4">
                <v-card>
                    <v-card-text class="py-5 px-5">
                        <v-row justify="space-between" no-gutters>
                            <h3>TO-DO(4)</h3>
                            <v-spacer></v-spacer>
                            <v-btn><span class="blue--text">New</span></v-btn>
                        </v-row>
                        <v-list dense tree-line>
                            <v-list-item v-for="(data, i) in todoData" class="py-0 my-0 px-0 mx-0" :key="i">
                                <v-list-item-avatar class="mr-0">
                                    <v-checkbox input-value="true" value></v-checkbox>
                                </v-list-item-avatar>
                                <v-list-item-content class="py-1 my-0 px-0 mx-0">
                                    <v-list-item-title v-html="data.title"></v-list-item-title>
                                    <v-list-item-subtitle>
                                        <small>{{data.body}}</small>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle class="pb-1">
                                        <v-btn rounded small
                                               max-height="20"
                                               :color="data.type">
                                            <span style="text-transform: none"><small>{{data.button}}</small></span>
                                        </v-btn>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                lstatsCards: [
                    {
                        type: "success",
                        icon: "mdi-file-document-outline",
                        title: "Unresolved",
                        value: "45"
                    },
                    {
                        type: "success",
                        icon: "mdi-timer-sand",
                        title: "Overdue",
                        value: "3"
                    },
                    {
                        type: "success",
                        icon: "mdi-timer-sand",
                        title: "Due today",
                        value: "79"
                    },
                    {
                        type: "success",
                        icon: "mdi-file-document-outline",
                        title: "Open",
                        value: "39"
                    },
                    {
                        type: "warning",
                        icon: "mdi-cursor-pointer",
                        title: "On hold",
                        value: "4"
                    },
                    {
                        type: "success",
                        icon: "mdi-cursor-pointer",
                        title: "Unassigned",
                        value: "6"
                    }
                ],
                items: [
                    {
                        text: 'Home',
                        disabled: true,
                        href: 'breadcrumbs_dashboard',
                    },
                    {
                        text: 'Dashboard',
                        disabled: false,
                        href: '/',
                    },
                ],
                activityChart: {
                    data: {
                        labels: [
                            "2",
                            "4",
                            "6",
                            "8",
                            "10",
                            "12",
                            "14",
                            "16",
                            "18",
                            "20",
                            "22",
                            "24"
                        ],
                        series: [
                            [242, 343, 520, 680, 653, 753, 826, 834, 968, 810, 956, 995],
                            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
                        ]
                    },
                    options: {
                        seriesBarDistance: 5,
                        axisX: {
                            showGrid: false
                        },
                        height: "100px"
                    }
                },
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
                netStats: [
                    {
                        text: "Received",
                        value: "49",
                        color: "#7ed321"
                    },
                    {
                        text: "Resolved",
                        value: "39",
                        color: "blue"
                    },
                    {
                        text: "Average Response Time",
                        value: "15m",
                        color: "#42e0fc"
                    },
                    {
                        text: "Average First Response",
                        value: "8m 39s",
                        color: "purple"
                    },
                    {
                        text: "Resolution with SLA",
                        value: "98.7%",
                        color: "#00e49a"
                    },
                ],
                unsolvedData: [
                    {
                        name: "Group",
                        val: "open"
                    },
                    {
                        name: "Customer Support",
                        val: "39"
                    },
                    {
                        name: "Loyalty Programs",
                        val: "8"
                    },
                    {
                        name: "Vendor Management",
                        val: "27"
                    },
                    {
                        name: "Billing",
                        val: "3"
                    }
                ],
                progressiveData: [
                    {
                        value: '60%',
                        select: 5,
                        color: "#42e0fc"
                    },
                    {
                        value: '30%',
                        select: 3,
                        color: "#00e49a"
                    },
                    {
                        value: '20%',
                        select: 2,
                        color: "purple"
                    },
                ],

                todoData: [
                    {
                        type: 'warning',
                        active: '',
                        title: 'Upgrade CRM systems',
                        body: 'Contact IT develpment',
                        button: 'Due in System'
                    },
                    {
                        type: 'success',
                        active: 'active',
                        title: 'Upgrade CRM systems',
                        body: 'Contact IT develpment',
                        button: 'Complete'
                    },
                    {
                        type: 'success',
                        active: '',
                        title: 'Upgrade CRM systems',
                        body: 'Contact IT develpment',
                        button: 'Due in 3 weeks'
                    }
                ]
            }
        },
        mounted() {
            setTimeout(function () {
                this.isChartShow = true
            }.bind(this), 3000)
        },
        methods: {},
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

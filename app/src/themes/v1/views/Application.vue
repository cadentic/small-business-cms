<template>
    <v-col cols="12">
        <v-row>
            <template
                    v-for="stats in statsCards"
            >
                <v-col
                        cols="12"
                        lg="6"
                >
                    <v-card
                            class="mx-auto mt-2"
                    >
                        <v-card-actions :class="`${stats.type}--text py-4 justify-center`">
                            <v-icon
                                    :class="`${stats.type}--text`"
                                    size="40"
                            >
                                {{ stats.icon }}
                            </v-icon>
                        </v-card-actions>
                        <v-card-text class="text-right mb-5">
                            <div class="ml-2 p1-1 mt-2">
                                <h3 class="py-3 text--lighten-1">{{ stats.title }}</h3>
                                <h1>{{ stats.value }}</h1>
                            </div>
                        </v-card-text>
                        <v-divider/>
                        <v-card-title class="pt-3">
                            <small>
                                <v-icon>{{ stats.footerIcon }}</v-icon> &nbsp;
                                <small>{{ stats.footerText }}</small>
                            </small>
                        </v-card-title>
                    </v-card>
                </v-col>
            </template>
        </v-row>

        <v-card
                class="mx-auto"
                max-height="400"
        >
            <div v-if="!isChartShow" class="text-center d-flex justify-space-around align-center" style="height: 350px">
                <v-progress-circular
                        v-for="variant in variants"
                        :color="variant"
                        :key="variant"
                        indeterminate
                ></v-progress-circular>
            </div>
            <div v-else>
                <v-card-actions class="pb-0">
                    <v-tabs>
                        <v-tab>Users bevavior</v-tab>
                        <v-tab disabled>24Hours performance</v-tab>
                        <v-spacer/>
                        <div class="d-flex align-center black--text">
                            <span class="text--secondary">Show Period: &nbsp;</span>
                        </div>
                        <v-icon>mdi-menu-swap</v-icon>
                    </v-tabs>
                </v-card-actions>

                <v-divider inset/>

                <v-card-text class="pt-0 mb-3">
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
                            :data="usersChart.data"
                            :options="usersChart.options"
                            type="Line"
                            style="height: 240px;"

                    />
                </v-card-text>
            </div>
        </v-card>

        <v-row>
            <v-col cols="12" lg="6">
                <v-card
                        class="mx-auto"
                        max-height="400"
                >
                    <v-card-actions class="pb-0">
                        <v-tabs>
                            <v-tab>Email Statistics</v-tab>
                            <v-tab disabled>Last campaign performance</v-tab>
                            <v-spacer/>
                            <div class="d-flex align-center black--text">
                                <span class="text--secondary">Show Period: &nbsp;</span>
                            </div>
                            <v-icon>mdi-menu-swap</v-icon>
                        </v-tabs>
                    </v-card-actions>

                    <v-divider inset/>

                    <v-card-text class="pt-0 mb-3">
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
                        <v-row justify="center">
                            <v-col cols="4" lg="4">
                                <chartist
                                        ratio="ct-major-second"
                                        :data="preferencesChart.data"
                                        type="Pie"

                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>


            <v-col cols="12" lg="6">
                <v-card
                        class="mx-auto"
                        max-height="400"
                >
                    <div v-if="!isChartShow" class="text-center d-flex justify-space-around align-center"
                         style="height: 350px">
                        <v-progress-circular
                                v-for="variant in variants"
                                :color="variant"
                                :key="variant"
                                indeterminate
                        ></v-progress-circular>
                    </div>
                    <div v-else>
                        <v-card-actions class="pb-0">
                            <v-tabs>
                                <v-tab>2015 Sales</v-tab>
                                <v-tab disabled>All products including Taxes</v-tab>
                                <v-spacer/>
                                <div class="d-flex align-center black--text">
                                    <span class="text--secondary">Show Period: &nbsp;</span>
                                </div>
                                <v-icon>mdi-menu-swap</v-icon>
                            </v-tabs>
                        </v-card-actions>
                        <v-divider inset/>

                        <v-card-text class="pt-0 mb-3">
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

                            <div style="max-height: 250px;">
                                <chartist
                                        ratio="ct-major-second"
                                        :data="activityChart.data"
                                        :option="activityChart.option"
                                        type="Line"
                                        style="height: 240px;"

                                />
                            </div>
                        </v-card-text>

                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>
<script>
    export default {
        data() {
            return {
                isChartShow: false,
                variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],
                statsCards: [
                    {
                        type: 'warning',
                        icon: 'mdi-server',
                        title: 'Capacity',
                        value: '105GB',
                        footerText: 'Updated now',
                        footerIcon: 'mdi-reload',
                    },
                    {
                        type: 'success',
                        icon: 'mdi-wallet-outline',
                        title: 'Revenue',
                        value: '$1,345',
                        footerText: 'Last day',
                        footerIcon: 'mdi-calendar-outline',
                    },
                    {
                        type: 'error',
                        icon: 'mdi-pulse',
                        title: 'Errors',
                        value: '23',
                        footerText: 'In the last hour',
                        footerIcon: 'mdi-timer',
                    },
                    {
                        type: 'info',
                        icon: 'mdi-twitter',
                        title: 'Followers',
                        value: '+45',
                        footerText: 'Updated now',
                        footerIcon: 'mdi-reload',
                    },
                ],
                usersChart: {
                    data: {
                        labels: [
                            '9:00AM',
                            '12:00AM',
                            '3:00PM',
                            '6:00PM',
                            '9:00PM',
                            '12:00PM',
                            '3:00AM',
                            '6:00AM',
                        ],
                        series: [
                            [287, 385, 490, 562, 594, 626, 698, 895, 952],
                            [67, 152, 193, 240, 387, 435, 535, 642, 744],
                            [23, 113, 67, 108, 190, 239, 307, 410, 410],
                        ],
                    },
                    options: {
                        low: 0,
                        high: 1000,
                        showArea: true,
                        height: '245px',
                        axisX: {
                            showGrid: false,
                        },
                        lineSmooth: true,
                        showLine: true,
                        showPoint: false,
                    },
                },
                activityChart: {
                    data: {
                        labels: [
                            'Jan',
                            'Feb',
                            'Mar',
                            'Apr',
                            'Mai',
                            'Jun',
                            'Jul',
                            'Aug',
                            'Sep',
                            'Oct',
                            'Nov',
                            'Dec',
                        ],
                        series: [
                            [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
                            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795],
                        ],
                    },
                    options: {
                        seriesBarDistance: 10,
                        axisX: {
                            showGrid: false,
                        },
                        height: '245px',
                    },
                },
                preferencesChart: {
                    data: {
                        labels: ['62%', '32%', '6%'],
                        series: [62, 32, 6],
                    },
                    options: {},
                },
            }
        },

        mounted() {
            setTimeout(function () {
                this.isChartShow = true
            }.bind(this), 3000)
        },
    }
</script>
<style>
</style>

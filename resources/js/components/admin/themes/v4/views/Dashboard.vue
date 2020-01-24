<template>
    <v-container id="dashboard-page" grid-list-xl class="px-0 py-2">
        <v-breadcrumbs :items="navItems" divider=" / " large class="py-0 px-0"></v-breadcrumbs>
        <v-layout wrap row mt-2>
            <v-flex md12 sm12 class="pb-0 mt-2 mb-4">
                <v-layout mx-0>
                    <div class="myproject">My Projects</div>
                    <v-spacer></v-spacer>
                    <v-btn rounded dark color="purple" class="add-btn mx-0">
                        <v-icon dark>mdi-plus-circle-outline</v-icon> &nbsp;
                        New Project
                    </v-btn>
                </v-layout>
                <v-layout align-center justify-space-between mx-0>
                    <div>Status &nbsp;</div>
                    <div class="status"></div>
                    <div style="width: 100px">
                        <span>In Progress</span>
                        <!--<v-select class="in-progrss" flat filled label="In Progress"></v-select>-->
                    </div>
                    <v-spacer></v-spacer>
                    <v-text-field
                            class="purple-input search-project"
                            label="Search for project..."
                            solo
                            hide-details
                            append-icon="search"
                    ></v-text-field>
                    <v-spacer></v-spacer>
                    <div>Owner: &nbsp; &nbsp; &nbsp;</div>
                    <div class="mark"></div> &nbsp; &nbsp;
                    <div>Burton Veitch</div>
                </v-layout>
            </v-flex>
            <v-flex md12 sm12 lg4>
                <v-card>
                    <v-card-text class="py-4 px-4">
                        <a class="link-title">EVANTO MARKET</a>

                        <div class="font-style font-color mt-3">
                            <span>Introducing The Templet</span> <br>
                            <span>About Cryptocurrency App</span>
                        </div>
                        <v-layout justify-space-around mt-4>
                            <v-btn color="green" class="status-btn">In Progress</v-btn>
                            <v-btn color="green" outlined class="more-btn">More</v-btn>
                        </v-layout>
                        <v-layout mt-5 pt-3>
                            <v-flex class="text-sm-center">
                                <div>
                                    <div class="font-style font-color">39</div>
                                    Tasks
                                </div>
                            </v-flex>
                            <v-divider vertical></v-divider>
                            <v-flex class="text-sm-center">
                                <div>
                                    <div class="font-style font-color">18</div>
                                    In Progress
                                </div>
                            </v-flex>
                            <v-divider vertical></v-divider>
                            <v-flex class="text-sm-center">
                                <div>
                                    <div class="font-style font-color">9</div>
                                    Done
                                </div>
                            </v-flex>
                        </v-layout>

                        <v-flex class="mt-2">
                            <v-layout justify-space-between mt-3>
                                <div>
                                    <div class="subtitle font">Deadline</div>
                                    <div class="font-color">30 Dec 2018</div>
                                </div>
                                <div>
                                    <div class="subtitle">Owner</div>
                                    <div class="font-color">3Burton Veitch</div>
                                </div>
                            </v-layout>
                        </v-flex>

                        <v-layout mt-2>
                            <v-flex>
                                <div class="subtitle">Last Edited</div>
                                <div class="font-color">New Design uploaded by Sam</div>
                            </v-flex>
                        </v-layout>

                        <v-layout mt-3 justify-space-around>
                            <v-flex>
                                <v-layout justify-center>
                                    <div class="mark justify-center"></div>
                                </v-layout>
                                <div class="name text-sm-center mt-1">Whitney Croce</div>
                            </v-flex>
                            <v-flex>
                                <v-layout justify-center>
                                    <div class="mark justify-center"></div>
                                </v-layout>
                                <div class="name text-sm-center mt-1">Reynaldo Bullins</div>
                            </v-flex>
                            <v-flex class="text-sm-center">
                                <v-layout justify-center>
                                    <div class="mark justify-center"></div>
                                </v-layout>
                                <div class="name text-sm-center mt-1">Chris Sandaval</div>
                            </v-flex>
                        </v-layout>

                        <v-layout>
                            <v-flex>
                                <v-icon color="purple" size="30">mdi-plus-circle-outline</v-icon>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex md12 sm12 lg4>
                <v-card>
                    <v-card-text class="py-4 px-4">
                        <a class="link-title">APPLE INC.</a>

                        <div class="font-style font-color mt-3">
                            <span>Sharing Useful Tips</span> <br>
                            <span>To Improve The Quality</span>
                        </div>
                        <v-layout justify-space-around mt-3>
                            <v-btn color="purple" class="status-btn">Done</v-btn>
                            <v-btn color="purple" outlined class="more-btn">More</v-btn>
                        </v-layout>
                        <v-layout mt-3>
                            <v-flex class="text-sm-center">
                                <div>
                                    <v-progress-circular
                                            value="23"
                                            color="purple"
                                            :size="70"
                                    >23
                                    </v-progress-circular>
                                </div>
                            </v-flex>
                            <v-flex class="text-sm-center">
                                <div>
                                    <v-progress-circular
                                            value="39"
                                            color="green"
                                            :size="70"
                                    >39
                                    </v-progress-circular>
                                </div>
                            </v-flex>
                            <v-flex class="text-sm-center">
                                <div>
                                    <v-progress-circular
                                            value="9"
                                            color="blue"
                                            :size="70"
                                    >9
                                    </v-progress-circular>
                                </div>
                            </v-flex>
                        </v-layout>

                        <v-flex>
                            <v-layout justify-space-between mt-3>
                                <div>
                                    <div class="subtitle font">Deadline</div>
                                    <div class="font-color">30 Dec 2018</div>
                                </div>
                                <div>
                                    <div class="subtitle">Owner</div>
                                    <div class="font-color">3Burton Veitch</div>
                                </div>
                            </v-layout>
                        </v-flex>

                        <v-layout mt-2>
                            <v-flex>
                                <div class="subtitle">Last Edited</div>
                                <div class="font-color">New Design uploaded by Sam</div>
                            </v-flex>
                        </v-layout>

                        <v-layout mt-3 justify-space-around>
                            <v-flex>
                                <v-layout justify-center>
                                    <div class="mark justify-center"></div>
                                </v-layout>
                                <div class="name text-sm-center mt-1">Whitney Croce</div>
                            </v-flex>
                            <v-flex>
                                <v-layout justify-center>
                                    <div class="mark justify-center"></div>
                                </v-layout>
                                <div class="name text-sm-center mt-1">Reynaldo Bullins</div>
                            </v-flex>
                            <v-flex class="text-sm-center">
                                <v-layout justify-center>
                                    <div class="mark justify-center"></div>
                                </v-layout>
                                <div class="name text-sm-center mt-1">Chris Sandaval</div>
                            </v-flex>
                        </v-layout>

                        <v-layout>
                            <v-flex>
                                <v-icon color="purple" size="30">mdi-plus-circle-outline</v-icon>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex md12 sm12 lg4>
                <v-card>
                    <v-card-text class="py-4 px-4">
                        <a class="link-title">GOOGLE INC.</a>

                        <div class="font-style font-color mt-3">
                            <span>Signing The Contracts</span><br>
                            <span>To Be The Main Partner</span>
                        </div>
                        <v-layout justify-space-around mt-3>
                            <v-btn color="blue" class="status-btn">To Do</v-btn>
                            <v-btn color="blue" outlined class="more-btn">More</v-btn>
                        </v-layout>

                        <v-flex>
                            <v-layout justify-space-between mt-3>
                                Done
                                <div class="slider">
                                    <v-progress-linear
                                            color="purple"
                                            height="4"
                                            value="25"
                                    ></v-progress-linear>
                                    <span class="ml-3">25</span>
                                </div>
                            </v-layout>
                        </v-flex>
                        <v-flex class="mt-1">
                            <v-layout justify-space-between>
                                In Progress
                                <div  class="slider">
                                    <v-progress-linear
                                            color="green"
                                            height="4"
                                            value="39"
                                    ></v-progress-linear>
                                    <span class="ml-3">39</span>
                                </div>
                            </v-layout>
                        </v-flex>
                        <v-flex class="mt-1">
                            <v-layout justify-space-between>
                                Pending
                                <div class="slider">
                                    <v-progress-linear
                                            color="blue"
                                            height="4"
                                            value="12"
                                    ></v-progress-linear>
                                    <span class="ml-3">12</span>
                                </div>
                            </v-layout>
                        </v-flex>

                        <v-flex>
                            <v-layout justify-space-between mt-3>
                                <div>
                                    <div class="subtitle font">Deadline</div>
                                    <div class="font-color">30 Dec 2018</div>
                                </div>
                                <div>
                                    <div class="subtitle">Owner</div>
                                    <div class="font-color">3Burton Veitch</div>
                                </div>
                            </v-layout>
                        </v-flex>

                        <v-layout mt-2>
                            <v-flex>
                                <div class="subtitle">Last Edited</div>
                                <div class="font-color">New Design uploaded by Sam</div>
                            </v-flex>
                        </v-layout>

                        <v-layout mt-3 justify-space-around>
                            <v-flex>
                                <v-layout justify-center>
                                    <div class="mark justify-center"></div>
                                </v-layout>
                                <div class="name text-sm-center mt-1">Whitney Croce</div>
                            </v-flex>
                            <v-flex>
                                <v-layout justify-center>
                                    <div class="mark justify-center"></div>
                                </v-layout>
                                <div class="name text-sm-center mt-1">Reynaldo Bullins</div>
                            </v-flex>
                            <v-flex class="text-sm-center">
                                <v-layout justify-center>
                                    <div class="mark justify-center"></div>
                                </v-layout>
                                <div class="name text-sm-center mt-1">Chris Sandaval</div>
                            </v-flex>
                        </v-layout>

                        <v-layout>
                            <v-flex>
                                <v-icon color="purple" size="30">mdi-plus-circle-outline</v-icon>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'Dashboard',
        data() {
            return {
                navItems: [
                    {
                        text: 'Dashboard',
                        disabled: true,
                    },
                    {
                        text: 'Management',
                        disabled: true,
                    },
                    {
                        text: 'Projects',
                        disabled: true,
                    }
                ],
                tabs: 0,
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    /*#dashboard-page {*/
    .myproject {
        z-index: 4;
        width: 209.45px;
        height: 54px;
        color: #16135f;
        font-family: Poppins;
        font-size: 36px;
        font-weight: 600;
        line-height: 54px;
    }

    .add-btn {
        width: 175px;
        height: 52px;
        background: #8630dd;
        text-transform: none;
    }

    .status {
        width: 12px;
        height: 12px;
        background-color: #00e49a;
        border-radius: 50%;
        margin-right: 15px;
    }

    .mark {
        width: 30px;
        height: 30px;
        background: #d8d8d8;
        border-radius: 50%;
    }

    .link-title {
        width: 98.03px;
        height: 18px;
        color: #38a0fa;
        font-family: Poppins;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
    }

    .font-style {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.3;
        letter-spacing: 0.83px;
    }

    .more-btn, .status-btn {
        width: 133px;
        height: 37px;
        text-transform: none;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.3;
        letter-spacing: 0.83px;
        color: white;
    }

    .font-color {
        color: #161360;
    }

    .subtitle {
        font-size: 12px;
        color: #4a4a4a;
    }

    .name {
        font-size: 12px;
        color: #4a4a4a;
    }

    .slider {
        width: 180px;
        display: flex;
        align-items: center;
    }

    /*}*/
</style>

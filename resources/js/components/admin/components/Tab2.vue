<template>
    <v-card flat>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col cols="10">

                        <div class="Knowledge-title d-flex justify-content-between align-items-center">
                            <div class="title-text py-3"> <h4>Knowledge</h4></div>
                        </div>
                    </v-col>
                    <v-col cols="2">

                        <div class="customize-page-text">
                            <a href="#" class="mr-2 text-secondary">Get Feedback</a><a href="#" class=" text-secondary">Customize Page</a>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="sm">
                        <v-expansion-panels
                                accordion focusable>
                            <v-expansion-panel style="margin-bottom: 3em">
                                <v-expansion-panel-header class="knowledge-link-title">
                                    <div class="left-title-icon9">
                                        <i class="fa fa-caret-right title-caret-right "></i>
                                        <i class="fa fa-sort-down title-downarrow "></i>
                                    </div>
                                    <span>Knowledge Links</span>
                                    <div class="right-gear-icon">
                                        <i class="fa fa-cog"></i>
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>

                                    <v-expansion-panels
                                            accordion focusable>
                                        <v-expansion-panel class="myaccordion">
                                            <v-expansion-panel-header class="btn">
                                                <span>Get Proactive</span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                Computer Science
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel class="myaccordion">
                                            <v-expansion-panel-header class="btn">
                                                Lifecycle Advisors
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                Computer Science
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel class="myaccordion">
                                            <v-expansion-panel-header class="btn">
                                                Security &amp; Critical patch Updates
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                Computer Science
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel class="myaccordion">
                                            <v-expansion-panel-header class="btn">
                                                Japanese Knowledge Links
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                Computer Science
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel class="myaccordion">
                                            <v-expansion-panel-header class="btn">Online Documention
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                Computer Science
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel class="myaccordion">
                                            <v-expansion-panel-header class="btn">
                                                Oracle System Handbook
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                Computer Science
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel class="myaccordion">
                                            <v-expansion-panel-header class="btn">
                                                Tools and Training Documents
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                Computer Science
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel class="myaccordion">
                                            <v-expansion-panel-header class="btn">
                                                Big Data Appliance
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                Computer Science
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <!--       </v-col>
                              <v-col cols="sm"> -->
                        <v-expansion-panels
                                accordion focusable>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="knowledge-link-title">
                                    <div class="left-title-icon9">
                                        <i class="fa fa-caret-right title-caret-right "></i>
                                        <i class="fa fa-sort-down title-downarrow "></i>
                                    </div>
                                    <span>Knowledge base</span>
                                    <div class="right-gear-icon">
                                        <i class="fa fa-cog"></i>
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="intheknowledge-content-main">

                                    <v-tabs
                                            v-model="kbtab"
                                            align-with-title
                                            background-color="transparent"
                                    >
                                        <v-tabs-slider color="yellow"></v-tabs-slider>
                                        <v-tab><span class="nav-link">Search &amp; Browser</span></v-tab>
                                        <v-tab><span class="nav-link">Recent View</span></v-tab>
                                        <v-tab><span class="nav-link">Recent Search</span></v-tab>
                                        <v-tab><span class="nav-link">Favorite Articles</span></v-tab>
                                    </v-tabs>
                                    <v-tabs-items v-model="kbtab">
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">
                                                    <v-form>
                                                        <v-container>
                                                            <v-row>
                                                                <v-col cols="12" sm="6" md="4">
                                                                    <v-text-field
                                                                            v-model="product"
                                                                            label="Select a Product Or Product line"
                                                                            placeholder="start typing"
                                                                            append-icon="fa fa-question-circle"
                                                                    ></v-text-field>
                                                                </v-col>
                                                            </v-row>
                                                            <v-row>
                                                                <v-col cols="12" sm="6" md="6">
                                                                    <v-text-field
                                                                            v-model="item"
                                                                            label="Enter Search Item"
                                                                            placeholder="Enter Search Item"
                                                                            prepend-inner-icon="fa fa-file-text-o"
                                                                            append-icon="fa fa-search"
                                                                    ></v-text-field>
                                                                </v-col>
                                                            </v-row>
                                                        </v-container>
                                                    </v-form>
                                                    <v-card-actions>
                                                        <v-row>
                                                            <v-col cols="10">
                                                            </v-col>
                                                            <v-col cols="2">
                                                                <v-btn @click="handleSubmit">
                                                                    Search
                                                                </v-btn>
                                                            </v-col>
                                                        </v-row>
                                                    </v-card-actions>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <h3>Menu 1</h3>
                                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <h3>Menu 2</h3>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <h3>Menu 2</h3>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                    </v-tabs-items>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                    </v-col>
                    <!--     </v-row>
                      </v-container>
                              <v-container fluid>
                        <v-row> -->
                    <v-col cols="sm">
                        <v-expansion-panels
                                accordion focusable>
                            <v-expansion-panel style="margin-bottom: 3em">
                                <v-expansion-panel-header class="knowledge-link-title">
                                    <div class="left-title-icon9">
                                        <i class="fa fa-caret-right title-caret-right "></i>
                                        <i class="fa fa-sort-down title-downarrow "></i>
                                    </div>
                                    <span>Knowledge Articles</span>
                                    <div class="right-gear-icon">
                                        <i class="fa fa-cog"></i>
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="intheknowledge-content-main">

                                    <v-tabs
                                            v-model="katab"
                                            align-with-title class="bg">
                                        <v-tabs-slider color="yellow"></v-tabs-slider>
                                        <v-tab><span class="nav-link">Alerts (255)</span></v-tab>
                                        <v-tab><span class="nav-link">Recent Update (100)</span></v-tab>
                                    </v-tabs>
                                    <v-tabs-items v-model="katab">
                                        <v-tab-item>
                                            <v-card class="bg">
                                                <v-card-text class="bg">

                                                    <h4>Last Week</h4>
                                                    <!-- single alert item start -->
                                                    <div class="time-alert d-flex ">
                                                        <!-- alert icon -->
                                                        <div class="alert-icon">
                                                            <i class="fa fa-exclamation-triangle"></i>
                                                        </div>
                                                        <!-- alet content -->
                                                        <div class="alert-content">
                                                            <a href="#"> Addressing Performance issues with Quoting and iStore Applications [184732.1]</a>
                                                            <p>[Orade Quoting, Oracle Istroe, Oracle Order Capture]</p>
                                                        </div>
                                                    </div>
                                                    <!-- single alert item end -->
                                                    <!-- single alert item start -->
                                                    <div class="time-alert d-flex ">
                                                        <!-- alert icon -->
                                                        <div class="alert-icon">
                                                            <i class="fa fa-exclamation-triangle"></i>
                                                        </div>
                                                        <!-- alet content -->
                                                        <div class="alert-content">
                                                            <a href="#"> Addressing Performance issues with Quoting and iStore Applications [184732.1]</a>
                                                            <p>[Orade Quoting, Oracle Istroe, Oracle Order Capture]</p>
                                                        </div>
                                                    </div>
                                                    <!-- single alert item end -->
                                                    <!-- single alert item start -->
                                                    <div class="time-alert d-flex ">
                                                        <!-- alert icon -->
                                                        <div class="alert-icon">
                                                            <i class="fa fa-exclamation-triangle"></i>
                                                        </div>
                                                        <!-- alet content -->
                                                        <div class="alert-content">
                                                            <a href="#"> Addressing Performance issues with Quoting and iStore Applications [184732.1]</a>
                                                            <p>[Orade Quoting, Oracle Istroe, Oracle Order Capture]</p>
                                                        </div>
                                                    </div>
                                                    <!-- single alert item end -->
                                                    <!-- single alert item start -->
                                                    <div class="time-alert d-flex ">
                                                        <!-- alert icon -->
                                                        <div class="alert-icon">
                                                            <i class="fa fa-exclamation-triangle"></i>
                                                        </div>
                                                        <!-- alet content -->
                                                        <div class="alert-content">
                                                            <a href="#"> Addressing Performance issues with Quoting and iStore Applications [184732.1]</a>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="show-clr">Show All Documents</a>
                                                    <!-- single alert item end -->
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <h3>Menu 2</h3>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                    </v-tabs-items>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <!--       </v-col>
                                    <v-col cols="sm"> -->
                        <v-expansion-panels focusable>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="knowledge-link-title">
                                    <div class="left-title-icon9">
                                        <i class="fa fa-caret-right title-caret-right "></i>
                                        <i class="fa fa-sort-down title-downarrow "></i>
                                    </div>
                                    <span>In the Knowledge</span>
                                    <div class="right-gear-icon">
                                        <i class="fa fa-cog"></i>
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="intheknowledge-content-main">

                                    <!-- single content section start -->
                                    <div class="intheknowledge-content">
                                        <h2>Use Google to find My Oracle Support Content</h2>
                                        <p>You can now use Google and other search engines to find My oracle Support Content</p>
                                        <p>Go to <a href="#">Google</a> and search using all of the Google capabilityes you have come to rely on, </p>
                                        <p>ven Better, bookmark and search Oracle content exclusivly . for example :  </p>
                                    </div>
                                    <!-- single content section end -->
                                    <!-- single content section start -->
                                    <div class="intheknowledge-content">
                                        <h2>Use Google to find My Oracle Support Content</h2>
                                        <p>You can now use Google and other search engines to find My oracle Support Content</p>
                                        <p>Go to <a href="#">Google</a> and search using all of the Google capabilityes you have come to rely on, </p>
                                        <p>ven Better, bookmark and search Oracle content exclusivly . for example :  </p>
                                    </div>
                                    <!-- single content section end -->
                                    <!-- single content section start -->
                                    <div class="intheknowledge-content">
                                        <h2>Get Product News Directly From Oracle Premier Support</h2>
                                        <p>You can subseibe to Oracle Premier Suppert- Product News <a href="#">Click here to get started</a> to get started
                                        </p>
                                    </div>
                                    <!-- single content section end -->
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Tab2",
        data () {
            return {
                product: '',
                item: '',
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
                checkbox: false
            }
        },
        methods:{
            showEditor(){
                this.editorActive = !this.editorActive
            },
            async handleSubmit() {
                const data = {
                    product: this.product,
                    item: this.item
                };
                try {
                    await axios.post('/save-json/tab12-search', data);
                    alert('Saved!');
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>

<style scoped>

</style>

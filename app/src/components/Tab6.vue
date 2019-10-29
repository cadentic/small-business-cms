<template>
    <v-card flat>
        <v-card-text>

            <v-container fluid>
                <v-row no-gutters>
                    <v-col cols="11">
                        <div class="service-title ">
                            <h4>Certifications</h4>
                        </div>
                    </v-col>
                    <v-col cols="1">
                        <div class="service-title-link">
                            <a href="#">Give Feedback...</a>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="sm">
                        <!--           <div class="alert d-flex alert-warning alert-dismissible fade show update-alert"> -->
                        <v-alert
                                v-model="alert"
                                close-text="Close Alert"
                                dismissible
                                outlined
                                border="bottom"
                                type="warning"
                        >
                            <v-row no-gutters style="color: #856404;">
                                <v-col cols="1">
                                    <!-- <div class="alert-img"> -->
                                    <img src="assets/img/certificaiton/mike.jpg" alt="" style="width:70px;">
                                    <!-- </div> -->
                                </v-col>
                                <v-col cols="11">
                                    <div class="alert-content">
                                        <h5 style="font-size: 1.25rem;">Recent Updates to Certify</h5>
                                        <ul style="margin-left:40px;">
                                            <li>Compare multiple releases and platforms for a single product (a matrix view)</li>
                                            <li>Download software release media from the certify details page</li>
                                            <li>Improved support date layout</li>
                                            <li>Updates for Engineered Systems (Exa), Sun System, Database, EBS, Fusion Apps, Fusion Middleware,
                                                JD Edwards, Siebel, Financial Services, Newly acquired companies, and more.</li>
                                        </ul>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-alert>
                        <!-- </div> -->
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="sm">
                        <v-expansion-panels
                                accordion focusable>
                            <v-expansion-panel style="margin-bottom:3em">
                                <v-expansion-panel-header class="knowledge-link-title">
                                    <div class="left-title-icon9">
                                        <i class="fa fa-caret-right title-caret-right "></i>
                                        <i class="fa fa-sort-down title-downarrow "></i>
                                    </div>
                                    <span>Certification Quick Link</span>
                                    <div class="right-gear-icon">
                                        <i class="fa fa-cog"></i>
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <div class="patching-heading">
                                        <div class="patching-heading-icon">
                                            <i class="fa fa-link"></i>
                                        </div>
                                        <p>What are Recommended Patches?</p>
                                    </div>
                                    <div class="cert-qlink d-md-flex">
                                        <v-row>
                                            <v-col cols="sm">
                                                <ul>
                                                    <li><a href="#"><i class="fa fa-file-text-o"></i> What's new for Certification</a></li>
                                                    <li><a href="#"><i class="fa fa-file-text-o"></i> Tips for Using Certification</a></li>
                                                    <li><a href="#"><i class="fa fa-file-text-o"></i> Professional Certification Exams</a></li>
                                                </ul>
                                            </v-col>
                                            <v-col cols="sm">
                                                <ul class="">
                                                    <li><a href="#"><i class="fa fa-file-text-o"></i> Watch a Video Tutorial</a></li>
                                                    <li><a href="#"><i class="fa fa-file-text-o"></i> Software eDelivery Cloud</a></li>
                                                    <li><a href="#"><i class="fa fa-file-text-o"></i> Lifetime Support</a></li>
                                                </ul>
                                            </v-col>
                                        </v-row>

                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel style="margin-bottom:3em;">
                                <v-expansion-panel-header class="knowledge-link-title">
                                    <div class="left-title-icon9">
                                        <i class="fa fa-caret-right title-caret-right "></i>
                                        <i class="fa fa-sort-down title-downarrow "></i>
                                    </div>
                                    <span>Certification Quick Link</span>
                                    <div class="right-gear-icon">
                                        <i class="fa fa-cog"></i>
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="bg">

                                    <v-tabs
                                            v-model="cqltab"
                                            align-with-title
                                    >
                                        <v-tabs-slider color="yellow"></v-tabs-slider>
                                        <v-tab><span class="nav-link">Search</span></v-tab>
                                        <v-tab><span class="nav-link">Saved</span></v-tab>
                                        <v-tab><span class="nav-link">Recent</span></v-tab>
                                    </v-tabs>
                                    <v-tabs-items v-model="cqltab">
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <v-form>
                                                        <v-container>
                                                            <v-row>
                                                                <v-col
                                                                        cols="12"
                                                                        md="12"
                                                                >
                                                                    <v-checkbox
                                                                            v-model="checkbox" label="Copmare Releases and Platforms"
                                                                    ></v-checkbox>
                                                                </v-col>
                                                                <v-col
                                                                        cols="12"
                                                                        md="4"
                                                                >
                                                                    <v-text-field
                                                                            label="* Product"
                                                                            placeholder="Type name or select form list"
                                                                    ></v-text-field>
                                                                </v-col>
                                                                <v-col
                                                                        cols="12"
                                                                        md="4"
                                                                >
                                                                    <v-text-field
                                                                            label="* Release"
                                                                            placeholder="Type name or select form list"
                                                                    ></v-text-field>
                                                                </v-col>
                                                                <v-col
                                                                        cols="12"
                                                                        md="4"
                                                                >
                                                                    <v-text-field
                                                                            label="* Platform"
                                                                            placeholder="any"
                                                                    ></v-text-field>
                                                                </v-col>
                                                                <v-col md="12">
                                                                    <a href="#" class="d-block mt-2 px-3"><i class="fa fa-play"></i> Check certification with another product</a>
                                                                </v-col>
                                                            </v-row>
                                                        </v-container>
                                                    </v-form>
                                                    <v-card-actions>
                                                        <v-row>
                                                            <v-col cols="10">
                                                                <v-btn
                                                                        text
                                                                >
                                                                    Clear
                                                                </v-btn>
                                                                <v-btn
                                                                        text
                                                                >
                                                                    Save
                                                                </v-btn>
                                                            </v-col>
                                                            <v-col cols="2">
                                                                <v-btn>
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
                                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                        consequat.</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <h3>Menu 2</h3>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                                        totam rem aperiam.</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                    </v-tabs-items>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="knowledge-link-title">
                                    <div class="left-title-icon9">
                                        <i class="fa fa-caret-right title-caret-right "></i>
                                        <i class="fa fa-sort-down title-downarrow "></i>
                                    </div>
                                    <span>Certification Quick Link</span>
                                    <div class="right-gear-icon">
                                        <i class="fa fa-cog"></i>
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-container fluid>
                                        <v-row>
                                            <v-col cols="sm">
                                                <span>Support Identifier</span>
                                            </v-col>
                                            <v-col cols="sm">
                                                <input type="text" placeholder="Type name,number, description">
                                                <button><i class="fa fa-sort-down"></i> </button>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    <v-expansion-panels
                                            accordion focusable class="myaccordion">
                                        <v-expansion-panel>
                                            <!-- <v-expansion-panel-header> -->
                                            <v-row no-gutters>
                                                <v-col cols="sm" class="bg">
                                                    Column
                                                </v-col>
                                                <v-col cols="sm" class="bg">
                                                    Column
                                                </v-col>
                                            </v-row>
                                            <!-- </v-expansion-panel-header> -->
                                        </v-expansion-panel>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header class="btn">
                                                <v-row no-gutters>
                                                    <v-col cols="sm">
                                                        <b>Demo text here</b>
                                                    </v-col>
                                                    <v-col cols="sm">
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <v-row no-gutter>
                                                    <v-col cols="sm">
                                                        <b>- child row</b>
                                                    </v-col>
                                                    <v-col cols="sm">
                                                        data 1
                                                    </v-col>
                                                </v-row>
                                                <v-row no-gutter>
                                                    <v-col cols="sm">
                                                        <b>- child row</b>
                                                    </v-col>
                                                    <v-col cols="sm">
                                                        data 1
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header class="btn">
                                                <v-row no-gutters>
                                                    <v-col cols="sm">
                                                        <b>Demo text here</b>
                                                    </v-col>
                                                    <v-col cols="sm">
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <v-row no-gutter>
                                                    <v-col cols="sm">
                                                        <b>- child row</b>
                                                    </v-col>
                                                    <v-col cols="sm">
                                                        data 2
                                                    </v-col>
                                                </v-row>
                                                <v-row no-gutter>
                                                    <v-col cols="sm">
                                                        <b>- child row</b>
                                                    </v-col>
                                                    <v-col cols="sm">
                                                        data 2
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header class="btn">
                                                <v-row no-gutters>
                                                    <v-col cols="sm">
                                                        <b>Demo text here</b>
                                                    </v-col>
                                                    <v-col cols="sm">
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <v-row no-gutter>
                                                    <v-col cols="sm">
                                                        <b>- child row</b>
                                                    </v-col>
                                                    <v-col cols="sm">
                                                        data 1
                                                    </v-col>
                                                </v-row>
                                                <v-row no-gutter>
                                                    <v-col cols="sm">
                                                        <b>- child row</b>
                                                    </v-col>
                                                    <v-col cols="sm">
                                                        data 1
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header class="btn">
                                                <v-row no-gutters>
                                                    <v-col cols="sm">
                                                        <b>Demo text here</b>
                                                    </v-col>
                                                    <v-col cols="sm">
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <v-row no-gutter>
                                                    <v-col cols="sm">
                                                        <b>- child row</b>
                                                    </v-col>
                                                    <v-col cols="sm">
                                                        data 2
                                                    </v-col>
                                                </v-row>
                                                <v-row no-gutter>
                                                    <v-col cols="sm">
                                                        <b>- child row</b>
                                                    </v-col>
                                                    <v-col cols="sm">
                                                        data 2
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <div class="video-overly-play">
                                            <a href="#" target="_blank"> <i class="fa fa-play"></i>
                                                <span>Play video</span></a>
                                        </div>
                                    </v-expansion-panels>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                    <v-col cols="sm">
                        <v-expansion-panels
                                accordion focusable>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="knowledge-link-title">
                                    <div class="left-title-icon9">
                                        <i class="fa fa-caret-right title-caret-right "></i>
                                        <i class="fa fa-sort-down title-downarrow "></i>
                                    </div>
                                    <span>Certification Quick Link</span>
                                    <div class="right-gear-icon">
                                        <i class="fa fa-cog"></i>
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="bg">

                                    <v-tabs
                                            v-model="cqltab1"
                                            align-with-title
                                            background-color="transparent"
                                    >
                                        <v-tabs-slider color="yellow"></v-tabs-slider>
                                        <v-tab><span class="nav-link">Search</span></v-tab>
                                        <v-tab><span class="nav-link">Saved</span></v-tab>
                                        <v-tab><span class="nav-link">Recent</span></v-tab>
                                    </v-tabs>
                                    <v-tabs-items v-model="cqltab1">
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <v-form>
                                                        <v-container>
                                                            <v-row>
                                                                <v-col
                                                                        cols="12"
                                                                        md="12"
                                                                >
                                                                    <v-checkbox
                                                                            v-model="checkbox" label="Copmare Releases and Platforms"
                                                                    ></v-checkbox>
                                                                </v-col>
                                                                <v-col
                                                                        cols="12"
                                                                        md="4"
                                                                >
                                                                    <v-text-field
                                                                            label="* Product"
                                                                            placeholder="Type name or select form list"
                                                                    ></v-text-field>
                                                                </v-col>
                                                                <v-col
                                                                        cols="12"
                                                                        md="4"
                                                                >
                                                                    <v-text-field
                                                                            label="* Release"
                                                                            placeholder="Type name or select form list"
                                                                    ></v-text-field>
                                                                </v-col>
                                                                <v-col
                                                                        cols="12"
                                                                        md="4"
                                                                >
                                                                    <v-text-field
                                                                            label="* Platform"
                                                                            placeholder="any"
                                                                    ></v-text-field>
                                                                </v-col>
                                                                <v-col md="12">
                                                                    <a href="#" class="d-block mt-2 px-3"><i class="fa fa-play"></i> Check certification with another product</a>
                                                                </v-col>
                                                            </v-row>
                                                        </v-container>
                                                    </v-form>
                                                    <v-card-actions>
                                                        <v-row>
                                                            <v-col cols="10">
                                                                <v-btn
                                                                        text
                                                                >
                                                                    Clear
                                                                </v-btn>
                                                                <v-btn
                                                                        text
                                                                >
                                                                    Save
                                                                </v-btn>
                                                            </v-col>
                                                            <v-col cols="2">
                                                                <v-btn>
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
                                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                        consequat.</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <h3>Menu 2</h3>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                                        totam rem aperiam.</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                    </v-tabs-items>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                        </v-expansion-panels>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="sm">
                    </v-col>
                    <v-col cols="sm"></v-col>
                </v-row>
                <v-row>
                    <v-col cols="sm">
                    </v-col>
                    <v-col cols="sm"></v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>

</template>

<script>

    export default {
        name: "Tab6",
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
                checkbox: false
            }
        },
        methods:{
            showEditor(){
                this.editorActive = !this.editorActive
            }

        },
    }
</script>

<style scoped>

</style>

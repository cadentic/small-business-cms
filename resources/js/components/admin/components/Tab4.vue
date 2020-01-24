<template>

    <v-card flat>
        <v-card-text>

            <v-container fluid>
                <v-row>
                    <v-col cols="10">

                        <div class="Knowledge-title d-flex justify-content-between align-items-center">
                            <div class="title-text py-3"><h4>Knowledge</h4></div>
                        </div>
                    </v-col>
                    <v-col cols="2">

                        <div class="customize-page-text">
                            <a href="#" class="mr-2 text-secondary">Get Feedback</a><a href="#" class=" text-secondary">Customize
                            Page</a>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-expansion-panels
                                accordion focusable>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="knowledge-link-title">
                                    <div class="left-title-icon9">
                                        <i class="fa fa-caret-right title-caret-right "></i>
                                        <i class="fa fa-sort-down title-downarrow "></i>
                                    </div>
                                    <span>Patching Quick Links</span>
                                    <div class="right-gear-icon">
                                        <i class="fa fa-cog"></i>
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <!-- patching area -->
                                    <div class="patching-area">
                                        <div class="patching-heading">
                                            <div class="patching-heading-icon">
                                                <i class="fa fa-link"></i>
                                            </div>
                                            <p>What are Recommended Patches?</p>
                                        </div>
                                        <!-- patching content   -->
                                        <div class="patching-content">
                                            <h3>Softwear and Patch Search Site</h3>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <a href="#">Oracle Softwear Devlivery Cloud</a>
                                                    <a href="#">Sun Product</a>
                                                </div>
                                                <div class="col-sm-6">
                                                    <a href="#"> Critacal Patch Update and Sucirity Alerts</a>
                                                    <a href="#">JD Edward</a>
                                                </div>
                                            </div> <!-- row -->
                                            <!-- patch contnet single item -->
                                            <div class="patch-content-item">
                                                <h3>Oracle E-Business Soult </h3>
                                                <a href="#">How to find E-business Suite and Technoloy Patch</a>
                                            </div>
                                            <!-- patch contnet single item end-->
                                            <!-- patch contnet single item -->
                                            <div class="patch-content-item">
                                                <h3>Oracle server and Tools </h3>
                                                <a href="#">Latest Patches </a>
                                            </div>
                                            <!-- patch contnet single item end-->
                                            <a href="#" class="mt-5 mb-2 d-block">All Quick Links open in new tab</a>
                                        </div>
                                    </div>
                                    <!-- patching area end-->
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                    <v-col cols="8">
                        <v-expansion-panels
                                accordion focusable>
                            <v-expansion-panel style="margin-bottom: 3em">
                                <v-expansion-panel-header class="knowledge-link-title">
                                    <div class="left-title-icon9">
                                        <i class="fa fa-caret-right title-caret-right "></i>
                                        <i class="fa fa-sort-down title-downarrow "></i>
                                    </div>
                                    <span>Patch Search</span>
                                    <div class="right-gear-icon">
                                        <i class="fa fa-cog"></i>
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="bg patch-search">

                                    <v-tabs
                                            v-model="pstab"
                                            align-with-title
                                            background-color="transparent"
                                    >
                                        <v-tabs-slider color="yellow"></v-tabs-slider>
                                        <v-tab><span class="nav-link">Search</span></v-tab>
                                        <v-tab><span class="nav-link">Save Search</span></v-tab>
                                        <v-tab><span class="nav-link">Recent Search</span></v-tab>
                                    </v-tabs>
                                    <v-tabs-items v-model="pstab">
                                        <!-- search -->
                                        <v-tab-item>
                                            <v-card flat height="330" class="bg">
                                                <v-card-text class="bg fill-height">
                                                    <v-tabs vertical class="myaccordion bg-white fill-height">
                                                        <v-tab>
                                                            <v-icon left>mdi-account</v-icon>
                                                            Number/Name or bug Number (simple
                                                        </v-tab>
                                                        <v-tab>
                                                            <v-icon left>mdi-lock</v-icon>
                                                            Product Family (Advance)
                                                        </v-tab>
                                                        <v-tab>
                                                            <v-icon left>mdi-access-point</v-icon>
                                                            Recomended Patch Advice
                                                        </v-tab>
                                                        <v-tab-item class="ps-tab-container">
                                                            <v-card>
                                                                <v-card-text>
                                                                    <!--<div id="NumberName" class="tabcontent ">-->
                                                                    <v-form>
                                                                        <v-container>
                                                                            <v-row class="d-flex align-center">
                                                                                <v-col class="pr-0" cols="12"
                                                                                       sm="4">
                                                                                    <select name="cars"
                                                                                            class="custom-select w-100 pa-1">
                                                                                        <option selected>Patch
                                                                                            Number Or number
                                                                                        </option>
                                                                                        <option value="volvo">
                                                                                            Volvo
                                                                                        </option>
                                                                                        <option value="fiat">Fiat
                                                                                        </option>
                                                                                        <option value="audi">Audi
                                                                                        </option>
                                                                                    </select>
                                                                                </v-col>
                                                                                <v-col class="pr-0 d-flex justify-space-between align-center">
                                                                                        <span><i
                                                                                                class="fa fa-question-circle "></i> is</span>
                                                                                    <span class="input-star">*</span>
                                                                                </v-col>
                                                                                <v-col
                                                                                        cols="12"
                                                                                        sm="6"
                                                                                        class="d-flex align-center"
                                                                                >
                                                                                    <input type="text"
                                                                                           style="border:1px solid;"
                                                                                           class="form-control w-100 pa-1"
                                                                                           id="usr">
                                                                                </v-col>
                                                                            </v-row>
                                                                            <v-row>
                                                                                <v-col class="pr-0" cols="12"
                                                                                       sm="4">
                                                                                    <select name="cars"
                                                                                            class="custom-select w-100 pa-1">
                                                                                        <option selected>Platform
                                                                                        </option>
                                                                                        <option value="volvo">
                                                                                            Volvo
                                                                                        </option>
                                                                                        <option value="fiat">Fiat
                                                                                        </option>
                                                                                        <option value="audi">Audi
                                                                                        </option>
                                                                                    </select>
                                                                                </v-col>
                                                                                <v-col class="pr-0 d-flex justify-space-end align-center">
                                                                                        <span><i
                                                                                                class="fa fa-question-circle "></i> is</span>
                                                                                </v-col>
                                                                                <v-col class="d-flex" cols="12"
                                                                                       sm="6">
                                                                                    <select class="form-control w-100"
                                                                                            id="sel1"
                                                                                            name="sellist1">
                                                                                        <option></option>
                                                                                        <option>2</option>
                                                                                        <option>3</option>
                                                                                        <option>4</option>
                                                                                    </select>
                                                                                </v-col>
                                                                            </v-row>
                                                                            <v-row>
                                                                                <v-col cols="12 pt-0">
                                                                                    <v-checkbox
                                                                                            class="float-right pr-1"
                                                                                            v-model="checkbox"
                                                                                            label="Exclude Supersed Patch"
                                                                                    ></v-checkbox>
                                                                                </v-col>
                                                                            </v-row>
                                                                        </v-container>
                                                                    </v-form>
                                                                    <!--</div>-->
                                                                </v-card-text>
                                                                <v-card-actions class="bg">
                                                                    <v-row class="d-flex justify-space-around">
                                                                        <div>
                                                                            <v-btn text>Clear</v-btn>
                                                                            <v-btn text>Save</v-btn>
                                                                        </div>
                                                                        <div>
                                                                            <v-btn>
                                                                                Search
                                                                            </v-btn>
                                                                        </div>
                                                                    </v-row>
                                                                </v-card-actions>
                                                            </v-card>
                                                        </v-tab-item>
                                                        <v-tab-item>
                                                            <v-card flat>
                                                                <v-card-text>
                                                                    <div class="demotext pt-5 pl-5">
                                                                        <h2> demo text one</h2>
                                                                        <p>Paris is the capital of France. Lorem
                                                                            ipsum dolor sit amet, consectetur
                                                                            adipisicing elit. Dolore voluptate aut
                                                                            dignissimos iusto, perferendis corrupti
                                                                            deserunt. Cum distinctio, atque
                                                                            iusto.</p>
                                                                    </div>
                                                                </v-card-text>
                                                            </v-card>
                                                        </v-tab-item>
                                                        <v-tab-item>
                                                            <v-card flat>
                                                                <v-card-text>
                                                                    <div class="demotext pt-5 pl-5">
                                                                        <h2> demo text two</h2>
                                                                        <p class="m-0 pb-2">Paris is the capital of
                                                                            France. Lorem ipsum dolor sit amet,
                                                                            consectetur adipisicing elit. Dolore
                                                                            voluptate aut dignissimos iusto,
                                                                            perferendis corrupti deserunt. Cum
                                                                            distinctio, atque iusto.</p>
                                                                    </div>
                                                                </v-card-text>
                                                            </v-card>
                                                        </v-tab-item>
                                                    </v-tabs>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                        <!-- save search -->
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <div class="demotext pt-5 pl-5">
                                                        <h2> demo text one</h2>
                                                        <p>Paris is the capital of France. Lorem ipsum dolor sit amet,
                                                            consectetur adipisicing elit. Dolore voluptate aut
                                                            dignissimos iusto, perferendis corrupti deserunt. Cum
                                                            distinctio, atque iusto.</p>
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                        <!-- recent search -->
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <div class="demotext pt-5 pl-5">
                                                        <h2> demo text one</h2>
                                                        <p>Paris is the capital of France. Lorem ipsum dolor sit amet,
                                                            consectetur adipisicing elit. Dolore voluptate aut
                                                            dignissimos iusto, perferendis corrupti deserunt. Cum
                                                            distinctio, atque iusto.</p>
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                    </v-tabs-items>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <v-expansion-panels
                                accordion focusable>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="knowledge-link-title">
                                    <div class="left-title-icon9">
                                        <i class="fa fa-caret-right title-caret-right "></i>
                                        <i class="fa fa-sort-down title-downarrow "></i>
                                    </div>
                                    <span>Plan and Patch Requests</span>
                                    <div class="right-gear-icon">
                                        <i class="fa fa-cog"></i>
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="bg">

                                    <v-tabs
                                            v-model="pptab"
                                            align-with-title
                                            background-color="transparent"
                                    >
                                        <v-tabs-slider color="yellow"></v-tabs-slider>
                                        <v-tab><span class="nav-link">Plans</span></v-tab>
                                        <v-tab><span class="nav-link">Patch Request</span></v-tab>
                                    </v-tabs>
                                    <v-tabs-items v-model="pptab">
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <h3 class="p-3"> demo text one</h3>
                                                    <p class="p-3">Paris is the capital of France. Lorem ipsum dolor sit
                                                        amet, consectetur adipisicing elit. Dolore voluptate aut
                                                        dignissimos iusto, perferendis corrupti deserunt. Cum
                                                        distinctio, atque iusto.</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                    </v-tabs-items>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                    <!--             </v-row>
                              </v-container>
                              <v-container fluid>
                                <v-row> -->
                    <!--               <v-col cols="4">
                                  </v-col>
                                  <v-col cols="8">
                                  </v-col> -->
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Tab4",
        data() {
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
        methods: {
            showEditor() {
                this.editorActive = !this.editorActive
            }

        }
    }
</script>

<style lang="scss">
    .w-100 {
        width: 100%;
    }

    .w-33 {
        width: 33%;
    }

    .bg-white {
        background-color: white;
    }

    .patch-search {
        .v-tabs--vertical > .v-tabs-bar .v-tabs-bar__content {
            margin-top: 30px;
            padding: 2px;
            height: 145px;
            background-color: white;
            .v-tab {
                background: linear-gradient(to top, #0984e378, #fff);
                text-transform: none;
                padding: 0px 20px !important;
            }
            .v-tab--active {
                background-color: white !important;
                border: none !important;
                background: none;
            }
            .v-tabs-slider-wrapper {
                width: 0px !important;
            }
        }

        .ps-tab-container {
            border-radius: 20px;
            border-color: green;
        }
    }
</style>

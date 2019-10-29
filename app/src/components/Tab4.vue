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
                                                <h3>Oracle server and Tools  </h3>
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
                            <v-expansion-panel  style="margin-bottom: 3em">
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
                                <v-expansion-panel-content class="bg">

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
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <v-card>
                                                        <v-tabs vertical class="myaccordion">
                                                            <v-tab class="btn">
                                                                <v-icon left>mdi-account</v-icon>
                                                                Number/Name or bug Number (simple)
                                                            </v-tab>
                                                            <v-tab class="btn">
                                                                <v-icon left>mdi-lock</v-icon>
                                                                Product Family (Advance)
                                                            </v-tab>
                                                            <v-tab class="btn">
                                                                <v-icon left>mdi-access-point</v-icon>
                                                                Recomended Patch Advice
                                                            </v-tab>
                                                            <v-tab-item>
                                                                <v-card flat>
                                                                    <v-card-text class="bg">
                                                                        <div id="NumberName" class="tabcontent ">
                                                                            <v-form>
                                                                                <v-container>
                                                                                    <v-row>
                                                                                        <v-col class="d-flex" cols="12" sm="6">
                                                                                            <select name="cars" class="custom-select   mt-2">
                                                                                                <option selected>Patch Number Or number</option>
                                                                                                <option value="volvo">Volvo</option>
                                                                                                <option value="fiat">Fiat</option>
                                                                                                <option value="audi">Audi</option>
                                                                                            </select>
                                                                                            <i class="fa fa-question-circle "></i> is
                                                                                            <span class="input-star">*</span>
                                                                                        </v-col>
                                                                                        <v-col
                                                                                                cols="12"
                                                                                                md="4"
                                                                                        >
                                                                                            <input type="text" style="border:1px solid;" class="form-control mx-auto w-75 " id="usr">
                                                                                        </v-col>
                                                                                    </v-row>
                                                                                    <v-row>
                                                                                        <v-col class="d-flex" cols="12" sm="6">
                                                                                            <select name="cars" class="custom-select   mt-2">
                                                                                                <option selected>Platform</option>
                                                                                                <option value="volvo">Volvo</option>
                                                                                                <option value="fiat">Fiat</option>
                                                                                                <option value="audi">Audi</option>
                                                                                            </select>
                                                                                        </v-col>
                                                                                        <v-col class="d-flex" cols="12" sm="6">
                                                                                            <i class="fa fa-question-circle "></i> is
                                                                                            <select class="form-control w-75 mx-auto" id="sel1" name="sellist1">
                                                                                                <option> </option>
                                                                                                <option>2</option>
                                                                                                <option>3</option>
                                                                                                <option>4</option>
                                                                                            </select>
                                                                                        </v-col>
                                                                                    </v-row>
                                                                                    <v-row>
                                                                                        <v-col cols="12">
                                                                                            <v-checkbox
                                                                                                    v-model="checkbox" label="Exclude Supersed Patch"
                                                                                            ></v-checkbox>
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
                                                                        </div>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-tab-item>
                                                            <v-tab-item>
                                                                <v-card flat>
                                                                    <v-card-text class="bg">
                                                                        <div class="demotext">
                                                                            <h2> demo text one</h2>
                                                                            <p>Paris is the capital of France. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptate aut dignissimos iusto, perferendis corrupti deserunt. Cum distinctio, atque iusto.</p>
                                                                        </div>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-tab-item>
                                                            <v-tab-item>
                                                                <v-card flat>
                                                                    <v-card-text class="bg">
                                                                        <div class="demotext pt-5 pl-5">
                                                                            <h2> demo text two</h2>
                                                                            <p class="m-0 pb-2">Paris is the capital of France. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptate aut dignissimos iusto, perferendis corrupti deserunt. Cum distinctio, atque iusto.</p>
                                                                        </div>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-tab-item>
                                                        </v-tabs>
                                                    </v-card>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                        <!-- save search -->
                                        <v-tab-item>
                                            <v-card flat>
                                                <v-card-text class="bg">

                                                    <div class="demotext pt-5 pl-5">
                                                        <h2> demo text one</h2>
                                                        <p>Paris is the capital of France. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptate aut dignissimos iusto, perferendis corrupti deserunt. Cum distinctio, atque iusto.</p>
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
                                                        <p>Paris is the capital of France. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptate aut dignissimos iusto, perferendis corrupti deserunt. Cum distinctio, atque iusto.</p>
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
                                                    <p class="p-3">Paris is the capital of France. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptate aut dignissimos iusto, perferendis corrupti deserunt. Cum distinctio, atque iusto.</p>
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

        }
    }
</script>

<style scoped>

</style>

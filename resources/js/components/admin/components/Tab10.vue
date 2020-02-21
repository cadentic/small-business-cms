<template>
    <v-card flat>
        <v-card-text>
            <v-container fluid>
                <v-row no-gutters>
                    <v-col cols="10">
                        <div class="service-title ">
                            <h4>Personalization...</h4>
                        </div>
                    </v-col>
                    <v-col cols="2">
                        <div class="settings-feedback">
                            <a href="#" class="link-clr">Give Feedback...</a>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        <div class="settings-link-wrap mb-4 mb-md-0">
                            <!-- Single Settings Link -->
                            <div class="single-settings-link">
                                <div class="settings-link-title">
                                    <h6>Personal</h6>
                                </div>
                                <div class="settings-links">
                                    <ul>
                                        <li><a href="#" class="active">Personalization</a></li>
                                        <li><a href="#" >My Account</a></li>
                                        <li><a href="#" >Hot Topics E-Mail</a></li>
                                        <li><a href="#" >Knowledge Preferences</a></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Single Settings Link End -->
                            <!-- Single Settings Link -->
                            <div class="single-settings-link">
                                <div class="settings-link-title">
                                    <h6>administrative</h6>
                                </div>
                                <div class="settings-links">
                                    <ul>
                                        <li><a href="#">Manage Users</a></li>
                                        <li><a href="#" >Pending Users Request</a></li>
                                        <li><a href="#" >Support Identifiers</a></li>
                                        <li><a href="#" >Knowledge Preferences</a></li>
                                        <li><a href="#" >Audit</a></li>
                                        <li><a href="#" >Associate Collectors</a></li>
                                        <li><a href="#" >Deactivated Collections</a></li>
                                        <li><a href="#" >Custom System Properties</a></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Single Settings Link End -->
                        </div>
                    </v-col>
                    <v-col cols="9">
                        <!-- Settings Link End -->
                        <!-- Settings Form Area -->
                        <div class="settings-form-area">
                            <!-- Setting Form Title -->
                            <div class="settings-form-title">
                                <h4>Personalization</h4>
                            </div>
                            <!-- Personalization Form -->
                            <form method="POST" action="/save-json/personnalization" class="personalization-form" @submit.prevent="handleSubmit">
                                <!-- Single Input -->
                                <div class="single-input d-block d-md-flex">
                                    <div class="input-title">
                                        <h6>Language</h6>
                                    </div>
                                    <div class="input">
                                        <label for="language" class="sr-only">Select Language</label>
                                        <select name="language" id="language">
                                            <option value="english">English</option>
                                            <option value="spanish">Spanish</option>
                                            <option value="italian">Italian</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- Single Input End -->
                                <!-- Single Input -->
                                <div class="single-input d-block d-md-flex">
                                    <div class="input-title">
                                        <h6>Preferred Contact Method</h6>
                                    </div>
                                    <div class="input">
                                        <label for="contactMethod" class="sr-only">Contact Method</label>
                                        <select name="contactMethod" id="contactMethod">
                                            <option value="english">E-mail</option>
                                            <option value="spanish">Phone</option>
                                        </select>
                                        <button class="help-btn"><i class="fa fa-question-circle"></i></button>
                                        <span>sayantan.c@ndedges,com</span>
                                        <button class="edit-btn"><i class="fa fa-pencil"></i></button>
                                    </div>
                                </div>
                                <!-- Single Input End -->
                                <!-- Single Input -->
                                <div class="single-input d-block d-md-flex">
                                    <div class="input-title">
                                        <h6>Service Request Language</h6>
                                    </div>
                                    <div class="input">
                                        <label for="serviceLanguage" class="sr-only">Select Service Language</label>
                                        <select name="serviceLanguage" id="serviceLanguage">
                                            <option value="americanEnglish">English-American</option>
                                            <option value="americanEnglish">English-United Kingdom</option>
                                            <option value="americanEnglish">English-British</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- Single Input End -->
                                <!-- Single Input -->
                                <div class="single-input d-block d-md-flex">
                                    <div class="input-title">
                                        <h6>Auto Detect Timezone</h6>
                                    </div>
                                    <div class="input">
                                        <label for="autotimezone" class="sr-only">Timezone Detect</label>
                                        <input type="radio" value="on" name="autotimezone" checked>On
                                        <input type="radio" value="off" name="autotimezone">Off
                                    </div>
                                </div>
                                <!-- Single Input End -->
                                <!-- Single Input -->
                                <div class="single-input d-block d-md-flex">
                                    <div class="input-title">
                                        <h6>Current Timezone</h6>
                                    </div>
                                    <div class="input">
                                        <span>(GMT+05:30)Chennai, Kolkata, Mumbai, New Delhi</span>
                                    </div>
                                </div>
                                <!-- Single Input End -->
                                <!-- Single Input -->
                                <div class="single-input d-block d-md-flex">
                                    <div class="input-title">
                                        <h6>Accessibility Options</h6>
                                    </div>
                                    <div class="input">
                                        <label for="accessibility" class="sr-only">Accessibility Options</label>
                                        <input type="checkbox" >I use a screen reader <br>
                                        <input type="checkbox" >I use high contrast settings<br>
                                        <input type="checkbox" >I use large fonts<br>
                                    </div>
                                </div>
                                <!-- Single Input End -->
                                <!-- Single Input -->
                                <div class="single-input d-block d-md-flex">
                                    <div class="input-title">
                                        <h6>Message Format</h6>
                                    </div>
                                    <div class="input">
                                        <label for="messageFormat" class="sr-only">Message Format</label>
                                        <input type="checkbox" id="messageFormat" name="messageFormat">Show message in Pop-Ups
                                    </div>
                                </div>
                                <!-- Single Input End -->
                                <!-- Single Input -->
                                <div class="single-input d-block d-md-flex">
                                    <div class="input-title">
                                        <h6>Reset Customization</h6>
                                    </div>
                                    <div class="input">
                                        <a href="#">Page Layout...</a>
                                        <a href="#">Messages and Warnings...</a>
                                    </div>
                                </div>
                                <!-- Single Input End -->
                                <!-- Single Input -->
                                <div class="single-input d-block d-md-flex">
                                    <div class="input-title">
                                        <h6>Download Protocol</h6>
                                    </div>
                                    <div class="input">
                                        <label for="protocol" class="sr-only">Protocol</label>
                                        <input type="radio" name="protocol" value="HTTP">HTTP <br>
                                        <input type="radio" name="protocol" value="HTTPS">HTTPS <span class="small">(may be slower,but more secure)</span>
                                        <p>This applies to patches and Oracle software downloads(My Oracle Support already uses HTTPS).</p>
                                    </div>
                                </div>
                                <!-- Single Input End -->
                                <div class="form-buttons">
                                    <button type="reset" class="reset-btn">Revert</button>
                                    <button type="submit" class="submit-btn">Apply changes</button>
                                </div>
                            </form>
                        </div>
                    </v-col>
                    <!-- Settings Form Area End -->
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Tab10",
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
            },
            async handleSubmit(event) {
                const form = event.target;
                const data = {};
                for (let i = 0; i < form.length; i++) {
                    const item = form[i];
                    const name = item.name;
                    const value = typeof item.value !== 'undefined' ? item.value : item.checked;
                    if (name) data[name] = value;
                }
                try {
                    await axios.post(form.action, data);
                    alert("Saved!");
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <v-card>
        <v-toolbar
                color="#e7eef4"
                flat
        >
            <!--<template v-slot:extension>-->
                <v-tabs
                        align-with-title
                        background-color="transparent"
                > <v-tabs-slider color="black"></v-tabs-slider>
                    <v-tab to="/admin/manage/tab1"><span class="nav-link">Dashboard</span></v-tab>
                    <v-tab to="/admin/manage/tab13"><span class="nav-link">Create Invoice</span></v-tab>
                    <v-tab to="/admin/manage/tab11"><span class="nav-link">All Invoices</span></v-tab>
                    <v-tab to="/admin/manage/tab12"><span class="nav-link">Manage Product</span></v-tab>
                    <v-tab to="/admin/manage/tab2"><span class="nav-link">Knowledge</span></v-tab>
                    <v-tab to="/admin/manage/tab3"><span class="nav-link">Service Request</span></v-tab>
                    <v-tab to="/admin/manage/tab4"><span class="nav-link">Patches &amp; Update</span></v-tab>
                    <v-tab to="/admin/manage/v1">
                        <span class="nav-link"><i class="fa fa-external-link"></i>Community</span>
                    </v-tab>
                    <v-tab to="/admin/manage/tab6"><span class="nav-link">Certifications</span></v-tab>
                    <v-tab to="/admin/manage/v2"><span class="nav-link">Systems</span></v-tab>
                    <v-tab to="/admin/manage/v4"><span class="nav-link">Collector</span></v-tab>
                    <v-tab to="/admin/manage/tab9"><span class="nav-link"><i class="fa fa-external-link"></i>Advance Customer Service</span></v-tab>
                    <v-tab to="/admin/manage/tab10"><span class="nav-link">Settings</span></v-tab>
                </v-tabs>
            <!--</template>-->
        </v-toolbar>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </v-card>
</template>

<script>
    export default {
        name: "DashboardView",
    }
</script>

<style scoped>

</style>

<template>

    <v-card flat>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col cols="4">
                        <div class="dashboard-title">
                            <h2 class="p-4">THis is Advance Customer Section </h2>
                            <p class="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cupiditate, nam. Sunt debitis odit dicta delectus veniam optio illum modi.</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Tab9",
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

<template>
    <v-card flat>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col cols="sm">

                        <div class="dashboard-title">
                            <h2>THis is dashborad section</h2>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Tab1",
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

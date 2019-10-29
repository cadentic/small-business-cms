<template>

    <v-card flat>
        <v-card-text>

            <div class="dashboard-title">
                <h2 class="p-4">THis is Systems Section </h2>
                <p class="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cupiditate, nam. Sunt debitis odit dicta delectus veniam optio illum modi.</p>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Tab7",
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

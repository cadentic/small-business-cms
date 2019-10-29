<template>
    <v-row>
        <v-col cols="sm" class="py-0">
            <AppV2></AppV2>
        </v-col>
    </v-row>
</template>

<script>
    import AppV2 from '../themes/v2/App.vue';
    export default {
        components: {
            AppV2
        },
        name: "Tab8",
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
        mounted() {
        }
    }
</script>

<style scoped>

</style>

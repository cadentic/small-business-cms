<template>
    <v-row>
        <v-col cols="sm" class="py-0">
            <AppV1></AppV1>
        </v-col>
    </v-row>
</template>

<script>
    import AppV1 from '../themes/v1/App.vue';
    export default {
        components: {
            AppV1
        },
        name: "Tab5"
    }
</script>

<style scoped>

</style>

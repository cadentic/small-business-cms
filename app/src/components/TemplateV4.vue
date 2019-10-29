<template>
    <templete4></templete4>
</template>

<script>
    import templete4 from '../views/DashboardView'
    export default {
        name: "TemplateV4",
        components: {
            templete4
        },
        beforeCreate() {
            this.$eventHub.$emit('changeMode')
        }
    }
</script>

<style scoped>

</style>

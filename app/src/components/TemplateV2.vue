<template>
    <templete2></templete2>
</template>

<script>
    import templete2 from './v2/App'
    export default {
        name: "TemplateV2",
        components: {
            templete2
        },
        beforeCreate() {
            this.$eventHub.$emit('changeMode')
        }
    }
</script>

<style scoped>

</style>

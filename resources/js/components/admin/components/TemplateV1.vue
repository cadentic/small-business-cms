<template>
    <templete1></templete1>
</template>

<script>
    import templete1 from './v1/App'
    export default {
        name: "TemplateV1",
        components: {
            templete1
        },
        beforeCreate() {
            this.$eventHub.$emit('changeMode')
        }
    }
</script>

<style scoped>

</style>

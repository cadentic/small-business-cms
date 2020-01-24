<template>
    <templete3></templete3>
</template>

<script>
    import templete3 from './v3/App'
    export default {
        name: "TemplateV3",
        components: {
            templete3
        },
        beforeCreate() {
            this.$eventHub.$emit('changeMode')
        }
    }
</script>

<style scoped>

</style>

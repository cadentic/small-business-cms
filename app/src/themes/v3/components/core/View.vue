<template>
  <v-content >
    <div id="core-view" style="position: relative;height: 100%;">
      <v-fade-transition mode="out-in">
        <keep-alive>
        <router-view />
        </keep-alive>
      </v-fade-transition>
    </div>
  </v-content>
</template>

<script>
  export default {
    name: 'CoreView',

    metaInfo () {
      return {
        title: 'ThemeBuilder'
      }
    }
  }
</script>

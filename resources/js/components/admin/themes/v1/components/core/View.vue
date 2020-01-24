<template>
  <v-content class="grey lighten-3 mr-2" style="position: absolute; top: 0px; padding-top:70px !important;">
    <div id="core-view1">
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
        title: 'Vue Material Dashboard by CreativeTim'
      }
    }
  }
</script>

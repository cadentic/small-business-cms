<template>
  <v-content style="position: absolute; top: 0px; width: 100%;padding-top:70px !important;">
    <div id="core-view" class="mx-5">
      <v-fade-transition mode="out-in">
        <router-view />
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

<template>
  <v-app style="overflow: auto;height: 100vh;">
    <vuescroll :ops="ops" >
      <core-app-bar />

      <core-drawer />

      <core-view />

      </vuescroll>
  </v-app>
</template>

<script>
    import vuescroll from 'vuescroll';
  export default {
    components: {
      CoreDrawer: () => import('./Drawer'),
      CoreAppBar: () => import('./AppBar'),
      CoreView: () => import('./View'),
        vuescroll,
    },
      data() {
          return {
              ops: {
                  vuescroll: {},
                  scrollPanel: {},
                  rail: {
                      background: '#333948',
                      opacity: 0,
                      size: '12px',
                      specifyBorderRadius: false,
                      gutterOfEnds: null,
                      gutterOfSide: '2px',
                      keepShow: true
                  },
                  bar: {
                      keepShow:true,
                      hoverStyle: true,
                      onlyShowBarOnScroll: false,
                      size: '10px',
                      background: '#333948',
                  }
              }
          }
      },
  }
</script>

<template>
  <v-app style="overflow: auto;height: 100vh;background-color: #3e4958 !important;">
    <vuescroll :ops="ops" >
    <core-app-bar />

    <core-drawer @save-theme="saveTheme" ref="drawer" />

    <core-view />
    </vuescroll>
  </v-app>
</template>

<script>
    import vuescroll from 'vuescroll';
  export default {
    components: {
      CoreDrawer: () => import('./components/core/Drawer'),
      CoreAppBar: () => import('./components/core/AppBar'),
      CoreView: () => import('./components/core/View'),
        vuescroll,
    },
      data() {
          return {
              ops: {
                  vuescroll: {},
                  scrollPanel: {},
                  rail: {
                      background: '#dcffd6',
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
                      background: '#dcffd6',
                  }
              }
          }
      },
      methods: {
          saveTheme() {
              const themeData = this.$route.matched[1].instances.default.getData();
              const colorsData = this.$refs.drawer.getData();
              Promise.all([
                  axios.post('/save-json/theme-data', themeData),
                  axios.post('/save-json/theme-colors', colorsData),
              ]).then(() => alert('Theme saved!'))
                .catch(error => console.error(error));
          }
      }
  }
</script>

<template>
  <v-app style="overflow: hidden;height: 100vh;">
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
            CoreDrawer: () => import('./components/core/Drawer'),
            CoreFooter: () => import('./components/core/Footer'),
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

<style lang="scss">
  /*@import "./styles/index.scss";*/

  .search-project .v-input__control {
    border-radius: 25px !important;
    min-height: 36px !important;
  }
  .in-progrss {
    .v-input__control .v-input__slot:before {
      border-style: none !important;
    }
    .v-input__control > .v-input__slot:after {
      border-style: none !important;
    }
  }
  .v-navigation-drawer .v-list .v-list__tile__title {
    font-size: 14px !important;
  }

  .v-text-field__slot input {
    background: transparent !important;
  }
</style>

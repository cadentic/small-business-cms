<template>
        <v-navigation-drawer
                id="app-drawer"
                app
                mobile-break-point="991"
                clipped
                width="250"
                :mini-variant.sync="miniV2"
                style="position: relative; top: 0px;"
        >
            <vuescroll :ops="ops">
            <v-divider />
            <v-divider class="mx-3 mb-3" />

            <v-list class="sidebar-menus">
                <v-list-item
                        v-for="item in links"
                        :key="item.text"
                        :to="item.to"
                        active-class="success"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="py-0 my-0">
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-avatar class="py-0 my-0">
                        <v-icon>mdi-menu-up</v-icon>
                    </v-list-item-avatar>
                </v-list-item>
            </v-list>
            </vuescroll>
        </v-navigation-drawer>

</template>

<script>
    import vuescroll from 'vuescroll';

    export default {
        props: {
            opened: {
                type: Boolean,
                default: false,
            },
        },
        components: {
            vuescroll
        },
        data: () => ({
            miniV2: false,
            links: [
                {
                    to: '/admin/manage/v2/dashboard',
                    icon: 'mdi-view-dashboard-outline',
                    text: 'Dashboard',
                },
                {
                    to: '/admin/manage/v2/user-profile',
                    icon: 'mdi-account-outline',
                    text: 'TICKET',
                },
                {
                    to: '/admin/manage/v2/table-list',
                    icon: 'mdi-account-card-details-outline',
                    text: 'CONTACT',
                },
                {
                    to: '/admin/manage/v2/icons',
                    icon: 'mdi-battlenet',
                    text: 'SOCIAL',
                },
                {
                    to: '/admin/manage/v2/solution',
                    icon: 'mdi-vimeo',
                    text: 'SOLUTION',
                },
                {
                    to: '/admin/manage/v2/forum',
                    icon: 'mdi-mixcloud',
                    text: 'FORUM',
                },
                {
                    to: '/admin/manage/v2/bots',
                    icon: 'mdi-human-handsdown',
                    text: 'BOTS',
                },
                {
                    to: '/admin/manage/v2/report',
                    icon: 'mdi-signal',
                    text: 'REPORT',
                },
                {
                    to: '/admin/manage/v2/settings',
                    icon: 'mdi-settings',
                    text: 'SETTINGS',
                },
            ],

            ops: {
                vuescroll: {},
                scrollPanel: {},
                rail: {
                    background: '#333948',
                    opacity: 0,
                    size: '10px',
                    specifyBorderRadius: false,
                    gutterOfEnds: null,
                    gutterOfSide: '0.2px',
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
        }),

        methods: {
        },

        mounted() {
            this.$eventHub.$on('toggleMenu', () => {
                this.miniV2 = !this.miniV2
            });
        },
    }
</script>

<style lang="scss" scoped>
    .active {
        border-left: 3px solid #41B883;
        border-radius: unset;
    }
    .active::before {
        opacity: 0;
    }
    .sidebar-menus .v-list-item__title {
        font-size: 14px;
    }
    .v-application--is-ltr .v-list-group--no-action > .v-list-group__items > div > .v-list-item {
        padding-left: 55px;
        padding-right: 0px;
    }
    .v-list-item__avatar i {
        margin-left: 15px;
    }
    .sidebar-menus .primary--text {
        color: #fff !important;
    }
</style>

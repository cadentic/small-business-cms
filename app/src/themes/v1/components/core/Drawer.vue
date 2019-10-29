<template>
    <v-navigation-drawer
            id="app-drawer1"
            app
            mobile-break-point="991"
            clipped
            width="250"
            :mini-variant.sync="miniV1"
            style="position: relative !important; top: 0px !important;"
    >
        <vuescroll :ops="ops">
            <v-divider light/>
            <v-divider/>

            <v-list-item two-line>
                <v-list-item-avatar color="white">
                    <v-img
                            src="@/assets/img/faces/face-1.jpg"
                            height="34"
                            contain
                    />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Simon Groger</v-list-item-title>
                    <v-list-item-subtitle>Administrator</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider class="mx-3 mb-3"/>

            <v-list shaped class="sidebar-menus">
                <v-list-item
                        v-for="item in links"
                        :key="item.text"
                        :to="item.to"
                        active-class="primary"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="py-0 my-0">
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-avatar class="py-0 my-0">
                        <v-icon>mdi-chevron-right</v-icon>
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
            miniV1: false,
            links: [
                {
                    to: '/manage/v1/dashboard',
                    icon: 'mdi-view-dashboard-outline',
                    text: 'Dashboard',
                },
                {
                    to: '/manage/v1/menu-style',
                    icon: 'mdi-dock-window',
                    text: 'Menu Style',
                },
                {
                    to: '/manage/v1/application',
                    icon: 'mdi-android-debug-bridge',
                    text: 'Application',
                },
                {
                    to: '/manage/v1/pages',
                    icon: 'mdi-file-multiple-outline',
                    text: 'Pages',
                },
                {
                    to: '/manage/v1/ui-kit',
                    icon: 'mdi-magnet',
                    text: 'UI Kit',
                },
                {
                    to: '/manage/v1/email',
                    icon: 'mdi-email-outline',
                    text: 'Email',
                },
                {
                    to: '/manage/v1/user',
                    icon: 'mdi-account-outline',
                    text: 'User',
                },
                {
                    to: '/manage/v1/form',
                    icon: 'mdi-format-color-highlight',
                    text: 'Form',
                },
                {
                    to: '/manage/v1/table',
                    icon: 'mdi-file-table-outline',
                    text: 'Table',
                },
                {
                    to: '/manage/v1/icon',
                    icon: 'mdi-gamepad-circle-outline',
                    text: 'Icon',
                },
            ],
            optionsLinks: [
                {
                    to: '/application',
                    icon: 'mdi-android-debug-bridge',
                    text: 'Application',
                },
                {
                    to: '/pages',
                    icon: 'mdi-file-multiple-outline',
                    text: 'Pages',
                },
                {
                    to: '/ui-kit',
                    icon: 'mdi-magnet',
                    text: 'UI Kit',
                },
            ],
            elementsLinks: [
                {
                    to: '/email',
                    icon: 'mdi-email-outline',
                    text: 'Email',
                },
                {
                    to: '/user',
                    icon: 'mdi-account-outline',
                    text: 'User',
                },
                {
                    to: '/form',
                    icon: 'mdi-format-color-highlight',
                    text: 'Form',
                },
                {
                    to: '/table',
                    icon: 'mdi-file-table-outline',
                    text: 'Table',
                },
                {
                    to: '/icon',
                    icon: 'mdi-gamepad-circle-outline',
                    text: 'Icon',
                },
            ],
            ops: {
                vuescroll: {},
                scrollPanel: {},
                rail: {
                    background: '#eee',
                    opacity: 0,
                    size: '10px',
                    specifyBorderRadius: false,
                    gutterOfEnds: null,
                    gutterOfSide: '2px',
                    keepShow: true
                },
                bar: {
                    keepShow: true,
                    hoverStyle: true,
                    onlyShowBarOnScroll: false,
                    size: '10px',
                    background: '#eee',
                }
            }
        }),
        mounted() {
            this.$eventHub.$on('toggleMenuV1', () => {
                this.miniV1 = !this.miniV1
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

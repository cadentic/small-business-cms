<template>
    <v-navigation-drawer
            id="app-drawer"
            app
            mobile-break-point="991"
            width="250"
            permanent
            clipped
            :mini-variant.sync="miniV4"
            style="position: relative;"
    >
        <!--<vuescroll :ops="ops">-->

            <!--<div class="d-flex justify-center" style="height: 120px;">-->
                <!--<v-img-->
                        <!--:src="logo"-->
                        <!--width="120"-->
                        <!--height="80"-->
                        <!--max-width="120"-->
                <!--/>-->
            <!--</div>-->
            <v-list-item
                    v-if="responsive"
            >
                <v-text-field
                        class="purple-input search-input"
                        label="Search..."
                        color="purple"
                />
            </v-list-item>
            <v-list-item
                    to="/admin/manage/v4/dashboard"
                    :active-class="color"
            >
                <v-list-item-action>
                    <v-icon>mdi-view-dashboard-outline</v-icon>
                </v-list-item-action>
                <v-list-item-title v-text="'Dashboard'"/>
            </v-list-item>
            <v-list-item
                    to="/admin/manage/v4/user-profile"
                    :active-class="color"
            >
                <v-list-item-action>
                    <v-icon>mdi-account-outline</v-icon>
                </v-list-item-action>
                <v-list-item-title v-text="'Profile'"/>
            </v-list-item>
            <v-list-group
                    prepend-icon="mdi-shape-outline"
                    no-action
            >
                <template v-slot:activator>
                    <v-list-item>
                        <v-list-item-title>Management</v-list-item-title>
                    </v-list-item>
                </template>

                <v-list-item
                        to="/admin/manage/v4/myteam"
                        :active-class="color"
                >
                    <v-list-item-action>
                        <v-icon>mdi-account-multiple-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-title>My Team</v-list-item-title>
                </v-list-item>
                <v-list-item
                        to="/admin/manage/v4/myproject"
                        :active-class="color"
                >
                    <v-list-item-action>
                        <v-icon>mdi-file-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-title>My Project</v-list-item-title>
                </v-list-item>
                <v-list-item
                        to="/admin/manage/v4/myclient"
                        :active-class="color"
                >
                    <v-list-item-action>
                        <v-icon>mdi-account-box-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-title>My Client</v-list-item-title>
                </v-list-item>
            </v-list-group>
            <v-list-item
                    to="/admin/manage/v4/history"
                    :active-class="color"
            >
                <v-list-item-action>
                    <v-icon>mdi-layers-outline</v-icon>
                </v-list-item-action>
                <v-list-item-title v-text="'History'"/>
            </v-list-item>
            <v-list-item
                    to="/admin/manage/v4/communication"
                    :active-class="color"
            >
                <v-list-item-action>
                    <v-icon>mdi-forum-outline</v-icon>
                </v-list-item-action>
                <v-list-item-title v-text="'Communication'"/>
            </v-list-item>
            <v-list-item
                    to="/admin/manage/v4/settings"
                    :active-class="color"
            >
                <v-list-item-action>
                    <v-icon>mdi-settings-outline</v-icon>
                </v-list-item-action>
                <v-list-item-title v-text="'Settings'"/>
            </v-list-item>
        <!--</vuescroll>-->
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
            miniV4: false,
            logo: require('../../assets/img/logo.png'),
            responsive: false,
            color: 'general',
            inputValue: true,
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
                    keepShow: true,
                    hoverStyle: true,
                    onlyShowBarOnScroll: false,
                    size: '10px',
                    background: '#333948',
                }
            }
        }),

        methods: {},

        mounted() {
            this.$eventHub.$on('toggleMenuV4', () => {
                this.miniV4 = !this.miniV4
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
    .v-list__tile {
        border-radius: 4px;

        &--buy {
            margin-top: auto;
            margin-bottom: 17px;
        }
    }

    .v-image__image--contain {
        top: 9px;
        height: 60%;
    }

    .search-input {
        margin-bottom: 30px !important;
        padding-left: 15px;
        padding-right: 15px;
    }
    .v-list-group .v-list-item {
        padding: 0px;
    }
</style>

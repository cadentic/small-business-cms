<template>
    <v-app-bar
            id="core-app-bar"
            absolute
            app
            flat
            color="#2b3542"
            dark
            height="70"
    >
        <v-toolbar-title class="tertiary--text font-weight-light align-self-center">
            <v-row no-gutters align="center">
                <v-btn
                        dark
                        icon
                        @click.stop="toggleMenu"
                >
                    <v-icon>mdi-view-list</v-icon>
                </v-btn>

                <v-text-field
                        single-line
                        outlined
                        class="ml-4 purple-input"
                        color="green"
                        label="Search..."
                        hide-details
                        append-icon="search"
                        solo
                        background-color="#2b3542"
                />
            </v-row>
        </v-toolbar-title>

        <v-spacer/>
        <template>
            <v-btn icon>
                <v-icon>mdi-laptop-chromebook</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon dense>mdi-tablet-ipad</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon dense>mdi-cellphone-iphone</v-icon>
            </v-btn>
        </template>
        <v-spacer></v-spacer>

        <v-toolbar-items>

            <v-menu
                    bottom
                    left
                    offset-y
                    transition="slide-y-transition"
            >
                <template v-slot:activator="{ attrs, on }">
                    <v-btn
                            class="toolbar-items"
                            icon
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-badge
                                color="green"
                                overlap
                        >
                            <template slot="badge" class="toolbar-badge">
                                {{ notifications.length }}
                            </template>
                            <v-icon>
                                mdi-email
                            </v-icon>
                        </v-badge>
                    </v-btn>
                </template>

                <v-card>
                    <v-list dense>
                        <v-list-item
                                v-for="notification in notifications"
                                :key="notification"
                                @click="onClick"
                        >
                            <v-list-item-title v-text="notification"/>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>

            <v-menu
                    bottom
                    left
                    offset-y
                    transition="slide-y-transition"
            >
                <template v-slot:activator="{ attrs, on }">
                    <v-btn
                            class="toolbar-items"
                            icon
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-badge
                                color="blue"
                                overlap
                        >
                            <template slot="badge" class="toolbar-badge">
                                {{ messages.length }}
                            </template>
                            <v-icon>
                                mdi-forum
                            </v-icon>
                        </v-badge>
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title style="background-color: #439afc;color: #fff; font-size:20px" class="py-1">
                        <small>You have &nbsp;<strong>2 new</strong> &nbsp;conversation</small>
                    </v-card-title>
                    <v-card-text class="pa-0">
                        <v-list dense tree-line max-width="400" class="pb-0">

                            <template v-for="message in messages">
                                <v-list-item @click="onClick" >
                                    <v-list-item-avatar color="blue">
                                        <v-img v-if="message.photo" :src="message.photo"></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="message.name"/>
                                        <v-list-item-subtitle style="white-space: pre-wrap">{{message.text}}</v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-icon>
                                        <v-btn small v-if="message.action=='new'" color="#23d3b4" class="white--text pa-1">New</v-btn>
                                        <v-icon v-if="message.action=='read'" style="transform: scaleX(-1)">mdi-chat</v-icon>
                                    </v-list-item-icon>
                                </v-list-item>
                                <v-divider></v-divider>
                            </template>
                        </v-list>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn text style="text-transform: none;">Read all conversations</v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu>

            <v-menu
                    bottom
                    left
                    offset-y
                    transition="slide-y-transition"
            >
                <template v-slot:activator="{ attrs, on }">
                    <v-btn
                            class="toolbar-items"
                            icon
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-badge
                                color="error"
                                overlap
                        >
                            <template slot="badge">
                                {{ notifications.length }}
                            </template>
                            <v-icon>
                                mdi-bell
                            </v-icon>
                        </v-badge>
                    </v-btn>
                </template>

                <v-card>
                    <v-list dense>
                        <v-list-item
                                v-for="notification in notifications"
                                :key="notification"
                                @click="onClick"
                        >
                            <v-list-item-title v-text="notification"/>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>
            <v-row
                    align="center"
                    class="ml-5 mr-2"
            >
                <v-menu
                        bottom
                        left
                        offset-y
                        transition="slide-y-transition"
                >
                    <template v-slot:activator="{ attrs, on }">
                        <v-row
                                class="toolbar-items"
                                v-bind="attrs"
                                v-on="on"
                                align="center"
                                style="cursor: pointer"
                        >
                            <v-avatar color="blue"></v-avatar>
                            <span class="ml-2 mr-4">{{ name }}
                            <v-icon>mdi-chevron-down</v-icon></span>
                        </v-row>
                    </template>

                    <v-card>
                        <v-list dense>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-account</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    My Profile
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-settings</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    Settings
                                </v-list-item-title>
                            </v-list-item>
                            <v-divider></v-divider>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-home</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    Dashboard
                                </v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-square-edit-outline</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    Create New Campaign
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-telegram</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    My Campaigns
                                </v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-signal</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    Statistics
                                </v-list-item-title>
                            </v-list-item>

                            <v-divider></v-divider>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-power</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    Log out
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </v-row>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    // Utilities
    import {
        mapMutations
    } from 'vuex'

    export default {
        data: () => ({
            notifications: [
                'Mike, John responded to your email',
                'Another Notification',
                'Another One'
            ],
            responsive: false,
            name: 'John Kensington',
            messages: [
                {
                    photo: '',
                    name: 'Charlotte Adams',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing...',
                    action: 'new'
                },
                {
                    photo: '',
                    name: 'Robb Flynn',
                    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
                    action: 'new'
                },
                {
                    photo: '',
                    name: 'Wes Borland',
                    text: 'Laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit...',
                    action: 'read'
                },
                {
                    photo: '',
                    name: 'Kerry King',
                    text: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur...',
                    action: 'read'
                },
                {
                    photo: '',
                    name: 'Zoltan Teglas',
                    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...',
                    action: 'read'
                },
            ]
        }),

        watch: {
            // '$route' (val) {
            //   this.title = val.name
            // }
        },

        mounted() {
            this.onResponsiveInverted()
            window.addEventListener('resize', this.onResponsiveInverted)
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onResponsiveInverted)
        },

        methods: {
            ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
            onClick() {
                this.setDrawer(!this.$store.state.app.drawer)
            },
            onResponsiveInverted() {
                if (window.innerWidth < 991) {
                    this.responsive = true
                } else {
                    this.responsive = false
                }
            },
            toggleMenu() {
                this.$eventHub.$emit('toggleMenu');
            },
        }
    }
</script>

<style lang="scss">
    /* Fix coming in v2.0.8 */
    #core-app-bar {
        width: auto;
        .v-input__slot {
            min-height: 40px;
            input {
                background: none;
            }
        }
        .v-badge__badge {
            font-size: 12px;
            height: 18px;
            min-width: 18px;
        }

    }

    #core-app-bar a {
        text-decoration: none;
    }
</style>

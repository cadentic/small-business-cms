<template>
    <v-app-bar
            id="core-app-bar"
            app
            flat
            clipped-left
            height="70"
            hide-on-scroll
            elevate-on-scroll
            fixed
            style="position: relative;"
    >
        <v-toolbar-title class="tertiary--text font-weight-light align-self-center">
            <v-btn
                    v-if="responsive"
                    dark
                    icon
                    @click.stop="onClick"
            >
                <v-icon>mdi-view-list</v-icon>
            </v-btn>
            <!--<img src="@/assets/img/logo.png" height="60" />-->
            <v-btn text>
                <h1>{{ title }}</h1>
            </v-btn>
        </v-toolbar-title>

        <v-spacer/>
        <!--<v-text-field-->
        <!--flat-->
        <!--solo-->
        <!--hide-details-->
        <!--rounded-->
        <!--prepend-inner-icon="search"-->
        <!--label="Searching"-->
        <!--class="hidden-sm-and-down"-->
        <!--&gt;</v-text-field>-->

        <v-text-field
                app
                class="purple-input"
                label="Searching..."
                hide-details
                color="purple"
                prepend-inner-icon="search"
        ></v-text-field>
        <v-spacer/>

        <v-btn rounded color="blue" class="mr-5">
            <span class="white--text"><small>Get Started</small></span>
        </v-btn>
        <v-menu
                bottom
                left
                offset-y
                transition="slide-y-transition"
        >
            <template v-slot:activator="{ attrs, on }">
                <v-btn
                        class="toolbar-items mr-4"
                        icon
                        v-bind="attrs"
                        v-on="on"
                >
                    NEW
                    <v-icon>mdi-chevron-down</v-icon>
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
                        class="toolbar-items mr-4"
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
                            mdi-comment-outline
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

        <v-btn icon>
            <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-menu
                bottom
                left
                offset-y
                transition="slide-y-transition"
                mr-3
        >
            <template v-slot:activator="{ attrs, on }">
                <div v-on="on"
                     class="mr-4">
                    <v-avatar size="36">
                        <img src="../../assets/img/faces/face-2.jpg">
                    </v-avatar>
                    JOHN DOE
                </div>
            </template>

            <v-card>
                <v-list dense>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>My Profile</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>LogOut</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-menu>

        <v-btn
                icon
                @click.stop="toggleMenu"
        >
            <v-icon>
                mdi-view-list
            </v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        data: () => ({
            notifications: [
                'Mike, John responded to your email',
                'You have 5 new tasks',
                'You\'re now a friend with Andrew',
                'Another Notification',
                'Another One'
            ],
            title: '29 ADMIN',
            responsive: false
        }),

        watch: {
            // '$route'(val) {
            //     this.title = val.name
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

<style>
    /* Fix coming in v2.0.8 */
    #core-app-bar {
        width: auto;
    }

    #core-app-bar a {
        text-decoration: none;
    }
</style>

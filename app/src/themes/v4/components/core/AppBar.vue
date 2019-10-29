<template>
    <v-app-bar
            id="core-app-bar"
            app
            flat
            height="70"
            clipped-left
            absolute
            color="#f5f5f5"
    >
        <v-toolbar-title class="font-weight-light align-items-center d-flex" style="margin-left: -16px;">
            <div style="width: 250px;background-color: white; display: flex; justify-content: center">
                <v-img
                        src="../../assets/img/logo.png"
                        width="150"
                        height="70"
                        max-width="150"
                />
            </div>
            <div class="d-flex align-center">
                <v-btn
                        icon
                        @click.stop="toggleMenu"
                >
                    <v-icon color="black">mdi-view-list</v-icon>
                </v-btn>
            </div>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-text-field
                app
                class="purple-input"
                label="Searching..."
                hide-details
                color="purple"
                prepend-inner-icon="search"
        ></v-text-field>
        <v-spacer></v-spacer>

        <v-badge class="mr-4" color="purple" overlap>
            <template v-slot:badge>
                <span style="font-size: 10px">39</span>
            </template>
            <v-icon>mdi-comment-outline</v-icon>
        </v-badge>
        <v-icon class="mr-4" color>mdi-bell-outline</v-icon>
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
                        <img :src="photo">
                    </v-avatar>
                    Angelbi88
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
    </v-app-bar>
</template>

<script>
    export default {
        data: () => ({
            notifications: [
                "Mike, Thanos is coming",
                "5 new avengers joined the team",
                "You're now friends with Capt",
                "Another Notification",
                "Another One - Dj Khalid voice"
            ],
            title: "I got a digital dash -Future Hendrixx",
            responsive: false,
            responsiveInput: false,
            photo: require('../../assets/img/profile.png')
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
            onResponsiveInverted() {
                if (window.innerWidth < 991) {
                    this.responsive = true
                } else {
                    this.responsive = false
                }
            },
            toggleMenu() {
                this.$eventHub.$emit('toggleMenuV4');
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

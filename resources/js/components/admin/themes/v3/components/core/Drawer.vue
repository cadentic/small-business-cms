<template>
    <v-navigation-drawer
            id="app-drawer"
            app
            color="#f1f5fb"
            floating
            mobile-break-point="991"
            persistent
            width="260"
            :mini-variant="mini"
            style="position: absolute;"
    >
        <vuescroll :ops="ops">
        <v-list-item two-line>
            <v-list-item-avatar color="#3498DB">
                <v-img
                        :src="logo"
                        height="20"
                        contain
                />
                <!--<v-icon>mdi-firework</v-icon>-->
            </v-list-item-avatar>

            <v-list-item-content class="black--text">
                <v-list-item-title class="title">
                    ThemeBuilder
                </v-list-item-title>
                <v-list-item-subtitle class="black--text">
                    <small>ONLINE TEMPLATE EDITOR</small>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list dense nav>
            <v-tooltip right :disabled="!mini" color="black">
                <template v-slot:activator="{ on }">
                    <v-list-group prepend-icon="mdi-view-dashboard"
                                  :value="getExpansion('module')"
                                  v-on="on"
                                  @click="mini?mini=false:''"
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title class="black--text" @click="setExpansion('module')">Manage Modules
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                                v-for="item in manageModules"
                                :key="item"
                                class="ml-3"
                        >
                            <v-list-item-content>
                                <v-list-item-title class="black--text">{{ item }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                </template>

                <div class="pa-2">
                    <span>Manage Modules</span>
                </div>
            </v-tooltip>

            <v-tooltip right nudge-bottom="60" :disabled="!mini" color="black">
                <template v-slot:activator="{ on }">
                    <v-list-group prepend-icon="mdi-camera"
                                  :value="getExpansion('image')"
                                  v-on="on"
                                  @click="mini?mini=false:''">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title class="black--text" @click="setExpansion('image')">Change Header
                                    Images
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                                v-for="item in imageChanges"
                                :key="item"
                                class="ml-3"
                                @click="imageDialog = true"
                        >
                            <v-list-item-content>
                                <v-list-item-title class="black--text">{{ item }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                </template>

                <div style="width: 150px;">
                        <v-list dense color="black" class="ma-0 pa-0">
                            <v-list-item class="blue">
                                <v-list-item-title class="white--text">Change Images</v-list-item-title>
                            </v-list-item>
                            <v-list-item dense>
                                <v-list-item-title class="white--text">Header Images</v-list-item-title>
                            </v-list-item>
                            <v-list-item dense>
                                <v-list-item-title class="white--text">Backgrounds</v-list-item-title>
                            </v-list-item>
                            <v-list-item dense>
                                <v-list-item-title class="white--text">Gallery</v-list-item-title>
                            </v-list-item>
                        </v-list>
                </div>
            </v-tooltip>


            <v-tooltip right :disabled="!mini" color="black">
                <template v-slot:activator="{ on }">
                    <v-list-group prepend-icon="mdi-water"
                                  :value="getExpansion('style')"
                                  v-on="on"
                                  @click="mini?mini=false:''">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title class="black--text" @click="setExpansion('style')">Style Switcher
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                                v-for="data in colorData"
                                :key="data.text"
                                class="ml-3"
                        >
                            <v-list-item-content>
                                <v-list-item-title class="black--text">{{ data.text }}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-icon>
                                <v-menu offet-x nudge-right="90"
                                        :close-on-content-click="false"
                                        max-height="350"
                                        max-width="250">
                                    <template v-slot:activator="{ on }">
                                        <v-btn v-on="on"
                                               tile
                                               :color="data.color"
                                               height="30" width="80"
                                        >{{ data.color }}
                                        </v-btn>
                                    </template>
                                    <v-color-picker
                                            light
                                            flat
                                            hide-mode-switch
                                            mode="hexa"
                                            v-model="data.color"
                                    >
                                    </v-color-picker>
                                </v-menu>

                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                </template>
                <div class="pa-2">
                    <span>Style Switcher</span>
                </div>
            </v-tooltip>


            <v-tooltip right :disabled="!mini" color="black">
                <template v-slot:activator="{ on }">
                    <v-list-group prepend-icon="mdi-image"
                                  :value="getExpansion('style')"
                                  v-on="on"
                                  @click="mini?mini=false:''">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title class="black--text">Backgrounds</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                                v-for="data in backgrounds"
                                :key="data"
                                class="ml-3"
                        >
                            <v-list-item-content>
                                <v-list-item-title class="black--text">{{ data }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                </template>
                <div class="pa-2">
                    <span>Backgrounds</span>
                </div>
            </v-tooltip>


            <template v-if="mini">

                <v-tooltip right :disabled="!mini" color="black">
                    <template v-slot:activator="{ on }">
                        <v-list-item
                                active-class="blue" v-on="on"
                                @click="mini?mini=false:''"
                        >
                            <v-list-item-icon>
                                <v-icon color="black">mdi-undo-variant</v-icon>
                            </v-list-item-icon>

                            <v-list-item-title class="black--text">Undo</v-list-item-title>
                        </v-list-item>
                    </template>
                    <div class="pa-2">
                        <span>Undo</span>
                    </div>
                </v-tooltip>


                <v-tooltip right :disabled="!mini" color="black">
                    <template v-slot:activator="{ on }">
                        <v-list-item
                                active-class="blue" v-on="on"
                                @click="mini?mini=false:''"
                        >
                            <v-list-item-icon>
                                <v-icon color="black">mdi-redo-variant</v-icon>
                            </v-list-item-icon>

                            <v-list-item-title class="black--text">Redo</v-list-item-title>
                        </v-list-item>
                    </template>
                    <div class="pa-2">
                        <span>Redo</span>
                    </div>
                </v-tooltip>

                <v-tooltip right :disabled="!mini" color="black">
                    <template v-slot:activator="{ on }">
                        <v-list-item
                                active-class="blue" v-on="on"
                                @click="mini?mini=false:''"
                        >
                            <v-list-item-icon>
                                <v-icon color="blue">mdi-download</v-icon>
                            </v-list-item-icon>

                            <v-list-item-title class="black--text">download html</v-list-item-title>
                        </v-list-item>
                    </template>
                    <div class="pa-2">
                        <span>Download HTML</span>
                    </div>
                </v-tooltip>

                <v-tooltip right :disabled="!mini" color="black">
                    <template v-slot:activator="{ on }">
                        <v-list-item
                                active-class="blue" v-on="on"
                                @click="mini?mini=false:''"
                        >
                            <v-list-item-icon>
                                <v-icon color="black">mdi-content-save</v-icon>
                            </v-list-item-icon>

                            <v-list-item-title class="black--text">save draft</v-list-item-title>
                        </v-list-item>
                    </template>
                    <div class="pa-2">
                        <span>Save Draft</span>
                    </div>
                </v-tooltip>
            </template>

            <div v-if="!mini" class="ma-3">
                <v-row
                        justify="space-around" no-gutters
                >
                    <v-btn icon tile width="70" color="black">
                        <v-icon class="mr-1">mdi-undo</v-icon>
                        <span style="text-transform: none">Undo</span>
                    </v-btn>
                    <v-btn icon tile width="70" color="black">
                        <span style="text-transform: none">Redo</span>
                        <v-icon class="ml-1">mdi-redo</v-icon>
                    </v-btn>
                </v-row>

                <v-btn block color="blue" class="my-3 white--text">
                    <v-icon>mdi-download</v-icon>
                    <span class="ml-1">Download HTML</span>
                </v-btn>

                <v-btn block color="grey dark-2" class="white--text" @click="$emit('save-theme')">
                    <v-icon>mdi-content-save</v-icon>
                    <span class="ml-2">save theme</span>
                </v-btn>
            </div>

        </v-list>
        </vuescroll>


        <v-dialog v-model="imageDialog" max-width="700" @click:outside="$refs.pictureInput.removeImage()">
            <v-card>
                <v-card-title class="headline justify-space-between">
                    <span>Files</span>
                    <v-btn color="blue" style="text-transform: none; color:white;" @click="upload">Upload File</v-btn>
                </v-card-title>
                <v-progress-linear
                        :active="uploading"
                        :indeterminate="uploading"
                        height="10px"
                        color="light-blue accent-4"
                ></v-progress-linear>
                <v-divider></v-divider>
                <v-card-text class="pt-5" style="background-color: rgba(0, 0, 0, 0.2)">
                    <picture-input
                            ref="pictureInput"
                            width="700"
                            height="400"
                            margin="0"
                            accept="image/jpeg,image/png"
                            size="10"
                            :hideChangeButton="true"
                            :removable="false"
                            :customStrings="{
                                upload: '<h1>Bummer!</h1>',
                                drag: 'Drag & Drop your files here or <a class=\'blue--text\'>browse</a>'
                              }">
                    </picture-input>
                </v-card-text>
            </v-card>
        </v-dialog>


    </v-navigation-drawer>
</template>

<script>
    import vuescroll from 'vuescroll';
    import PictureInput from 'vue-picture-input'
    export default {
        components: {
            PictureInput, vuescroll
        },
        props: {
            opened: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            logo: require('../../assets/img/logo.png'),
            mini: false,
            colorData: [],
            imageChanges: [
                'Header Images',
                'Backgrounds',
                'Gallery'
            ],
            manageModules: [
                'Module1',
                'Module2'
            ],
            backgrounds: [
                'Background1',
                'Background2'
            ],
            expanded: '',
            imageDialog: false,
            uploading: false,
            ops: {
                vuescroll: {},
                scrollPanel: {},
                rail: {
                    background: '#fff',
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
                    background: '#a2e197',
                }
            }
        }),

        computed: {
        },

        methods: {
            setExpansion(val) {
                if (this.expanded === val) {
                    this.expanded = ''
                } else {
                    this.expanded = val
                }
            },
            getExpansion(val) {
                // return !this.mini
                if (this.mini == true) {
                    return false
                } else {
                    setTimeout(() => {
                        return this.expanded === val
                    }, 100)
                }
            },
            upload() {
                if (this.$refs.pictureInput.image) {
                    this.uploading = true
                }
            },
            getData() {
                return this.colorData;
            }
        },
        watch: {
            uploading (val) {
                if (!val) return

                setTimeout(() => (this.uploading = false), 3000)
            },
        },
        mounted() {
            this.$eventHub.$on('toggleMenu', () => {
                this.mini = !this.mini
                if (this.mini) {

                }
            });
            axios.get('/json/theme-colors.json')
                 .then(({data}) => {
                     this.colorData = data;
                 });
        },
    }
</script>

<style lang="scss">
    #app-drawer {
        .v-list-group__header__append-icon {
            margin-left: 0px !important;
            min-width: 20px !important;
        }
        .v-text-field__slot {
            font-size: 11px;
        }
    }
    .v-tooltip__content {
        padding: 0px;
    }
    .v-input__prepend-outer {
        display: none;
    }
    .picture-inner-text {
        font-size: 20px !important;
    }

</style>

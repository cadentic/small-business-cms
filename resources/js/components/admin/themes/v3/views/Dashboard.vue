<template>
    <v-container fluid style="position: relative;height: 100%;">
        <Split style="min-height: calc(100% - 100px)" :gutterSize="4">
            <SplitArea :size="33" :minSize="200">
                <v-row class="mr-2" justify="end">
                    <v-btn tile class="no-transform pa-2" @click="duplicate">
                        Duplicate
                        <v-icon>mdi-file-multiple-outline</v-icon>
                    </v-btn>
                </v-row>
                <v-row justify="end" class="my-3 mr-2">
                    <v-btn tile class="no-transform pa-2" @click="deleteElement">
                        Delete
                        <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                </v-row>
                <v-row class="mr-2" justify="end">
                    <v-btn tile class="no-transform pa-2 white--text"
                           color="blue"
                           @click="imageDialog=true">
                        Change background
                        <v-icon>mdi-image-outline</v-icon>
                    </v-btn>
                </v-row>
            </SplitArea>
            <SplitArea
                    id="mainPane"
                    :size="34" :minSize="200"
                    v-click-outside="unselect">
                <v-resizable
                        @resize:move="move"
                        :active="['b']"
                        :height="resizeHeight"
                        :min-height="minH"
                        class="bottom-resize"
                >
                        <Container
                                @drop="onDrop($event)"
                                drag-handle-selector=".drag-handle"
                                id="dnd-container"
                        >
                            <Draggable v-for="(data, i) in themeData" :key="i" style="background-color: white;"
                                       :class="selected == i ? `draggable-item-focus` : ` `"
                                       :id="'drag-' + i">
                                    <div class="d-flex justify-space-between">
                                        <div
                                                style="width: 100%;"
                                                @click="selected = i"
                                                @dblclick="openEditor(data.html, i)">

                                            <v-resizable
                                                    @resize:start="selected = i"
                                                    @resize:move="moveE"
                                                    :active="['b']"
                                                    :min-height="subMinH"
                                                    :height="data.height"
                                                    class="bottom-resize"
                                                    style="background-color: white"
                                            >
                                            <div v-html="data.html" style="min-height:130px"></div>

                                            </v-resizable>
                                        </div>
                                        <v-btn icon class="drag-handle" height="25" width="25">
                                            <v-icon>
                                                mdi-menu-swap
                                            </v-icon>
                                        </v-btn>
                                    </div>
                                <v-divider></v-divider>
                            </Draggable>
                        </Container>
                </v-resizable>
            </SplitArea>

            <SplitArea :size="33" :minSize="100"></SplitArea>
        </Split>

        <v-dialog v-model="imageDialog" max-width="600" min-height="300"
                  @click:outside="$refs.pictureInput.removeImage()">
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
                            width="600"
                            height="350"
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

        <v-dialog v-model="editorDialog" persistent max-width="600">
            <v-card>
                <v-card-title class="headline justify-center white--text"
                              style="background-color: #3e4958">
                    WYSIWYG Editor
                </v-card-title>
                <v-card-text class="pa-0">
                    <ckeditor
                            v-model="content"
                            :config="config">
                    </ckeditor>
                </v-card-text>
                <v-card-actions class="justify-end pt-4 pb-5">
                    <v-btn tile color="#b6bcc4" @click="editorDialog = false; content=''"
                           class="white--text py-2 px-3">
                        <span style="text-transform: none;">Cancel</span>
                    </v-btn>
                    <v-btn tile color="blue" @click="saveEditor" class="white--text pa-2">
                        <span style="text-transform: none;">Save Changes</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import {Container, Draggable} from 'vue-smooth-dnd'
    import Ckeditor from 'vue-ckeditor2'
    import PictureInput from 'vue-picture-input'
    import ClickOutside from 'vue-click-outside'
    import VResizable from "vue-resizable";

    export default {
        directives: {
            ClickOutside
        },
        components: {
            Container,
            Draggable,
            Ckeditor,
            PictureInput,
            VResizable
        },
        data() {
            return {
                imageDialog: false,
                uploading: false,
                editorDialog: false,
                content: '',
                config: {
                    toolbar: [
                        {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike']},
                        {name: 'links', items: ['Link', 'Blockquote', 'Image', 'Source']},
                        {
                            name: 'paragraph',
                            items: ['NumberedList', 'BulletedList', 'JustifyBlock', 'JustifyLeft', 'JustifyCenter', 'JustifyRight']
                        },
                        {name: 'clipboard', items: ['Undo', 'Redo']},
                        '/',
                    ],
                    height: 300
                },
                themeData: [],
                selected: -1,
                minHeight: 100,
                resizeHeight: window.innerHeight - 100,
                minH: 130,
                subMinH: 130
            }
        },
        mounted() {
            axios.get('/json/theme-data.json')
                 .then(({data}) => {
                     this.themeData = data;
                 });
        },
        methods: {
            onDrop(dropResult) {
                this.themeData = this.applyDrag(this.themeData, dropResult)
            },
            applyDrag(arr, dragResult) {
                const {removedIndex, addedIndex, payload} = dragResult
                if (removedIndex === null && addedIndex === null) return arr

                const result = [...arr]
                let itemToAdd = payload

                if (removedIndex !== null) {
                    itemToAdd = result.splice(removedIndex, 1)[0]
                }

                if (addedIndex !== null) {
                    result.splice(addedIndex, 0, itemToAdd)
                }

                return result
            },
            openEditor(content, id) {
                this.content = content
                this.editorDialog = true
                localStorage.setItem('openItem', id)
            },
            saveEditor() {
                const form_id = localStorage.getItem('openItem');
                this.themeData[form_id].html = this.content
                this.content = ''
                this.editorDialog = false
            },
            upload() {
                if (this.$refs.pictureInput.image) {
                    this.uploading = true
                }
            },
            unselect() {
                this.selected = -1
            },
            duplicate() {
                if (this.selected != -1) {
                    let newData = Object()
                    newData = {
                        html: this.themeData[this.selected].html,
                        height: document.getElementById('drag-' + this.selected).offsetHeight,
                    }
                    console.log()
                    this.themeData.splice((this.selected + 1), 0, newData)
                }
                setTimeout(()=> {
                    const dndHeight = document.getElementById('dnd-container').offsetHeight;
                    if (this.resizeHeight < dndHeight) {
                        this.resizeHeight = dndHeight
                    }
                }, 100)
                this.minH = document.getElementById('dnd-container').offsetHeight;
            },
            deleteElement() {
                if (this.selected != -1) {
                    this.themeData.splice(this.selected, 1);
                }
                const dndHeight = document.getElementById('dnd-container').offsetHeight;
                this.minH = dndHeight
            },
            move(data) {
                this.minH = document.getElementById('dnd-container').offsetHeight;
                this.resizeHeight = data.height;
            },
            moveE(data) {
                this.themeData[this.selected].height = data.height
                if (data.height == 130) {
                    this.minH =  document.getElementById('mainPane').offsetHeight;
                }
            },
            getData() {
                return this.themeData;
            }
        },
        watch: {
            uploading(val) {
                if (!val) return

                setTimeout(() => (this.uploading = false), 3000)
            },
        },
    }
</script>

<style lang="scss" scoped>
    .no-transform {
        text-transform: none;
    }

    .picture-inner-text {
        font-size: 20px !important;
    }

    .split {
        /*overflow: visible;*/
    }

    .draggable-item-focus, draggable-item:hover {
        box-shadow: 0 0 5px #51cbee;
        border: 2px solid #51cbee;
    }

    .bottom-resize {
        background-color: #d9e0ea;
        position: relative;
        overflow:hidden;
        width: 100% !important;
    }
</style>

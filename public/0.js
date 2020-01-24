(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.picture-input[data-v-431cb064] {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n.preview-container[data-v-431cb064] {\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  cursor: pointer;\n  overflow: hidden;\n}\n.picture-preview[data-v-431cb064] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 10001;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: rgba(200,200,200,.25);\n}\n.picture-preview.dragging-over[data-v-431cb064] {\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n}\n.picture-inner[data-v-431cb064] {\n  position: relative;\n  z-index: 10002;\n  pointer-events: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 1em auto;\n  padding: 0.5em;\n  border: .3em dashed rgba(66,66,66,.15);\n  border-radius: 8px;\n  width: calc(100% - 2.5em);\n  height: calc(100% - 2.5em);\n  display: table;\n}\n.picture-inner .picture-inner-text[data-v-431cb064] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 2em;\n  line-height: 1.5;\n}\nbutton[data-v-431cb064] {\n  margin: 1em .25em;\n  cursor: pointer;\n}\ninput[type=file][data-v-431cb064] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--6-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--6-2!../vue-loader/lib??vue-loader-options!./PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-picture-input/PictureInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'picture-input',
  props: {
    width: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    },
    height: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    },
    margin: {
      type: [String, Number],
      default: 0
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    size: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    },
    name: {
      type: String,
      default: null
    },
    id: {
      type: [String, Number],
      default: null
    },
    buttonClass: {
      type: String,
      default: 'btn btn-primary button'
    },
    removeButtonClass: {
      type: String,
      default: 'btn btn-secondary button secondary'
    },
    aspectButtonClass: {
      type: String,
      default: 'btn btn-secondary button secondary'
    },
    prefill: {
      type: [String, File],
      default: ''
    },
    prefillOptions: {
      type: Object,
      default: () => {
        return {}
      }
    },
    crop: {
      type: Boolean,
      default: true
    },
    radius: {
      type: [String, Number],
      default: 0
    },
    removable: {
      type: Boolean,
      default: false
    },
    hideChangeButton: {
      type: Boolean,
      default: false
    },
    autoToggleAspectRatio: {
      type: Boolean,
      default: false
    },
    toggleAspectRatio: {
      type: Boolean,
      default: false
    },
    changeOnClick: {
      type: Boolean,
      default: true
    },
    plain: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 10000
    },
    alertOnError: {
      type: Boolean,
      default: true
    },
    customStrings: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  watch: {
    prefill () {
      if (this.prefill) {
        this.preloadImage(this.prefill, this.prefillOptions)
      } else {
        this.removeImage()
      }
    }
  },
  data () {
    return {
      imageSelected: false,
      previewHeight: 0,
      previewWidth: 0,
      draggingOver: false,
      canvasWidth: 0,
      canvasHeight: 0,
      strings: {
        upload: '<p>Your device does not support file uploading.</p>',
        drag: 'Drag an image or <br>click here to select a file',
        tap: 'Tap here to select a photo <br>from your gallery',
        change: 'Change Photo',
        aspect: 'Landscape/Portrait',
        remove: 'Remove Photo',
        select: 'Select a Photo',
        selected: '<p>Photo successfully selected!</p>',
        fileSize: 'The file size exceeds the limit',
        fileType: 'This file type is not supported.'
      }
    }
  },
  mounted () {
    this.updateStrings()
    if (this.prefill) {
      this.preloadImage(this.prefill, this.prefillOptions)
    }

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
      this.onResize()
    })
    if (this.supportsPreview) {
      this.pixelRatio = Math.round(window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI)
      const canvas = this.$refs.previewCanvas
      if (canvas.getContext) {
        this.context = canvas.getContext('2d')
        this.context.scale(this.pixelRatio, this.pixelRatio)
      }
    }
    if (this.accept !== 'image/*') {
      this.fileTypes = this.accept.split(',')
      this.fileTypes = this.fileTypes.map(s => s.trim())
    }

    this.canvasWidth = this.width
    this.canvasHeight = this.height

    this.$on('error', this.onError)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
    this.$off('error', this.onError)
  },
  methods: {
    updateStrings () {
      for (let s in this.customStrings) {
        if (s in this.strings && typeof this.customStrings[s] === 'string') {
          this.strings[s] = this.customStrings[s]
        }
      }
    },
    onClick () {
      if (!this.imageSelected) {
        this.selectImage()
        return
      }

      if (this.changeOnClick) {
        this.selectImage()
      }

      this.$emit('click')
    },
    onResize () {
      this.resizeCanvas()

      if (this.imageObject) {
        this.drawImage(this.imageObject)
      }
    },
    onDragStart () {
      if (!this.supportsDragAndDrop) {
        return
      }
      this.draggingOver = true
    },
    onDragStop () {
      if (!this.supportsDragAndDrop) {
        return
      }
      this.draggingOver = false
    },
    onFileDrop (e) {
      this.onDragStop()
      this.onFileChange(e)
    },
    onFileChange (e, prefill) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      if (files[0].size <= 0 || files[0].size > this.size * 1024 * 1024) {
        this.$emit('error', {
          type: 'fileSize',
          fileSize: files[0].size,
          fileType: files[0].type,
          fileName: files[0].name,
          message: this.strings.fileSize + ' (' + this.size + 'MB)'
        })
        return
      }
      if (files[0].name === this.fileName && files[0].size === this.fileSize && this.fileModified === files[0].lastModified) {
        return
      }

      this.file = files[0]
      this.fileName = files[0].name
      this.fileSize = files[0].size
      this.fileModified = files[0].lastModified
      this.fileType = files[0].type

      if (this.accept === 'image/*') {
        if (files[0].type.substr(0, 6) !== 'image/') {
          return
        }
      } else {
        if (this.fileTypes.indexOf(files[0].type) === -1) {
          this.$emit('error', {
            type: 'fileType',
            fileSize: files[0].size,
            fileType: files[0].type,
            fileName: files[0].name,
            message: this.strings.fileType
          })
          return
        }
      }
      this.imageSelected = true
      this.image = ''
      if (this.supportsPreview) {
        this.loadImage(files[0], prefill || false)
      } else {
        if (prefill) {
          this.$emit('prefill')
        } else {
          this.$emit('change', this.image)
        }
      }
    },
    onError (error) {
      if (this.alertOnError) {
        alert(error.message)
      }
    },
    loadImage (file, prefill) {
      this.getEXIFOrientation(file, orientation => {
        this.setOrientation(orientation)
        let reader = new FileReader()
        reader.onload = e => {
          this.image = e.target.result
          if (prefill) {
            this.$emit('prefill')
          } else {
            this.$emit('change', this.image)
          }
          this.imageObject = new Image()
          this.imageObject.onload = () => {
            if (this.autoToggleAspectRatio) {
              let canvasOrientation = this.getOrientation(this.canvasWidth, this.canvasHeight)
              let imageOrientation = this.getOrientation(this.imageObject.width, this.imageObject.height)
              if (canvasOrientation !== imageOrientation) {
                this.rotateCanvas()
              }
            }
            this.drawImage(this.imageObject)
          }
          this.imageObject.src = this.image
        }
        reader.readAsDataURL(file)
      })
    },
    drawImage (image) {
      this.imageWidth = image.width
      this.imageHeight = image.height
      this.imageRatio = image.width / image.height
      let offsetX = 0
      let offsetY = 0
      let scaledWidth = this.previewWidth
      let scaledHeight = this.previewHeight
      const previewRatio = this.previewWidth / this.previewHeight
      if (this.crop) {
        if (this.imageRatio >= previewRatio) {
          scaledWidth = scaledHeight * this.imageRatio
          offsetX = (this.previewWidth - scaledWidth) / 2
        } else {
          scaledHeight = scaledWidth / this.imageRatio
          offsetY = (this.previewHeight - scaledHeight) / 2
        }
      } else {
        if (this.imageRatio >= previewRatio) {
          scaledHeight = scaledWidth / this.imageRatio
          offsetY = (this.previewHeight - scaledHeight) / 2
        } else {
          scaledWidth = scaledHeight * this.imageRatio
          offsetX = (this.previewWidth - scaledWidth) / 2
        }
      }
      const canvas = this.$refs.previewCanvas
      canvas.style.background = 'none'
      canvas.width = this.previewWidth * this.pixelRatio
      canvas.height = this.previewHeight * this.pixelRatio
      this.context.setTransform(1, 0, 0, 1, 0, 0)
      this.context.clearRect(0, 0, canvas.width, canvas.height)
      if (this.rotate) {
        this.context.translate(offsetX * this.pixelRatio, offsetY * this.pixelRatio)
        this.context.translate(scaledWidth / 2 * this.pixelRatio, scaledHeight / 2 * this.pixelRatio)
        this.context.rotate(this.rotate)
        offsetX = -scaledWidth / 2
        offsetY = -scaledHeight / 2
      }
      this.context.drawImage(image,
        offsetX * this.pixelRatio,
        offsetY * this.pixelRatio,
        scaledWidth * this.pixelRatio,
        scaledHeight * this.pixelRatio)
    },
    selectImage () {
      this.$refs.fileInput.click()
    },
    removeImage () {
      this.$refs.fileInput.value = ''
      this.$refs.fileInput.type = ''
      this.$refs.fileInput.type = 'file'
      this.fileName = ''
      this.fileType = ''
      this.fileSize = 0
      this.fileModified = 0
      this.imageSelected = false
      this.image = ''
      this.file = null
      this.imageObject = null
      this.$refs.previewCanvas.style.backgroundColor = 'rgba(200,200,200,.25)'
      this.$refs.previewCanvas.width = this.previewWidth * this.pixelRatio
      this.$emit('remove')
    },
    rotateImage () {
      this.rotateCanvas()

      if (this.imageObject) {
        this.drawImage(this.imageObject)
      }

      let newOrientation = this.getOrientation(this.canvasWidth, this.canvasHeight)
      this.$emit('aspectratiochange', newOrientation)
    },
    resizeCanvas () {
      let previewRatio = this.canvasWidth / this.canvasHeight
      let newWidth = this.$refs.container.clientWidth
      if (!this.toggleAspectRatio && newWidth === this.containerWidth) {
        return
      }
      this.containerWidth = newWidth
      this.previewWidth = Math.min(this.containerWidth - this.margin * 2, this.canvasWidth)
      this.previewHeight = this.previewWidth / previewRatio
    },
    getOrientation (width, height) {
      let orientation = 'square'

      if (width > height) {
        orientation = 'landscape'
      } else if (width < height) {
        orientation = 'portrait'
      }

      return orientation
    },
    switchCanvasOrientation () {
      const canvasWidth = this.canvasWidth
      const canvasHeight = this.canvasHeight

      this.canvasWidth = canvasHeight
      this.canvasHeight = canvasWidth
    },
    rotateCanvas () {
      this.switchCanvasOrientation()
      this.resizeCanvas()
    },
    setOrientation (orientation) {
      this.rotate = false
      if (orientation === 8) {
        this.rotate = -Math.PI / 2
      } else if (orientation === 6) {
        this.rotate = Math.PI / 2
      } else if (orientation === 3) {
        this.rotate = -Math.PI
      }
    },
    getEXIFOrientation (file, callback) {
      var reader = new FileReader()
      reader.onload = e => {
        var view = new DataView(e.target.result)
        if (view.getUint16(0, false) !== 0xFFD8) {
          return callback(-2)
        }
        var length = view.byteLength
        var offset = 2
        while (offset < length) {
          var marker = view.getUint16(offset, false)
          offset += 2
          if (marker === 0xFFE1) {
            if (view.getUint32(offset += 2, false) !== 0x45786966) {
              return callback(-1)
            }
            var little = view.getUint16(offset += 6, false) === 0x4949
            offset += view.getUint32(offset + 4, little)
            var tags = view.getUint16(offset, little)
            offset += 2
            for (var i = 0; i < tags; i++) {
              if (view.getUint16(offset + (i * 12), little) === 0x0112) {
                return callback(view.getUint16(offset + (i * 12) + 8, little))
              }
            }
          } else if ((marker & 0xFF00) !== 0xFF00) {
            break
          } else {
            offset += view.getUint16(offset, false)
          }
        }
        return callback(-1)
      }
      reader.readAsArrayBuffer(file.slice(0, 65536))
    },
    preloadImage (source, options) {
      // ie 11 support
      let File = window.File
      try {
        new File([], '') // eslint-disable-line
      } catch (e) {
        File = class File extends Blob {
          constructor (chunks, filename, opts = {}) {
            super(chunks, opts)
            this.lastModifiedDate = new Date()
            this.lastModified = +this.lastModifiedDate
            this.name = filename
          }
        }
      }
      options = Object.assign({}, options)
      if (typeof source === 'object') {
        this.imageSelected = true
        this.image = ''
        if (this.supportsPreview) {
          this.loadImage(source, true)
        } else {
          this.$emit('prefill')
        }
        return
      }
      let headers = new Headers()
      headers.append('Accept', 'image/*')
      fetch(source, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      }).then(response => {
        return response.blob()
      })
      .then(imageBlob => {
        let e = { target: { files: [] } }
        const fileName = options.fileName || source.split('/').slice(-1)[0]
        let mediaType = options.mediaType || ('image/' + (options.fileType || fileName.split('.').slice(-1)[0]))
        mediaType = mediaType.replace('jpg', 'jpeg')
        e.target.files[0] = new File([imageBlob], fileName, { type: mediaType })
        this.onFileChange(e, true)
      })
      .catch(err => {
        this.$emit('error', {
          type: 'failedPrefill',
          message: 'Failed loading prefill image: ' + err
        })
      })
    }
  },
  computed: {
    supportsUpload () {
      if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
        return false
      }
      const el = document.createElement('input')
      el.type = 'file'
      return !el.disabled
    },
    supportsPreview () {
      return window.FileReader && !!window.CanvasRenderingContext2D
    },
    supportsDragAndDrop () {
      const div = document.createElement('div')
      return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && !('ontouchstart' in window || navigator.msMaxTouchPoints)
    },
    computedClasses () {
      const classObject = {}
      classObject['dragging-over'] = this.draggingOver
      return classObject
    },
    fontSize () {
      return Math.min(0.04 * this.previewWidth, 21) + 'px'
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=template&id=431cb064&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-picture-input/PictureInput.vue?vue&type=template&id=431cb064&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "container",
      staticClass: "picture-input",
      attrs: { id: "picture-input" }
    },
    [
      !_vm.supportsUpload
        ? _c("div", { domProps: { innerHTML: _vm._s(_vm.strings.upload) } })
        : _vm.supportsPreview
        ? _c("div", [
            _c(
              "div",
              {
                staticClass: "preview-container",
                style: {
                  maxWidth: _vm.previewWidth + "px",
                  height: _vm.previewHeight + "px",
                  borderRadius: _vm.radius + "%"
                }
              },
              [
                _c("canvas", {
                  ref: "previewCanvas",
                  staticClass: "picture-preview",
                  class: _vm.computedClasses,
                  style: {
                    height: _vm.previewHeight + "px",
                    zIndex: _vm.zIndex + 1
                  },
                  on: {
                    drag: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                    },
                    dragover: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                    },
                    dragstart: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onDragStart($event)
                    },
                    dragenter: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onDragStart($event)
                    },
                    dragend: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onDragStop($event)
                    },
                    dragleave: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onDragStop($event)
                    },
                    drop: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onFileDrop($event)
                    },
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.onClick($event)
                    }
                  }
                }),
                _vm._v(" "),
                !_vm.imageSelected && !_vm.plain
                  ? _c(
                      "div",
                      {
                        staticClass: "picture-inner",
                        style: {
                          top: -_vm.previewHeight + "px",
                          marginBottom: -_vm.previewHeight + "px",
                          fontSize: _vm.fontSize,
                          borderRadius: _vm.radius + "%",
                          zIndex: _vm.zIndex + 2
                        }
                      },
                      [
                        _vm.supportsDragAndDrop
                          ? _c("span", {
                              staticClass: "picture-inner-text",
                              domProps: { innerHTML: _vm._s(_vm.strings.drag) }
                            })
                          : _c("span", {
                              staticClass: "picture-inner-text",
                              domProps: { innerHTML: _vm._s(_vm.strings.tap) }
                            })
                      ]
                    )
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _vm.imageSelected && !_vm.hideChangeButton
              ? _c(
                  "button",
                  {
                    class: _vm.buttonClass,
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.selectImage($event)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.strings.change))]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.imageSelected && _vm.removable
              ? _c(
                  "button",
                  {
                    class: _vm.removeButtonClass,
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.removeImage($event)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.strings.remove))]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.imageSelected &&
            _vm.toggleAspectRatio &&
            _vm.width !== _vm.height
              ? _c(
                  "button",
                  {
                    class: _vm.aspectButtonClass,
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.rotateImage($event)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.strings.aspect))]
                )
              : _vm._e()
          ])
        : _c("div", [
            !_vm.imageSelected
              ? _c(
                  "button",
                  {
                    class: _vm.buttonClass,
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.selectImage($event)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.strings.select))]
                )
              : _c("div", [
                  _c("div", {
                    domProps: { innerHTML: _vm._s(_vm.strings.selected) }
                  }),
                  _vm._v(" "),
                  !_vm.hideChangeButton
                    ? _c(
                        "button",
                        {
                          class: _vm.buttonClass,
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.selectImage($event)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.strings.change))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.removable
                    ? _c(
                        "button",
                        {
                          class: _vm.removeButtonClass,
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.removeImage($event)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.strings.remove))]
                      )
                    : _vm._e()
                ])
          ]),
      _vm._v(" "),
      _c("input", {
        ref: "fileInput",
        attrs: { type: "file", name: _vm.name, id: _vm.id, accept: _vm.accept },
        on: { change: _vm.onFileChange }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-picture-input/PictureInput.vue":
/*!*********************************************************!*\
  !*** ./node_modules/vue-picture-input/PictureInput.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PictureInput_vue_vue_type_template_id_431cb064_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PictureInput.vue?vue&type=template&id=431cb064&scoped=true& */ "./node_modules/vue-picture-input/PictureInput.vue?vue&type=template&id=431cb064&scoped=true&");
/* harmony import */ var _PictureInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PictureInput.vue?vue&type=script&lang=js& */ "./node_modules/vue-picture-input/PictureInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css& */ "./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PictureInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PictureInput_vue_vue_type_template_id_431cb064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PictureInput_vue_vue_type_template_id_431cb064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "431cb064",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-picture-input/PictureInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-picture-input/PictureInput.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./node_modules/vue-picture-input/PictureInput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib??vue-loader-options!./PictureInput.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../style-loader!../css-loader??ref--6-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--6-2!../vue-loader/lib??vue-loader-options!./PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue-picture-input/PictureInput.vue?vue&type=template&id=431cb064&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-picture-input/PictureInput.vue?vue&type=template&id=431cb064&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_template_id_431cb064_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../vue-loader/lib??vue-loader-options!./PictureInput.vue?vue&type=template&id=431cb064&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=template&id=431cb064&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_template_id_431cb064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_template_id_431cb064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_smooth_dnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-smooth-dnd */ "./node_modules/vue-smooth-dnd/dist/vue-smooth-dnd.esm.js");
/* harmony import */ var vue_ckeditor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ckeditor2 */ "./node_modules/vue-ckeditor2/dist/vue-ckeditor2.esm.js");
/* harmony import */ var vue_picture_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-picture-input */ "./node_modules/vue-picture-input/PictureInput.vue");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_resizable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-resizable */ "./node_modules/vue-resizable/dist/main.js");
/* harmony import */ var vue_resizable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_resizable__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  directives: {
    ClickOutside: vue_click_outside__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  components: {
    Container: vue_smooth_dnd__WEBPACK_IMPORTED_MODULE_0__["Container"],
    Draggable: vue_smooth_dnd__WEBPACK_IMPORTED_MODULE_0__["Draggable"],
    Ckeditor: vue_ckeditor2__WEBPACK_IMPORTED_MODULE_1__["default"],
    PictureInput: vue_picture_input__WEBPACK_IMPORTED_MODULE_2__["default"],
    VResizable: vue_resizable__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  data: function data() {
    return {
      imageDialog: false,
      uploading: false,
      editorDialog: false,
      content: '',
      config: {
        toolbar: [{
          name: 'basicstyles',
          items: ['Bold', 'Italic', 'Underline', 'Strike']
        }, {
          name: 'links',
          items: ['Link', 'Blockquote', 'Image', 'Source']
        }, {
          name: 'paragraph',
          items: ['NumberedList', 'BulletedList', 'JustifyBlock', 'JustifyLeft', 'JustifyCenter', 'JustifyRight']
        }, {
          name: 'clipboard',
          items: ['Undo', 'Redo']
        }, '/'],
        height: 300
      },
      themeData: [],
      selected: -1,
      minHeight: 100,
      resizeHeight: window.innerHeight - 100,
      minH: 130,
      subMinH: 130
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/json/theme-data.json').then(function (_ref) {
      var data = _ref.data;
      _this.themeData = data;
    });
  },
  methods: {
    onDrop: function onDrop(dropResult) {
      this.themeData = this.applyDrag(this.themeData, dropResult);
    },
    applyDrag: function applyDrag(arr, dragResult) {
      var removedIndex = dragResult.removedIndex,
          addedIndex = dragResult.addedIndex,
          payload = dragResult.payload;
      if (removedIndex === null && addedIndex === null) return arr;

      var result = _toConsumableArray(arr);

      var itemToAdd = payload;

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }

      return result;
    },
    openEditor: function openEditor(content, id) {
      this.content = content;
      this.editorDialog = true;
      localStorage.setItem('openItem', id);
    },
    saveEditor: function saveEditor() {
      var form_id = localStorage.getItem('openItem');
      this.themeData[form_id].html = this.content;
      this.content = '';
      this.editorDialog = false;
    },
    upload: function upload() {
      if (this.$refs.pictureInput.image) {
        this.uploading = true;
      }
    },
    unselect: function unselect() {
      this.selected = -1;
    },
    duplicate: function duplicate() {
      var _this2 = this;

      if (this.selected != -1) {
        var newData = Object();
        newData = {
          html: this.themeData[this.selected].html,
          height: document.getElementById('drag-' + this.selected).offsetHeight
        };
        console.log();
        this.themeData.splice(this.selected + 1, 0, newData);
      }

      setTimeout(function () {
        var dndHeight = document.getElementById('dnd-container').offsetHeight;

        if (_this2.resizeHeight < dndHeight) {
          _this2.resizeHeight = dndHeight;
        }
      }, 100);
      this.minH = document.getElementById('dnd-container').offsetHeight;
    },
    deleteElement: function deleteElement() {
      if (this.selected != -1) {
        this.themeData.splice(this.selected, 1);
      }

      var dndHeight = document.getElementById('dnd-container').offsetHeight;
      this.minH = dndHeight;
    },
    move: function move(data) {
      this.minH = document.getElementById('dnd-container').offsetHeight;
      this.resizeHeight = data.height;
    },
    moveE: function moveE(data) {
      this.themeData[this.selected].height = data.height;

      if (data.height == 130) {
        this.minH = document.getElementById('mainPane').offsetHeight;
      }
    },
    getData: function getData() {
      return this.themeData;
    }
  },
  watch: {
    uploading: function uploading(val) {
      var _this3 = this;

      if (!val) return;
      setTimeout(function () {
        return _this3.uploading = false;
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=style&index=0&id=4b2f50aa&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=style&index=0&id=4b2f50aa&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-transform[data-v-4b2f50aa] {\n  text-transform: none;\n}\n.picture-inner-text[data-v-4b2f50aa] {\n  font-size: 20px !important;\n}\n.split[data-v-4b2f50aa] {\n  /*overflow: visible;*/\n}\n.draggable-item-focus[data-v-4b2f50aa], draggable-item[data-v-4b2f50aa]:hover {\n  -webkit-box-shadow: 0 0 5px #51cbee;\n          box-shadow: 0 0 5px #51cbee;\n  border: 2px solid #51cbee;\n}\n.bottom-resize[data-v-4b2f50aa] {\n  background-color: #d9e0ea;\n  position: relative;\n  overflow: hidden;\n  width: 100% !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=style&index=0&id=4b2f50aa&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=style&index=0&id=4b2f50aa&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=4b2f50aa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=style&index=0&id=4b2f50aa&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=template&id=4b2f50aa&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=template&id=4b2f50aa&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    {
      staticStyle: { position: "relative", height: "100%" },
      attrs: { fluid: "" }
    },
    [
      _c(
        "Split",
        {
          staticStyle: { "min-height": "calc(100% - 100px)" },
          attrs: { gutterSize: 4 }
        },
        [
          _c(
            "SplitArea",
            { attrs: { size: 33, minSize: 200 } },
            [
              _c(
                "v-row",
                { staticClass: "mr-2", attrs: { justify: "end" } },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "no-transform pa-2",
                      attrs: { tile: "" },
                      on: { click: _vm.duplicate }
                    },
                    [
                      _vm._v(
                        "\n                    Duplicate\n                    "
                      ),
                      _c("v-icon", [_vm._v("mdi-file-multiple-outline")])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "my-3 mr-2", attrs: { justify: "end" } },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "no-transform pa-2",
                      attrs: { tile: "" },
                      on: { click: _vm.deleteElement }
                    },
                    [
                      _vm._v(
                        "\n                    Delete\n                    "
                      ),
                      _c("v-icon", [_vm._v("mdi-delete-outline")])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mr-2", attrs: { justify: "end" } },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "no-transform pa-2 white--text",
                      attrs: { tile: "", color: "blue" },
                      on: {
                        click: function($event) {
                          _vm.imageDialog = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Change background\n                    "
                      ),
                      _c("v-icon", [_vm._v("mdi-image-outline")])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "SplitArea",
            {
              directives: [
                {
                  name: "click-outside",
                  rawName: "v-click-outside",
                  value: _vm.unselect,
                  expression: "unselect"
                }
              ],
              attrs: { id: "mainPane", size: 34, minSize: 200 }
            },
            [
              _c(
                "v-resizable",
                {
                  staticClass: "bottom-resize",
                  attrs: {
                    active: ["b"],
                    height: _vm.resizeHeight,
                    "min-height": _vm.minH
                  },
                  on: { "resize:move": _vm.move }
                },
                [
                  _c(
                    "Container",
                    {
                      attrs: {
                        "drag-handle-selector": ".drag-handle",
                        id: "dnd-container"
                      },
                      on: {
                        drop: function($event) {
                          return _vm.onDrop($event)
                        }
                      }
                    },
                    _vm._l(_vm.themeData, function(data, i) {
                      return _c(
                        "Draggable",
                        {
                          key: i,
                          class:
                            _vm.selected == i ? "draggable-item-focus" : " ",
                          staticStyle: { "background-color": "white" },
                          attrs: { id: "drag-" + i }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "d-flex justify-space-between" },
                            [
                              _c(
                                "div",
                                {
                                  staticStyle: { width: "100%" },
                                  on: {
                                    click: function($event) {
                                      _vm.selected = i
                                    },
                                    dblclick: function($event) {
                                      return _vm.openEditor(data.html, i)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-resizable",
                                    {
                                      staticClass: "bottom-resize",
                                      staticStyle: {
                                        "background-color": "white"
                                      },
                                      attrs: {
                                        active: ["b"],
                                        "min-height": _vm.subMinH,
                                        height: data.height
                                      },
                                      on: {
                                        "resize:start": function($event) {
                                          _vm.selected = i
                                        },
                                        "resize:move": _vm.moveE
                                      }
                                    },
                                    [
                                      _c("div", {
                                        staticStyle: { "min-height": "130px" },
                                        domProps: {
                                          innerHTML: _vm._s(data.html)
                                        }
                                      })
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "drag-handle",
                                  attrs: { icon: "", height: "25", width: "25" }
                                },
                                [
                                  _c("v-icon", [
                                    _vm._v(
                                      "\n                                            mdi-menu-swap\n                                        "
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider")
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("SplitArea", { attrs: { size: 33, minSize: 100 } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "600", "min-height": "300" },
          on: {
            "click:outside": function($event) {
              return _vm.$refs.pictureInput.removeImage()
            }
          },
          model: {
            value: _vm.imageDialog,
            callback: function($$v) {
              _vm.imageDialog = $$v
            },
            expression: "imageDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                { staticClass: "headline justify-space-between" },
                [
                  _c("span", [_vm._v("Files")]),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticStyle: { "text-transform": "none", color: "white" },
                      attrs: { color: "blue" },
                      on: { click: _vm.upload }
                    },
                    [_vm._v("Upload File")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-progress-linear", {
                attrs: {
                  active: _vm.uploading,
                  indeterminate: _vm.uploading,
                  height: "10px",
                  color: "light-blue accent-4"
                }
              }),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                {
                  staticClass: "pt-5",
                  staticStyle: { "background-color": "rgba(0, 0, 0, 0.2)" }
                },
                [
                  _c("picture-input", {
                    ref: "pictureInput",
                    attrs: {
                      width: "600",
                      height: "350",
                      margin: "0",
                      accept: "image/jpeg,image/png",
                      size: "10",
                      hideChangeButton: true,
                      removable: false,
                      customStrings: {
                        upload: "<h1>Bummer!</h1>",
                        drag:
                          "Drag & Drop your files here or <a class='blue--text'>browse</a>"
                      }
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600" },
          model: {
            value: _vm.editorDialog,
            callback: function($$v) {
              _vm.editorDialog = $$v
            },
            expression: "editorDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                {
                  staticClass: "headline justify-center white--text",
                  staticStyle: { "background-color": "#3e4958" }
                },
                [_vm._v("\n                WYSIWYG Editor\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "pa-0" },
                [
                  _c("ckeditor", {
                    attrs: { config: _vm.config },
                    model: {
                      value: _vm.content,
                      callback: function($$v) {
                        _vm.content = $$v
                      },
                      expression: "content"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { staticClass: "justify-end pt-4 pb-5" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "white--text py-2 px-3",
                      attrs: { tile: "", color: "#b6bcc4" },
                      on: {
                        click: function($event) {
                          _vm.editorDialog = false
                          _vm.content = ""
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticStyle: { "text-transform": "none" } },
                        [_vm._v("Cancel")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "white--text pa-2",
                      attrs: { tile: "", color: "blue" },
                      on: { click: _vm.saveEditor }
                    },
                    [
                      _c(
                        "span",
                        { staticStyle: { "text-transform": "none" } },
                        [_vm._v("Save Changes")]
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/themes/v3/views/Dashboard.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/admin/themes/v3/views/Dashboard.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_4b2f50aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=4b2f50aa&scoped=true& */ "./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=template&id=4b2f50aa&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_4b2f50aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=4b2f50aa&lang=scss&scoped=true& */ "./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=style&index=0&id=4b2f50aa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_4b2f50aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_4b2f50aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b2f50aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/themes/v3/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=style&index=0&id=4b2f50aa&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=style&index=0&id=4b2f50aa&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_4b2f50aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=4b2f50aa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=style&index=0&id=4b2f50aa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_4b2f50aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_4b2f50aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_4b2f50aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_4b2f50aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_4b2f50aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=template&id=4b2f50aa&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=template&id=4b2f50aa&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4b2f50aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=4b2f50aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v3/views/Dashboard.vue?vue&type=template&id=4b2f50aa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4b2f50aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4b2f50aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
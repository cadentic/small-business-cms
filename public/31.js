(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Notifications.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v2/views/Notifications.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      color: null,
      colors: ['purple', 'info', 'success', 'warning', 'error'],
      top: true,
      bottom: false,
      left: false,
      right: false,
      snackbar: false
    };
  },
  methods: {
    snack: function snack() {
      this.top = false;
      this.bottom = false;
      this.left = false;
      this.right = false;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      for (var _i = 0, _args = args; _i < _args.length; _i++) {
        var loc = _args[_i];
        this[loc] = true;
      }

      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.snackbar = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Notifications.vue?vue&type=template&id=baebd904&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v2/views/Notifications.vue?vue&type=template&id=baebd904& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { fluid: "", "fill-height": "" } },
    [
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "material-card",
                {
                  attrs: { color: "success" },
                  scopedSlots: _vm._u([
                    {
                      key: "header",
                      fn: function() {
                        return [
                          _c("div", { staticClass: "px-3" }, [
                            _c(
                              "div",
                              { staticClass: "title font-weight-light mb-2" },
                              [
                                _vm._v(
                                  "\n              Notifications\n            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "category" },
                              [
                                _vm._v(
                                  "\n              Handcrafted by us with\n              "
                                ),
                                _c("v-icon", { attrs: { size: "17" } }, [
                                  _vm._v(
                                    "\n                mdi-heart\n              "
                                  )
                                ])
                              ],
                              1
                            )
                          ])
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c(
                                "h2",
                                { staticClass: "title font-weight-light mb-3" },
                                [
                                  _vm._v(
                                    "\n                Notifications Style\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "material-notification",
                                {
                                  staticClass: "mb-3",
                                  attrs: { color: "info" }
                                },
                                [
                                  _vm._v(
                                    "\n                This is a plain notification\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "material-notification",
                                {
                                  staticClass: "mb-3",
                                  attrs: { color: "info", dismissible: "" }
                                },
                                [
                                  _vm._v(
                                    "\n                This is a notification with close button.\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "material-notification",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    color: "info",
                                    dismissible: "",
                                    icon: "mdi-bell-plus"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                This is a notification with close button and icon.\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "material-notification",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    color: "info",
                                    dismissible: "",
                                    icon: "mdi-bell-plus"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c(
                                "h2",
                                { staticClass: "title font-weight-light" },
                                [
                                  _vm._v(
                                    "\n                Notifcation States\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "material-notification",
                                {
                                  staticClass: "mb-3",
                                  attrs: { color: "info", dismissible: "" }
                                },
                                [
                                  _c("strong", [_vm._v("INFO")]),
                                  _vm._v(
                                    ' - This is a regular notification made with `color="info"`\n              '
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "material-notification",
                                {
                                  staticClass: "mb-3",
                                  attrs: { color: "success", dismissible: "" }
                                },
                                [
                                  _c("strong", [_vm._v("SUCCESS")]),
                                  _vm._v(
                                    ' - This is a regular notification made with `color="success"`\n              '
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "material-notification",
                                {
                                  staticClass: "mb-3",
                                  attrs: { color: "warning", dismissible: "" }
                                },
                                [
                                  _c("strong", [_vm._v("WARNING")]),
                                  _vm._v(
                                    ' - This is a regular notification made with `color="warning"`\n              '
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "material-notification",
                                {
                                  staticClass: "mb-3",
                                  attrs: { color: "error", dismissible: "" }
                                },
                                [
                                  _c("strong", [_vm._v("DANGER")]),
                                  _vm._v(
                                    ' - This is a regular notification made with `color="error"`\n              '
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "material-notification",
                                {
                                  staticClass: "mb-3",
                                  attrs: { color: "purple", dismissible: "" }
                                },
                                [
                                  _c("strong", [_vm._v("PRIMARY")]),
                                  _vm._v(
                                    ' - This is a regular notification made with `color="purple"`\n              '
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center" }, [
                        _c(
                          "h2",
                          { staticClass: "title font-weight-light mb-2" },
                          [
                            _vm._v(
                              "\n              Notification Places\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              " subheading font-weight-light grey--text"
                          },
                          [_vm._v("Click to view notifications")]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            { attrs: { justify: "center" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { block: "", color: "success" },
                                      on: {
                                        click: function($event) {
                                          return _vm.snack("top", "left")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Top Left\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { block: "", color: "success" },
                                      on: {
                                        click: function($event) {
                                          return _vm.snack("top")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Top Center\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { attrs: { justify: "center" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { block: "", color: "success" },
                                      on: {
                                        click: function($event) {
                                          return _vm.snack("top", "right")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Top Right\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { block: "", color: "success" },
                                      on: {
                                        click: function($event) {
                                          return _vm.snack("bottom", "left")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Bottom Left\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { attrs: { justify: "center" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { block: "", color: "success" },
                                      on: {
                                        click: function($event) {
                                          return _vm.snack("bottom")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Bottom Center\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { block: "", color: "success" },
                                      on: {
                                        click: function($event) {
                                          return _vm.snack("bottom", "right")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Bottom Right\n                "
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-snackbar",
                        {
                          attrs: {
                            bottom: _vm.bottom,
                            color: _vm.color,
                            left: _vm.left,
                            right: _vm.right,
                            top: _vm.top,
                            timeout: 900000,
                            dark: ""
                          },
                          model: {
                            value: _vm.snackbar,
                            callback: function($$v) {
                              _vm.snackbar = $$v
                            },
                            expression: "snackbar"
                          }
                        },
                        [
                          _c(
                            "v-icon",
                            { staticClass: "mr-3", attrs: { color: "white" } },
                            [
                              _vm._v(
                                "\n              mdi-bell-plus\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v("Welcome to "),
                            _c("b", [_vm._v("Vuetify Material Dashboard")]),
                            _vm._v(
                              " - a beautiful freebie for every web developer."
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  _vm.snackbar = false
                                }
                              }
                            },
                            [
                              _c("v-icon", [
                                _vm._v(
                                  "\n                mdi-close-circle\n              "
                                )
                              ])
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

/***/ "./resources/js/components/admin/themes/v2/views/Notifications.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/Notifications.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notifications_vue_vue_type_template_id_baebd904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.vue?vue&type=template&id=baebd904& */ "./resources/js/components/admin/themes/v2/views/Notifications.vue?vue&type=template&id=baebd904&");
/* harmony import */ var _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/themes/v2/views/Notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notifications_vue_vue_type_template_id_baebd904___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notifications_vue_vue_type_template_id_baebd904___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/themes/v2/views/Notifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/themes/v2/views/Notifications.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/Notifications.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/themes/v2/views/Notifications.vue?vue&type=template&id=baebd904&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/Notifications.vue?vue&type=template&id=baebd904& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_baebd904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=template&id=baebd904& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Notifications.vue?vue&type=template&id=baebd904&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_baebd904___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_baebd904___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
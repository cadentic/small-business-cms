(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/UserProfile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v2/views/UserProfile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      details: [{
        title: '12',
        subTitle: 'Files'
      }, {
        title: '2GB',
        subTitle: 'Used'
      }, {
        title: '24,6$',
        subTitle: 'Spent'
      }],
      members: [{
        image: __webpack_require__(/*! ../assets/img/faces/face-0.jpg */ "./resources/js/components/admin/themes/v2/assets/img/faces/face-0.jpg"),
        name: "Dj Khaled",
        status: "Offline",
        type: "muted"
      }, {
        image: __webpack_require__(/*! ../assets/img/faces/face-1.jpg */ "./resources/js/components/admin/themes/v2/assets/img/faces/face-1.jpg"),
        name: "Creative Tim",
        status: "Available",
        type: "success"
      }, {
        image: __webpack_require__(/*! ../assets/img/faces/face-1.jpg */ "./resources/js/components/admin/themes/v2/assets/img/faces/face-1.jpg"),
        name: "Flume",
        status: "Busy",
        type: "error"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/UserProfile.vue?vue&type=template&id=74b8b318&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v2/views/UserProfile.vue?vue&type=template&id=74b8b318& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "fill-height", attrs: { fluid: "" } },
    [
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c(
                "material-card",
                { staticClass: "v-card-profile" },
                [
                  _c(
                    "v-avatar",
                    {
                      staticClass: "mx-auto d-block elevation-6",
                      attrs: { slot: "offset", size: "130" },
                      slot: "offset"
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! ../assets/img/faces/face-2.jpg */ "./resources/js/components/admin/themes/v2/assets/img/faces/face-2.jpg")
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-card-text", { staticClass: "text-center" }, [
                    _c("h2", { staticClass: "mb-3" }, [
                      _vm._v("\n            Chet Faker\n          ")
                    ]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "font-weight-light" }, [
                      _vm._v("\n            @chetfaker\n          ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "font-weight mt-4 mb-2 text-center" },
                      [
                        _c("span", [_vm._v('"I like the way you work it')]),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", [_vm._v("No diggity")]),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", [_vm._v('I wanna bag it up"')])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    { staticClass: "justify-space-around mt-2" },
                    _vm._l(_vm.details, function(info) {
                      return _c("div", [
                        _c("h3", [_vm._v(" " + _vm._s(info.title) + " ")]),
                        _vm._v(" "),
                        _c("small", [_vm._v(_vm._s(info.subTitle))])
                      ])
                    }),
                    0
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c("v-card-title", [_vm._v("Team Members")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-list",
                        { attrs: { dense: "" } },
                        _vm._l(_vm.members, function(member) {
                          return _c(
                            "v-list-item",
                            { key: member.name, attrs: { "two-line": "" } },
                            [
                              _c(
                                "v-list-item-icon",
                                [
                                  _c("v-avatar", [
                                    _c("img", {
                                      staticClass: "rounded img-fluid",
                                      attrs: {
                                        src: member.image,
                                        alt: "Circle Image"
                                      }
                                    })
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-title", [
                                    _vm._v(_vm._s(member.name))
                                  ]),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", [
                                    _vm._v(_vm._s(member.status))
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-icon",
                                [
                                  _c(
                                    "v-avatar",
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { color: member.type } },
                                        [_vm._v("mdi-email-outline")]
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
                        }),
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
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "8" } },
            [
              _c(
                "material-card",
                {
                  attrs: {
                    color: "green",
                    title: "Edit Profile",
                    text: "Complete your profile"
                  }
                },
                [
                  _c(
                    "v-form",
                    [
                      _c(
                        "v-container",
                        { staticClass: "py-0" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Company (disabled)",
                                      disabled: ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "purple-input",
                                    attrs: { label: "User Name" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "purple-input",
                                    attrs: { label: "Email Address" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "purple-input",
                                    attrs: { label: "First Name" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "purple-input",
                                    attrs: { label: "Last Name" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "purple-input",
                                    attrs: { label: "Adress" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "purple-input",
                                    attrs: { label: "City" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "purple-input",
                                    attrs: { label: "Country" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "purple-input",
                                    attrs: {
                                      label: "Postal Code",
                                      type: "number"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-textarea", {
                                    staticClass: "purple-input",
                                    attrs: {
                                      label: "About Me",
                                      value:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "text-right",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c("v-btn", { attrs: { color: "success" } }, [
                                    _vm._v(
                                      "\n                  Update Profile\n                "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/themes/v2/assets/img/faces/face-0.jpg":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/assets/img/faces/face-0.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/face-0.jpg?83f3f36de004091a153b25f8013516e7";

/***/ }),

/***/ "./resources/js/components/admin/themes/v2/assets/img/faces/face-1.jpg":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/assets/img/faces/face-1.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/face-1.jpg?99e58416b89637502b40ac8350eed85a";

/***/ }),

/***/ "./resources/js/components/admin/themes/v2/assets/img/faces/face-2.jpg":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/assets/img/faces/face-2.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/face-2.jpg?119d7ee630ccbb412dab816bad55d97c";

/***/ }),

/***/ "./resources/js/components/admin/themes/v2/views/UserProfile.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/UserProfile.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_74b8b318___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=74b8b318& */ "./resources/js/components/admin/themes/v2/views/UserProfile.vue?vue&type=template&id=74b8b318&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/themes/v2/views/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_74b8b318___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_74b8b318___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/themes/v2/views/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/themes/v2/views/UserProfile.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/UserProfile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/themes/v2/views/UserProfile.vue?vue&type=template&id=74b8b318&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/UserProfile.vue?vue&type=template&id=74b8b318& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_74b8b318___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=74b8b318& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/UserProfile.vue?vue&type=template&id=74b8b318&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_74b8b318___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_74b8b318___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
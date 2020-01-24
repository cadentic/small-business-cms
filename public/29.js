(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Application.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v2/views/Application.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isChartShow: false,
      variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],
      statsCards: [{
        type: 'warning',
        icon: 'mdi-server',
        title: 'Capacity',
        value: '105GB',
        footerText: 'Updated now',
        footerIcon: 'mdi-reload'
      }, {
        type: 'success',
        icon: 'mdi-wallet-outline',
        title: 'Revenue',
        value: '$1,345',
        footerText: 'Last day',
        footerIcon: 'mdi-calendar-outline'
      }, {
        type: 'error',
        icon: 'mdi-pulse',
        title: 'Errors',
        value: '23',
        footerText: 'In the last hour',
        footerIcon: 'mdi-timer'
      }, {
        type: 'info',
        icon: 'mdi-twitter',
        title: 'Followers',
        value: '+45',
        footerText: 'Updated now',
        footerIcon: 'mdi-reload'
      }],
      usersChart: {
        data: {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [[287, 385, 490, 562, 594, 626, 698, 895, 952], [67, 152, 193, 240, 387, 435, 535, 642, 744], [23, 113, 67, 108, 190, 239, 307, 410, 410]]
        },
        options: {
          low: 0,
          high: 1000,
          showArea: true,
          height: '245px',
          axisX: {
            showGrid: false
          },
          lineSmooth: true,
          showLine: true,
          showPoint: false
        }
      },
      activityChart: {
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [[542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895], [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: '245px'
        }
      },
      preferencesChart: {
        data: {
          labels: ['62%', '32%', '6%'],
          series: [62, 32, 6]
        },
        options: {}
      }
    };
  },
  mounted: function mounted() {
    setTimeout(function () {
      this.isChartShow = true;
    }.bind(this), 3000);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Application.vue?vue&type=template&id=02d61134&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v2/views/Application.vue?vue&type=template&id=02d61134& ***!
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
    "v-col",
    { attrs: { cols: "12" } },
    [
      _c(
        "v-row",
        [
          _vm._l(_vm.statsCards, function(stats) {
            return [
              _c(
                "v-col",
                { attrs: { cols: "3" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto mt-2" },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "text-right mb-5" },
                        [
                          _c(
                            "v-row",
                            {
                              attrs: {
                                align: "center",
                                justify: "space-around"
                              }
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  class: stats.type + "--text",
                                  attrs: { size: "40" }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(stats.icon) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _c("h3", { staticClass: "text--lighten-1" }, [
                                  _vm._v(_vm._s(stats.title))
                                ]),
                                _vm._v(" "),
                                _c("h1", [_vm._v(_vm._s(stats.value))])
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("v-card-title", { staticClass: "pt-3" }, [
                        _c(
                          "small",
                          [
                            _c("v-icon", [_vm._v(_vm._s(stats.footerIcon))]),
                            _vm._v("  \n                            "),
                            _c("small", [_vm._v(_vm._s(stats.footerText))])
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("v-card", { staticClass: "mx-auto", attrs: { "max-height": "400" } }, [
        !_vm.isChartShow
          ? _c(
              "div",
              {
                staticClass:
                  "text-center d-flex justify-space-around align-center",
                staticStyle: { height: "400px" }
              },
              _vm._l(_vm.variants, function(variant) {
                return _c("v-progress-circular", {
                  key: variant,
                  attrs: { color: variant, indeterminate: "" }
                })
              }),
              1
            )
          : _c(
              "div",
              [
                _c(
                  "v-card-text",
                  { staticClass: "pt-0 mb-3" },
                  [
                    _c("div", { staticClass: "pl-2 py-3" }, [
                      _c("h3", [
                        _vm._v(
                          "\n                    Users bevavior\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h4", [_c("small", [_vm._v("24Hours performance")])])
                    ]),
                    _vm._v(" "),
                    _c("chartist", {
                      staticStyle: { height: "240px" },
                      attrs: {
                        ratio: "ct-major-second",
                        data: _vm.usersChart.data,
                        options: _vm.usersChart.options,
                        type: "Line"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  { staticClass: "justify-end pb-4" },
                  [
                    _c("v-avatar", { attrs: { color: "#d70206", size: "15" } }),
                    _vm._v("\n            Open\n            "),
                    _c("v-avatar", {
                      staticClass: "ml-2 mr-1",
                      attrs: { color: "#f05b4f", size: "15" }
                    }),
                    _vm._v("\n            Click\n            "),
                    _c("v-avatar", {
                      staticClass: "ml-2 mr-1",
                      attrs: { color: "#f4c63d", size: "15" }
                    }),
                    _vm._v("\n            Click Second Time\n        ")
                  ],
                  1
                )
              ],
              1
            )
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "6" } },
            [
              _c(
                "v-card",
                { staticClass: "mx-auto", attrs: { "max-height": "400" } },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "pt-0 mb-3" },
                    [
                      _c("div", { staticClass: "pl-2 py-3" }, [
                        _c("h3", [
                          _vm._v(
                            "\n                            Email Statistics\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("h4", [
                          _c("small", [_vm._v("Last campaign performance")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "4", lg: "4" } },
                            [
                              _c("chartist", {
                                attrs: {
                                  ratio: "ct-major-second",
                                  data: _vm.preferencesChart.data,
                                  type: "Pie"
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
            { attrs: { cols: "12", lg: "6" } },
            [
              _c(
                "v-card",
                { staticClass: "mx-auto", attrs: { "max-height": "400" } },
                [
                  !_vm.isChartShow
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "text-center d-flex justify-space-around align-center",
                          staticStyle: { height: "400px" }
                        },
                        _vm._l(_vm.variants, function(variant) {
                          return _c("v-progress-circular", {
                            key: variant,
                            attrs: { color: variant, indeterminate: "" }
                          })
                        }),
                        1
                      )
                    : _c("v-card-text", { staticClass: "pt-0 mb-3" }, [
                        _c("div", { staticClass: "pl-2 py-3" }, [
                          _c("h3", [
                            _vm._v(
                              "\n                            2015 Sales\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("h4", [
                            _c("small", [
                              _vm._v("All products including Taxes")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticStyle: { "max-height": "250px" } },
                          [
                            _c("chartist", {
                              staticStyle: { height: "240px" },
                              attrs: {
                                ratio: "ct-major-second",
                                data: _vm.activityChart.data,
                                option: _vm.activityChart.option,
                                type: "Line"
                              }
                            })
                          ],
                          1
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/themes/v2/views/Application.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/Application.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Application_vue_vue_type_template_id_02d61134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Application.vue?vue&type=template&id=02d61134& */ "./resources/js/components/admin/themes/v2/views/Application.vue?vue&type=template&id=02d61134&");
/* harmony import */ var _Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Application.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/themes/v2/views/Application.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Application_vue_vue_type_template_id_02d61134___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Application_vue_vue_type_template_id_02d61134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/themes/v2/views/Application.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/themes/v2/views/Application.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/Application.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Application.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Application.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/themes/v2/views/Application.vue?vue&type=template&id=02d61134&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/Application.vue?vue&type=template&id=02d61134& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_02d61134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Application.vue?vue&type=template&id=02d61134& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Application.vue?vue&type=template&id=02d61134&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_02d61134___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_02d61134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
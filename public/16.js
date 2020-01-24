(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lstatsCards: [{
        type: "success",
        icon: "mdi-file-document-outline",
        title: "Unresolved",
        value: "45"
      }, {
        type: "success",
        icon: "mdi-timer-sand",
        title: "Overdue",
        value: "3"
      }, {
        type: "success",
        icon: "mdi-timer-sand",
        title: "Due today",
        value: "79"
      }, {
        type: "success",
        icon: "mdi-file-document-outline",
        title: "Open",
        value: "39"
      }, {
        type: "warning",
        icon: "mdi-cursor-pointer",
        title: "On hold",
        value: "4"
      }, {
        type: "success",
        icon: "mdi-cursor-pointer",
        title: "Unassigned",
        value: "6"
      }],
      items: [{
        text: 'Home',
        disabled: true,
        href: 'breadcrumbs_dashboard'
      }, {
        text: 'Dashboard',
        disabled: false,
        href: '/'
      }],
      activityChart: {
        data: {
          labels: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24"],
          series: [[242, 343, 520, 680, 653, 753, 826, 834, 968, 810, 956, 995], [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]]
        },
        options: {
          seriesBarDistance: 5,
          axisX: {
            showGrid: false
          },
          height: "100px"
        }
      },
      isChartShow: false,
      variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],
      statsCards: [{
        type: 'success',
        icon: 'mdi-chevron-up-circle-outline',
        title: 'Product Sold',
        value: '7,939',
        percent: '19'
      }, {
        type: 'error',
        icon: 'mdi-chevron-down-circle-outline',
        title: 'New Customers',
        value: '3,868',
        percent: '3'
      }, {
        type: 'success',
        icon: 'mdi-chevron-up-circle-outline',
        title: 'Gross Profit',
        value: '$37,939',
        percent: '19'
      }, {
        type: 'error',
        icon: 'mdi-chevron-down-circle-outline',
        title: 'New Profit',
        value: '$30.129',
        percent: '1.1'
      }],
      netStats: [{
        text: "Received",
        value: "49",
        color: "#7ed321"
      }, {
        text: "Resolved",
        value: "39",
        color: "blue"
      }, {
        text: "Average Response Time",
        value: "15m",
        color: "#42e0fc"
      }, {
        text: "Average First Response",
        value: "8m 39s",
        color: "purple"
      }, {
        text: "Resolution with SLA",
        value: "98.7%",
        color: "#00e49a"
      }],
      unsolvedData: [{
        name: "Group",
        val: "open"
      }, {
        name: "Customer Support",
        val: "39"
      }, {
        name: "Loyalty Programs",
        val: "8"
      }, {
        name: "Vendor Management",
        val: "27"
      }, {
        name: "Billing",
        val: "3"
      }],
      progressiveData: [{
        value: '60%',
        select: 5,
        color: "#42e0fc"
      }, {
        value: '30%',
        select: 3,
        color: "#00e49a"
      }, {
        value: '20%',
        select: 2,
        color: "purple"
      }],
      todoData: [{
        type: 'warning',
        active: '',
        title: 'Upgrade CRM systems',
        body: 'Contact IT develpment',
        button: 'Due in System'
      }, {
        type: 'success',
        active: 'active',
        title: 'Upgrade CRM systems',
        body: 'Contact IT develpment',
        button: 'Complete'
      }, {
        type: 'success',
        active: '',
        title: 'Upgrade CRM systems',
        body: 'Contact IT develpment',
        button: 'Due in 3 weeks'
      }]
    };
  },
  mounted: function mounted() {
    setTimeout(function () {
      this.isChartShow = true;
    }.bind(this), 3000);
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ct-bar {\n  stroke: #68B3C8 !important;\n  fill: none;\n  stroke-width: 15px;\n  stroke-linecap: round;\n}\n.quick-link-btn {\n  color: #ffffff !important;\n  text-transform: none;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.agent-search-input .v-input__slot {\n  min-height: 30px;\n}\n.agent_img div {\n  width: 30px;\n  height: 30px;\n  background: gray;\n  border-radius: 30px;\n  margin-top: 10px;\n}\n.agent_img div .marker {\n  width: 8px;\n  height: 8px !important;\n  border-radius: 8px;\n  padding-left: 8px;\n  font-size: 8px;\n  position: relative;\n  top: 14px;\n  left: 14px;\n}\n.userComplete {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=template&id=64613bac&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=template&id=64613bac& ***!
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
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "v-col",
        { attrs: { cols: "12" } },
        [
          _c(
            "v-row",
            { attrs: { justify: "space-between", align: "center" } },
            [
              _c("div", [_c("h3", [_vm._v("DASHBOARD")])]),
              _vm._v(" "),
              _c("v-breadcrumbs", {
                staticClass: "py-0",
                attrs: { items: _vm.items, divider: ">" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _vm._l(_vm.lstatsCards, function(stats) {
            return [
              _c(
                "v-col",
                { attrs: { cols: "6", lg: "2" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "mx-auto mt-2",
                      attrs: { "max-width": "344" }
                    },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "py-0 px-0" },
                        [
                          _c(
                            "v-list",
                            {
                              staticClass: "py-0 px-0",
                              attrs: { "two-line": "" }
                            },
                            [
                              _c(
                                "v-list-item",
                                [
                                  _c(
                                    "v-list-item-avatar",
                                    [
                                      _c("v-icon", {
                                        attrs: {
                                          color: stats.type,
                                          size: "40"
                                        },
                                        domProps: {
                                          textContent: _vm._s(stats.icon)
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-subtitle", [
                                        _c("small", [
                                          _vm._v(_vm._s(stats.title))
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("v-list-item-title", [
                                        _c("h2", [_vm._v(_vm._s(stats.value))])
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
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            {
              staticStyle: { "max-height": "250px" },
              attrs: { cols: "12", lg: "8" }
            },
            [
              !_vm.isChartShow
                ? _c(
                    "div",
                    {
                      staticClass:
                        "text-center d-flex justify-space-around align-center",
                      staticStyle: { height: "100%" }
                    },
                    _vm._l(_vm.variants, function(variant) {
                      return _c("v-progress-circular", {
                        key: variant,
                        attrs: { color: variant, indeterminate: "" }
                      })
                    }),
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isChartShow
                ? _c(
                    "v-card",
                    { staticClass: "mx-auto", attrs: { "max-height": "250" } },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "px-5 py-5" },
                        [
                          _c("h3", [_vm._v("TODAY'S TRENDS")]),
                          _vm._v(" "),
                          _c("h4", { staticClass: "font-weight-light pb-5" }, [
                            _vm._v("10th Mar 2019. 04:20 PM")
                          ]),
                          _vm._v(" "),
                          _c("chartist", {
                            staticStyle: { height: "90px" },
                            attrs: {
                              ratio: "ct-major-second",
                              data: _vm.activityChart.data,
                              options: _vm.activityChart.options,
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
                          _c("v-avatar", {
                            attrs: { color: "#d70206", size: "15" }
                          }),
                          _vm._v(
                            "\n                        Today\n                        "
                          ),
                          _c("v-avatar", {
                            staticClass: "ml-2 mr-1",
                            attrs: { color: "#f05b4f", size: "15" }
                          }),
                          _vm._v(
                            "\n                        Yesterday\n                    "
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "4" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-list",
                    { staticClass: "py-0" },
                    _vm._l(_vm.netStats, function(stats, i) {
                      return _c(
                        "v-list-item",
                        { key: i },
                        [
                          _c(
                            "v-list-item-content",
                            {},
                            [
                              _c("v-list-item-title", {
                                domProps: { textContent: _vm._s(stats.text) }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-action",
                            { style: "color: " + stats.color },
                            [_vm._v(_vm._s(stats.value))]
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
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "4" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-text",
                    { staticClass: "py-5 px-5" },
                    [
                      _c(
                        "v-row",
                        {
                          attrs: { justify: "space-between", "no-gutters": "" }
                        },
                        [
                          _c("div", [
                            _c("h3", [_vm._v("UNSOLVED TICKET")]),
                            _vm._v(" "),
                            _c("h4", { staticClass: "font-weight-light" }, [
                              _c("small", [
                                _vm._v("Across help desk this month")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { icon: "" } },
                            [_c("v-icon", [_vm._v("mdi-dots-horizontal")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list",
                        { attrs: { dense: "" } },
                        _vm._l(_vm.unsolvedData, function(data, i) {
                          return _c(
                            "v-list-item",
                            { key: i, staticClass: "py-0 my-0 px-0 mx-0" },
                            [
                              _c(
                                "v-list-item-content",
                                { staticClass: "py-0 my-0 px-0 mx-0" },
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { "no-gutters": "" } },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "userContent" },
                                        [
                                          _c("span", [
                                            _vm._v(
                                              " " + _vm._s(data.name) + " "
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "userVal" }, [
                                        _c("span", [
                                          _vm._v(" " + _vm._s(data.val) + " ")
                                        ])
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
            { attrs: { cols: "12", lg: "4" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-text",
                    { staticClass: "py-5 px-5" },
                    [
                      _c(
                        "v-row",
                        {
                          attrs: { justify: "space-between", "no-gutters": "" }
                        },
                        [
                          _c("div", [
                            _c("h3", [_vm._v("CUSTOMER SATISFATION")]),
                            _vm._v(" "),
                            _c("h4", { staticClass: "font-weight-light" }, [
                              _c("small", [
                                _vm._v("Across help desk this month")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { icon: "" } },
                            [_c("v-icon", [_vm._v("mdi-dots-horizontal")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-3" }, [
                        _c("h5", { staticClass: "font-weight-regular py-2" }, [
                          _vm._v("Responser received")
                        ]),
                        _vm._v(" "),
                        _c("h2", [_vm._v("390")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-list",
                        { attrs: { dense: "" } },
                        _vm._l(_vm.progressiveData, function(data, i) {
                          return _c(
                            "v-list-item",
                            { key: i, staticClass: "py-0 my-0 px-0 mx-0" },
                            [
                              _c(
                                "v-list-item-content",
                                { staticClass: "py-0 my-0 px-0 mx-0" },
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { "no-gutters": "" } },
                                    [
                                      _c("div", [
                                        _c("span", [_vm._v("  Positive")])
                                      ]),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c("v-rating", {
                                        attrs: {
                                          dense: "",
                                          length: "10",
                                          size: "20",
                                          "empty-icon": "mdi-account-outline",
                                          "full-icon": "mdi-account",
                                          "background-color": "grey",
                                          color: data.color,
                                          readonly: ""
                                        },
                                        model: {
                                          value: data.select,
                                          callback: function($$v) {
                                            _vm.$set(data, "select", $$v)
                                          },
                                          expression: "data.select"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c("div", [_vm._v(_vm._s(data.value))])
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
            { attrs: { cols: "12", lg: "4" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-text",
                    { staticClass: "py-5 px-5" },
                    [
                      _c(
                        "v-row",
                        {
                          attrs: { justify: "space-between", "no-gutters": "" }
                        },
                        [
                          _c("h3", [_vm._v("TO-DO(4)")]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-btn", [
                            _c("span", { staticClass: "blue--text" }, [
                              _vm._v("New")
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list",
                        { attrs: { dense: "", "tree-line": "" } },
                        _vm._l(_vm.todoData, function(data, i) {
                          return _c(
                            "v-list-item",
                            { key: i, staticClass: "py-0 my-0 px-0 mx-0" },
                            [
                              _c(
                                "v-list-item-avatar",
                                { staticClass: "mr-0" },
                                [
                                  _c("v-checkbox", {
                                    attrs: { "input-value": "true", value: "" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-content",
                                { staticClass: "py-1 my-0 px-0 mx-0" },
                                [
                                  _c("v-list-item-title", {
                                    domProps: { innerHTML: _vm._s(data.title) }
                                  }),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", [
                                    _c("small", [_vm._v(_vm._s(data.body))])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-subtitle",
                                    { staticClass: "pb-1" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            rounded: "",
                                            small: "",
                                            "max-height": "20",
                                            color: data.type
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                "text-transform": "none"
                                              }
                                            },
                                            [
                                              _c("small", [
                                                _vm._v(_vm._s(data.button))
                                              ])
                                            ]
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

/***/ "./resources/js/components/admin/themes/v2/views/Dashboard.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/Dashboard.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_64613bac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=64613bac& */ "./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=template&id=64613bac&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_64613bac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_64613bac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/themes/v2/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=template&id=64613bac&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=template&id=64613bac& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_64613bac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=64613bac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v2/views/Dashboard.vue?vue&type=template&id=64613bac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_64613bac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_64613bac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
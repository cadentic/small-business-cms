(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/v2/Drawer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/components/v2/Drawer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuescroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuescroll */ "./node_modules/vuescroll/dist/vuescroll.js");
/* harmony import */ var vuescroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuescroll__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  components: {
    vuescroll: vuescroll__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      mini_v2: false,
      links: [{
        to: '/v2/dashboard',
        icon: 'mdi-view-dashboard-outline',
        text: 'Dashboard'
      }, {
        to: '/v2/user-profile',
        icon: 'mdi-account-outline',
        text: 'TICKET'
      }, {
        to: '/v2/table-list',
        icon: 'mdi-account-card-details-outline',
        text: 'CONTACT'
      }, {
        to: '/v2/icons',
        icon: 'mdi-battlenet',
        text: 'SOCIAL'
      }, {
        to: '/v2/solution',
        icon: 'mdi-vimeo',
        text: 'SOLUTION'
      }, {
        to: '/v2/forum',
        icon: 'mdi-mixcloud',
        text: 'FORUM'
      }, {
        to: '/v2/bots',
        icon: 'mdi-human-handsdown',
        text: 'BOTS'
      }, {
        to: '/v2/report',
        icon: 'mdi-signal',
        text: 'REPORT'
      }, {
        to: '/v2/settings',
        icon: 'mdi-settings',
        text: 'SETTINGS'
      }],
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {
          background: '#333948',
          opacity: 0,
          size: '10px',
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: '0.2px',
          keepShow: true
        },
        bar: {
          keepShow: true,
          hoverStyle: true,
          onlyShowBarOnScroll: false,
          size: '10px',
          background: '#333948'
        }
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$eventHub.$on('toggleMenu', function () {
      _this.mini_v2 = !_this.mini_v2;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/v2/Drawer.vue?vue&type=style&index=0&id=2e363c16&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/components/v2/Drawer.vue?vue&type=style&index=0&id=2e363c16&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active[data-v-2e363c16] {\n  border-left: 3px solid #41B883;\n  border-radius: unset;\n}\n.active[data-v-2e363c16]::before {\n  opacity: 0;\n}\n.sidebar-menus .v-list-item__title[data-v-2e363c16] {\n  font-size: 14px;\n}\n.v-application--is-ltr .v-list-group--no-action > .v-list-group__items > div > .v-list-item[data-v-2e363c16] {\n  padding-left: 55px;\n  padding-right: 0px;\n}\n.v-list-item__avatar i[data-v-2e363c16] {\n  margin-left: 15px;\n}\n.sidebar-menus .primary--text[data-v-2e363c16] {\n  color: #fff !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/v2/Drawer.vue?vue&type=style&index=0&id=2e363c16&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/components/v2/Drawer.vue?vue&type=style&index=0&id=2e363c16&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Drawer.vue?vue&type=style&index=0&id=2e363c16&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/v2/Drawer.vue?vue&type=style&index=0&id=2e363c16&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/v2/Drawer.vue?vue&type=template&id=2e363c16&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/components/v2/Drawer.vue?vue&type=template&id=2e363c16&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    "v-navigation-drawer",
    {
      attrs: {
        id: "app-drawer",
        app: "",
        "mobile-break-point": "991",
        clipped: "",
        width: "250",
        "mini-variant": _vm.mini_v2
      },
      on: {
        "update:miniVariant": function($event) {
          _vm.mini_v2 = $event
        },
        "update:mini-variant": function($event) {
          _vm.mini_v2 = $event
        }
      }
    },
    [
      _c(
        "vuescroll",
        { attrs: { ops: _vm.ops } },
        [
          _c("v-divider"),
          _vm._v(" "),
          _c("v-divider", { staticClass: "mx-3 mb-3" }),
          _vm._v(" "),
          _c(
            "v-list",
            { staticClass: "sidebar-menus" },
            _vm._l(_vm.links, function(item) {
              return _c(
                "v-list-item",
                {
                  key: item.text,
                  attrs: { to: item.to, "active-class": "success" }
                },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", {
                        domProps: { textContent: _vm._s(item.icon) }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    { staticClass: "py-0 my-0" },
                    [
                      _c("v-list-item-title", {
                        domProps: { textContent: _vm._s(item.text) }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-avatar",
                    { staticClass: "py-0 my-0" },
                    [_c("v-icon", [_vm._v("mdi-menu-up")])],
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/components/v2/Drawer.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/admin/components/v2/Drawer.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Drawer_vue_vue_type_template_id_2e363c16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawer.vue?vue&type=template&id=2e363c16&scoped=true& */ "./resources/js/components/admin/components/v2/Drawer.vue?vue&type=template&id=2e363c16&scoped=true&");
/* harmony import */ var _Drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drawer.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/components/v2/Drawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Drawer_vue_vue_type_style_index_0_id_2e363c16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drawer.vue?vue&type=style&index=0&id=2e363c16&lang=scss&scoped=true& */ "./resources/js/components/admin/components/v2/Drawer.vue?vue&type=style&index=0&id=2e363c16&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Drawer_vue_vue_type_template_id_2e363c16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Drawer_vue_vue_type_template_id_2e363c16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2e363c16",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/components/v2/Drawer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/components/v2/Drawer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/components/v2/Drawer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Drawer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/v2/Drawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/components/v2/Drawer.vue?vue&type=style&index=0&id=2e363c16&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/components/v2/Drawer.vue?vue&type=style&index=0&id=2e363c16&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_style_index_0_id_2e363c16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Drawer.vue?vue&type=style&index=0&id=2e363c16&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/v2/Drawer.vue?vue&type=style&index=0&id=2e363c16&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_style_index_0_id_2e363c16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_style_index_0_id_2e363c16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_style_index_0_id_2e363c16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_style_index_0_id_2e363c16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_style_index_0_id_2e363c16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/components/v2/Drawer.vue?vue&type=template&id=2e363c16&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/admin/components/v2/Drawer.vue?vue&type=template&id=2e363c16&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_template_id_2e363c16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Drawer.vue?vue&type=template&id=2e363c16&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/v2/Drawer.vue?vue&type=template&id=2e363c16&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_template_id_2e363c16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_template_id_2e363c16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
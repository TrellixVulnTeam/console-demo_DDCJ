"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components_Nav_tsx"],{

/***/ "./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?b2b8");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);


const Thor = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, " Hello Earth! I am Thor!")));
const Loki = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, " Hello Earth! I am Loki!")));
const Asgard = () => {
    const pages = [
        {
            href: '',
            name: 'Thor',
            component: Thor,
        },
        {
            href: 'loki',
            name: 'Loki',
            component: Loki,
        },
    ];
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.HorizontalNav, { pages: pages });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asgard);


/***/ })

}]);
//# sourceMappingURL=components_Nav_tsx-chunk.js.map
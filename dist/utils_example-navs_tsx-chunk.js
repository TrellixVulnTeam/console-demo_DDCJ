"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["utils_example-navs_tsx"],{

/***/ "./components/ExamplePage.tsx":
/*!************************************!*\
  !*** ./components/ExamplePage.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamplePage": () => (/* binding */ ExamplePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?6301");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ExamplePage = ({ title }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Page, { additionalGroupedContent: react__WEBPACK_IMPORTED_MODULE_1__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.PageSection, { variant: "light" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Title, { headingLevel: "h1" }, title)), groupProps: { sticky: "top" } }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamplePage);


/***/ }),

/***/ "./utils/example-navs.tsx":
/*!********************************!*\
  !*** ./utils/example-navs.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicPage1": () => (/* binding */ DynamicPage1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?6301");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ExamplePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ExamplePage */ "./components/ExamplePage.tsx");



const DynamicPage1 = () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('plugin__console-demo');
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ExamplePage__WEBPACK_IMPORTED_MODULE_2__.ExamplePage, { title: t('List of Managed Clusters') });
};


/***/ })

}]);
//# sourceMappingURL=utils_example-navs_tsx-chunk.js.map
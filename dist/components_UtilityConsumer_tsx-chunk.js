"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components_UtilityConsumer_tsx"],{

/***/ "./components/UtilityConsumer.tsx":
/*!****************************************!*\
  !*** ./components/UtilityConsumer.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?6301");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);




const UtilityConsumer = () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__console-demo");
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Page, { additionalGroupedContent: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.PageSection, { variant: "light" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Title, { headingLevel: "h1" }, t("Utilities from Dynamic Plugin SDK"))) },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.PageSection, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Card, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.CardTitle, null, t("Utility: consoleFetchJSON")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.CardBody, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConsoleFetchConsumer, null))))));
};
const ConsoleFetchConsumer = () => {
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.consoleFetchJSON)("/api/kubernetes/version")
            .then((response) => {
            setData(response);
        })
            .catch((e) => console.error(e));
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, JSON.stringify(data, null, 2));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UtilityConsumer);


/***/ })

}]);
//# sourceMappingURL=components_UtilityConsumer_tsx-chunk.js.map
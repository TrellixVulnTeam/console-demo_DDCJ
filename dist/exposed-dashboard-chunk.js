(self["webpackChunk"] = self["webpackChunk"] || []).push([["exposed-dashboard"],{

/***/ "./components/common/capacity-card.scss":
/*!**********************************************!*\
  !*** ./components/common/capacity-card.scss ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../node_modules/css-loader/index.js??ruleSet[1].rules[1].use[3]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!../../../node_modules/sass-loader/lib/loader.js??ruleSet[1].rules[1].use[5]!./capacity-card.scss */ "../node_modules/css-loader/index.js??ruleSet[1].rules[1].use[3]!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!../node_modules/sass-loader/lib/loader.js??ruleSet[1].rules[1].use[5]!./components/common/capacity-card.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./components/common/line-graph.scss":
/*!*******************************************!*\
  !*** ./components/common/line-graph.scss ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../node_modules/css-loader/index.js??ruleSet[1].rules[1].use[3]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!../../../node_modules/sass-loader/lib/loader.js??ruleSet[1].rules[1].use[5]!./line-graph.scss */ "../node_modules/css-loader/index.js??ruleSet[1].rules[1].use[3]!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!../node_modules/sass-loader/lib/loader.js??ruleSet[1].rules[1].use[5]!./components/common/line-graph.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./components/performance-card.scss":
/*!******************************************!*\
  !*** ./components/performance-card.scss ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../node_modules/css-loader/index.js??ruleSet[1].rules[1].use[3]!../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!../../node_modules/sass-loader/lib/loader.js??ruleSet[1].rules[1].use[5]!./performance-card.scss */ "../node_modules/css-loader/index.js??ruleSet[1].rules[1].use[3]!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!../node_modules/sass-loader/lib/loader.js??ruleSet[1].rules[1].use[5]!./components/performance-card.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/css-loader/index.js??ruleSet[1].rules[1].use[3]!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!../node_modules/sass-loader/lib/loader.js??ruleSet[1].rules[1].use[5]!./components/common/capacity-card.scss":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/index.js??ruleSet[1].rules[1].use[3]!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!../node_modules/sass-loader/lib/loader.js??ruleSet[1].rules[1].use[5]!./components/common/capacity-card.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "@keyframes loading-skeleton {\n  0% {\n    opacity: 0.15;\n  }\n\n  25% {\n    opacity: 0.65;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.o-capacityCard {\n  min-height: 215px;\n  overflow-y: auto;\n  padding-top: 5px;\n}\n\n.o-capacityCard--centered {\n  align-items: center;\n  display: flex;\n  flex: 1;\n  place-content: center;\n}\n\n.odf-capacityCardLoading-body {\n  display: flex;\n  flex-direction: column;\n  height: 215px;\n}\n\n.odf-capacityCardLink--ellipsis {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 50px;\n}\n\n.odf-capacityCard--height {\n  max-height: 286px;\n}\n\n.odf-capacityCardLoading-body__item {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  justify-content: space-evenly;\n}\n\n.odf-capacityCardLoading-body__item-item__element {\n  animation: loading-skeleton 1s ease-out 0.15s infinite alternate;\n  background: #eaedf1;\n  display: flex;\n  flex-grow: 1;\n  height: 20px;\n  margin: 5px;\n  min-width: 50px;\n}\n\n.odf-capacityCardLoading-body__item--header {\n  height: 40px;\n}\n\n.odf-capacityCardLoading-body__item--thin {\n  width: 25px;\n}\n\n.odf-capacityCardLoading-body__item--thin--thick {\n  width: 80px;\n}\n\n", "", {"version":3,"sources":["/home/gshanmug/Documents/new_123/new/demo-pugin/src/components/common/src/components/common/skeleton.scss","/home/gshanmug/Documents/new_123/new/demo-pugin/src/components/common/capacity-card.scss","/home/gshanmug/Documents/new_123/new/demo-pugin/src/components/common/src/components/common/capacity-card.scss"],"names":[],"mappings":"AAAA;EACI;IACE,cAAA;GCCH;;EDEC;IACE,cAAA;GCCH;;EDEC;IACE,WAAA;GCCH;CACF;;ACVD;EACE,kBAAA;EACA,iBAAA;EACA,iBAAA;CDaD;;ACXC;EACE,oBAAA;EACA,cAAA;EACA,QAAA;EACA,sBAAA;CDcH;;ACbE;EAKC,cAAA;EACA,uBAAA;EACA,cAAA;CDYH;;ACXE;EAGC,eAAA;EACA,iBAAA;EACA,wBAAA;EACA,oBAAA;EACA,YAAA;CDYH;;ACXE;EAGC,kBAAA;CDYH;;ACXE;EAID,cAAA;EACA,oBAAA;EACA,aAAA;EACA,8BAAA;CDWD;;ACTC;EACE,iEAAA;EACA,oBAAA;EACA,cAAA;EACA,aAAA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;CDYH;;ACXE;EAID,aAAA;CDWD;;ACVA;EAGC,YAAA;CDWD;;ACVA;EAGC,YAAA;CDWD","file":"capacity-card.scss","sourcesContent":["@keyframes loading-skeleton {\n    0% {\n      opacity: 0.15;\n    }\n  \n    25% {\n      opacity: 0.65;\n    }\n  \n    100% {\n      opacity: 1;\n    }\n  }\n  \n  $skeleton-animation: loading-skeleton 1s ease-out 0.15s infinite alternate;\n  $skeleton-color: #eaedf1;","@keyframes loading-skeleton {\n  0% {\n    opacity: 0.15;\n  }\n\n  25% {\n    opacity: 0.65;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.o-capacityCard {\n  min-height: 215px;\n  overflow-y: auto;\n  padding-top: 5px;\n}\n\n.o-capacityCard--centered {\n  align-items: center;\n  display: flex;\n  flex: 1;\n  place-content: center;\n}\n\n.odf-capacityCardLoading-body {\n  display: flex;\n  flex-direction: column;\n  height: 215px;\n}\n\n.odf-capacityCardLink--ellipsis {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 50px;\n}\n\n.odf-capacityCard--height {\n  max-height: 286px;\n}\n\n.odf-capacityCardLoading-body__item {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  justify-content: space-evenly;\n}\n\n.odf-capacityCardLoading-body__item-item__element {\n  animation: loading-skeleton 1s ease-out 0.15s infinite alternate;\n  background: #eaedf1;\n  display: flex;\n  flex-grow: 1;\n  height: 20px;\n  margin: 5px;\n  min-width: 50px;\n}\n\n.odf-capacityCardLoading-body__item--header {\n  height: 40px;\n}\n\n.odf-capacityCardLoading-body__item--thin {\n  width: 25px;\n}\n\n.odf-capacityCardLoading-body__item--thin--thick {\n  width: 80px;\n}\n\n","@import './skeleton';\n\n.o-capacityCard {\n  min-height: 215px;\n  overflow-y: auto;\n  padding-top: 5px;\n\n  &--centered {\n    align-items: center;\n    display: flex;\n    flex: 1;\n    place-content: center;\n  }\n}\n\n.odf {\n  &-capacityCardLoading-body {\n    display: flex;\n    flex-direction: column;\n    height: 215px;\n  }\n\n  &-capacityCardLink--ellipsis {\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 50px;\n  }\n\n  &-capacityCard--height {\n    max-height: 286px;\n  }\n}\n\n.odf-capacityCardLoading-body__item {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  justify-content: space-evenly;\n\n  &-item__element {\n    animation: $skeleton-animation;\n    background: $skeleton-color;\n    display: flex;\n    flex-grow: 1;\n    height: 20px;\n    margin: 5px;\n    min-width: 50px;\n  }\n}\n\n.odf-capacityCardLoading-body__item--header {\n  height: 40px;\n}\n\n.odf-capacityCardLoading-body__item--thin {\n  width: 25px;\n}\n\n.odf-capacityCardLoading-body__item--thin--thick {\n  width: 80px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ruleSet[1].rules[1].use[3]!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!../node_modules/sass-loader/lib/loader.js??ruleSet[1].rules[1].use[5]!./components/common/line-graph.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/index.js??ruleSet[1].rules[1].use[3]!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!../node_modules/sass-loader/lib/loader.js??ruleSet[1].rules[1].use[5]!./components/common/line-graph.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, ".odf-lineGraph {\n  display: flex;\n}\n\n.odf-valueBox {\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n}\n\n", "", {"version":3,"sources":["/home/gshanmug/Documents/new_123/new/demo-pugin/src/components/common/src/components/common/line-graph.scss","/home/gshanmug/Documents/new_123/new/demo-pugin/src/components/common/line-graph.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;CCCH;;ADAE;EAGC,cAAA;EACA,uBAAA;EACA,sBAAA;CCCH","file":"line-graph.scss","sourcesContent":[".odf-lineGraph {\n    display: flex;\n  }\n  \n  .odf-valueBox {\n    display: flex;\n    flex-direction: column;\n    place-content: center;\n  }\n  ",".odf-lineGraph {\n  display: flex;\n}\n\n.odf-valueBox {\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ruleSet[1].rules[1].use[3]!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!../node_modules/sass-loader/lib/loader.js??ruleSet[1].rules[1].use[5]!./components/performance-card.scss":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/index.js??ruleSet[1].rules[1].use[3]!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!../node_modules/sass-loader/lib/loader.js??ruleSet[1].rules[1].use[5]!./components/performance-card.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "@keyframes loading-skeleton {\n  0% {\n    opacity: 0.15;\n  }\n\n  25% {\n    opacity: 0.65;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.performanceCard__header {\n  padding: 15px !important;\n}\n\n.performanceCard__header>h5 {\n  margin-left: 5px !important;\n}\n\n.performanceCard__row {\n  padding-bottom: 15px !important;\n  padding-left: 5px !important;\n  padding-top: 15px !important;\n}\n\n.performanceCard__border {\n  border-bottom: 1px solid #d2d2d2 !important;\n}\n\n.performanceCard--error {\n  align-items: center;\n  display: flex;\n  min-height: 150px;\n  place-content: center;\n}\n\n.performanceCard--verticalAlign {\n  vertical-align: middle !important;\n}\n\n.odf-performanceCardLoading-body {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  min-height: 250px;\n  overflow-x: hidden;\n}\n\n.odf-performanceCardLoading-body__item {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  justify-content: space-evenly;\n}\n\n.odf-performanceCardLoading-body-item__element {\n  animation: loading-skeleton 1s ease-out 0.15s infinite alternate;\n  background: #eaedf1;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  margin: 10px 20px;\n  min-width: 150px;\n}\n\n.odf-performanceCardLoading-body--header {\n  height: 25px;\n}\n\n.odf-performanceCardLoading-body-performanceCardError {\n  align-items: center;\n  display: flex;\n  flex: 1;\n  min-height: 150px;\n  place-content: center;\n}\n\n", "", {"version":3,"sources":["/home/gshanmug/Documents/new_123/new/demo-pugin/src/components/src/components/common/skeleton.scss","/home/gshanmug/Documents/new_123/new/demo-pugin/src/components/performance-card.scss","/home/gshanmug/Documents/new_123/new/demo-pugin/src/components/src/components/performance-card.scss"],"names":[],"mappings":"AAAA;EACI;IACE,cAAA;GCCH;;EDEC;IACE,cAAA;GCCH;;EDEC;IACE,WAAA;GCCH;CACF;;ACTC;EACE,yBAAA;CDYH;;ACXE;EAGC,4BAAA;CDYH;;ACXE;EAGC,gCAAA;EACA,6BAAA;EACA,6BAAA;CDYH;;ACXE;EAGC,4CAAA;CDYH;;ACXE;EAGC,oBAAA;EACA,cAAA;EACA,kBAAA;EACA,sBAAA;CDYH;;ACXE;EAGC,kCAAA;CDYH;;ACXE;EAKC,cAAA;EACA,uBAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CDUH;;ACTE;EAID,cAAA;EACA,oBAAA;EACA,aAAA;EACA,8BAAA;CDSD;;ACRA;EAGC,iEAAA;EACA,oBAAA;EACA,cAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;EACA,iBAAA;CDSD;;ACRA;EAGC,aAAA;CDSD;;ACRA;EAGC,oBAAA;EACA,cAAA;EACA,QAAA;EACA,kBAAA;EACA,sBAAA;CDSD","file":"performance-card.scss","sourcesContent":["@keyframes loading-skeleton {\n    0% {\n      opacity: 0.15;\n    }\n  \n    25% {\n      opacity: 0.65;\n    }\n  \n    100% {\n      opacity: 1;\n    }\n  }\n  \n  $skeleton-animation: loading-skeleton 1s ease-out 0.15s infinite alternate;\n  $skeleton-color: #eaedf1;","@keyframes loading-skeleton {\n  0% {\n    opacity: 0.15;\n  }\n\n  25% {\n    opacity: 0.65;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.performanceCard__header {\n  padding: 15px !important;\n}\n\n.performanceCard__header>h5 {\n  margin-left: 5px !important;\n}\n\n.performanceCard__row {\n  padding-bottom: 15px !important;\n  padding-left: 5px !important;\n  padding-top: 15px !important;\n}\n\n.performanceCard__border {\n  border-bottom: 1px solid #d2d2d2 !important;\n}\n\n.performanceCard--error {\n  align-items: center;\n  display: flex;\n  min-height: 150px;\n  place-content: center;\n}\n\n.performanceCard--verticalAlign {\n  vertical-align: middle !important;\n}\n\n.odf-performanceCardLoading-body {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  min-height: 250px;\n  overflow-x: hidden;\n}\n\n.odf-performanceCardLoading-body__item {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  justify-content: space-evenly;\n}\n\n.odf-performanceCardLoading-body-item__element {\n  animation: loading-skeleton 1s ease-out 0.15s infinite alternate;\n  background: #eaedf1;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  margin: 10px 20px;\n  min-width: 150px;\n}\n\n.odf-performanceCardLoading-body--header {\n  height: 25px;\n}\n\n.odf-performanceCardLoading-body-performanceCardError {\n  align-items: center;\n  display: flex;\n  flex: 1;\n  min-height: 150px;\n  place-content: center;\n}\n\n","@import './common/skeleton';\n\n.performanceCard {\n  &__header {\n    padding: 15px !important;\n  }\n\n  &__header > h5 {\n    margin-left: 5px !important;\n  }\n\n  &__row {\n    padding-bottom: 15px !important;\n    padding-left: 5px !important;\n    padding-top: 15px !important;\n  }\n\n  &__border {\n    border-bottom: 1px solid #d2d2d2 !important;\n  }\n\n  &--error {\n    align-items: center;\n    display: flex;\n    min-height: 150px;\n    place-content: center;\n  }\n\n  &--verticalAlign {\n    vertical-align: middle !important;\n  }\n}\n\n.odf {\n  &-performanceCardLoading-body {\n    display: flex;\n    flex-direction: column;\n    margin: 10px;\n    min-height: 250px;\n    overflow-x: hidden;\n  }\n}\n\n.odf-performanceCardLoading-body__item {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  justify-content: space-evenly;\n}\n\n.odf-performanceCardLoading-body-item__element {\n  animation: $skeleton-animation;\n  background: $skeleton-color;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  margin: 10px 20px;\n  min-width: 150px;\n}\n\n.odf-performanceCardLoading-body--header {\n  height: 25px;\n}\n\n.odf-performanceCardLoading-body-performanceCardError {\n  align-items: center;\n  display: flex;\n  flex: 1;\n  min-height: 150px;\n  place-content: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./components/capacity-card.tsx":
/*!**************************************!*\
  !*** ./components/capacity-card.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemCapacityCard": () => (/* binding */ SystemCapacityCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_use_url_poll_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/use-url-poll-hook */ "./components/common/use-url-poll-hook.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk-internal */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk-internal");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../humanize */ "./humanize.js");
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/query */ "./utils/query.ts");
/* harmony import */ var _common_capacity_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/capacity-card */ "./components/common/capacity-card.tsx");








const getMetricForSystem = (metric, system) => {
    var _a, _b;
    return (_b = (_a = metric === null || metric === void 0 ? void 0 : metric.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.find((value) => (value.metric.managedBy === system.metric.target_name) && (value.metric.cluster === system.metric.cluster));
};
const SystemCapacityCard = () => {
    var _a, _b;
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('plugin__odf-console');
    const [systems, errorSystem, loadingsystem] = (0,_common_use_url_poll_hook__WEBPACK_IMPORTED_MODULE_1__.useURLPoll)(`${(0,_utils_query__WEBPACK_IMPORTED_MODULE_6__.getAcmThanosEnpoint)()}?query=odf_system_map`);
    const [usedCapacity, errorUsedCapacity, loadingUsedCapacity] = (0,_common_use_url_poll_hook__WEBPACK_IMPORTED_MODULE_1__.useURLPoll)(`${(0,_utils_query__WEBPACK_IMPORTED_MODULE_6__.getAcmThanosEnpoint)()}?query=odf_system_raw_capacity_used_bytes`);
    const [totalCapacity, errorTotalCapacity, loadingTotalCapacity] = (0,_common_use_url_poll_hook__WEBPACK_IMPORTED_MODULE_1__.useURLPoll)(`${(0,_utils_query__WEBPACK_IMPORTED_MODULE_6__.getAcmThanosEnpoint)()}?query=odf_system_raw_capacity_total_bytes`);
    const data = !loadingsystem && !loadingUsedCapacity && !loadingTotalCapacity
        ? (_b = (_a = systems === null || systems === void 0 ? void 0 : systems.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.map((system) => {
            var _a, _b;
            const usedMetric = getMetricForSystem(usedCapacity, system);
            const totalMetric = getMetricForSystem(totalCapacity, system);
            const datum = {
                name: system.metric.storage_system,
                cluster: system.metric.cluster,
                managedSystemName: system.metric.target_name,
                managedSystemKind: system.metric.target_kind,
                usedValue: (0,_humanize__WEBPACK_IMPORTED_MODULE_5__.humanizeBinaryBytes)((_a = usedMetric === null || usedMetric === void 0 ? void 0 : usedMetric.value) === null || _a === void 0 ? void 0 : _a[1]),
                totalValue: (0,_humanize__WEBPACK_IMPORTED_MODULE_5__.humanizeBinaryBytes)((_b = totalMetric === null || totalMetric === void 0 ? void 0 : totalMetric.value) === null || _b === void 0 ? void 0 : _b[1]),
            };
            return datum;
        })
        : [];
    const error = !lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty(errorSystem) ||
        !lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty(errorTotalCapacity) ||
        !lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty(errorUsedCapacity);
    const isLoading = loadingUsedCapacity && loadingTotalCapacity && !errorSystem;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_2__.DashboardCard, { className: "odf-capacityCard--height" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_2__.DashboardCardHeader, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_2__.DashboardCardTitle, null, t('System Capacity'))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_2__.DashboardCardBody, null, !error ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_capacity_card__WEBPACK_IMPORTED_MODULE_7__.CapacityCard, { data: data, isPercentage: true, loading: isLoading })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, t('No data available'))))));
};


/***/ }),

/***/ "./components/common/capacity-card.tsx":
/*!*********************************************!*\
  !*** ./components/common/capacity-card.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProgress": () => (/* binding */ getProgress),
/* harmony export */   "CapacityCard": () => (/* binding */ CapacityCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../humanize */ "./humanize.js");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/types */ "./utils/types.tsx");
/* harmony import */ var _capacity_card_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./capacity-card.scss */ "./components/common/capacity-card.scss");
/* harmony import */ var _capacity_card_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_capacity_card_scss__WEBPACK_IMPORTED_MODULE_7__);








const getPercentage = (item) => ((0,_humanize__WEBPACK_IMPORTED_MODULE_5__.humanizeBinaryBytes)(item.usedValue.value, item.usedValue.unit, item.totalValue.unit).value /
    item.totalValue.value) *
    100;
const sortMetrics = (metrics, direction = 'ASC', relative = false) => {
    metrics.sort((a, b) => {
        let comparatorA = a.usedValue.value;
        const comparatorB = (0,_humanize__WEBPACK_IMPORTED_MODULE_5__.humanizeBinaryBytes)(b.usedValue.value, b.usedValue.unit, a.usedValue.unit).value;
        if (!relative) {
            comparatorA = getPercentage(a);
            comparatorA = getPercentage(b);
        }
        if (comparatorA < comparatorB) {
            return direction === 'ASC' ? -1 : 1;
        }
        if (comparatorB > comparatorA) {
            return direction === 'ASC' ? 1 : -1;
        }
        return 0;
    });
    return metrics;
};
const CapacityCardHeader = ({ showPercentage, }) => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('plugin__odf-console');
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.GridItem, { span: 2 },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Title, { headingLevel: "h3", size: "md" }, t('Name'))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.GridItem, { span: 7 },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Title, { headingLevel: "h3", size: "md" },
                t('Used Capacity'),
                " ",
                showPercentage && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "%"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.GridItem, { span: 3 },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Title, { headingLevel: "h3", size: "md" }, t('Used / Total')))));
};
const getProgress = (data, isRelative, largestValue) => {
    if (isRelative) {
        return (((0,_humanize__WEBPACK_IMPORTED_MODULE_5__.humanizeBinaryBytes)(data.usedValue.value, data.usedValue.unit, largestValue.unit).value /
            largestValue.value) *
            100);
    }
    return getPercentage(data);
};
const CapacityCardRow = ({ data, isPercentage, isRelative, largestValue, }) => {
    const progress = getProgress(data, isRelative, largestValue);
    const value = isPercentage
        ? `${data.usedValue.string} / ${data.totalValue.string}`
        : data.usedValue.string;
    const variant = (() => {
        if (!isPercentage) {
            return null;
        }
        if (progress >= 80) {
            return _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.ProgressVariant.danger;
        }
        if (progress >= 75) {
            return _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.ProgressVariant.warning;
        }
    })();
    const dataUnavailable = lodash__WEBPACK_IMPORTED_MODULE_2__.isNaN(progress);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.GridItem, { key: `${data.name}~name`, span: 2 },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, `${data.cluster}: ${data.name}`)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.GridItem, { key: `${data.name}~progress`, span: 7 },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { content: !dataUnavailable ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    progress.toFixed(2),
                    " %") : '-' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Progress, { value: dataUnavailable ? null : progress, label: !dataUnavailable ? `${progress.toFixed(2)} %` : '', size: "md", measureLocation: !isPercentage
                        ? _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.ProgressMeasureLocation.none
                        : _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.ProgressMeasureLocation.outside, variant: variant }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.GridItem, { span: 3, key: `${data.name}~value` }, dataUnavailable ? '-' : value)));
};
const CapacityCardLoading = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body__item" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thin odf-capacityCardLoading-body-item__element--header" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thick odf-capacityCardLoading-body-item__element--header" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thin odf-capacityCardLoading-body-item__element--header" })),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body__item" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thin" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thick" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thin" })),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body__item" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thin" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thick" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thin" })),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body__item" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thin" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thick" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thin" })),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body__item" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thin" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thick" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thin" })),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body__item" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thin" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thick" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-capacityCardLoading-body-item__element odf-capacityCardLoading-body-item__element--thin" }))));
const CapacityCard = ({ data, relative, isPercentage = true, loading, }) => {
    var _a;
    let secureRelative = relative;
    if (relative === undefined) {
        secureRelative = ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.totalValue) === undefined;
    }
    const sortedMetrics = sortMetrics(data, 'ASC', secureRelative);
    const error = lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty(sortedMetrics);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('o-capacityCard', {
            'o-capacityCard--centered': error,
        }) },
        !error && !loading && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Grid, { hasGutter: true },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(CapacityCardHeader, { showPercentage: isPercentage }),
            sortedMetrics.map((item) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CapacityCardRow, { key: item.name, data: item, isPercentage: isPercentage, isRelative: relative, largestValue: sortedMetrics[0].usedValue }))))),
        error && !loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_types__WEBPACK_IMPORTED_MODULE_6__.DataUnavailableError, null),
        loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement(CapacityCardLoading, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CapacityCard);


/***/ }),

/***/ "./components/common/line-graph.tsx":
/*!******************************************!*\
  !*** ./components/common/line-graph.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-charts */ "../node_modules/@patternfly/react-charts/dist/esm/components/Chart/Chart.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-charts */ "../node_modules/@patternfly/react-charts/dist/esm/components/ChartVoronoiContainer/ChartVoronoiContainer.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-charts */ "../node_modules/@patternfly/react-charts/dist/esm/components/ChartAxis/ChartAxis.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-charts */ "../node_modules/@patternfly/react-charts/dist/esm/components/ChartGroup/ChartGroup.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-charts */ "../node_modules/@patternfly/react-charts/dist/esm/components/ChartLine/ChartLine.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ref_width__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ref-width */ "./components/common/ref-width.ts");
/* harmony import */ var _line_graph_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line-graph.scss */ "./components/common/line-graph.scss");
/* harmony import */ var _line_graph_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_line_graph_scss__WEBPACK_IMPORTED_MODULE_5__);







const LineGraph = ({ data }) => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('plugin__odf-console');
    const [ref, width] = (0,_ref_width__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const lineData = data.map((datum, i) => (Object.assign({ x: String(i + 1) }, datum)));
    const mappedLineData = lineData.map((datum) => (Object.assign(Object.assign({}, datum), { y: datum.y.value, yString: datum.y.string })));
    const dataUnavailable = lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty(data);
    const unit = !dataUnavailable ? lineData[0].y.unit : '';
    const latestValue = !dataUnavailable
        ? lineData[lineData.length - 1].y.string
        : '';
    return !dataUnavailable ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-lineGraph" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pf-u-display-none-on-md pf-u-display-inline-block-on-lg pf-u-w-95-lg", ref: ref },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_6__.Chart, { containerComponent: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_7__.ChartVoronoiContainer, { labels: ({ datum }) => `${datum.yString} at ${datum.timestamp.toLocaleTimeString()}`, constrainToVisibleArea: true }), height: 150, padding: {
                    bottom: 20,
                    left: 95,
                    right: 15,
                    top: 20,
                }, width: width },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_8__.ChartAxis, { dependentAxis: true, showGrid: true, tickCount: 2, tickFormat: (tick, _index, _ticks) => {
                        return `${tick} ${unit}`;
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_9__.ChartGroup, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_10__.ChartLine, { data: mappedLineData })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pf-u-w-5-lg pf-u-w-100-md odf-valueBox" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Title, { headingLevel: "h5", size: "md" }, latestValue)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, t('Current'))))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "-"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineGraph);


/***/ }),

/***/ "./components/common/poll-hook.tsx":
/*!*****************************************!*\
  !*** ./components/common/poll-hook.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePoll": () => (/* binding */ usePoll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Slightly modified from Dan Abramov's blog post about using React hooks for polling
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const usePoll = (callback, delay, ...dependencies) => {
    const savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // Remember the latest callback.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const tick = () => savedCallback.current();
        tick(); // Run first tick immediately.
        if (delay) {
            // Only start interval if a delay is provided.
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay, ...dependencies]);
};


/***/ }),

/***/ "./components/common/ref-width.ts":
/*!****************************************!*\
  !*** ./components/common/ref-width.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useRefWidth = () => {
    var _a;
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const [width, setWidth] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const clientWidth = (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const handleResize = () => { var _a; return setWidth((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth); };
        window.addEventListener('resize', handleResize);
        window.addEventListener('sidebar_toggle', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('sidebar_toggle', handleResize);
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        setWidth(clientWidth);
    }, [clientWidth]);
    // eslint-disable-next-line no-undef
    return [ref, width];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRefWidth);


/***/ }),

/***/ "./components/common/safe-fetch-hook.ts":
/*!**********************************************!*\
  !*** ./components/common/safe-fetch-hook.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSafeFetch": () => (/* binding */ useSafeFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);


const useSafeFetch = () => {
    const controller = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        controller.current = new AbortController();
        return () => controller.current.abort();
    }, []);
    return (url) => (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.consoleFetchJSON)(url, 'get', { signal: controller.current.signal });
};


/***/ }),

/***/ "./components/common/table.tsx":
/*!*************************************!*\
  !*** ./components/common/table.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__);


const Table = (props) => {
    const { ariaLabel, columns, rawData, rowRenderer } = props;
    const [sortIndex, setSortIndex] = react__WEBPACK_IMPORTED_MODULE_0__.useState(-1);
    const [sortDirection, setSortDirection] = react__WEBPACK_IMPORTED_MODULE_0__.useState(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__.SortByDirection.asc);
    const onSort = (event, columnIndex, sortByDirection) => {
        setSortIndex(columnIndex);
        setSortDirection(sortByDirection);
    };
    const sortedData = sortIndex !== -1
        ? rawData.sort((a, b) => {
            return columns[sortIndex].sortFunction(a, b, sortDirection);
        })
        : rawData;
    const rowData = (sortedData === null || sortedData === void 0 ? void 0 : sortedData.length) > 0 ? sortedData.map(rowRenderer) : [];
    const classNames = columns.map((column) => column.className);
    const headerColumns = columns.map((column, columnIndex) => {
        const isSortable = !!column.sortFunction;
        const sortParams = isSortable
            ? {
                sort: {
                    sortBy: {
                        index: sortIndex,
                        direction: sortDirection,
                    },
                    onSort,
                    columnIndex,
                },
            }
            : {};
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__.Th, Object.assign({ key: columnIndex, className: column.className }, sortParams, { translate: null }), column.columnName));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__.TableComposable, { "aria-label": ariaLabel, translate: null },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__.Thead, { translate: null },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__.Tr, { translate: null }, headerColumns)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__.Tbody, { translate: null }, rowData === null || rowData === void 0 ? void 0 : rowData.map((row, index) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__.Tr, { key: index, translate: null }, row.map((item, cellIndex) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__.Td, { translate: null, key: `${cellIndex}_${index}`, className: classNames[cellIndex] }, item)))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


/***/ }),

/***/ "./components/common/use-url-poll-hook.ts":
/*!************************************************!*\
  !*** ./components/common/use-url-poll-hook.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URL_POLL_DEFAULT_DELAY": () => (/* binding */ URL_POLL_DEFAULT_DELAY),
/* harmony export */   "useURLPoll": () => (/* binding */ useURLPoll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _poll_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poll-hook */ "./components/common/poll-hook.tsx");
/* harmony import */ var _safe_fetch_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe-fetch-hook */ "./components/common/safe-fetch-hook.ts");
/* eslint-disable react-hooks/exhaustive-deps */



const URL_POLL_DEFAULT_DELAY = 15000; // 15 seconds
const useURLPoll = (url, delay = URL_POLL_DEFAULT_DELAY, ...dependencies) => {
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const safeFetch = (0,_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_2__.useSafeFetch)();
    const tick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (url) {
            safeFetch(url)
                .then((data) => {
                setResponse(data);
                setError(undefined);
                setLoading(false);
            })
                .catch((err) => {
                if (err.name !== 'AbortError') {
                    setError(err);
                    setLoading(false);
                    // eslint-disable-next-line no-console
                    console.error(`Error polling URL: ${err}`);
                }
            });
        }
        else {
            setLoading(false);
        }
    }, [url]);
    (0,_poll_hook__WEBPACK_IMPORTED_MODULE_1__.usePoll)(tick, delay, ...dependencies);
    return [response, error, loading];
};


/***/ }),

/***/ "./components/dashboard.tsx":
/*!**********************************!*\
  !*** ./components/dashboard.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ODFDashboard": () => (/* binding */ ODFDashboard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "webpack/sharing/consume/default/react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _status_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-card */ "./components/status-card.tsx");
/* harmony import */ var _capacity_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./capacity-card */ "./components/capacity-card.tsx");
/* harmony import */ var _performance_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./performance-card */ "./components/performance-card.tsx");
/* harmony import */ var _page_heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-heading */ "./components/page-heading.tsx");









const UpperSection = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Grid, { hasGutter: true },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.GridItem, { md: 4, sm: 12 },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_status_card__WEBPACK_IMPORTED_MODULE_5__.StatusCard, null)),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.GridItem, { md: 8, sm: 12 },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_capacity_card__WEBPACK_IMPORTED_MODULE_6__.SystemCapacityCard, null)),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.GridItem, { md: 12, sm: 12 },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_performance_card__WEBPACK_IMPORTED_MODULE_7__.PerformanceCard, null))));
const ODFDashboard = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "co-dashboard-body" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(UpperSection, null))));
};
const ODFDashboardPage = (props) => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('plugin__console-demo');
    const title = t('OpenShift Data Foundation');
    const pages = [
        {
            href: '',
            name: t('Overview'),
            component: ODFDashboard,
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page_heading__WEBPACK_IMPORTED_MODULE_8__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.HorizontalNav, { pages: pages })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ODFDashboardPage);


/***/ }),

/***/ "./components/page-heading.tsx":
/*!*************************************!*\
  !*** ./components/page-heading.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PageHeading = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: "co-m-pane__heading" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "co-m-pane__name co-resource-item" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "co-m-pane__heading-badge" }, " OpenShift Data Foundation "))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeading);


/***/ }),

/***/ "./components/performance-card.tsx":
/*!*****************************************!*\
  !*** ./components/performance-card.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerformanceCard": () => (/* binding */ PerformanceCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk-internal */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk-internal");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_use_url_poll_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/use-url-poll-hook */ "./components/common/use-url-poll-hook.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/types */ "./utils/types.tsx");
/* harmony import */ var _common_line_graph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/line-graph */ "./components/common/line-graph.tsx");
/* harmony import */ var _common_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/table */ "./components/common/table.tsx");
/* harmony import */ var _performance_card_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./performance-card.scss */ "./components/performance-card.scss");
/* harmony import */ var _performance_card_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_performance_card_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_query_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/query-utils */ "./utils/query-utils.ts");
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/query */ "./utils/query.ts");












const getRow = ({ systemName, iopsData, throughputData, latencyData, }) => {
    return [
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, systemName),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_line_graph__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ key: `${systemName}_IOPS` }, iopsData)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_line_graph__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ key: `${systemName}_LAT` }, latencyData)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_line_graph__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ key: `${systemName}_THR` }, throughputData)),
    ];
};
const nameSort = (a, b, c) => {
    const negation = c !== _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.SortByDirection.asc;
    const sortVal = a.systemName.localeCompare(b.systemName);
    return negation ? -sortVal : sortVal;
};
const metricsSort = (metric) => (a, b, c) => {
    var _a, _b, _c, _d, _e, _f;
    const negation = c !== _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.SortByDirection.asc;
    const dataA = (_a = a[metric]) === null || _a === void 0 ? void 0 : _a.data;
    const dataB = (_b = b[metric]) === null || _b === void 0 ? void 0 : _b.data;
    const sortVal = ((_d = (_c = dataA === null || dataA === void 0 ? void 0 : dataA[dataA.length - 1]) === null || _c === void 0 ? void 0 : _c.y) === null || _d === void 0 ? void 0 : _d.value) -
        ((_f = (_e = dataB === null || dataB === void 0 ? void 0 : dataB[dataB.length - 1]) === null || _e === void 0 ? void 0 : _e.y) === null || _f === void 0 ? void 0 : _f.value) || 0;
    return negation ? -sortVal : sortVal;
};
const PerformanceCard = () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('plugin__odf-console');
    const headerColumns = [
        {
            columnName: t('Name'),
            className: 'pf-u-w-10 performanceCard--verticalAlign',
            sortFunction: nameSort,
        },
        {
            columnName: t('IOPS'),
            className: 'pf-u-w-30',
            sortFunction: metricsSort('iopsData'),
        },
        {
            columnName: t('Latency'),
            className: 'pf-u-w-30',
            sortFunction: metricsSort('latencyData'),
        },
        {
            columnName: t('Throughput'),
            className: 'pf-u-w-30',
            sortFunction: metricsSort('throughputData'),
        },
    ];
    const [systems, errorSystem, loadingsystem] = (0,_common_use_url_poll_hook__WEBPACK_IMPORTED_MODULE_5__.useURLPoll)(`${(0,_utils_query__WEBPACK_IMPORTED_MODULE_11__.getAcmThanosEnpoint)()}?query=odf_system_map`);
    const [latency, latencyError, latencyLoading] = (0,_common_use_url_poll_hook__WEBPACK_IMPORTED_MODULE_5__.useURLPoll)(`${(0,_utils_query__WEBPACK_IMPORTED_MODULE_11__.getAcmThanosEnpointQueryRange)()}?query=odf_system_latency_seconds&${(0,_utils_query_utils__WEBPACK_IMPORTED_MODULE_10__.getRangeVectorSearchParams)()}`);
    const [throughput, throughputError, throughputLoading] = (0,_common_use_url_poll_hook__WEBPACK_IMPORTED_MODULE_5__.useURLPoll)(`${(0,_utils_query__WEBPACK_IMPORTED_MODULE_11__.getAcmThanosEnpointQueryRange)()}?query=odf_system_throughput_total_bytes&${(0,_utils_query_utils__WEBPACK_IMPORTED_MODULE_10__.getRangeVectorSearchParams)()}`);
    const [iops, iopsError, iopsLoading] = (0,_common_use_url_poll_hook__WEBPACK_IMPORTED_MODULE_5__.useURLPoll)(`${(0,_utils_query__WEBPACK_IMPORTED_MODULE_11__.getAcmThanosEnpointQueryRange)()}?query=odf_system_iops_total_bytes&${(0,_utils_query_utils__WEBPACK_IMPORTED_MODULE_10__.getRangeVectorSearchParams)()}`);
    const rawRows = (0,_utils_query_utils__WEBPACK_IMPORTED_MODULE_10__.generateDataFrames)(systems, latency, throughput, iops);
    const loading = loadingsystem || latencyLoading || throughputLoading || iopsLoading;
    const error = !!errorSystem || !!throughputError || !!latencyError || !!iopsError;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__.DashboardCard, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__.DashboardCardHeader, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__.DashboardCardTitle, null, t('Performance')),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__.UtilizationDurationDropdown, null)),
        !error && !loading && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_table__WEBPACK_IMPORTED_MODULE_8__["default"], { columns: headerColumns, rawData: rawRows, rowRenderer: getRow, ariaLabel: t('Performance Card') })),
        loading && !error && react__WEBPACK_IMPORTED_MODULE_0__.createElement(PerformanceCardLoading, null),
        ((error && !loading) || (!error && !loading && lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty(rawRows))) && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "performanceCard--error" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_types__WEBPACK_IMPORTED_MODULE_6__.DataUnavailableError, null),
            ' '))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerformanceCard);
const PerformanceCardLoading = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body__item" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body-item__element odf-performanceCardLoading-body-item__element--header" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body-item__element odf-performanceCardLoading-body-item__element--header" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body-item__element odf-performanceCardLoading-body-item__element--header" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body-item__element odf-performanceCardLoading-body-item__element--header" })),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body__item" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body-item__element" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body-item__element" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body-item__element" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body-item__element" })),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body__item" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body-item__element" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body-item__element" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body-item__element" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "odf-performanceCardLoading-body-item__element" }))));


/***/ }),

/***/ "./components/status-card.tsx":
/*!************************************!*\
  !*** ./components/status-card.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusCard": () => (/* binding */ StatusCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk-internal */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk-internal");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.ts");
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/query */ "./utils/query.ts");
/* harmony import */ var _common_use_url_poll_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/use-url-poll-hook */ "./components/common/use-url-poll-hook.ts");







const StatusCard = () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('plugin__console-demo');
    const healthStateMap = (state) => {
        switch (state) {
            case '0':
                return _utils_constants__WEBPACK_IMPORTED_MODULE_4__.HealthState.OK;
            case '1':
                return _utils_constants__WEBPACK_IMPORTED_MODULE_4__.HealthState.WARNING;
            case '2':
                return _utils_constants__WEBPACK_IMPORTED_MODULE_4__.HealthState.ERROR;
            default:
                return _utils_constants__WEBPACK_IMPORTED_MODULE_4__.HealthState.LOADING;
        }
    };
    const [healthData, healthError, healthLoading] = (0,_common_use_url_poll_hook__WEBPACK_IMPORTED_MODULE_6__.useURLPoll)(`${(0,_utils_query__WEBPACK_IMPORTED_MODULE_5__.getAcmThanosEnpoint)()}?query='(label_replace(odf_system_map{target_namespace="openshift-storage"} , "managedBy", "$1", "target_name", "(.*)"))  * on (namespace, managedBy) group_right(storage_system) odf_system_health_status'`);
    const parsedHealthData = !healthError && !healthLoading
        ? healthData.data.result.reduce((acc, curr) => {
            const systemName = curr.metric.storage_system;
            const systemData = {
                systemName,
                rawHealthData: curr.value[1],
                healthState: healthStateMap(curr.value[1]),
            };
            return [...acc, systemData];
        }, [])
        : [];
    const healthySystems = parsedHealthData.filter((item) => item.rawHealthData === '0');
    const unHealthySystems = parsedHealthData.filter((item) => item.rawHealthData !== '0');
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__.DashboardCard, { className: "odfDashboard-card--height" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__.DashboardCardHeader, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__.DashboardCardTitle, null, t('Status'))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__.DashboardCardBody, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__.HealthBody, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Gallery, { className: "co-overview-status__health", hasGutter: true },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.GalleryItem, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__.HealthItem, { title: (0,_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.pluralize)(healthySystems.length, 'Storage System'), state: _utils_constants__WEBPACK_IMPORTED_MODULE_4__.HealthState.OK })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.GalleryItem, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_3__.HealthItem, { title: (0,_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.pluralize)(unHealthySystems.length, 'Storage System'), state: _utils_constants__WEBPACK_IMPORTED_MODULE_4__.HealthState.ERROR })))))));
};


/***/ }),

/***/ "./humanize.js":
/*!*********************!*\
  !*** ./humanize.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "units": () => (/* binding */ units),
/* harmony export */   "validate": () => (/* binding */ validate),
/* harmony export */   "getType": () => (/* binding */ getType),
/* harmony export */   "humanizeBinaryBytesWithoutB": () => (/* binding */ humanizeBinaryBytesWithoutB),
/* harmony export */   "humanizeBinaryBytes": () => (/* binding */ humanizeBinaryBytes),
/* harmony export */   "humanizeDecimalBytes": () => (/* binding */ humanizeDecimalBytes),
/* harmony export */   "humanizeDecimalBytesPerSec": () => (/* binding */ humanizeDecimalBytesPerSec),
/* harmony export */   "humanizePacketsPerSec": () => (/* binding */ humanizePacketsPerSec),
/* harmony export */   "humanizeNumber": () => (/* binding */ humanizeNumber),
/* harmony export */   "humanizeNumberSI": () => (/* binding */ humanizeNumberSI),
/* harmony export */   "humanizeSeconds": () => (/* binding */ humanizeSeconds),
/* harmony export */   "humanizeCpuCores": () => (/* binding */ humanizeCpuCores),
/* harmony export */   "humanizePercentage": () => (/* binding */ humanizePercentage),
/* harmony export */   "convertToBaseValue": () => (/* binding */ convertToBaseValue),
/* harmony export */   "secondsToNanoSeconds": () => (/* binding */ secondsToNanoSeconds),
/* harmony export */   "formatToFractionalDigits": () => (/* binding */ formatToFractionalDigits),
/* harmony export */   "formatBytesAsMiB": () => (/* binding */ formatBytesAsMiB),
/* harmony export */   "formatCores": () => (/* binding */ formatCores),
/* harmony export */   "humanizeIOPS": () => (/* binding */ humanizeIOPS),
/* harmony export */   "humanizeLatency": () => (/* binding */ humanizeLatency)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/findIndex.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/toNumber.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/defaults.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isString.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

const units = {};
const validate = {};
const TYPES = {
    numeric: {
        units: ['', 'k', 'm', 'b'],
        space: false,
        divisor: 1000,
    },
    decimalBytes: {
        units: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'],
        space: true,
        divisor: 1000,
    },
    decimalBytesWithoutB: {
        units: ['', 'k', 'M', 'G', 'T', 'P', 'E'],
        space: true,
        divisor: 1000,
    },
    binaryBytes: {
        units: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'],
        space: true,
        divisor: 1024,
    },
    binaryBytesWithoutB: {
        units: ['i', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi', 'Ei'],
        space: true,
        divisor: 1024,
    },
    SI: {
        units: ['', 'k', 'M', 'G', 'T', 'P', 'E'],
        space: false,
        divisor: 1000,
    },
    decimalBytesPerSec: {
        units: ['Bps', 'KBps', 'MBps', 'GBps', 'TBps', 'PBps', 'EBps'],
        space: true,
        divisor: 1000,
    },
    packetsPerSec: {
        units: ['pps', 'kpps'],
        space: true,
        divisor: 1000,
    },
    seconds: {
        units: ['ns', 'μs', 'ms', 's'],
        space: true,
        divisor: 1000,
    },
};
const getType = (name) => {
    const type = TYPES[name];
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](type)) {
        return {
            units: [],
            space: false,
            divisor: 1000,
        };
    }
    return type;
};
const convertBaseValueToUnits = (value, unitArray, divisor, initialUnit, preferredUnit) => {
    const sliceIndex = initialUnit ? unitArray.indexOf(initialUnit) : 0;
    const units_ = unitArray.slice(sliceIndex);
    if (preferredUnit || preferredUnit === '') {
        const unitIndex = units_.indexOf(preferredUnit);
        if (unitIndex !== -1) {
            return {
                value: value / divisor ** unitIndex,
                unit: preferredUnit,
            };
        }
    }
    let unit = units_.shift();
    while (value >= divisor && units_.length > 0) {
        value = value / divisor;
        unit = units_.shift();
    }
    return { value, unit };
};
const convertValueWithUnitsToBaseValue = (value, unitArray, divisor) => {
    const defaultReturn = { value, unit: '' };
    if (typeof value !== 'string') {
        return defaultReturn;
    }
    let units_ = unitArray.slice().reverse();
    // find which unit we're given
    let truncateStringAt = -1;
    const startingUnitIndex = lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](units_, function (currentUnitValue) {
        const index = value.indexOf(currentUnitValue);
        if (index > -1) {
            truncateStringAt = index;
            return true;
        }
        return false;
    });
    if (startingUnitIndex <= 0) {
        // can't parse
        return defaultReturn;
    }
    // get the numeric value & prepare unit array for conversion
    units_ = units_.slice(startingUnitIndex);
    value = value.substring(0, truncateStringAt);
    value = lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](value);
    let unit = units_.shift();
    while (units_.length > 0) {
        value = value * divisor;
        unit = units_.shift();
    }
    return { value, unit };
};
const getDefaultFractionDigits = (value) => {
    if (value < 1) {
        return 3;
    }
    if (value < 100) {
        return 2;
    }
    return 1;
};
const formatValue = (value, options) => {
    const fractionDigits = getDefaultFractionDigits(value);
    const _a = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](options, {
        maximumFractionDigits: fractionDigits,
    }), { locales } = _a, rest = __rest(_a, ["locales"]);
    // 2nd check converts -0 to 0.
    if (!isFinite(value) || value === 0) {
        value = 0;
    }
    return Intl.NumberFormat(locales, rest).format(value);
};
const round = (units.round = (value, fractionDigits) => {
    if (!isFinite(value)) {
        return 0;
    }
    const multiplier = Math.pow(10, fractionDigits || getDefaultFractionDigits(value));
    return Math.round(value * multiplier) / multiplier;
});
const humanize = (units.humanize = (value, typeName, useRound = false, initialUnit, preferredUnit) => {
    const type = getType(typeName);
    if (!isFinite(value)) {
        value = 0;
    }
    let converted = convertBaseValueToUnits(value, type.units, type.divisor, initialUnit, preferredUnit);
    if (useRound) {
        converted.value = round(converted.value);
        converted = convertBaseValueToUnits(converted.value, type.units, type.divisor, converted.unit, preferredUnit);
    }
    const formattedValue = formatValue(converted.value);
    return {
        string: type.space
            ? `${formattedValue} ${converted.unit}`
            : formattedValue + converted.unit,
        unit: converted.unit,
        value: converted.value,
    };
});
const formatPercentage = (value, options) => {
    const _a = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"]({ style: 'percent' }, // Don't allow perent style to be overridden.
    options, {
        maximumFractionDigits: 1,
    }), { locales } = _a, rest = __rest(_a, ["locales"]);
    return Intl.NumberFormat(locales, rest).format(value);
};
const humanizeBinaryBytesWithoutB = (v, initialUnit, preferredUnit) => humanize(v, 'binaryBytesWithoutB', true, initialUnit, preferredUnit);
const humanizeBinaryBytes = (v, initialUnit, preferredUnit) => humanize(v, 'binaryBytes', true, initialUnit, preferredUnit);
const humanizeDecimalBytes = (v, initialUnit, preferredUnit) => humanize(v, 'decimalBytes', true, initialUnit, preferredUnit);
const humanizeDecimalBytesPerSec = (v, initialUnit, preferredUnit) => humanize(v, 'decimalBytesPerSec', true, initialUnit, preferredUnit);
const humanizePacketsPerSec = (v, initialUnit, preferredUnit) => humanize(v, 'packetsPerSec', true, initialUnit, preferredUnit);
const humanizeNumber = (v, initialUnit, preferredUnit) => humanize(v, 'numeric', true, initialUnit, preferredUnit);
const humanizeNumberSI = (v, initialUnit, preferredUnit) => humanize(v, 'SI', true, initialUnit, preferredUnit);
const humanizeSeconds = (v, initialUnit, preferredUnit) => humanize(v, 'seconds', true, initialUnit, preferredUnit);
const humanizeCpuCores = (v) => {
    const value = v < 1 ? round(v * 1000) : v;
    const unit = v < 1 ? 'm' : '';
    return {
        string: `${formatValue(value)}${unit}`,
        unit,
        value,
    };
};
const humanizePercentage = (value) => {
    // 2nd check converts -0 to 0.
    if (!isFinite(value) || value === 0) {
        value = 0;
    }
    return {
        string: formatPercentage(value / 100),
        unit: '%',
        value: round(value, 1),
    };
};
units.dehumanize = (value, typeName) => {
    const type = getType(typeName);
    return convertValueWithUnitsToBaseValue(value, type.units, type.divisor);
};
validate.split = (value) => {
    const index = value.search(/([a-zA-Z]+)/g);
    let number, unit;
    if (index === -1) {
        number = value;
    }
    else {
        number = value.slice(0, index);
        unit = value.slice(index);
    }
    return [parseFloat(number, 10), unit];
};
const baseUnitedValidation = (value) => {
    if (value === null || value.length === 0) {
        return;
    }
    if (value.search(/\s/g) !== -1) {
        return 'white space is not allowed';
    }
};
const validateNumber = (float = '') => {
    if (float < 0) {
        return 'must be positive';
    }
    if (!isFinite(float)) {
        return 'must be a number';
    }
};
const validCPUUnits = new Set(['m', '']);
const validateCPUUnit = (value = '') => {
    if (validCPUUnits.has(value)) {
        return;
    }
    return `unrecongnized unit: ${value}`;
};
validate.CPU = (value = '') => {
    if (!value) {
        return;
    }
    const error = baseUnitedValidation(value);
    if (error) {
        return error;
    }
    const [number, unit] = validate.split(value);
    if (!unit) {
        return validateNumber(number);
    }
    return validateNumber(number) || validateCPUUnit(unit);
};
const validMemUnits = new Set([
    'E',
    'P',
    'T',
    'G',
    'M',
    'k',
    'Pi',
    'Ti',
    'Gi',
    'Mi',
    'Ki',
]);
const validateMemUnit = (value = '') => {
    if (validMemUnits.has(value)) {
        return;
    }
    return `unrecongnized unit: ${value}`;
};
const validTimeUnits = new Set(['s', 'm', 'h', 'd', 'M', 'y']);
const validateTimeUnit = (value = '') => {
    if (validTimeUnits.has(value)) {
        return;
    }
    return `unrecongnized unit: ${value}`;
};
validate.time = (value = '') => {
    if (!value) {
        return;
    }
    const error = baseUnitedValidation(value);
    if (error) {
        return error;
    }
    const [number, unit] = validate.split(value);
    if (!unit) {
        return 'number and unit required';
    }
    return validateNumber(number) || validateTimeUnit(unit);
};
validate.memory = (value = '') => {
    if (!value) {
        return;
    }
    const error = baseUnitedValidation(value);
    if (error) {
        return error;
    }
    const [number, unit] = validate.split(value);
    if (!unit) {
        return validateNumber(value);
    }
    return validateNumber(number) || validateMemUnit(unit);
};
// Convert k8s compute resources values to a base value for comparison.
// If the value has no unit, it just returns the number, so this function
// can be used for any quota resource (resource counts). `units.dehumanize`
// is problematic for comparing quota resources because you need to know
// what unit you're dealing with already (e.g. decimal vs binary). Returns
// null if value isn't recognized as valid.
const convertToBaseValue = (value) => {
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](value)) {
        return null;
    }
    const [number, unit] = validate.split(value);
    const validationError = validateNumber(number);
    if (validationError) {
        return null;
    }
    if (!unit) {
        return number;
    }
    // Handle CPU millicores specifically.
    if (unit === 'm') {
        return number / 1000;
    }
    if (TYPES.binaryBytesWithoutB.units.includes(unit)) {
        return units.dehumanize(value, 'binaryBytesWithoutB').value;
    }
    if (TYPES.decimalBytesWithoutB.units.includes(unit)) {
        return units.dehumanize(value, 'decimalBytesWithoutB').value;
    }
    // Unrecognized unit.
    return null;
};
const secondsToNanoSeconds = (value) => {
    const val = Number(value);
    return Number.isFinite(val) ? val * 1000 ** 3 : 0;
};
const formatToFractionalDigits = (value, digits) => Intl.NumberFormat(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
}).format(value);
const formatBytesAsMiB = (bytes) => {
    const mib = bytes / 1024 / 1024;
    return formatToFractionalDigits(mib, 1);
};
const formatCores = (cores) => formatToFractionalDigits(cores, 3);
const humanizeIOPS = (value) => {
    const humanizedNumber = humanizeNumber(value);
    return Object.assign(Object.assign({}, humanizedNumber), { string: `${humanizedNumber.string} IOPS`, unit: `${humanizedNumber.unit} IOPS` });
};
const humanizeLatency = (value) => {
    const humanizedTime = humanizeSeconds(secondsToNanoSeconds(value), null, 'ms');
    return humanizedTime;
};


/***/ }),

/***/ "./utils/constants.ts":
/*!****************************!*\
  !*** ./utils/constants.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthState": () => (/* binding */ HealthState),
/* harmony export */   "ACM_THANOS_PROXY_ENDPOINT": () => (/* binding */ ACM_THANOS_PROXY_ENDPOINT),
/* harmony export */   "ACM_THANOS_QUERY_ENDPOINT": () => (/* binding */ ACM_THANOS_QUERY_ENDPOINT),
/* harmony export */   "ACM_THANOS_QUERY_RANGE_ENDPOINT": () => (/* binding */ ACM_THANOS_QUERY_RANGE_ENDPOINT),
/* harmony export */   "ONE_SECOND": () => (/* binding */ ONE_SECOND),
/* harmony export */   "ONE_MINUTE": () => (/* binding */ ONE_MINUTE),
/* harmony export */   "ONE_HOUR": () => (/* binding */ ONE_HOUR)
/* harmony export */ });
var HealthState;
(function (HealthState) {
    HealthState["OK"] = "OK";
    HealthState["ERROR"] = "ERROR";
    HealthState["WARNING"] = "WARNING";
    HealthState["LOADING"] = "LOADING";
    HealthState["UNKNOWN"] = "UNKNOWN";
    HealthState["UPDATING"] = "UPDATING";
    HealthState["PROGRESS"] = "PROGRESS";
    HealthState["NOT_AVAILABLE"] = "NOT_AVAILABLE";
})(HealthState || (HealthState = {}));
;
const ACM_THANOS_PROXY_ENDPOINT = "/api/proxy/namespace/open-cluster-management-observability/service/rbac-query-proxy:8443";
const ACM_THANOS_QUERY_ENDPOINT = "/api/v1/query";
const ACM_THANOS_QUERY_RANGE_ENDPOINT = "/api/v1/query_range";
const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;


/***/ }),

/***/ "./utils/query-utils.ts":
/*!******************************!*\
  !*** ./utils/query-utils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateDataFrames": () => (/* binding */ generateDataFrames),
/* harmony export */   "getRangeVectorSearchParams": () => (/* binding */ getRangeVectorSearchParams)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./utils/constants.ts");
/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../humanize */ "./humanize.js");



const getDatForSystem = (promData, system, humanizer) => {
    var _a, _b, _c;
    const systemName = system.metric.target_name;
    const relatedMetrics = (_b = (_a = promData === null || promData === void 0 ? void 0 : promData.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.find((value) => (value.metric.managedBy === systemName) && (value.metric.cluster === system.metric.cluster));
    const metrics = (_c = relatedMetrics === null || relatedMetrics === void 0 ? void 0 : relatedMetrics.values) === null || _c === void 0 ? void 0 : _c.map((value) => ({
        timestamp: new Date(value[0] * 1000),
        y: humanizer(value[1]),
    }));
    return (metrics || []);
};
const generateDataFrames = (systems, ld, td, id) => {
    var _a;
    if (lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty(systems) || !ld || !td || !id) {
        return [];
    }
    return (_a = systems.data) === null || _a === void 0 ? void 0 : _a.result.reduce((acc, curr) => {
        const frame = {
            managedSystemKind: curr.metric.target_kind,
            managedSystemName: curr.metric.target_name,
            systemName: `${curr.metric.cluster}: ${curr.metric.storage_system}`,
            currentLocation: '/',
            iopsData: {
                data: getDatForSystem(id, curr, _humanize__WEBPACK_IMPORTED_MODULE_2__.humanizeIOPS),
            },
            throughputData: {
                data: getDatForSystem(td, curr, _humanize__WEBPACK_IMPORTED_MODULE_2__.humanizeBinaryBytes),
            },
            latencyData: {
                data: getDatForSystem(ld, curr, _humanize__WEBPACK_IMPORTED_MODULE_2__.humanizeLatency),
            },
        };
        acc.push(frame);
        return acc;
    }, []);
};
// Range vector queries require end, start, and step search params
const getRangeVectorSearchParams = (endTime = Date.now(), samples = 60, timespan = _constants__WEBPACK_IMPORTED_MODULE_1__.ONE_HOUR) => {
    const params = new URLSearchParams();
    params.append('start', `${(endTime - timespan) / 1000}`);
    params.append('end', `${endTime / 1000}`);
    params.append('step', `${timespan / samples / 1000}`);
    return params;
};


/***/ }),

/***/ "./utils/query.ts":
/*!************************!*\
  !*** ./utils/query.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAcmThanosEnpoint": () => (/* binding */ getAcmThanosEnpoint),
/* harmony export */   "getAcmThanosEnpointQueryRange": () => (/* binding */ getAcmThanosEnpointQueryRange)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./utils/constants.ts");

const getAcmThanosEnpoint = () => (`${_constants__WEBPACK_IMPORTED_MODULE_0__.ACM_THANOS_PROXY_ENDPOINT}${_constants__WEBPACK_IMPORTED_MODULE_0__.ACM_THANOS_QUERY_ENDPOINT}`);
const getAcmThanosEnpointQueryRange = () => (`${_constants__WEBPACK_IMPORTED_MODULE_0__.ACM_THANOS_PROXY_ENDPOINT}${_constants__WEBPACK_IMPORTED_MODULE_0__.ACM_THANOS_QUERY_RANGE_ENDPOINT}`);


/***/ }),

/***/ "./utils/types.tsx":
/*!*************************!*\
  !*** ./utils/types.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataUnavailableError": () => (/* binding */ DataUnavailableError)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?ad41");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);


const DataUnavailableError = () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('plugin__console-demo');
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "centerComponent" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "text-muted" }, t('No data available'))));
};


/***/ })

}]);
//# sourceMappingURL=exposed-dashboard-chunk.js.map
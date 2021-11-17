"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components_dashboard_tsx"],{

/***/ "./components/dashboard.tsx":
/*!**********************************!*\
  !*** ./components/dashboard.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ODFDashboard": () => (/* binding */ ODFDashboard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?6301");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "webpack/sharing/consume/default/react-helmet/react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _status_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-card */ "./components/status-card.tsx");
/* harmony import */ var _page_heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-heading */ "./components/page-heading.tsx");







const UpperSection = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Grid, { hasGutter: true },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.GridItem, { md: 8, sm: 12 },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_status_card__WEBPACK_IMPORTED_MODULE_5__.StatusCard, null))));
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
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page_heading__WEBPACK_IMPORTED_MODULE_6__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.HorizontalNav, { pages: pages })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ODFDashboardPage);


/***/ }),

/***/ "./components/page-heading.tsx":
/*!*************************************!*\
  !*** ./components/page-heading.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?6301");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PageHeading = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: "co-m-pane__heading" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "co-m-pane__name co-resource-item" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "co-m-pane__heading-badge" }, " OpenShift Data Foundation "))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeading);


/***/ }),

/***/ "./components/status-card.tsx":
/*!************************************!*\
  !*** ./components/status-card.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusCard": () => (/* binding */ StatusCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?6301");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk-internal */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk-internal/@openshift-console/dynamic-plugin-sdk-internal");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_1__);


/*import { useTranslation } from 'react-i18next';

import { Gallery, GalleryItem, pluralize } from '@patternfly/react-core';

import {
    DashboardCard,
    DashboardCardBody,
    DashboardCardHeader,
    DashboardCardTitle,
    HealthBody,
    HealthItem,
} from '@openshift-console/dynamic-plugin-sdk-internal';

import {
  PrometheusResponse,
} from '@openshift-console/dynamic-plugin-sdk';

import { HealthState } from '../utils/constants';
import { getAcmThanosEnpoint } from '../utils/query';
import { useURLPoll } from './common/use-url-poll-hook'; */
const StatusCard = () => {
    /*const { t } = useTranslation('plugin__console-demo');
     const healthStateMap = (state: string) => {
      switch (state) {
        case '0':
          return HealthState.OK;
        case '1':
          return HealthState.WARNING;
        case '2':
          return HealthState.ERROR;
        default:
          return HealthState.LOADING;
      }
    };
  
    const [healthData, healthError, healthLoading] = useURLPoll<PrometheusResponse>(`${getAcmThanosEnpoint()}?query=node_network_up`);
  
    const parsedHealthData =
    !healthError && !healthLoading
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
  
  const healthySystems = parsedHealthData.filter(
    (item) => item.rawHealthData === '0'
  );
  
  const unHealthySystems = parsedHealthData.filter(
      (item) => item.rawHealthData !== '0'
  ); */
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_1__.DashboardCard, null, "sds")
    /* <DashboardCard className="odfDashboard-card--height">
       <DashboardCardHeader>
         <DashboardCardTitle>{t('Status')}</DashboardCardTitle>
       </DashboardCardHeader>
       <DashboardCardBody>
         <HealthBody>
           <Gallery className="co-overview-status__health" hasGutter>
             <GalleryItem>
                 <HealthItem
                   title={pluralize(healthySystems.length, 'Storage System')}
                   state={HealthState.OK}
                 >
                 </HealthItem>
               </GalleryItem>
               <GalleryItem>
                 <HealthItem
                   title={pluralize(unHealthySystems.length, 'Storage System')}
                   state={HealthState.ERROR}
                 >
                 </HealthItem>
               </GalleryItem>
           </Gallery>
         </HealthBody>
       </DashboardCardBody>
     </DashboardCard>*/
    );
};


/***/ })

}]);
//# sourceMappingURL=components_dashboard_tsx-chunk.js.map
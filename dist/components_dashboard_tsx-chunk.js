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
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _status_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status-card */ "./components/status-card.tsx");





const UpperSection = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Grid, { hasGutter: true },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.GridItem, { md: 8, sm: 12 },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_status_card__WEBPACK_IMPORTED_MODULE_4__.StatusCard, null))));
const ODFDashboard = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "co-dashboard-body" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(UpperSection, null))));
};
const ODFDashboardPage = (props) => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('plugin__console-demo');
    const pages = [
        {
            href: '',
            name: t('Overview'),
            component: ODFDashboard,
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.HorizontalNav, { pages: pages })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ODFDashboardPage);


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
/* harmony import */ var _utils_use_url_poll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/use-url-poll */ "./utils/use-url-poll.ts");


const StatusCard = () => {
    const healthStateMap = (state) => {
        switch (state) {
            case '0':
                return "OK";
            case '1':
                return "WARNING";
            case '2':
                return "ERROR";
            default:
                return "LOADING";
        }
    };
    const [healthData, healthError, healthLoading] = (0,_utils_use_url_poll__WEBPACK_IMPORTED_MODULE_1__.useURLPoll)('/api/proxy/namespace/open-cluster-management-observability/service/observability-thanos-query-new:9099/api/v1/query?query=node_network_up');
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
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, JSON.stringify(healthySystems, null, 2)));
};


/***/ }),

/***/ "./utils/poll-hook.tsx":
/*!*****************************!*\
  !*** ./utils/poll-hook.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePoll": () => (/* binding */ usePoll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?6301");
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

/***/ "./utils/safe-fetch-hook.ts":
/*!**********************************!*\
  !*** ./utils/safe-fetch-hook.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSafeFetch": () => (/* binding */ useSafeFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?6301");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk/@openshift-console/dynamic-plugin-sdk");
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

/***/ "./utils/use-url-poll.ts":
/*!*******************************!*\
  !*** ./utils/use-url-poll.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URL_POLL_DEFAULT_DELAY": () => (/* binding */ URL_POLL_DEFAULT_DELAY),
/* harmony export */   "useURLPoll": () => (/* binding */ useURLPoll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?6301");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _poll_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poll-hook */ "./utils/poll-hook.tsx");
/* harmony import */ var _safe_fetch_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe-fetch-hook */ "./utils/safe-fetch-hook.ts");
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


/***/ })

}]);
//# sourceMappingURL=components_dashboard_tsx-chunk.js.map
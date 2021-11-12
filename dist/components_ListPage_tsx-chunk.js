"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components_ListPage_tsx"],{

/***/ "./components/ListPage.tsx":
/*!*********************************!*\
  !*** ./components/ListPage.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filters": () => (/* binding */ filters),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?6301");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);


const columns = [
    {
        title: 'Name',
        id: 'name',
    },
    {
        title: 'Namespace',
        id: 'namespace',
    },
];
const PodRow = ({ obj, activeColumnIDs }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.TableData, { id: columns[0].id, activeColumnIDs: activeColumnIDs },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceLink, { kind: "Pod", name: obj.metadata.name, namespace: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.TableData, { id: columns[1].id, activeColumnIDs: activeColumnIDs },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceLink, { kind: "Namespace", name: obj.metadata.namespace }))));
};
const PodsTable = ({ data, unfilteredData, loaded, loadError }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.VirtualizedTable, { data: data, unfilteredData: unfilteredData, loaded: loaded, loadError: loadError, columns: columns, Row: PodRow }));
};
const filters = [
    {
        filterGroupName: 'App type',
        type: 'pod-app',
        reducer: (pod) => (pod.metadata.name.includes('kube-scheduler') ? 'scheduler' : 'other'),
        filter: (input, pod) => {
            var _a;
            if ((_a = input.selected) === null || _a === void 0 ? void 0 : _a.length) {
                if (pod.metadata.name.includes('kube-scheduler')) {
                    return input.selected.includes('scheduler');
                }
                if (!pod.metadata.name.includes('kube-scheduler')) {
                    return input.selected.includes('other');
                }
            }
            return true;
        },
        items: [
            { id: 'scheduler', title: 'Scheduler pods' },
            { id: 'other', title: 'Other pods' },
        ],
    },
];
const ListPage = () => {
    const [pods, loaded, loadError] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useK8sWatchResource)({
        kind: 'Pod',
        isList: true,
        namespaced: true,
    });
    const [data, filteredData, onFilterChange] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useListPageFilter)(pods, filters, {
        name: { selected: ['openshift'] },
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ListPageHeader, { title: "OpenShift Pods List Page" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ListPageCreate, { groupVersionKind: "Pod" }, "Create Pod")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ListPageBody, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ListPageFilter, { data: data, loaded: loaded, rowFilters: filters, onFilterChange: onFilterChange }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(PodsTable, { data: filteredData, unfilteredData: data, loaded: loaded, loadError: loadError }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListPage);


/***/ })

}]);
//# sourceMappingURL=components_ListPage_tsx-chunk.js.map
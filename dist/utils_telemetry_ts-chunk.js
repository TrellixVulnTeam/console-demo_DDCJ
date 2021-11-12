"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["utils_telemetry_ts"],{

/***/ "./utils/telemetry.ts":
/*!****************************!*\
  !*** ./utils/telemetry.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventListener": () => (/* binding */ eventListener)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const SEGMENT_KEY = '';
const initSegment = () => {
    const analytics = (window.analytics = window.analytics || []);
    if (analytics.initialize) {
        return;
    }
    if (analytics.invoked)
        window.console && console.error && console.error('Segment snippet included twice.');
    else {
        analytics.invoked = true;
        analytics.methods = [
            'trackSubmit',
            'trackClick',
            'trackLink',
            'trackForm',
            'pageview',
            'identify',
            'reset',
            'group',
            'track',
            'ready',
            'alias',
            'debug',
            'page',
            'once',
            'off',
            'on',
            'addSourceMiddleware',
            'addIntegrationMiddleware',
            'setAnonymousId',
            'addDestinationMiddleware',
        ];
        analytics.factory = function (e) {
            return function () {
                let t = Array.prototype.slice.call(arguments);
                t.unshift(e);
                analytics.push(t);
                return analytics;
            };
        };
        for (let e = 0; e < analytics.methods.length; e++) {
            let key = analytics.methods[e];
            analytics[key] = analytics.factory(key);
        }
        analytics.load = function (key, e) {
            const t = document.createElement('script');
            t.type = 'text/javascript';
            t.async = true;
            t.src = 'https://cdn.segment.com/analytics.js/v1/' + encodeURIComponent(key) + '/analytics.min.js';
            const n = document.getElementsByTagName('script')[0];
            if (n.parentNode) {
                n.parentNode.insertBefore(t, n);
            }
            analytics._loadOptions = e;
        };
        analytics.SNIPPET_VERSION = '4.13.1';
        if (SEGMENT_KEY) {
            analytics.load(SEGMENT_KEY);
        }
    }
};
initSegment();
const eventListener = (eventType, properties) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line no-console
    console.log('Demo Plugin received telemetry event: ', eventType, properties);
    const anonymousIP = {
        context: {
            ip: '0.0.0.0',
        },
    };
    switch (eventType) {
        case 'identify':
            const { user } = properties, otherProperties = __rest(properties, ["user"]);
            const id = user.metadata.uid || `${location.host}-${user.metadata.name}`;
            // Use SHA1 hash algorithm to anonymize the user
            const anonymousIdBuffer = yield crypto.subtle.digest('SHA-1', new TextEncoder().encode(id));
            const anonymousIdArray = Array.from(new Uint8Array(anonymousIdBuffer));
            const anonymousId = anonymousIdArray.map((b) => b.toString(16).padStart(2, '0')).join('');
            window.analytics.identify(anonymousId, otherProperties, anonymousIP);
            break;
        case 'page':
            window.analytics.page(undefined, properties, anonymousIP);
            break;
        default:
            window.analytics.track(eventType, properties, anonymousIP);
    }
});


/***/ })

}]);
//# sourceMappingURL=utils_telemetry_ts-chunk.js.map
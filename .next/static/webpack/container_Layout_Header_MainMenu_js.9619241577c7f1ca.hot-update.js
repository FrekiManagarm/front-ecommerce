"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("container_Layout_Header_MainMenu_js",{

/***/ "./container/Layout/Header/MainMenu.js":
/*!*********************************************!*\
  !*** ./container/Layout/Header/MainMenu.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var country_flag_icons_react_3x2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! country-flag-icons/react/3x2 */ \"./node_modules/country-flag-icons/react/3x2/index.js\");\n/* harmony import */ var _helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/activeLink */ \"./helpers/activeLink.js\");\n/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useTranslation */ \"./hooks/useTranslation.js\");\n/* harmony import */ var _MainMenu_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainMenu.style */ \"./container/Layout/Header/MainMenu.style.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Desktop/front-ecommerce/container/Layout/Header/MainMenu.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar MainMenu = function MainMenu(_ref) {\n  _s();\n\n  var className = _ref.className,\n      isLoggedIn = _ref.isLoggedIn;\n\n  // aide toi également de la documentation de antd elle te sera très utile\n  var _useTranslation = (0,_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      t = _useTranslation.t;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  var locale = router.locale,\n      query = router.query;\n  var Option = antd__WEBPACK_IMPORTED_MODULE_7__.Select.Option;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      language = _useState[0],\n      setLanguage = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setLanguage(locale);\n  }, []);\n\n  var handleChangeLocale = function handleChangeLocale(key) {\n    // cette fonction est la pour recharger pour rester sur la même page quand tu change\n    // la langue du site\n    router.push(router.asPath, router.asPath, {\n      locale: key\n    });\n    setLanguage(key);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(MainMenu, \"Q21jJeJnhSkP1IfTvambyVZPc9Q=\", false, function () {\n  return [_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = MainMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.withRouter)(MainMenu));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MainMenu\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXIvTGF5b3V0L0hlYWRlci9NYWluTWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTVUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsU0FBNEIsUUFBNUJBLFNBQTRCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFFNUM7QUFFQSx3QkFBY0osaUVBQWMsRUFBNUI7QUFBQSxNQUFRSyxDQUFSLG1CQUFRQSxDQUFSOztBQUNBLE1BQU1DLE1BQU0sR0FBR2Qsc0RBQVMsRUFBeEI7QUFDQSxNQUFRZSxNQUFSLEdBQTBCRCxNQUExQixDQUFRQyxNQUFSO0FBQUEsTUFBZ0JDLEtBQWhCLEdBQTBCRixNQUExQixDQUFnQkUsS0FBaEI7QUFDQSxNQUFRQyxNQUFSLEdBQW1CWiwrQ0FBbkI7O0FBQ0Esa0JBQWdDSCwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPZ0IsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFFQWhCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaZ0IsSUFBQUEsV0FBVyxDQUFDSixNQUFELENBQVg7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsR0FBRyxFQUFJO0FBQzlCO0FBQ0E7QUFDQVAsSUFBQUEsTUFBTSxDQUFDUSxJQUFQLENBQVlSLE1BQU0sQ0FBQ1MsTUFBbkIsRUFBMkJULE1BQU0sQ0FBQ1MsTUFBbEMsRUFBMEM7QUFBRVIsTUFBQUEsTUFBTSxFQUFFTTtBQUFWLEtBQTFDO0FBQ0FGLElBQUFBLFdBQVcsQ0FBQ0UsR0FBRCxDQUFYO0FBQ0gsR0FMRDs7QUFPQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBU0gsQ0E5QkQ7O0dBQU1YO1VBSVlGLCtEQUNDUjs7O0tBTGJVO0FBZ0NOLCtEQUFlLE1BQUFULHVEQUFVLENBQUNTLFFBQUQsQ0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0xheW91dC9IZWFkZXIvTWFpbk1lbnUuanM/NTRlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSwgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgRmxhZ3MgZnJvbSAnY291bnRyeS1mbGFnLWljb25zL3JlYWN0LzN4Mic7XG5pbXBvcnQgQWN0aXZlTGluayBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2FjdGl2ZUxpbmsnO1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRyYW5zbGF0aW9uJztcbmltcG9ydCB7IExhbmd1YWdlU2VsZWN0V3JhcHBlciB9IGZyb20gJy4vTWFpbk1lbnUuc3R5bGUnO1xuXG5jb25zdCBNYWluTWVudSA9ICh7IGNsYXNzTmFtZSwgaXNMb2dnZWRJbiB9KSA9PiB7XG5cbiAgICAvLyBhaWRlIHRvaSDDqWdhbGVtZW50IGRlIGxhIGRvY3VtZW50YXRpb24gZGUgYW50ZCBlbGxlIHRlIHNlcmEgdHLDqHMgdXRpbGVcblxuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGxvY2FsZSwgcXVlcnkgfSA9IHJvdXRlcjtcbiAgICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuICAgIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRMYW5ndWFnZShsb2NhbGUpO1xuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTG9jYWxlID0ga2V5ID0+IHtcbiAgICAgICAgLy8gY2V0dGUgZm9uY3Rpb24gZXN0IGxhIHBvdXIgcmVjaGFyZ2VyIHBvdXIgcmVzdGVyIHN1ciBsYSBtw6ptZSBwYWdlIHF1YW5kIHR1IGNoYW5nZVxuICAgICAgICAvLyBsYSBsYW5ndWUgZHUgc2l0ZVxuICAgICAgICByb3V0ZXIucHVzaChyb3V0ZXIuYXNQYXRoLCByb3V0ZXIuYXNQYXRoLCB7IGxvY2FsZToga2V5IH0pO1xuICAgICAgICBzZXRMYW5ndWFnZShrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihNYWluTWVudSlcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ3aXRoUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNZW51IiwiU2VsZWN0IiwiRmxhZ3MiLCJBY3RpdmVMaW5rIiwidXNlVHJhbnNsYXRpb24iLCJMYW5ndWFnZVNlbGVjdFdyYXBwZXIiLCJNYWluTWVudSIsImNsYXNzTmFtZSIsImlzTG9nZ2VkSW4iLCJ0Iiwicm91dGVyIiwibG9jYWxlIiwicXVlcnkiLCJPcHRpb24iLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaGFuZGxlQ2hhbmdlTG9jYWxlIiwia2V5IiwicHVzaCIsImFzUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./container/Layout/Header/MainMenu.js\n");

/***/ })

});
self["webpackHotUpdate_N_E"]("pages/auth/signup",{

/***/ "./hooks/use-requests.js":
/*!*******************************!*\
  !*** ./hooks/use-requests.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_SkyMa_OneDrive_Developer_Docker_projects_MSI_tickets_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_SkyMa_OneDrive_Developer_Docker_projects_MSI_tickets_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_SkyMa_OneDrive_Developer_Docker_projects_MSI_tickets_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_SkyMa_OneDrive_Developer_Docker_projects_MSI_tickets_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\SkyMa\\OneDrive\\Developer\\Docker projects-MSI\\tickets\\client\\hooks\\use-requests.js",
    _this = undefined,
    _s = $RefreshSig$();



/* harmony default export */ __webpack_exports__["default"] = (_s(function (_ref) {
  _s();

  var url = _ref.url,
      method = _ref.method,
      body = _ref.body,
      onSuccess = _ref.onSuccess;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      errors = _useState[0],
      setErrors = _useState[1];

  var doRequest = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_SkyMa_OneDrive_Developer_Docker_projects_MSI_tickets_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_SkyMa_OneDrive_Developer_Docker_projects_MSI_tickets_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var res;
      return C_Users_SkyMa_OneDrive_Developer_Docker_projects_MSI_tickets_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setErrors(null);
              _context.next = 4;
              return (axios__WEBPACK_IMPORTED_MODULE_3___default())[method](url, body);

            case 4:
              res = _context.sent;
              if (onSuccess) onSuccess(res.data);
              return _context.abrupt("return", res.data);

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              setErrors( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "alter alert-danger",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                  children: "O00ps..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                  className: "my-0",
                  children: errors || errors.response.data.errors.map(function (err) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                      children: err.message
                    }, err.message, false, {
                      fileName: _jsxFileName,
                      lineNumber: 21,
                      columnNumber: 71
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 13
              }, _this));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function doRequest() {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    doRequest: doRequest,
    errors: errors
  };
}, "CBiIfGMAaAtFFE/cKx87b00YZJU="));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXJlcXVlc3RzLmpzIl0sIm5hbWVzIjpbInVybCIsIm1ldGhvZCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJ1c2VTdGF0ZSIsImVycm9ycyIsInNldEVycm9ycyIsImRvUmVxdWVzdCIsImF4aW9zIiwicmVzIiwiZGF0YSIsInJlc3BvbnNlIiwibWFwIiwiZXJyIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSwrREFBZSxtQkFBb0M7QUFBQTs7QUFBQSxNQUFsQ0EsR0FBa0MsUUFBbENBLEdBQWtDO0FBQUEsTUFBN0JDLE1BQTZCLFFBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7O0FBQUEsa0JBQ25CQywrQ0FBUSxDQUFDLElBQUQsQ0FEVztBQUFBLE1BQ3hDQyxNQUR3QztBQUFBLE1BQ2hDQyxTQURnQzs7QUFHL0MsTUFBTUMsU0FBUztBQUFBLDBWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVZELHVCQUFTLENBQUMsSUFBRCxDQUFUO0FBRlU7QUFBQSxxQkFHUUUsOENBQUssQ0FBQ1AsTUFBRCxDQUFMLENBQWNELEdBQWQsRUFBbUJFLElBQW5CLENBSFI7O0FBQUE7QUFHSk8saUJBSEk7QUFLVixrQkFBR04sU0FBSCxFQUFjQSxTQUFTLENBQUNNLEdBQUcsQ0FBQ0MsSUFBTCxDQUFUO0FBTEosK0NBT0hELEdBQUcsQ0FBQ0MsSUFQRDs7QUFBQTtBQUFBO0FBQUE7QUFVVkosdUJBQVMsZUFDVDtBQUFLLHlCQUFTLEVBQUMsb0JBQWY7QUFBQSx3Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJO0FBQUksMkJBQVMsRUFBQyxNQUFkO0FBQUEsNEJBQ0tELE1BQU0sSUFBSUEsTUFBTSxDQUFDTSxRQUFQLENBQWdCRCxJQUFoQixDQUFxQkwsTUFBckIsQ0FBNEJPLEdBQTVCLENBQWdDLFVBQUFDLEdBQUc7QUFBQSx3Q0FBSTtBQUFBLGdDQUF1QkEsR0FBRyxDQUFDQztBQUEzQix1QkFBU0QsR0FBRyxDQUFDQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQUo7QUFBQSxtQkFBbkM7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEUyxDQUFUOztBQVZVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVRQLFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFxQkEsU0FBTztBQUFDQSxhQUFTLEVBQVRBLFNBQUQ7QUFBWUYsVUFBTSxFQUFOQTtBQUFaLEdBQVA7QUFDSCxDQXpCRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL3NpZ251cC4yN2YyMmVjZTE0MTVlNTczMTM3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoe3VybCwgbWV0aG9kLCBib2R5LCBvblN1Y2Nlc3N9KSA9PiB7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRvUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHNldEVycm9ycyhudWxsKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIGJvZHkpO1xyXG5cclxuICAgICAgICAgICAgaWYob25TdWNjZXNzKSBvblN1Y2Nlc3MocmVzLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlKXtcclxuICAgICAgICAgICAgc2V0RXJyb3JzKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsdGVyIGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg0Pk8wMHBzLi4uPC9oND5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJteS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycyB8fCBlcnJvcnMucmVzcG9uc2UuZGF0YS5lcnJvcnMubWFwKGVyciA9PiA8bGkga2V5PXtlcnIubWVzc2FnZX0+e2Vyci5tZXNzYWdlfTwvbGk+KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge2RvUmVxdWVzdCwgZXJyb3JzfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
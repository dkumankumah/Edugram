"use strict";
(() => {
var exports = {};
exports.id = 852;
exports.ids = [852,856];
exports.modules = {

/***/ 4714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Example),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./public/data/students.json
const students_namespaceObject = JSON.parse('[{"id":1,"name":"Bugra","lastName":"Karaaslan","study":"software engineering"},{"id":2,"name":"Daniel","lastName":"Kumankumah","study":"software engineering"},{"id":3,"name":"Salman","lastName":"Lartey","study":"software engineering"},{"id":4,"name":"Alperen","lastName":"Kavakli","study":"software engineering"},{"id":5,"name":"Danny","lastName":"Nansink","study":"software engineering"}]');
// EXTERNAL MODULE: ./src/pages/notFoundPage.tsx
var notFoundPage = __webpack_require__(4379);
;// CONCATENATED MODULE: ./src/pages/example.tsx
// Don't push unused imports to the repository, delete it.



// page imports

// Make use of an function component.
function Example({ studentList , secondName  }) {
    // This is a nullcheck, if the data is empty the user will be returned to the notFound page or a similar page.
    if (!studentList && !secondName) {
        return /*#__PURE__*/ jsx_runtime_.jsx(notFoundPage["default"], {});
    }
    return(// If study is empty it will not render the Text component.
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        alignItems: "center",
        flexDir: "column",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                as: "h1",
                children: "The example page"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                as: "h2",
                children: "The H2 text"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                children: secondName
            }),
            studentList?.map((student)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    flexDir: "column",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        as: "p",
                        children: student.firstName
                    })
                }, student._id);
            })
        ]
    }));
}
// A way to fetch data from API or Local Json
const getStaticProps = async ()=>{
    return {
        props: {
            studentList: students_namespaceObject
        }
    };
};


/***/ }),

/***/ 4379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


function NotFoundPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                children: "404"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                children: "The page you're trying to visit doesn't exist (anymore)."
            })
        ]
    });
}


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4714));
module.exports = __webpack_exports__;

})();
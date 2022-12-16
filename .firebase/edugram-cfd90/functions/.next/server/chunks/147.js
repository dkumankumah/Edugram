"use strict";
exports.id = 147;
exports.ids = [147];
exports.modules = {

/***/ 2105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* reexport */ GoogleBtn)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-icons/fc"
var fc_ = __webpack_require__(178);
// EXTERNAL MODULE: external "react-icons"
var external_react_icons_ = __webpack_require__(6698);
;// CONCATENATED MODULE: ./src/components/shared/GoogleBtn/GoogleBtn.tsx
/**
 * @author Bugra Karaaslan, 500830631, This is a Google button component.
 */ 



function GoogleBtn({ children , label , color , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Button, {
        "aria-label": label,
        sx: {
            cursor: "pointer",
            userSelect: "none",
            fontWeight: "medium",
            fontSize: "xs",
            bg: "white",
            color: color || "black",
            hover: "none",
            minWidth: "265px",
            minH: "50px",
            borderRadius: "30px"
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_icons_.IconContext.Provider, {
                value: {
                    style: {
                        marginRight: "0.5rem"
                    },
                    className: "global-class-name"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(fc_.FcGoogle, {})
            }),
            children
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/shared/GoogleBtn/index.ts



/***/ }),

/***/ 4368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ InputField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @author Bugra Karaaslan, 500830631, This is an inputfield component.
 */ 

function InputField({ placeholder , label , id , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
        bg: "EduWhite",
        "aria-label": label,
        id: id,
        ...props,
        fontSize: "xs",
        maxW: "265px",
        placeholder: placeholder
    });
}


/***/ })

};
;
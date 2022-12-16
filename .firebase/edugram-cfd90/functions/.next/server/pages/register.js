"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 5330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ RegisterFormTutor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _components_shared_InputField_InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4368);
/* harmony import */ var _components_shared_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7577);
/* harmony import */ var _components_shared_GoogleBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2105);
/* harmony import */ var _components_shared_PasswordInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1002);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * @author Bugra Karaaslan, 500830631, This is a register form.
 */ 


// component imports





function RegisterFormTutor() {
    const [tutor, setTutor] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "tutor"
    });
    const createTutor = async (event)=>{
        event.preventDefault();
        let newTutor = tutor;
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:8000/tutor", newTutor);
    };
    const handleChange = (event)=>{
        const { name , value  } = event.target;
        setTutor((prevInput)=>{
            return {
                ...prevInput,
                [name]: value
            };
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        minW: {
            sm: "330px",
            lg: "430px"
        },
        maxW: "430px",
        height: "670px",
        bg: "blue",
        borderRadius: 20,
        alignItems: "center",
        flexDir: "column",
        ml: {
            sm: "0px",
            md: "40px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                color: "eduWhite",
                mt: 6,
                as: "h1",
                fontSize: {
                    sm: "md",
                    lg: "lg"
                },
                children: "Create your account"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_InputField_InputField__WEBPACK_IMPORTED_MODULE_3__/* .InputField */ .U, {
                label: "first name",
                mt: 10,
                name: "firstName",
                onChange: handleChange,
                value: tutor.firstName,
                placeholder: "First name",
                id: "firstName"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_InputField_InputField__WEBPACK_IMPORTED_MODULE_3__/* .InputField */ .U, {
                label: "last name",
                mt: 9,
                name: "lastName",
                onChange: handleChange,
                value: tutor.lastName,
                placeholder: "Last name",
                id: "lastName"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_InputField_InputField__WEBPACK_IMPORTED_MODULE_3__/* .InputField */ .U, {
                label: "email",
                mt: 8,
                name: "email",
                onChange: handleChange,
                value: tutor.email,
                type: "email",
                placeholder: "Email",
                id: "email"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_PasswordInput__WEBPACK_IMPORTED_MODULE_6__/* .PasswordInput */ .W, {
                label: "password",
                mt: 8,
                name: "password",
                onChange: handleChange,
                value: tutor.password,
                placeholder: "Password",
                id: "password"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_4__/* .SubmitButton */ .M, {
                label: "create account",
                mt: 12,
                id: "submitButton",
                mb: 4,
                onClick: createTutor,
                children: "Create"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontWeight: "bold",
                color: "eduWhite",
                children: "OR"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_GoogleBtn__WEBPACK_IMPORTED_MODULE_5__/* .GoogleBtn */ .O, {
                label: "Sign up with your Google account",
                "data-cy": "googleBtn",
                mt: 8,
                children: "Sign up with Google"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ SubmitButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @author Bugra Karaaslan, 500830631, This is a submitButton component.
 */ 

function SubmitButton({ children , label , color , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        "aria-label": label,
        sx: {
            cursor: "pointer",
            userSelect: "none",
            fontWeight: "medium",
            fontSize: "xs",
            bg: color || "yellow",
            color: color || "black",
            hover: "none",
            minWidth: "135px",
            height: "45px"
        },
        ...props,
        children: children
    });
}


/***/ }),

/***/ 1002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* reexport */ PasswordInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
;// CONCATENATED MODULE: ./src/components/shared/PasswordInput/PasswordInput.tsx
/**
 * @author Bugra Karaaslan, 500830631, This is a password inputField component.
 */ 



function PasswordInput({ placeholder , label , id , mt , ...props }) {
    const [show, setShow] = (0,external_react_.useState)(false);
    const handleClick = ()=>setShow(!show);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
        maxW: "265px",
        minH: "50px",
        mt: mt,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                "aria-label": label,
                bg: "EduWhite",
                id: id,
                pr: "3rem",
                ...props,
                fontSize: "xs",
                maxW: "265px",
                type: show ? "text" : "password",
                placeholder: "Password"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.InputRightElement, {
                width: "2.5rem",
                h: "2rem",
                mt: 1,
                mr: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    h: "1.75rem",
                    size: "sm",
                    fontSize: "sm",
                    onClick: handleClick,
                    children: show ? /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiShow, {}) : /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiHide, {})
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/shared/PasswordInput/index.ts



/***/ }),

/***/ 3527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Register),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_data_registerPageTutor_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7549);
/* harmony import */ var _components_RegisterFormtutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5330);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_RegisterFormtutor__WEBPACK_IMPORTED_MODULE_3__]);
_components_RegisterFormtutor__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * @author Bugra Karaaslan, 500830631, This is the register page.
 */ 


// component imports

function Register({ title , description  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        minH: "100vh",
        backgroundImage: "url('/images/bg-edugram.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            flexDir: "column",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    maxW: "200px",
                    ml: 8,
                    mt: "5.5rem",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        src: "/images/edugram-logo.png",
                        alt: "logo of Edugram"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    justifyContent: "flex-start",
                    alignItems: {
                        sm: "center",
                        lg: "flex-start"
                    },
                    ml: {
                        md: 0,
                        lg: 8
                    },
                    mt: "150px",
                    flexDir: {
                        sm: "column",
                        md: "column",
                        lg: "row"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            flexDir: "column",
                            maxW: {
                                sm: "90%",
                                md: "50%"
                            },
                            m: {
                                sm: "30px",
                                lg: "0px"
                            },
                            mr: {
                                lg: "10px",
                                xl: "100px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                    children: !!title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        as: "h1",
                                        children: title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                    mt: "3rem",
                                    children: !!description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        mt: 2,
                                        maxW: "50%",
                                        children: description
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RegisterFormtutor__WEBPACK_IMPORTED_MODULE_3__/* .RegisterFormTutor */ .S, {})
                    ]
                })
            ]
        })
    });
}
const getStaticProps = async ()=>{
    return {
        props: {
            title: _public_data_registerPageTutor_json__WEBPACK_IMPORTED_MODULE_2__/* .title */ .T,
            description: _public_data_registerPageTutor_json__WEBPACK_IMPORTED_MODULE_2__/* .description */ .W
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6698:
/***/ ((module) => {

module.exports = require("react-icons");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 178:
/***/ ((module) => {

module.exports = require("react-icons/fc");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 7549:
/***/ ((module) => {

module.exports = JSON.parse('{"T":"Homework assistance or tutoring","W":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [147], () => (__webpack_exec__(3527)));
module.exports = __webpack_exports__;

})();
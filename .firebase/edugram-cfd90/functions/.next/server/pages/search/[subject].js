"use strict";
(() => {
var exports = {};
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 2396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioCard": () => (/* binding */ RadioCard),
/* harmony export */   "default": () => (/* binding */ Overview),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @author Daniel Kumankumah, 500811456
 * This page provides a list of tutors in a grid of cards
 * List of tutors are filter based on subject and can be sorted
 * Every tutor has an image, name, rating and short bio
 */ 

function Overview({ tutors , subject  }) {
    const options = [
        "Price",
        "Response time",
        "Name"
    ];
    const handleChange = (value)=>{
        switch(value){
            case options[0]:
                sortFee();
                break;
            case options[1]:
                tutors.reverse();
                console.log(value);
                break;
            case options[2]:
                sortName();
                console.log(value);
                break;
        }
    };
    const { getRootProps , getRadioProps  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useRadioGroup)({
        name: "filter",
        onChange: handleChange
    });
    const group = getRootProps();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                justifyContent: "center",
                px: 20,
                paddingTop: 10,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    templateColumns: "15% 70% 15%",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
                            mx: "6%",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                    ...group,
                                    py: "15px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            bg: "#107385",
                                            borderRadius: "20",
                                            py: "5px",
                                            px: "18px",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                color: "#F5F5F5",
                                                children: "Close to you"
                                            })
                                        }),
                                        options.map((value)=>{
                                            const radio = getRadioProps({
                                                value
                                            });
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RadioCard, {
                                                ...radio,
                                                children: value
                                            }, value);
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    as: "h1",
                                    "data-cy": "tutorheader",
                                    children: [
                                        " ",
                                        tutors.length,
                                        " Tutors found for ",
                                        subject
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
                            order: -3
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                justifyContent: "center",
                bg: "#E5E5E5",
                px: 20,
                paddingTop: 5,
                paddingBottom: 5,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
                    columns: [
                        1,
                        null,
                        3
                    ],
                    spacingX: "20px",
                    spacingY: "10px",
                    textAlign: "center",
                    children: tutors?.map((tutor)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
                            maxW: "sm",
                            maxH: "md",
                            cursor: "pointer",
                            bg: "#FFFFFF",
                            borderRadius: "20",
                            "data-cy": "card",
                            onClick: ()=>alert("Tutor " + tutor.firstName + " met id " + tutor._id) + " is geselecteerd",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    height: "40%",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                            objectFit: "cover",
                                            borderRadius: 20,
                                            width: "100%",
                                            height: "100%",
                                            src: "/img_avatar.png",
                                            alt: `student foto of ${tutor.firstName} + ${tutor.lastName} `
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            justifyContent: "end",
                                            bg: "#4EA4B1",
                                            position: "absolute",
                                            borderTopLeftRadius: "0",
                                            borderBottomRightRadius: "0",
                                            borderTopRightRadius: "20",
                                            borderBottomLeftRadius: "20",
                                            marginTop: "-44px",
                                            py: "10px",
                                            px: "15px",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                color: "#F5F5F5",
                                                children: tutor.firstName
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                        justifyContent: "center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                                src: "/Vector.png",
                                                alt: `star rating`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                children: "Reviews"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardBody, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                children: tutor.firstName
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                children: tutor.profile?.bio
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {
                                    paddingBottom: "20px",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                bg: "#107385",
                                                borderRadius: "20",
                                                py: "5px",
                                                px: "18px",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                    color: "#F5F5F5",
                                                    children: [
                                                        "$",
                                                        getFee(tutor),
                                                        "/u"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                bg: "#107385",
                                                borderRadius: "20",
                                                py: "5px",
                                                px: "18px",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                    color: "#F5F5F5",
                                                    children: "1st lesson free"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, tutor._id);
                    })
                })
            })
        ]
    });
    function sortFee() {
        tutors = tutors.sort((n1, n2)=>{
            if (getFee(n1) > getFee(n2)) {
                return 1;
            }
            if (getFee(n1) < getFee(n2)) {
                return -1;
            }
            return 0;
        });
    }
    function sortName() {
        tutors = tutors.sort((n1, n2)=>n1.firstName.localeCompare(n2.firstName));
    }
    function getFee(tutor) {
        let fee = 0;
        tutor.course?.forEach((value)=>{
            if (subject == value.subject) {
                fee = value.fee;
            }
        });
        return fee;
    }
}
function RadioCard(props) {
    const { getInputProps , getCheckboxProps  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useRadio)(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        as: "label",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ...input
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                ...checkbox,
                cursor: "pointer",
                borderRadius: "20",
                py: "5px",
                px: "18px",
                boxShadow: "md",
                _checked: {
                    bg: "#107385",
                    color: "white",
                    borderColor: "#107385"
                },
                _focus: {
                    boxShadow: "outline"
                },
                children: props.children
            })
        ]
    });
}
async function getServerSideProps({ params  }) {
    const subject = params.subject;
    const res = await fetch("http://localhost:8000/tutor/search/" + subject);
    const tutors = await res.json();
    return {
        props: {
            tutors,
            subject
        }
    };
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2396));
module.exports = __webpack_exports__;

})();
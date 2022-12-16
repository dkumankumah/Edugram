"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/theme/colors.ts
const colors = {
    primary: "#121212",
    secondary: "#5115f7",
    tertiary: "#E44503",
    error: "#E00303",
    black: "#000307",
    white: "#ffffff",
    succes: "#e5fdf4",
    warning: "#fde5e5",
    neutral: "#E5F4FD",
    transparent: "transparent",
    current: "currentColor",
    blueGreen: "#107385",
    blue: "#4EA4B1",
    lighblue: "#AED7E1",
    yellow: "#FFD228",
    eduWhite: "#F5F5F5"
};

;// CONCATENATED MODULE: ./src/theme/typograpyh.ts
const fonts = {
    heading: `'Poppins Bold', sans-serif`,
    body: `'Poppins Regular', sans-serif`,
    mono: `Poppins Regular`
};
const fontSizes = {
    "2xs": "0.75rem",
    xs: "1rem",
    sm: "1.25rem",
    rg: "1.5rem",
    md: "1.625rem",
    lg: "2.125rem",
    xl: "2.5rem",
    "2xl": "3.75rem",
    "3xl": "4.375rem"
};

;// CONCATENATED MODULE: ./src/theme/global-style.ts

const globalStyle = {
    "html, body": {},
    body: {
        minWidth: "320px",
        fontSize: `${fontSizes.xs}`
    },
    "*": {
        boxSizing: "border-box"
    },
    a: {
        textDecoration: "none"
    },
    h1: {
        fontSize: `${fontSizes.lg}`,
        fontWeight: "bold"
    },
    h2: {
        fontSize: `${fontSizes.md}`
    }
};

;// CONCATENATED MODULE: ./src/theme/sizes.ts
const sizes = {
    container: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px"
    }
};

;// CONCATENATED MODULE: ./src/theme/breakpoints.ts
const breakpoints = {
    sm: "320px",
    smx: "550px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
    "3xl": "1920px"
};

;// CONCATENATED MODULE: ./src/theme/theme.ts






const theme = (0,react_.extendTheme)({
    colors: colors,
    fontSizes: fontSizes,
    fonts: fonts,
    sizes: sizes,
    breakpoints: breakpoints,
    styles: {
        global: globalStyle
    }
});

;// CONCATENATED MODULE: ./src/theme/index.ts


// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: external "react-icons"
var external_react_icons_ = __webpack_require__(6698);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/shared/SearchField/SearchField.tsx
/**
 * @author Bugra Karaaslan, 500830631, This is a search field component.
 */ 




function SearchField({ data , placeholder , label , id , ...props }) {
    const router = (0,router_.useRouter)();
    function handleClick() {
        router.push({
            pathname: `/search/${data}`
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
        maxW: {
            sm: "260px",
            md: "290px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                "aria-label": "",
                bg: "EduWhite",
                id: id,
                active: "none",
                focis: "none",
                borderRadius: 20,
                ...props,
                fontSize: "xs",
                h: "45px",
                placeholder: placeholder,
                label: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.InputRightElement, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                    onClick: handleClick,
                    "aria-label": "Search database",
                    bg: "yellow",
                    mr: 2,
                    mt: 1,
                    size: "sm",
                    borderRadius: 30,
                    _hover: {
                        bg: "lightBlue"
                    },
                    id: "iconButton",
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(external_react_icons_.IconContext.Provider, {
                        value: {
                            style: {
                                color: "#FFF"
                            },
                            className: "global-class-name"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineSearch, {})
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/shared/SearchField/index.ts


// EXTERNAL MODULE: ./src/pages/api/api.storage.tsx
var api_storage = __webpack_require__(9720);
;// CONCATENATED MODULE: ./src/components/ProfileBtn/ProfileBtn.tsx
/**
 * @author Bugra Karaaslan, 500830631, This is a profile button component.
 */ 


function ProfileBtn({ name , label , id , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                as: "button",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                    bg: "eduWhite",
                    name: name
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuGroup, {
                        title: "Profile",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                            children: "My Profile"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuDivider, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuGroup, {
                        title: "Help",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                children: "Docs"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                children: "FAQ"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                onClick: api_storage/* logout */.kS,
                                children: "Log out"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/ProfileBtn/index.ts


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/shared/Navbar/Navbar.tsx
/**
 * @author Bugra Karaaslan, 500830631, This is an inputfield component.
 */ 


// component imports




function Navbar({ ...props }) {
    const router = (0,router_.useRouter)();
    const [value, setValue] = (0,external_react_.useState)("");
    const handleChangeEvent = (event)=>{
        setValue(event.target.value);
    };
    const handleKeyDown = (event)=>{
        if (event.key === "Enter") {
            router.push({
                pathname: `/search/${value.toLowerCase()}`
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        bg: "blueGreen",
        h: "65px",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
            w: "100%",
            templateColumns: {
                sm: "80% 20%",
                smx: "20% 70% 10%"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                    w: "100%",
                    display: {
                        sm: "none",
                        smx: "block"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        justify: "center",
                        mt: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                ml: {
                                    sm: "50px",
                                    md: "0px"
                                },
                                maxW: {
                                    sm: "120px",
                                    md: "150px"
                                },
                                src: "/images/edugram-logo.png",
                                alt: "logo of Edugram"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                    w: "100%",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        justify: {
                            sm: "center",
                            md: "flex-end"
                        },
                        mt: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SearchField, {
                            value: value,
                            data: value.toLowerCase(),
                            onChange: handleChangeEvent,
                            onKeyDown: handleKeyDown,
                            label: "SearchField, What do you want to learn?",
                            id: "searchfield",
                            placeholder: "What do you want to learn?"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                    w: "100%",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        justify: "center",
                        mt: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProfileBtn, {
                            name: "Bugra Karaaslan",
                            label: "profile button"
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/shared/Navbar/index.ts


;// CONCATENATED MODULE: ./src/pages/_app.tsx







function App({ Component: Page , pageProps  }) {
    const [authenticated, setAuthenticated] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        (0,api_storage/* isAuthenticated */.$8)() ? setAuthenticated(true) : setAuthenticated(false);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        theme: theme,
        children: [
            router.asPath === "/register" || router.asPath === "/" ? null : /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Page, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6698:
/***/ ((module) => {

module.exports = require("react-icons");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,720], () => (__webpack_exec__(2133)));
module.exports = __webpack_exports__;

})();
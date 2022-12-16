"use strict";
exports.id = 20;
exports.ids = [20];
exports.modules = {

/***/ 4737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProfileNavigation_ProfileNavigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/shared/ProfileLinkNavigation/ProfileLinkNavigation.tsx




const ProfileLinkNavigation = ({ path  })=>{
    //Current routing path
    const { asPath  } = (0,router_.useRouter)();
    //Current routing path without slash -> /
    const pathWithoutSlash = asPath.split("/")[1];
    return(//Check if given path equals to current path without slash if yes make it the active route
    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        color: path === pathWithoutSlash ? "white" : "black",
        bg: path === pathWithoutSlash ? "#107385" : "F5F5F5",
        border: "1px solid #107385",
        borderRadius: "20px",
        width: "100px",
        textAlign: "center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: path,
            children: [
                " ",
                (path?.charAt(0).toUpperCase() + path?.slice(1)).toString()
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/shared/ProfileLinkNavigation/index.ts


;// CONCATENATED MODULE: ./src/components/shared/ProfileNavigation/ProfileNavigation.tsx



/**
 Reusable component for Profile, dashboard, messages and invoices pages
 @author @Danny Nansink, 500821004
 **/ const ProfileNavigation = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        bg: "white",
        w: "100%",
        p: 4,
        color: "black",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
            justifyContent: "center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ProfileLinkNavigation, {
                    path: "dashboard"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ProfileLinkNavigation, {
                    path: "profile"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ProfileLinkNavigation, {
                    path: "messages"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ProfileLinkNavigation, {
                    path: "invoices"
                })
            ]
        })
    });
};
/* harmony default export */ const ProfileNavigation_ProfileNavigation = (ProfileNavigation);


/***/ })

};
;
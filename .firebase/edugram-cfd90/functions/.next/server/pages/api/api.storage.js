"use strict";
(() => {
var exports = {};
exports.id = 525;
exports.ids = [525];
exports.modules = {

/***/ 9948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeJWT": () => (/* binding */ decodeJWT),
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "isAdmin": () => (/* binding */ isAdmin),
/* harmony export */   "isAuthenticated": () => (/* binding */ isAuthenticated),
/* harmony export */   "isStudent": () => (/* binding */ isStudent),
/* harmony export */   "isTutor": () => (/* binding */ isTutor),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "setToken": () => (/* binding */ setToken)
/* harmony export */ });
function getToken() {
    return localStorage.getItem("token");
}
function setToken(token) {
    localStorage.setItem("token", token);
}
function isAuthenticated() {
    return getToken() != null;
}
function logout() {
    localStorage.removeItem("token");
    localStorage.clear();
    window.location.href = "/";
}
function decodeJWT() {
    let jwt = localStorage.getItem("token");
    if (jwt) {
        let jwtData = jwt.split(".")[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        console.log("jwtData: " + jwtData);
        console.log("decodedJwtJsonData: " + decodedJwtJsonData);
        console.log("decodedJwtData: " + decodedJwtData);
        return decodedJwtData;
    }
    window.location.href = "../pages/notFoundPage.tsx";
}
function isAdmin() {
    let isAdmin = decodeJWT().role;
    return isAdmin === "admin";
}
function isStudent() {
    let isStudent = decodeJWT().role;
    return isStudent === "student";
}
function isTutor() {
    let isTutor = decodeJWT().role;
    return isTutor === "tutor";
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9948));
module.exports = __webpack_exports__;

})();
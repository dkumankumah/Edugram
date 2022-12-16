"use strict";
exports.id = 720;
exports.ids = [720];
exports.modules = {

/***/ 9720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* binding */ isAuthenticated),
/* harmony export */   "LP": () => (/* binding */ getToken),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "vS": () => (/* binding */ isTutor),
/* harmony export */   "xp": () => (/* binding */ decodeJWT)
/* harmony export */ });
/* unused harmony exports setToken, isAdmin, isStudent */
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
"use strict";
exports.id = 816;
exports.ids = [816];
exports.modules = {

/***/ 4816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chosenChatTutor": () => (/* binding */ chosenChatTutor),
/* harmony export */   "default": () => (/* binding */ ChatSidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1271);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_6__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// @ts-ignore



// const Chat = require("../../server/models/chat");
let chosenChatTutor = "";
function setId(id) {
    chosenChatTutor = id;
}
function chosenChat(tutor) {
    console.log("_id in chosenChat: " + tutor);
    chosenChatTutor = tutor;
    next_router__WEBPACK_IMPORTED_MODULE_4__.router.push(`/chat/${tutor}`);
}
const showChats = (data)=>data?.map((chat)=>{
        console.log("data in showChats: " + data);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            p: 3,
            align: "center",
            _hover: {
                bg: "gray.100",
                cursor: "pointer"
            },
            onClick: ()=>chosenChat(chat.tutor),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                    src: "",
                    marginEnd: 3
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                    children: chat.tutor
                })
            ]
        }, chat._id);
    });
const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6__.connect("ws://localhost:3001", {
    transports: [
        "websocket",
        "polling",
        "flashsocket"
    ]
});
function ChatSidebar() {
    const tempArray = [];
    const temp = [];
    const [chatList, setChatlist] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(temp);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        socket.on("user-chats", (data)=>{
            data.forEach(function(value) {
                if (value.tutor != null) {
                    console.log(value);
                    let temp;
                    let _id = value._id;
                    let messages = value.messages;
                    let student = value.student;
                    let tutor = value.tutor;
                    // temp = new ChatModel({_id, messages, student, tutor})
                    tempArray.push(value);
                }
            });
            console.log("This is tempArray: " + tempArray);
            setChatlist(tempArray);
        });
    }, [
        socket
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: "300px",
        borderEnd: "1px solid",
        borderColor: "gray.200",
        direction: "column",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                h: "81px",
                w: "100%",
                align: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid",
                borderColor: "gray.200",
                p: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        align: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                src: "",
                                margin: 3
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                children: "Alperen Kavakli"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                        size: "sm",
                        isRound: true,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowLeftIcon, {}),
                        "aria-label": "Close"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                overflowX: "hidden",
                overflowY: "scroll",
                direction: "column",
                sx: {
                    "::-webkit-scrollbar": {
                        display: "none"
                    }
                }
            }),
            showChats(chatList)
        ]
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
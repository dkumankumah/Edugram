"use strict";
exports.id = 187;
exports.ids = [187];
exports.modules = {

/***/ 7187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ adminContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: ./src/components/edugramLogo.tsx
var edugramLogo = __webpack_require__(4776);
// EXTERNAL MODULE: ./src/pages/api/api.storage.tsx
var api_storage = __webpack_require__(9720);
;// CONCATENATED MODULE: ./src/components/admin/navbar/navbar.tsx






// interface MobileProps extends FlexProps {
//     onOpen: () => void;
// }
// const MobileNav = ({onOpen, ...rest}: MobileProps) => {
const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        ml: {
            base: 0,
            md: 60
        },
        px: {
            base: 4,
            md: 4
        },
        // w="100%"
        height: "132",
        alignItems: "center",
        bg: (0,react_.useColorModeValue)("white", "gray.900"),
        borderBottomWidth: "1px",
        borderBottomColor: (0,react_.useColorModeValue)("gray.200", "gray.700"),
        justifyContent: {
            base: "space-between",
            md: "flex-end"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                display: {
                    base: "flex",
                    md: "none"
                },
                // onClick={onOpen}
                variant: "outline",
                "aria-label": "open menu",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiMenu, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                display: {
                    base: "flex",
                    md: "none"
                },
                fontSize: "2xl",
                fontFamily: "monospace",
                fontWeight: "bold",
                children: /*#__PURE__*/ jsx_runtime_.jsx(edugramLogo/* EdugramLogo */.g, {
                    boxSize: 20
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                spacing: {
                    base: "0",
                    md: "6"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                        variant: "filled",
                        placeholder: "Filled"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                        size: "lg",
                        variant: "ghost",
                        "aria-label": "open menu",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiBell, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        alignItems: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                    py: 2,
                                    transition: "all 0.3s",
                                    _focus: {
                                        boxShadow: "none"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                                size: "sm",
                                                src: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                                display: {
                                                    base: "none",
                                                    md: "flex"
                                                },
                                                alignItems: "flex-start",
                                                spacing: "1px",
                                                ml: "2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                        fontSize: "sm",
                                                        children: "Justina Clark"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                        fontSize: "xs",
                                                        color: "gray.600",
                                                        children: "Admin"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                display: {
                                                    base: "none",
                                                    md: "flex"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiChevronDown, {})
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                    bg: (0,react_.useColorModeValue)("white", "gray.900"),
                                    borderColor: (0,react_.useColorModeValue)("gray.200", "gray.700"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            children: "Profile"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            children: "Settings"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            children: "Billing"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuDivider, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            onClick: api_storage/* logout */.kS,
                                            children: "Sign out"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const navbar = (Navbar);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/admin/navbar/navItem.tsx


// import {Link as MyLink} from "next/link";



const NavItem = ({ icon , children , path , ...rest })=>{
    const router = (0,router_.useRouter)();
    const style = {
        // marginRight: 10,
        // color: router.asPath === path ? "#4EA4B1" : "#8B8B8B",
        color: router.asPath === path ? "#4EA4B1" : "#8B8B8B"
    };
    const handleClick = (e)=>{
        e.preventDefault();
        router.push(path).then((r)=>r.valueOf());
    };
    return(// <>
    //     {/*<MyLink></MyLink>*/}
    //     <Flex
    //
    //         mt={30}
    //         flexDir="column"
    //         w="100%"
    //         // _hover={{ textDecor: 'none', backgroundColor: "grey" }}
    //         // alignItems={navSize == "small" ? "center" : "flex-start"}
    //     >
    //         <Menu placement="right">
    //             <Link
    //                 // href={title}
    //                 p={4}
    //                 _hover={{textDecor: 'none'}}
    //                 w={"large" && "100%"}
    //             >
    //                 <MenuButton w="100%" transition='all 0.2s'>
    //                     <Flex>
    //                         <Icon as={icon} fontSize="xl" color={active ? "#4EA4B1" : "#8B8B8B"}/>
    //                         <Text ml={5} display={navSize == "small" ? "none" : "flex"}
    //                               color={active ? "#4EA4B1" : "gray.500"}>{title}</Text>
    //                     </Flex>
    //                 </MenuButton>
    //             </Link>
    //             {/*<MenuList*/}
    //             {/*    py={0}*/}
    //             {/*    border="none"*/}
    //             {/*    w={200}*/}
    //             {/*    h={200}*/}
    //             {/*    ml={5}*/}
    //             {/*>*/}
    //             {/*    <NavHoverBox title={title} icon={icon}/>*/}
    //             {/*</MenuList>*/}
    //         </Menu>
    //     </Flex>
    // </>
    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: path,
        legacyBehavior: true,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
            _focus: {
                boxShadow: "none"
            },
            style: style,
            _hover: {
                bg: "red.400",
                color: "red"
            },
            //     color:useColorModeValue('violet.50','white')}}
            onClick: handleClick,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                align: "center",
                p: "4",
                mx: "4",
                borderRadius: "lg",
                role: "group",
                cursor: "pointer",
                ...rest,
                children: [
                    icon && /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                        // color={active ? "#82AAAD" : "gray.500"}
                        mr: "4",
                        fontSize: "24",
                        // _groupHover={{
                        //     color: 'red',
                        // }}
                        as: icon
                    }),
                    children
                ]
            })
        })
    }));
};
/* harmony default export */ const navItem = (NavItem);

// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__(1111);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
;// CONCATENATED MODULE: ./src/components/admin/navbar/sidebar.tsx










const LinkItems = [
    {
        title: "Dashboard",
        icon: fi_.FiMenu,
        path: "/dashboard"
    },
    {
        title: "Tickets",
        icon: hi_.HiOutlineTicket,
        path: "/tickets"
    },
    {
        title: "Users",
        icon: hi_.HiOutlineUsers,
        path: "/users"
    },
    {
        title: "Categories",
        icon: bi_.BiCategory,
        path: "/categories"
    },
    {
        title: "Admin",
        icon: md_.MdOutlineAdminPanelSettings,
        path: "/admin"
    },
    {
        title: "Blogs",
        icon: fa_.FaBlog,
        path: "/blogSetup"
    }
];
const SideBar = ({ onClose , ...rest })=>{
    const [navSize, changeNavSize] = (0,external_react_.useState)("large");
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        transition: "3s ease",
        boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.05)",
        w: {
            base: "full",
            md: 60
        },
        bg: (0,react_.useColorModeValue)("white", "gray.900"),
        pos: "fixed",
        h: "full",
        flexDir: "column",
        justifyContent: "space-between",
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            p: "5%",
            flexDir: "column",
            w: "100%",
            alignItems: navSize == "small" ? "center" : "flex-start",
            as: "nav",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    h: "20",
                    alignItems: "center",
                    mx: "8",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(edugramLogo/* EdugramLogo */.g, {
                            boxSize: 20
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.CloseButton, {
                            display: {
                                base: "flex",
                                md: "none"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.List, {
                    w: "full",
                    my: 8,
                    children: LinkItems.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.ListItem, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(navItem, {
                                icon: link.icon,
                                title: link.title,
                                path: link.path,
                                children: link.title
                            })
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const sidebar = (SideBar);

;// CONCATENATED MODULE: ./src/components/admin/container/adminContainer.tsx





const AdminContainer = ({ children  })=>{
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        minH: "100vh",
        bg: (0,react_.useColorModeValue)("red.100", "green.900"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(sidebar, {
                onClose: ()=>onClose,
                display: {
                    base: "none",
                    md: "block"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Drawer, {
                autoFocus: false,
                isOpen: isOpen,
                placement: "left",
                onClose: onClose,
                returnFocusOnClose: false,
                onOverlayClick: onClose,
                size: "full",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerContent, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                ml: {
                    base: 0,
                    md: 60
                },
                p: "4",
                children: children
            })
        ]
    });
};
/* harmony default export */ const adminContainer = (AdminContainer);


/***/ })

};
;
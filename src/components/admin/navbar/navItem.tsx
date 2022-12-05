import React, {ReactText} from 'react'
// import {Link as MyLink} from "next/link";
import {Flex, FlexProps, Icon, Link} from '@chakra-ui/react'
import {IconType} from "react-icons";
import NextLink from 'next/link'
import {useRouter} from "next/router";

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    // isActive: any;
    path: string;
}


const NavItem = ({icon, children, path, ...rest}: NavItemProps) => {

    const router = useRouter()
    const style = {
        // marginRight: 10,
        // color: router.asPath === path ? "#4EA4B1" : "#8B8B8B",
        color: router.asPath === path ? "#4EA4B1" : "#8B8B8B",
    }

    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        router.push(path).then(r => r.valueOf())
    }

    return (
        // <>
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

        <NextLink href={path} legacyBehavior passHref>

            <Link
                  _focus={{boxShadow: 'none'}}
                  style={style}
                  _hover={{
                      bg: 'red.400',
                      color: 'red',
                  }}               // _activeLink={{
                //     color:useColorModeValue('violet.50','white')}}
                  onClick={handleClick}

            >


                {/*router.pathname == "/" ? "active" : ""*/}

                <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    // color={isActive ? "#4EA4B1" : "#8B8B8B"}
                    // _hover={{
                    //     bg: 'red.400',
                    //     color: 'red',
                    // }}
                    {...rest}>
                    {icon && (
                        <Icon
                            // color={active ? "#82AAAD" : "gray.500"}
                            mr="4"
                            fontSize="24"
                            // _groupHover={{
                            //     color: 'red',
                            // }}
                            as={icon}
                        />
                    )}
                    {children}
                </Flex>
            </Link>
        </NextLink>
    )
}
export default NavItem;

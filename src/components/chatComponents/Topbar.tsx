import {Flex} from "@chakra-ui/layout";
import {Avatar, Heading} from "@chakra-ui/react";
import React from "react";
import {chosenUserId} from "../../pages/ChatSidebar";
import {chosenUser} from "../../pages/ChatSidebar";


export default function Topbar() {
    return (
        <Flex
            bg="gray.100"
            h="81px"
            w="100%"
            align="center"
            p={5}>
            <Avatar src="" marginEnd={3}/>
            <Heading size="lg">{chosenUser}</Heading>
        </Flex>
    )
}

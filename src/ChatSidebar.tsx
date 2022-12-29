import {Flex} from "@chakra-ui/layout";
import {Avatar, Button, IconButton, Link, Text} from "@chakra-ui/react";
import {ArrowLeftIcon} from "@chakra-ui/icons"
// @ts-ignore
import {router} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import * as io from "socket.io-client";
import {ChatModel} from "./models/ChatModel";
import {useLocation} from "react-router";
import {decodeJWT} from "./pages/api/api.storage";
// const Chat = require("../../server/models/chat");

let chosenChatTutor = "";

function setId(id: string) {
    chosenChatTutor = id;
}

function chosenChat(tutor: string) {
    console.log("_id in chosenChat: " + tutor);
    chosenChatTutor = tutor;
    router.push(`/chat/${tutor}`);
}

const showChats = (data: ChatModel[]) =>
    data?.map(chat => {
        console.log("data in showChats: " + data);
        return (
            <Flex key={chat._id} p={3} align="center" _hover={{bg: "gray.100", cursor: "pointer"}}
                  onClick={ () => chosenChat(chat.tutor)}>
                <Avatar src="" marginEnd={3}/>
                <Text>{chat.tutor}</Text>
            </Flex>
        )
    })


const socket = io.connect("ws://localhost:3001", { transports: ['websocket', 'polling', 'flashsocket'] });


export default function ChatSidebar() {
    const temp: ChatModel[] = [];
    const socketRef = useRef(socket);

    const [chatList, setChatlist] = useState([]);
    useEffect(() => {
        // socket.emit('get-chats', decodeJWT().id);
        socket.on("user-chats", (data) => {
            const tempArray: ChatModel[] = [];
            data.forEach(function (value: ChatModel) {
                if (value.tutor != null) {
                    console.log(value)
                    tempArray.push(value)
                }
            });
            console.log("This is tempArray: " + tempArray)
            setChatlist(tempArray);
        });
    },[]);
    return (
        <Flex
            w="300px"
            borderEnd="1px solid" borderColor="gray.200"
            direction="column"
        >
            <Flex
                h="81px" w="100%"
                align="center"
                justifyContent="space-between"
                borderBottom="1px solid" borderColor="gray.200"
                p={3}
            >
                <Flex align="center">
                    <Avatar src="" margin={3}/>
                    <Text>Alperen Kavakli</Text>
                </Flex>
                <IconButton size="sm" isRound icon={<ArrowLeftIcon/>} aria-label="Close"/>
            </Flex>

            <Flex overflowX="hidden" overflowY="scroll" direction="column"
                  sx={{'::-webkit-scrollbar': {display: 'none'}}}>
            </Flex>
            {showChats(chatList)}
        </Flex>
    )
}

export {chosenChatTutor};

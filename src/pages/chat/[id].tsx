import {Flex} from "@chakra-ui/layout"
import Sidebar, {chosenChatTutor} from "../../components/chatComponents/Sidebar";
import Topbar from "../../components/chatComponents/Topbar";
import Bottombar from "../../components/chatComponents/Bottombar";
import {Text} from "@chakra-ui/react";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import * as io from "socket.io-client";

const socket = io.connect("ws://localhost:3001", { transports: ['websocket', 'polling', 'flashsocket'] });

const getMessages = (chat) =>
    chat?.messages.map(msg => {
        //TODO: test1 needs to be replaced with logged in user or student if tutor is logged in
        const sender = msg.sender === "test1";
        console.log("chat: " + chat);
        console.log("msg: " + msg.sender);
        return (
            <Flex key={Math.random()} alignSelf={sender ? "flex-end" :  "flex-start"} bg={sender ? "green.100" : "blue.100"} w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                <Text>{msg.message}</Text>
            </Flex>
        )
    })



export default function ChatApp() {
    const [chat, setChat] = useState();
    console.log("tutor to be emitted: " + chosenChatTutor);
    //TODO: test1 needs to be replaced with logged in user or student if tutor is logged in
    socket.emit('join-chat', "test1", chosenChatTutor);
    useEffect(() => {
        socket.on("update-chat", (chat) => {
            setChat(chat);
        });
    }, [socket]);
    return (
        <Flex
            h="100vh"
            overflowX="hidden">
            <Head>
                <title>Chat app</title>
            </Head>
            <Sidebar/>

            <Flex
                flex={1}
                direction="column">
                <Topbar/>

                <Flex flex={1} direction="column" pt={4} mx={5} overflowX="scroll" overflowY="scroll"
                      sx={{'::-webkit-scrollbar': {display: 'none'}}}>
                </Flex>
                {getMessages(chat)}
                <Bottombar/>
            </Flex>
        </Flex>
    )
}

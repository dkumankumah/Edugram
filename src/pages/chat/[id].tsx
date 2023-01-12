import {Flex} from "@chakra-ui/layout"
import ChatSidebar, {chosenChatId} from "../ChatSidebar";
import Topbar from "../../components/chatComponents/Topbar";
import Bottombar from "../../components/chatComponents/Bottombar";
import {Text} from "@chakra-ui/react";
import Head from "next/head";
import React, {useEffect, useRef, useState} from "react";
import * as io from "socket.io-client";
import {ChatModel} from "../../models/ChatModel";
import {GetServerSideProps} from "next";
import {TutorModel} from "../../models/TutorModel";
import {decodeJWT} from "../api/api.storage";

const socket = io.connect("ws://localhost:3001", { transports: ['websocket', 'polling', 'flashsocket'] });

interface PageProps {
    accessToken: string,
    tutorData: TutorModel,
}

const getMessages = (chat: ChatModel, { accessToken}: PageProps) =>
    chat?.messages.map(msg => {
        const sender = msg.sender === decodeJWT(accessToken).id;
        return (
            <Flex key = {Math.random()} alignSelf={sender ? "flex-end" : "flex-start"} bg={sender ? "green.100" : "#BBDEFB"} w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                <Text>{msg.message}</Text>
            </Flex>
        )
    })

export default function ChatApp({tutorData, accessToken}: PageProps) {
    const [chat, setChat] = useState();

    socket.on("update-chat", (chat) => {
        console.log("Chat updated")
        setChat(chat);
    });
    useEffect(() => {
        if (decodeJWT(accessToken).role === "student") {
            console.log("Role is student")
            socket.emit('join-chat', chosenChatId);
        } else if (decodeJWT(accessToken).role === "tutor") {
            console.log("Role is tutor")
            socket.emit('join-chat', chosenChatId);
        }
    }, [chosenChatId]);

    useEffect(() => {
        socket.on("update-chat", (chat) => {
            
            setChat(chat);
        });
    }, []);

    return (
        <Flex
            h="93vh"
            overflowX="hidden">
            <Head>
                <title>Chat app</title>
            </Head>
            <ChatSidebar tutorData={tutorData} accessToken={accessToken}/>

            <Flex
                flex={1}
                direction="column">
                <Topbar/>

                <Flex flex={1} direction="column" pt={4} mx={5} overflowX="scroll" overflowY="scroll"
                      sx={{'::-webkit-scrollbar': {display: 'none'}}}>
                    {getMessages(chat!, {tutorData, accessToken})}
                </Flex>

                <Bottombar accessToken={accessToken} tutorData={tutorData}/>
            </Flex>
        </Flex>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const accessToken = JSON.stringify(ctx.req.cookies.access_token)
    const response = await fetch('http://localhost:8000/tutor/details', {
        method: "GET",
        credentials: "include",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Cookie: accessToken
        }
    });

    const tutorData = await response.json()
    console.log(tutorData)

    return {
        props: {tutorData, accessToken},
    };
}

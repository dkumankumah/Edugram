import {Flex} from "@chakra-ui/layout";
import {Avatar, Button, IconButton, Link, Text} from "@chakra-ui/react";
import {ArrowLeftIcon} from "@chakra-ui/icons"
// @ts-ignore
import {router} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import * as io from "socket.io-client";
import {ChatModel} from "../models/ChatModel";
import {useLocation} from "react-router";
import {decodeJWT} from "./api/api.storage";
import {TutorModel} from "../models/TutorModel";
import {GetServerSideProps} from "next";
// const Chat = require("../../server/models/chat");

interface PageProps {
    accessToken: string,
    tutorData: TutorModel,
}

let chosenUserId = "";

function setId(id: string) {
    chosenUserId = id;
}

function chosenChat(chat: string) {
    console.log("_id in chosenChat: " + chat);
    chosenUserId = chat;
    router.push(`/chat/${chat}`);
}

const showChats = (data: ChatModel[], {tutorData, accessToken}: PageProps) =>
    data?.map(chat => {
        console.log("data in showChats: " + data);
        console.log("Dit is de rol: " + decodeJWT(accessToken).role);
        if (decodeJWT(accessToken).role === "student") {
            return (
                <Flex key={chat._id} p={3} align="center" _hover={{bg: "gray.100", cursor: "pointer"}}
                      onClick={() => chosenChat(chat.tutor)}>
                    <Avatar src="" marginEnd={3}/>
                    <Text>{chat.tutor}</Text>
                </Flex>
            )
        } else if (decodeJWT(accessToken).role === "tutor") {
            return (
                <Flex key={chat._id} p={3} align="center" _hover={{bg: "gray.100", cursor: "pointer"}}
                      onClick={() => chosenChat(chat.student)}>
                    <Avatar src="" marginEnd={3}/>
                    <Text>{chat.student}</Text>
                </Flex>
            )
        }

    })


const socket = io.connect("ws://localhost:3001", { transports: ['websocket', 'polling', 'flashsocket'] });

export default function ChatSidebar({tutorData, accessToken}: PageProps) {
    const temp: ChatModel[] = [];
    const socketRef = useRef(socket);

    const [chatList, setChatlist] = useState<ChatModel[]>([]);
   

    useEffect(() => {
        socket.emit('get-chats', decodeJWT(accessToken).id);
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
    },[accessToken]);
    
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
            {showChats(chatList, {tutorData, accessToken})}
        </Flex>
    )
}

const getServerSideProps: GetServerSideProps = async (ctx) => {
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

    const data = await response.json()
    console.log(data)

    return {
        props: {data, accessToken},
    };
}

export {chosenUserId};

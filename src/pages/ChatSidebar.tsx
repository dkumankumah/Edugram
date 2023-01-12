import {Flex} from "@chakra-ui/layout";
import {Avatar, Button, IconButton, Link, Text} from "@chakra-ui/react";
import {ArrowLeftIcon} from "@chakra-ui/icons"
// @ts-ignore
import {router} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import * as io from "socket.io-client";
import {ChatModel} from "../models/ChatModel";
import {UserChatModel} from "../models/ChatModel";

import {useLocation} from "react-router";
import {decodeJWT} from "./api/api.storage";
import {TutorModel} from "../models/TutorModel";
import {GetServerSideProps} from "next";

interface PageProps {
    accessToken: string,
    tutorData: TutorModel,
}

let chosenUserId = "";
let chosenUser = "";

function setId(id: string) {
    console.log("chosen chat to be emitted: " + chosenUserId);
    chosenUserId = id;
}

function chosenChat(chatName: string, chatId: string) {
    setId(chatId)
    router.push(`/chat/${chatName}`);
}

const showChats = (data: ChatModel[], accessToken: string) =>
    data?.map(chat => {
        if (decodeJWT(accessToken).role === "student") {
            console.log("Access Token: " + accessToken)
            return (
                <Flex key={chat._id} p={3} align="center" _hover={{bg: "gray.100", cursor: "pointer"}}
                      onClick={() => chosenChat(chat.tutor.firstName, chat._id)}>
                    <Avatar src="" marginEnd={3}/>
                    <Text>{chat.tutor.firstName}</Text>
                </Flex>
            )
        } else if (decodeJWT(accessToken).role === "tutor") {
            return (
                <Flex key={chat._id} p={3} align="center" _hover={{bg: "gray.100", cursor: "pointer"}}
                      onClick={() => chosenChat(chat.student.firstName, chat._id)}>
                    <Avatar src="" marginEnd={3}/>
                    <Text>{chat.student.firstName}</Text>
                </Flex>
            )
        }
    })


const socket = io.connect("ws://localhost:3001", { transports: ['websocket', 'polling', 'flashsocket'] });

export default function ChatSidebar({tutorData, accessToken}: PageProps) {
    const temp: ChatModel[] = [];
    const socketRef = useRef(socket);

    const [chatList, setChatlist] = useState([]);
    useEffect(() => {
        const user: UserChatModel = {
            _id: decodeJWT(accessToken).id,
            firstName: decodeJWT(accessToken).firstName
        }
        console.log("Ingelogde user chat model: " + user.firstName);
        socket.emit('get-chats', user);
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
    },[chosenUserId]);
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
                    <Text>{decodeJWT(accessToken).firstName} {decodeJWT(accessToken).lastName}</Text>
                </Flex>
                <IconButton onClick={() => router.push('/dashboard')} size="sm" isRound icon={<ArrowLeftIcon/>} aria-label="Close"/>
            </Flex>

            <Flex overflowX="hidden" overflowY="scroll" direction="column"
                  sx={{'::-webkit-scrollbar': {display: 'none'}}}>
            </Flex>
            {showChats(chatList, accessToken)}
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

export {chosenUserId, chosenUser};

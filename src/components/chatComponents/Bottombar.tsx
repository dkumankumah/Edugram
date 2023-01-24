import React, {useState} from "react";
import {Button, FormControl, Input} from "@chakra-ui/react";
import * as io from "socket.io-client";
import {chosenChatId} from "../../pages/ChatSidebar";
import {GetServerSideProps} from "next";
import {TutorModel} from "../../models/TutorModel";
import {decodeJWT} from "../../pages/api/api.storage";
import {ChatUserModel} from "../../models/ChatModel";

const socket = io.connect("ws:http", { transports: ['websocket', 'polling', 'flashsocket'] });

interface PageProps {
    accessToken: string,
    tutorData: TutorModel,
}

export default function Bottombar({tutorData, accessToken}: PageProps) {
    const [input, setInput] = useState("");
    // @ts-ignore
    // I don't know why typescript gives an error, it works just fine that's why I do @ts-ignore
    const sendMessage = async (e) => {
        console.log(input)
        e.preventDefault();
        socket.emit("send-message", input, decodeJWT(accessToken).id, chosenChatId)
        setInput("");
    }
    return (
        <FormControl
            onSubmit={sendMessage}
            p={3}
            as="form"
        >
            <Input autoComplete="off" placeholder="Type a message..." onChange={e => setInput(e.target.value)} value={input} />
            <Button type="submit" hidden></Button>

        </FormControl>
    )
}

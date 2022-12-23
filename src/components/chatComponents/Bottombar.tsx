import React, {useState} from "react";
import {Button, FormControl, Input} from "@chakra-ui/react";
import * as io from "socket.io-client";
import {chosenChatTutor} from "./ChatSidebar";

const socket = io.connect("ws://localhost:3001", { transports: ['websocket', 'polling', 'flashsocket'] });

export default function Bottombar() {
    const [input, setInput] = useState("");
    // @ts-ignore
    // I don't know why typescript gives an error, it works just fine that's why I do @ts-ignore
    const sendMessage = async (e) => {
        console.log(input)
        e.preventDefault();
        //test1 needs to be replaced with logged in user or student if tutor is logged in
        socket.emit("send-message", input, "test1", chosenChatTutor, "test1")
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

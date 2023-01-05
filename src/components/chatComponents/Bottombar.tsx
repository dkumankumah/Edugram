import React, {useState} from "react";
import {Button, FormControl, Input} from "@chakra-ui/react";
import * as io from "socket.io-client";
import {chosenUserId} from "../../pages/ChatSidebar";
import {GetServerSideProps} from "next";
import {TutorModel} from "../../models/TutorModel";
import {decodeJWT} from "../../pages/api/api.storage";

const socket = io.connect("ws://localhost:3001", { transports: ['websocket', 'polling', 'flashsocket'] });

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
        //test1 needs to be replaced with logged in user or student if tutor is logged in
        if (decodeJWT(accessToken).role == "tutor") {
            socket.emit("send-message", input, chosenUserId, decodeJWT(accessToken).id, decodeJWT(accessToken).id)

        } else {
            socket.emit("send-message", input, decodeJWT(accessToken).id, chosenUserId, decodeJWT(accessToken).id)
        }
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

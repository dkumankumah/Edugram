/**
 The landing and login page
 @author @Danny Nansink, 500821004
 **/
import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    VisuallyHidden,
    IconButton,
    useColorModeValue,
    Button, Divider,
    Flex,
    Heading,
    Link,
    Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Stack, Text, Image, FormHelperText, FormControl, FormErrorMessage,
    useDisclosure, VStack, InputRightElement, InputGroup, Alert, AlertDescription, AlertTitle, AlertIcon,
} from '@chakra-ui/react'
import React, {useState} from "react";
import {Router, useRouter} from "next/router";
import ChatSidebar from "../components/chatComponents/ChatSidebar"

// component imports
import {InputField} from "../components/shared/InputField/InputField";
import {GoogleBtn} from "../components/shared/GoogleBtn";
import Footer from "../components/Footer";
import CustomFooter from "../components/Footer";
import {LoginModal} from "../components/shared/LoginModal/LoginModal"

const Home = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function clearCredentials() {
        setEmail('')
        setPassword('')
        setError('')
    }

    return (
        <>
        <Flex flexDir={'column'}>
            <Heading textAlign={'center'}>The platform</Heading>
            <Link bg={"lightblue"} p={2} maxW='300' borderRadius={20} textAlign='center' href='/example'>Go to the
                example page</Link>
            <Link bg={"lightblue"} p={2} maxW='300' borderRadius={20} textAlign='center' href='/chat/chats'>Sidebar</Link>
            <Button bg={"#FFCA48"} maxW={'150'} borderRadius={20} alignSelf='end' onClick={onOpen}> Login </Button>
           <LoginModal isOpen={isOpen} onClose={onClose} closeOnEsc={true} closeOnOverlayClick={true} onclosecomplete={clearCredentials}/>
        </Flex>

        <CustomFooter/>
    </>
    )
}

export default Home

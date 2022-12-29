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
import ChatSidebar from "../ChatSidebar"

// component imports
import Layout from "../components/frontpageLayout";
import Hero from "../components/Hero";

import data from "../../public/data/registerPageTutor.json"

const Home = () => {
  return (
    <>
      <Hero {...data}/>
      <Layout/>
    </>
  );
};

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
    </>
    )
export const getStaticProps = async () => {
  return {
    props: {
      data
    },
  };
};


export default Home;

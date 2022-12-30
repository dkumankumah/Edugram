/**
 The landing and login page
 @author @Danny Nansink, 500821004
 **/
import React from "react";
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

export const getStaticProps = async () => {
  return {
    props: {
      data
    },
  };
};


export default Home;

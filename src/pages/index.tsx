/**
 The landing and login page
 @author @Danny Nansink, 500821004
 **/
import {Button, Flex, Heading, Link, useDisclosure,} from '@chakra-ui/react'

import React, {useState} from "react";
import {useRouter} from "next/router";

// component imports
import HeroSection from "../components/heroSection";
import {LoginModal} from "../components/shared/LoginModal/LoginModal";
import Layout from "../components/frontpageLayout";

const Home = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function saveToken(token: string) {
        localStorage.setItem('token', token)
    }

    console.log('test')

    function login(email: string, password: string) {
        if (error) {
            setError('')
        }
        !email || !password ?
            setError('Please fill in credentials!')
            : fetch(
                'http://localhost:8000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'http://localhost:8000',
                    },
                    body: JSON.stringify({email: email, password: password})

                }
            ).then(r => r.json())
                .then((data) => {

                if (data && data.error) {
                    setError(data.error)
                }
                if (data.message) {
                    //set token
                    setSuccess(data.message)
                    saveToken(data.token)
                    window.location.href = '/dashboard'
                }

            }).catch((err) => {
                console.log(err)
            });
    }

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
                <Button bg={"#FFCA48"} maxW={'150'} borderRadius={20} alignSelf='end' onClick={onOpen}> Login </Button>
                <LoginModal isOpen={isOpen} onClose={onClose} closeOnEsc={true} closeOnOverlayClick={true}
                            onclosecomplete={clearCredentials}/>
            </Flex>

            <HeroSection/>
            <Layout/>


        </>
    )
}

export default Home

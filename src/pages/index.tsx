/**
 The landing and login page
 @author @Danny Nansink, 500821004
 **/
import {
    Alert,
    AlertDescription,
    AlertIcon,
    Button,
    Divider,
    Flex,
    Heading,
    InputGroup,
    InputRightElement,
    Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react'
import React, {useState} from "react";
import {useRouter} from "next/router";

// component imports
import {InputField} from "../components/shared/InputField/InputField";
import {GoogleBtn} from "../components/shared/GoogleBtn";
import CustomFooter from "../components/Footer";
import HeroSection from "../components/heroSection";


const Home = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = React.useState(false)
    const handleShowPassword = () => setShow(!show)
    const router = useRouter();

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
            ).then(r => r.json()).then((data) => {

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
            <Modal isOpen={isOpen} onClose={onClose} closeOnEsc={true} closeOnOverlayClick={true}
                   onCloseComplete={clearCredentials}>
                <ModalOverlay backdropFilter='blur(5px)' bg='blackAlpha.300'
                />
                <ModalContent backgroundColor={'#4EA4B1'} alignItems={'center'} textAlign={'center'} borderRadius={20}
                              maxW={'400px'} height={'450px'}>
                    <ModalCloseButton/>
                    <ModalHeader>
                        <Heading textAlign={'center'} textColor={'white'}>Login</Heading>
                    </ModalHeader>
                    <ModalBody>
                        {error ?
                            <Alert status='error' marginBottom={'10px'}>
                                <AlertIcon/>
                                <AlertDescription data-cy="alert-description">{error}</AlertDescription>
                            </Alert> : success ? <Alert status='success' marginBottom={'10px'}>
                                <AlertIcon/>
                                <AlertDescription data-cy="success-description">{success}</AlertDescription>
                            </Alert> : ''}
                        <InputField placeholder="johndoe@gmail.com"
                                    type="email"
                                    textColor={'black'}
                                    variant="outline"
                                    bg={'white'}
                                    mb={2}
                                    maxW={250}
                                    focusBorderColor={'black'}
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} id={'Email'}>

                        </InputField>
                        <InputGroup size='md'>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleShowPassword}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                            <InputField type={show ? 'text' : 'password'}
                                        placeholder="Password"
                                        textColor={'black'}
                                        variant="outline"
                                        bg={'white'}
                                        focusBorderColor={'black'}
                                        mb={1}
                                        maxW={250}
                                        minLength={6}
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} id={'password'}>

                            </InputField>
                        </InputGroup>
                        <Link as={'u'} textAlign={'right'} ml={'60px'} fontWeight={'bold'} href={'reset-password'}>Wachtwoord
                            vergeten?</Link>
                    </ModalBody>
                    <ModalFooter height={'200px'} mb={'30px'}>
                        <Stack>
                            <Button bg={"#FFCA48"} borderRadius={30} w='250px' h={'50'}
                                    type={'submit'}
                                    onClick={() => login(email, password)}>
                                Login
                            </Button>
                            <Flex align="center">
                                <Divider/>
                                <Text padding="2" color={'white'} ml={'20px'} mr={'20px'}>Of</Text>
                                <Divider/>
                            </Flex>
                            <GoogleBtn bg={'white'} borderRadius={30} w='250px' h={'50'}>Login met Google</GoogleBtn>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>

            <HeroSection/>
        <CustomFooter/>
    </>
    )
}

export default Home

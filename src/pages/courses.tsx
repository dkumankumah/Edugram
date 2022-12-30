import {Text, Box, Card, CardBody, CardHeader, Flex, Icon, Image, Divider, SimpleGrid} from "@chakra-ui/react";
import ProfileNavigation from "../components/shared/ProfileNavigation/ProfileNavigation";
import {AddIcon, CheckCircleIcon, CloseIcon} from "@chakra-ui/icons";
import React, {useEffect, useState} from "react";
import {TutorModel} from "../models/TutorModel";
import {decodeJWT, getToken, isAuthenticated, isTutor} from "./api/api.storage";
import {useRouter} from "next/router";

export default function courses () {
    const [tutor, setTutor] = useState({} as TutorModel)
    const router = useRouter()


    // useEffect(() => {
    //     isAuthenticated() && isTutor() ? getTutor(decodeJWT().id) : router.push('/')
    // }, [])

    const getTutor = (id: string) => {
        fetch('http://localhost:8000/tutor/' + id, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:8000',
                'Authorization': 'Bearer ' + getToken()
            },
            redirect: 'follow'
        }).then(response => response.json()).then(result =>
            setTutor(result)

        )
    }

    return (
        <Box>
            <ProfileNavigation/>
            <Box p={5} display={{ lg: 'flex' }}>
                <Box
                    flex={1}
                    mr={3}>
                    <Card
                        // border='2px'
                        cursor='pointer'
                        bg="blueGreen"
                        // bg="yellow"
                        mb={2}
                        borderRadius={10}>
                        <CardBody
                            pt={8}
                            pb={8}>
                            <Flex flexDirection="row" justifyContent={"space-between"} gap='4' alignItems='center' flexWrap='wrap'>
                                <Box
                                    flex={2}>
                                    <Text
                                        color='white'
                                        fontWeight='bold'
                                        as = "h2">
                                        Add a new subject
                                    </Text>
                                </Box>
                                <Box
                                    >
                                    <Icon
                                        as={AddIcon}
                                        boxSize={6}
                                        color='white'
                                    />
                                </Box>


                            </Flex>

                        </CardBody>
                    </Card>
                    {tutor.course?.map((courses) => {
                        return (
                            <Card
                                _hover={{ bg: 'yellow',
                                    color: 'white',
                                }}
                                _checked={{
                                    bg: 'blue',
                                    color: 'white',
                                    borderColor: 'teal.600',
                                }}
                                border='2px'
                                cursor='pointer'
                                borderColor="yellow"
                                mb={2}
                                borderRadius={10}>
                                <CardBody
                                    pt={8}
                                    pb={8}>
                                    <Text
                                        fontWeight='bold'
                                        as = "h2">
                                        {courses.subject}
                                    </Text>
                                </CardBody>

                            </Card>
                        )
                    })}

                    Left
                </Box>
                <Box flex={5}
                     mr={3}>
                    <Card borderRadius={20} >
                        <CardHeader>
                            <Text
                                mt={3}
                                fontSize={'larger'}
                                fontWeight='bold'>
                                Subjects you tutor
                            </Text>
                            <Divider
                                mt={3}
                            />
                        </CardHeader>
                        <CardBody>
                            <SimpleGrid columns={2} spacing={12}>
                                {/*<Text*/}
                                {/*    fontSize={'medium'}*/}
                                {/*    fontWeight='bold'>*/}
                                {/*    Hourly Rate*/}
                                {/*</Text>*/}
                                {/*<Text*/}
                                {/*    fontSize={'large'}*/}
                                {/*    fontWeight='bold'>*/}
                                {/*    €{tutor.review?.length}*/}
                                {/*</Text>*/}
                            </SimpleGrid>

                        </CardBody>
                    </Card>
                </Box>
                <Box flex={1.3}>
                    <Card borderRadius={20} >
                        <CardHeader>
                            <Image
                                // borderRadius='full'
                                // boxSize='250px'
                                src="images/placeholderImage.png"
                                alt="Placeholder for image of Identity"
                                fallbackSrc='https://via.placeholder.com/150'
                            />
                            <Text
                                mt={3}
                                textAlign='center'
                                fontSize={'larger'}
                                fontWeight='bold'>
                                {tutor.firstName} {tutor.lastName}
                            </Text>
                            <Text
                                textAlign='center'
                                fontSize={'large'}
                                fontWeight='bold'
                                color='grey'>
                                {tutor.address?.city}
                            </Text>
                            <Divider
                                mt={3}
                            />
                        </CardHeader>
                        <CardBody>
                            <SimpleGrid columns={2} spacing={12}>
                                <Text
                                    fontSize={'medium'}
                                    fontWeight='bold'>
                                    Hourly Rate
                                </Text>
                                <Text
                                    fontSize={'large'}
                                    fontWeight='bold'>
                                    €{tutor.review?.length}
                                </Text>
                            </SimpleGrid>

                        </CardBody>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
}

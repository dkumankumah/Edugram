import React, {useEffect, useState} from "react";
import ProfileNavigation from "../components/shared/ProfileNavigation/ProfileNavigation";
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Avatar,
    SimpleGrid,
    Icon,
    Image,
    Divider,
    Text, Flex, Button, Collapse, useDisclosure
} from "@chakra-ui/react";
import AdminContainer from "../components/admin/container/adminContainer";
import {decodeJWT, getToken, isAdmin, isTutor} from "./api/api.storage";
import Chart from "chart.js/auto";
import {Bar} from 'react-chartjs-2'
import {CategoryScale} from 'chart.js';
import {ArrowUpDownIcon, CheckCircleIcon, CheckIcon, CloseIcon} from "@chakra-ui/icons";
import {TutorModel} from "../models/TutorModel";
Chart.register(CategoryScale);

const Dashboard = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [tutor, setTutor] = useState({} as TutorModel)
    const { isOpen, onToggle } = useDisclosure()
    const baseUrl = "http://localhost:8001/tickets"
    const [map, setMap] = useState(new Map());

    useEffect(() => {
        setIsAuth(isAdmin())
        if(isAdmin()) {
            let myMap = new Map();
            let ticket: string;
            const elementCounts: any = {};
            const getTickets = async () => {
                await fetch(
                    baseUrl, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': 'http://localhost:8001',
                        },
                    }
                )
                    .then((response) => response.json())
                    .then((data) => {
                        data.sort((a: any, b: any) => {
                            const dateA = new Date(a.dateCreated);
                            const dateB = new Date(b.dateCreated);
                            if (dateA < dateB) {
                                return -1;
                            }
                            if (dateA > dateB) {
                                return 1;
                            }
                            return 0;
                        }).map((obj: any) => {
                            console.log('test: ', ticket = new Date(obj.dateCreated).toLocaleDateString('en-us', {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                            }))
                            elementCounts[ticket] = (elementCounts[ticket] || 0) + 1;
                            myMap.set(ticket, myMap.get(ticket) + 1 || 1);
                            setMap(myMap)
                            //Add date to an Array of
                            //Check if there are similar dates, sum to the date that is already in the Array
                        })
                    });
            };
            getTickets().then(r => {
                console.log('MAP: ', myMap);
            });
        }
        if(isTutor()) {
            getTutor(decodeJWT().id)
        }

    }, []);

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

    const options1 = {

        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
                display: false
            },
            title: {
                display: true,
                text: 'Check out each column for more details',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false, // <-- this removes y-axis line
                }
            },
            y: {

                // type: 'realtime',
                display: false,
                ticks: {
                    display: false
                },
                grid: {
                    display: false,
                    // drawBorder: false
                }
            },
        }
    };


    const labels = Array.from(map.keys());

    const data = {
        labels,
        // labels : chart.map(obj=>()),
        datasets: [
            {
                label: 'Dataset 2',
                // data: [0, 10, 20, 30, 93, 60, 80, 110, 65],
                data: Array.from(map.values()),
                // data: [0, 10, 20, 30, 93, 60, 80, 110, 65],
                backgroundColor: '#4EA4B1',
                borderRadius: 10,
                barThickness: 30,
                // borderWidth: 2,
                borderSkipped: false, // To make all side rounded
            },
        ],
    };

    function handleAccept(input : string, id: string): void {
        tutor.request?.map((request)=>{
            if(request.id === id) {
                request.status = input
            }
        })

        fetch('http://localhost:8000/tutor/' + tutor._id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:8000',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify({request: tutor.request }),
        }).then(response => response.json()).then(result =>
            setTutor(result)

        )
    }

    function getAge(birthdate?: string) : number {
        const currentDate = new Date()
        const formattedDateString = birthdate?.substr(6, 4) + '-' + birthdate?.substr(3, 2) + '-' + birthdate?.substr(0, 2)
        const date = new Date(formattedDateString)
        const difference = currentDate.getTime() - date.getTime()

        return Math.floor(difference / (1000 * 60 * 60 * 24 * 365))
    }

    function isVerified(): boolean {
        return tutor.verified as boolean
    }

    function isValidNumber(): boolean {
        return tutor.phoneNumber?.toLocaleString().length == 10;
    }

    if(isAuth) {
        return (
            <AdminContainer>
                <h1>Dashboard is here Page</h1>
                <Card
                    maxW='md'
                    maxH="md"
                    cursor='pointer'
                    bg="#FFFFFF"
                    borderRadius='10'>
                    <CardBody>
                        {/*<Text as='b'>Daily Tickets</Text>*/}
                        <Bar
                            options={options1}
                            data={data}
                        />
                    </CardBody>
                </Card>
            </AdminContainer>
        )
    }
    else return (
        <Box>
            <ProfileNavigation/>
            <Box p={5} display={{ lg: 'flex' }}>
                <Box flex={1}>
                    <Card boxShadow={'xl'} borderRadius={20} >
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
                                {tutor.firstName} {tutor.lastName} ({getAge(tutor.dateOfBirth)})
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
                                    fontWeight='bold'
                                    fontSize={'large'}>
                                    Profile verified
                                </Text>
                                <Icon
                                    display={!isVerified() ? 'block' : 'none'}
                                    as={CloseIcon}
                                      boxSize={4}
                                      alignSelf={'center'}
                                      color='red.500'/>
                                <Icon
                                    display={isVerified() ? 'block' : 'none'}
                                    as={CheckCircleIcon}
                                      boxSize={5}
                                      alignSelf={'center'}
                                      color='green.500'/>
                            </SimpleGrid>
                            <Text
                                fontSize={'medium'}
                                color={'green'}>
                                E-mail
                            </Text>
                            <Text
                                color={isValidNumber() ? 'green' : 'red'}
                                fontSize={'medium'}>
                                Mobile number
                            </Text>

                            <Divider
                                mt={3}
                                mb={3}
                            />
                            <SimpleGrid columns={2} spacing={12}>
                                <Text
                                    fontSize={'large'}
                                    fontWeight='bold'>
                                    Reviews
                                </Text>
                                <Text
                                    fontSize={'large'}
                                    fontWeight='bold'>
                                    ({tutor.review?.length})
                                </Text>
                            </SimpleGrid>

                        </CardBody>
                    </Card>
                </Box>
                <Box flex={3}>
                    <Box
                        flex={3}
                        pl={2}>
                        <Card
                            boxShadow={'xl'}
                            borderRadius={20}
                            p={2}>
                            <CardHeader>
                                <Text as = "h2"
                                      mt={5}
                                      fontWeight='bold'>
                                    My lesson requests
                                </Text>
                                <Divider
                                    mt={10}
                                />
                            </CardHeader>
                            <CardBody>
                                {tutor.request?.map((request) => {
                                    if(request.status === "pending") {
                                        return (
                                            <Card
                                                key={request.id}
                                                mt={4}
                                                p={2}>
                                                <CardBody>
                                                    <Flex key={request.id} alignItems="center">
                                                        <Flex   flex='1' flexDirection="row" justifyContent={"space-between"} gap='4' alignItems='center' flexWrap='wrap'>

                                                            <Flex alignItems={"center"} >
                                                                <Avatar name={request.firstName + " " + request.lastName} />
                                                                <Text
                                                                    ml={2}
                                                                    fontWeight={'bold'}
                                                                    fontSize={'large'}>{request.firstName + " " + request.lastName}</Text>
                                                            </Flex>
                                                            <Flex>
                                                                <Box
                                                                    alignSelf={'baseline'}
                                                                >
                                                                    <Text>
                                                                        Subject: {request.subject} - {request.location}
                                                                    </Text>
                                                                </Box>

                                                            </Flex>
                                                            <Flex>
                                                                <Button
                                                                    alignSelf={'baseline'}
                                                                    size='sm'
                                                                    colorScheme='teal' mr={2}
                                                                    onClick={()=> handleAccept("accepted", request.id)}>
                                                                    Accept
                                                                </Button>
                                                                <Button
                                                                    alignSelf={'baseline'}
                                                                    size='sm'
                                                                    colorScheme='red' mr={2}
                                                                    onClick={()=> handleAccept("rejected", request.id)}>
                                                                Reject
                                                                </Button>
                                                            </Flex>
                                                        </Flex>
                                                    </Flex>
                                                </CardBody>

                                            </Card>

                                        );
                                    }

                                })}

                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        flex={3}
                        pl={2}>
                        <Card
                            boxShadow={'xl'}
                            borderRadius={20}
                            p={2}>
                            <CardHeader
                                cursor='pointer'
                                onClick={onToggle}>
                                <Flex flex='1' flexDirection="row" justifyContent={"space-between"} gap='4' alignItems='center' flexWrap='wrap'>
                                    <Text as = "h2"
                                          mt={5}
                                          fontWeight='bold'>
                                        Accepted requests
                                    </Text>
                                    <Icon
                                        as={ArrowUpDownIcon}
                                        border='2px' borderColor='gray.200'
                                        p={1}
                                        boxSize={7}
                                        onClick={onToggle}/>
                                </Flex>

                                <Divider
                                    mt={10}
                                />
                            </CardHeader>
                            <Collapse in={isOpen} animateOpacity>
                                <CardBody>
                                {tutor.request?.map((request) => {
                                    if(request.status === "accepted") {
                                        return (
                                            <Card
                                                key={request.id}
                                                pt={2}
                                                mt={4}>
                                                <CardBody>
                                                    <Flex key={request.id} alignItems="center">
                                                        <Flex   flex='1' flexDirection="row" justifyContent={"space-between"} gap='4' alignItems='center' flexWrap='wrap'>

                                                            <Flex alignItems={"center"} >
                                                                <Avatar name={request.firstName + " " + request.lastName} />
                                                                <Text
                                                                    ml={2}
                                                                    fontWeight={'bold'}
                                                                    fontSize={'large'}>{request.firstName + " " + request.lastName}</Text>
                                                            </Flex>
                                                            <Flex>
                                                                <Box
                                                                    alignSelf={'baseline'}>
                                                                    <Text>
                                                                        Subject: {request.subject} - {request.location}
                                                                    </Text>
                                                                </Box>

                                                            </Flex>
                                                            <Icon
                                                                as={CheckIcon}
                                                                boxSize={6}
                                                                color='green'/>
                                                        </Flex>
                                                    </Flex>
                                                </CardBody>
                                            </Card>
                                        );
                                    }
                                })}
                            </CardBody>
                            </Collapse>
                        </Card>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Dashboard

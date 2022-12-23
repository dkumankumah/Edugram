import React, {useEffect, useState} from "react";
import ProfileNavigation from "../components/shared/ProfileNavigation/ProfileNavigation";
import {
    Box,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Avatar,
    SimpleGrid,
    Icon,
    Image,
    Divider,
    Text, Flex, Grid, GridItem, Heading, Button
} from "@chakra-ui/react";
import AdminContainer from "../components/admin/container/adminContainer";
import {isAdmin} from "./api/api.storage";
import Chart from "chart.js/auto";
import {Bar} from 'react-chartjs-2'
import {CategoryScale} from 'chart.js';
import {SubmitButton} from "../components/shared/Buttons";
import {CloseIcon} from "@chakra-ui/icons";
import studentList from "../../public/data/students.json";
Chart.register(CategoryScale);

const Dashboard = () => {
    const [isAuth, setIsAuth] = useState(false)
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

    }, []);

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

    function handleAccept() {

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
                                Daniel Kumankumah (33)
                            </Text>
                            <Text
                                textAlign='center'
                                fontSize={'large'}
                                fontWeight='bold'
                                color='grey'>
                                Amsterdam
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
                                <Icon as={CloseIcon}
                                      boxSize={4}
                                      alignSelf={'center'}
                                      color='red.500'/>
                            </SimpleGrid>
                            <Text
                                fontSize={'medium'}
                                color={'green'}>
                                E-mail
                            </Text>
                            <Text
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
                                    (2)
                                </Text>
                            </SimpleGrid>

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
                        <CardHeader>
                            <Text as = "h2"
                                mt={5}
                                // fontSize={'larger'}
                                fontWeight='bold'>
                            My lesson requests
                            </Text>
                            <Divider
                                mt={10}
                            />
                        </CardHeader>
                        <CardBody>
                            {studentList?.map((student) => {
                                return (
                                <Flex key={student.id} alignItems="center">
                                    <Flex   flex='1' flexDirection="row" justifyContent={"space-between"} gap='4' alignItems='center' flexWrap='wrap'>

                                        <Flex alignItems={"center"} >
                                            <Avatar name={student.name + " " + student.lastName} />
                                            <Text
                                                ml={2}
                                                fontWeight={'bold'}
                                                fontSize={'large'}>{student.name + " " + student.lastName}</Text>
                                        </Flex>
                                        <Flex>
                                            <Box
                                                alignSelf={'baseline'}
                                            >
                                                <Text>
                                                    Subject: Wiskunde - On Location
                                                </Text>
                                            </Box>

                                        </Flex>
                                        <Flex>
                                            <Button
                                                alignSelf={'baseline'}
                                                size='sm'
                                                colorScheme='teal' mr={2}
                                                onClick={handleAccept}>
                                                Accept
                                            </Button>
                                            <Button
                                                alignSelf={'baseline'}
                                                size='sm'
                                                colorScheme='red' mr={2}>
                                                Reject
                                            </Button>
                                        </Flex>
                                        <Divider
                                            mt={5}
                                            mb={5}
                                        />

                                    </Flex>
                                </Flex>
                                );
                            })}

                        </CardBody>
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}

// A way to fetch data from API or Local Json
export const getStaticProps = async () => {
    return {
        props: {
            studentList,
        },
    };
};

export default Dashboard

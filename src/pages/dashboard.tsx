import React, {useEffect, useState} from "react";
import {Card, CardBody, Text} from "@chakra-ui/react";
import Chart from "chart.js/auto";
import {CategoryScale} from 'chart.js';
import * as io from "socket.io-client";
import {Bar} from "react-chartjs-2";
import AdminContainer from "../components/admin/container/adminContainer";
import DashboardTable from "../components/admin/container/dashboardTable";
import {Box, Flex, Stack} from "@chakra-ui/layout";
import Select from 'react-select';
import {loggers} from "winston";


Chart.register(CategoryScale);


const options2 = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
    {value: 'mint', label: 'Mint'},
    {value: 'peanut-butter', label: 'Peanut Butter'},
    {value: 'coffee', label: 'Coffee'},
    {value: 'pistachio', label: 'Pistachio'},
    {value: 'mocha', label: 'Mocha'},
    {value: 'caramel', label: 'Caramel'},
    {value: 'hazelnut', label: 'Hazelnut'},
    {value: 'lemon', label: 'Lemon'},
    {value: 'blueberry', label: 'Blueberry'},
    {value: 'raspberry', label: 'Raspberry'},
    {value: 'peach', label: 'Peach'},
    {value: 'apple', label: 'Apple'},
    {value: 'orange', label: 'Orange'},
    {value: 'grape', label: 'Grape'}
];


const socket = io.connect("ws://localhost:3001", {transports: ['websocket', 'polling', 'flashsocket']});
const Dashboard = () => {
    const baseUrl = "http://localhost:8001/tickets"
    const [chartMap, setChartMap] = useState(new Map());
    const [dataa, setDataa] = useState([]);
    let [arrayChartData, setArrayChartData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleInputChange = (newValue: string) => {
        console.log(`Input changed to ${newValue}`);
    };

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption);
    };

    useEffect(() => {
        socket.on('data', (result: any) => {
            // socket.emit('getData');
            console.log('Getting Data', result)
            getChartData(result);
        });
    }, []);

    socket.on('update-tickets', (newData: any) => {
        let myMap = new Map();
        let array: any[] = [];
        let ticket: string;
        setDataa(newData);

        getChartData(newData)
    });

    const getChartData = (fromSocket: any) => {
        let myMap = new Map();
        let array: any[] = [];
        let ticket: string;
        try {
            console.log("The following data is: ", fromSocket)
            fromSocket.sort((a: any, b: any) => {
                const dateA = new Date(a.dateCreated);
                const dateB = new Date(b.dateCreated);
                if (dateA < dateB) {
                    return -1;
                }
                if (dateA > dateB) {
                    return 1;
                }
                console.log("Im here in sortFunction.")
                return 0;
            }).map((obj: any) => {


                ticket = new Date(obj.dateCreated).toLocaleDateString('en-us', {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                })
                myMap.set(ticket, myMap.get(ticket) + 1 || 1);
                setChartMap(myMap)
                array.push(obj)
                setArrayChartData(array)
                console.log("Im here in mapFunction.")
                //Add date to an Array of
                //Check if there are similar dates, sum to the date that is already in the Array


            })
        } catch (err) {
            throw new Error()
        }
    }

    const chartData = {
        labels: Array.from(chartMap.keys()),
        // labels : chart.map(obj=>()),
        datasets: [
            {
                label: 'Dataset 2',
                // data: [0, 10, 20, 30, 93, 60, 80, 110, 65],
                data: Array.from(chartMap.values()),
                // data: [0, 10, 20, 30, 93, 60, 80, 110, 65],
                backgroundColor: '#4EA4B1',
                borderRadius: 10,
                barThickness: 30,
                // borderWidth: 2,
                borderSkipped: false, // To make all side rounded
            },
        ],
    };
    const options = {

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
    console.log('Data for input:', chartData);

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            borderRadius: '30px'
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        dropdownIndicator: () => ({
            display: 'none'
        }),
    };

    return (

        <AdminContainer>
            {/*<h1>Dashboard is here Page</h1>*/}

            <Flex color='black' minWidth='max-content' gap='20'>
                <Card
                    maxW='md'
                    maxH="md"
                    h=''
                    w='40%'
                    // cursor='pointer'
                    bg="#FFFFFF"
                    borderRadius='10'>
                    <CardBody>
                        <Text as='b'>Daily Tickets</Text>
                        <Bar
                            data={chartData}
                            options={options}
                        />
                    </CardBody>
                </Card>

                <Card
                    // maxW='md'
                    maxH="md"
                    w='45%'
                    // cursor='pointer'
                    bg="#FFFFFF"
                    borderRadius='10'>
                    <CardBody>
                        <Text as='b'>Tickets By Status</Text>
                        {/*<Bar*/}
                        {/*    data={chartData}*/}
                        {/*    options={options}*/}
                        {/*/>*/}
                    </CardBody>
                </Card>
                <Card
                    maxW='45%'
                    maxH="md"
                    w='40%'
                    // cursor='pointer'
                    bg="#FFFFFF"
                    borderRadius='10'>
                    <CardBody>
                        <Text as='b'>Activity</Text>
                    </CardBody>
                </Card>
            </Flex>


            <Flex color='black' minWidth='max-content' gap='20'>
                <Card
                    mt={5}
                    minH="100%"
                    w='66%'
                    bg="#FFFFFF"
                    borderRadius='10'
                    variant={'elevated'}>
                    <CardBody>
                        <Text as='b'>Recent Tickets</Text>
                        <DashboardTable/>
                    </CardBody>
                </Card>

                <Card
                    mt={5}
                    // minH="100%"
                    w='30%'
                    bg="#FFFFFF"
                    borderRadius='10'
                    variant={'elevated'}>
                    <CardBody>
                        <Text as='b'>Last Updates</Text>
                        <Box
                            bg="#107385"
                            borderRadius='20'
                            py="5px"
                            px="18px">
                            <Text color="#F5F5F5">/u</Text>
                        </Box>
                        {/*<DashboardTable/>*/}
                    </CardBody>
                </Card>
            </Flex>
        </AdminContainer>
    )
}

export default Dashboard


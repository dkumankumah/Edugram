import React, {useEffect, useState} from "react";
import AdminContainer from "../components/admin/container/adminContainer";
import {Card, CardBody, Text} from "@chakra-ui/react";
import Chart from "chart.js/auto";
import {Bar} from 'react-chartjs-2'
import {CategoryScale} from 'chart.js';

Chart.register(CategoryScale);

const Dashboard = () => {
    const baseUrl = "http://localhost:8001/tickets"
    const [map, setMap] = useState(new Map());

    useEffect(() => {
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

                    // data.map((obj: any) => {
                    //     console.log('test: ', ticket = new Date(obj.dateCreated).toLocaleDateString('en-us', {
                    //         month: "short",
                    //         day: "numeric"
                    //     }))
                    //     elementCounts[ticket] = (elementCounts[ticket] || 0) + 1;
                    //     myMap.set(ticket, myMap.get(ticket) + 1 || 1);
                    //
                    //     //Add date to an Array of
                    //     //Check if there are similar dates, sum to the date that is already in the Array
                    // })
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
                    <Text as='b'>Daily Tickets</Text>
                    <Bar
                        options={options1}
                        data={data}
                    />
                </CardBody>
            </Card>


        </AdminContainer>

    )


}
export default Dashboard

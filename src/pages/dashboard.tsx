<<<<<<< HEAD
import React, {useEffect, useState} from "react";
import AdminContainer from "../components/admin/container/adminContainer";
import {Card, CardBody, Text} from "@chakra-ui/react";
import Chart from "chart.js/auto";
import {Bar} from 'react-chartjs-2'
import {CategoryScale} from 'chart.js';

Chart.register(CategoryScale);

const Dashboard = () => {
    const baseUrl = "http://localhost:8001/tickets"
    // const [data, setData] = useState(null);
    const [chart, setChart] = useState([])
    // const [chart, setChart] = useState({})

    // const getTickets =async () => {
    //     await fetch(
    //         baseUrl, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Access-Control-Allow-Origin': 'http://localhost:8001',
    //             },
    //         }
    //     ).then((response) => {
    //         let labels = [];
    //         let data = [];
    //         response.json().then((json) => {
    //             console.log('check check', json)
    //             setChart(json.data)
    //         })
    //     }).catch(err => {
    //         console.log(err)
    //     })
    //
    // }
    // useEffect(() => {
    //     // Make a GET request to the Node.js server to fetch the data
    //     fetch(baseUrl)
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data);
    //             console.log(data)
    //         });
    // }, []);
    //
    // if (!data) {
    //     return <p>Loading data...</p>;
    // }

    useEffect(() => {
        let ticketAmountOnADay : string[]
        let dateOfCreatedTickets: any[] = [];
        let amountOfTickets;
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
                    data.forEach((obj: any) => {
                        console.log('test: ', new Date(obj.dateCreated).toLocaleDateString('en-us', {
                            month: "short",
                            day: "numeric"
                        }))
                        //Add date to an Array of
                        //Check if there are similar dates, sum to the date that is already in the Array
                    })

                    // console.log('test: ', new Date(obj.dateCreated)))
//                     for ( let dataObj of data) {
//                         // confirmedCases.push(parseInt(dataObj.Cases));
//
//                         // dateOfCases.push(tempDate.getUTCDate());
// //in order to get better visualization of the chart,
//                         //the getUTCDate was used to reduce the number of info
//                         //shown under the chart.
//                         let dateCreated = new Date (dataObj.dateCreated);
//                         dateOfCreatedTickets.push(dateCreated.getUTCDate());
//                         console.log('Chart: ',dateCreated);
//                     }
                    setChart(data)
                });
            // response.json().then((json) => {
            //     // console.log('check check', json)
            //     setChart(json)
            //     // console.log('chart 1: ',chart)
            // })
            // }).catch(err => {
            //     console.log(err)
            // })
        };
        getTickets();
    }, []);


    const formatDate = (date: Date) => {
        return [
            (date.getDate()),
            (date.getMonth() + 1),
            date.getFullYear(),
        ].join('/');
    }
    // if(!Data)
    // {
    //     return <Loading/>;
    // }


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

    // console.log("chart is..: ", chart.map(obj => obj));
    // console.log("chart is..: ", chart);
    // console.log("chart is: ", chart.map((chartObject, index) => ());
    const labels = ["January", "February", "March", "April", "May", "June", "July"];

    const data = {
        labels,
        // labels : chart.map(obj=>()),
        datasets: [
            {
                label: 'Dataset 2',
                data: [0, 10, 20, 30, 93, 60, 80, 110, 65],
                // data: [0, 10, 20, 30, 93, 60, 80, 110, 65],
                backgroundColor: '#4EA4B1',
                borderRadius: 10,
                barThickness: 30,
                // borderWidth: 2,
                borderSkipped: false, // To make all side rounded
            },
        ],
    };

    // const options2 = {
    //     indexAxis: 'y' as const,
    //     elements: {
    //         bar: {
    //             borderWidth: 2,
    //         },
    //     },
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             position: 'right' as const,
    //         },
    //         title: {
    //             display: true,
    //             text: 'Open vs. Pending vs. Closed Tickets',
    //         },
    //     },
    // };

    // const data2 = {
    //     labels,
    //     datasets: [
    //         {
    //             label: 'Dataset 1',
    //             data: [0, 10, 5, 2, 20, 30, 45],
    //             borderColor: 'rgb(255, 99, 132)',
    //
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //         },
    //     ],
    // };

    return (
        <AdminContainer>
            <h1>Dashboard is here Page</h1>
            {/*<h1 style={{ fontSize: "5rem" }}>Daily Tickets</h1>*/}
            <Card
                maxW='md'
                maxH="md"
                // key={tutor._id}
                cursor='pointer'
                bg="#FFFFFF"
                borderRadius='10'>
                <CardBody>
                    <Text as='b'>Daily Tickets</Text>
                    <Bar
                        options={options1}
                        data={data}
                        // data={this.state.data}
                    />
                </CardBody>
            </Card>

            {/*/!*<Card maxW='sm'*!/*/}
            {/*/!*      maxH="md"*!/*/}
            {/*/!*    // key={tutor._id}*!/*/}
            {/*/!*      cursor='pointer'*!/*/}
            {/*/!*      bg="#FFFFFF"*!/*/}
            {/*/!*      borderRadius='20'>*!/*/}
            {/*/!*    <CardBody>*!/*/}
            {/*/!*        <Text as='b'>Tickets by Status</Text>*!/*/}

            {/*/!*        <Bar options={options2} data={data2}/>*!/*/}
            {/*/!*    </CardBody>*!/*/}
            {/*/!*</Card>*!/*/}

=======
import React from "react";
import AdminContainer from "../components/admin/container/adminContainer";


const Dashboard = () => {
    return (
        <AdminContainer>
            <h1>Dashboard is here Page</h1>
>>>>>>> 9dafa381de851d791bc44627e7f428528f0d7674
        </AdminContainer>
    )
}
export default Dashboard

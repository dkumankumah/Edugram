import React, {useEffect} from "react";
import AdminContainer from "../components/admin/container/adminContainer";
import {Card, CardBody, Text} from "@chakra-ui/react";
import Chart from "chart.js/auto";
import {Bar} from 'react-chartjs-2'
import {CategoryScale} from 'chart.js';

Chart.register(CategoryScale);

const Dashboard = () => {

//     useEffect(() => {
//         fetch('https://localhost:3000/tickets')
//             .then(response => response.json())
//             // .then(data => setTotalReactPackages(data.total))
//             .catch(error => {
//                 this.setState({errorMessage: error.toString()});
//                 console.error('There was an error!', error);
//             });
//
// // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []);


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

    const labels = ["January", "February", "March", "April", "May", "June", "July"];
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 2',
                data: [0, 10, 20, 30, 93, 60, 80, 110, 65],
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
                    />
                </CardBody>
            </Card>

            {/*<Card maxW='sm'*/}
            {/*      maxH="md"*/}
            {/*    // key={tutor._id}*/}
            {/*      cursor='pointer'*/}
            {/*      bg="#FFFFFF"*/}
            {/*      borderRadius='20'>*/}
            {/*    <CardBody>*/}
            {/*        <Text as='b'>Tickets by Status</Text>*/}

            {/*        <Bar options={options2} data={data2}/>*/}
            {/*    </CardBody>*/}
            {/*</Card>*/}

        </AdminContainer>
    )
}
export default Dashboard

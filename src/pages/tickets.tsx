<<<<<<< HEAD
import React, {useEffect} from "react";
import AdminContainer from "../components/admin/container/adminContainer";
import {async} from "rxjs";


const Tickets = () => {


//     useEffect(() => {
//         fetch('https://localhost:3000/tickets')
//             .then(response => response.json())
//             .then(data => setTotalReactPackages(data.total))
//             .catch(error => {
//             this.setState({ errorMessage: error.toString() });
//             console.error('There was an error!', error);
//         });
//
// // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []);


=======
import React from "react";
import AdminContainer from "../components/admin/container/adminContainer";


const Tickets = () => {
>>>>>>> 9dafa381de851d791bc44627e7f428528f0d7674
    return (
        <AdminContainer>
            <h1>Tickets is here Page</h1>
        </AdminContainer>
    )
}


<<<<<<< HEAD
=======

>>>>>>> 9dafa381de851d791bc44627e7f428528f0d7674
export default Tickets

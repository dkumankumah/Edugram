import React, {useEffect} from "react";
import AdminContainer from "../components/admin/container/adminContainer";
import {async} from "rxjs";


const Tickets = () => {


    useEffect(() => {
        fetch('https://localhost:3000/tickets')
            .then(response => response.json())
            .then(data => setTotalReactPackages(data.total))
            .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    return (
        <AdminContainer>
            <h1>Tickets is here Page</h1>
        </AdminContainer>
    )
}


export default Tickets

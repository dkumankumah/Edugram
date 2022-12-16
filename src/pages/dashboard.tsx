import React, {useEffect, useState} from "react";
import ProfileNavigation from "../components/shared/ProfileNavigation/ProfileNavigation";
import {Box} from "@chakra-ui/react";
import AdminContainer from "../components/admin/container/adminContainer";
import {isAdmin} from "./api/api.storage";

const Dashboard = () => {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        setIsAuth(isAdmin())
    }, [])

    console.log(isAuth)
    if(isAuth) {
        return (
            <AdminContainer>

            </AdminContainer>
        )
    }
    else return (

        // <AdminContainer>

        <Box>
            <ProfileNavigation/>
            Dashboard
        </Box>

          // </AdminContainer>
    )
}
export default Dashboard

import {Box} from "@chakra-ui/react";
import ProfileNavigation from "../components/shared/ProfileNavigation/ProfileNavigation";
import React from "react";

export default function courses () {
    return (
        <Box>
            <ProfileNavigation/>
            <Box p={5} display={{ lg: 'flex' }}>
                <Box flex={1}>
                    Left
                </Box>
                <Box flex={3}>
                    middle
                </Box>
                <Box flex={1}>
                    right
                </Box>
            </Box>
        </Box>
    );
}

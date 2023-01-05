import {Box, HStack} from "@chakra-ui/react";
import Link from "next/link";
import {useRouter} from "next/router";
import {ProfileLinkNavigation} from "../ProfileLinkNavigation";
/**
 Reusable component for Profile, dashboard, messages and invoices pages
 @author @Danny Nansink, 500821004
 **/
const ProfileNavigation = () => {
    return (
        <Box bg='white' w='100%' p={4} color='black'>
            <HStack justifyContent={'center'}>
                <ProfileLinkNavigation path={'dashboard'}/>
                <ProfileLinkNavigation path={'profile'}/>
                <ProfileLinkNavigation path={'courses'}/>
                <ProfileLinkNavigation path={'/chat/chats'}/>
                <ProfileLinkNavigation path={'invoices'}/>
            </HStack>
        </Box>

    )


}

export default ProfileNavigation

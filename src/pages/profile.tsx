import React, {useEffect, useState} from "react";
import ProfileNavigation from "../components/shared/ProfileNavigation/ProfileNavigation";
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Grid,
    GridItem,
    HStack,
    Image,
    Input,
    Radio, Text
} from "@chakra-ui/react";
import {SubmitButton} from "../components/shared/Buttons";
import {DashboardCard} from "../components/shared/DashboardCard";
import {InputField} from "../components/shared/InputField/InputField";
import {decodeJWT, getToken, isAuthenticated, isTutor} from "./api/api.storage";
import {UserModel} from "../models/UserModel";
import NotFoundPage from "./notFoundPage";
import {router} from "next/client";

interface PageProps {
    tutor: UserModel
}

export const Profile = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [gender, setGender] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [tutor, setTutor] = useState({} as UserModel)

    useEffect(() => {
        isAuthenticated() ? getTutor(decodeJWT().id) : console.log('redirect to login')

    }, [])

    const getTutor = (id: string) => {
        fetch('http://localhost:8000/tutor/' + id, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:8000',
            },
            redirect: 'follow'
        }) .then(response => response.json()).then(result => setTutor(result))
    }

    const handleProfileChanges = () => {
        const profile = {
            firstname,
            lastname, email, phonenumber, gender, birthdate
        }
    }

    return (
        <Box>
            <ProfileNavigation/>
            <Grid padding={'20px'}
                  h='200px'
                  templateRows='repeat(2, 1fr)'
                  templateColumns='repeat(4, 1fr)'
                  gap={4}>
                <GridItem rowSpan={2} colSpan={1}>
                    <Card boxShadow={'2xl'} borderRadius={20}>
                        <CardHeader>
                            <Image margin={'auto'}
                                   src="images/placeholderImage.png"
                                   alt="Placeholder for image of Identity"
                            />
                        </CardHeader>
                        <CardBody>
                            <Input mb={5} variant='filled' placeholder={tutor.firstName} value={firstname} onChange={(e) => {
                                setFirstname(e.target.value)
                            }}/>
                            <Input mb={5} variant='filled' placeholder={tutor.lastName} value={lastname} onChange={(e) => {
                                setFirstname(e.target.value)
                            }}/>
                            <Input mb={5} variant='filled' type="date"
                                   placeholder={'oke'} value={birthdate} onChange={(e) => {
                                setBirthdate(e.target.value)
                            }}/>
                            <Input mb={5} variant='filled' placeholder={'oke'} value={gender} onChange={(e) => {
                                setFirstname(e.target.value)
                            }}/>
                            <Input mb={5} variant='filled' placeholder={'oke'} value={email} onChange={(e) => {
                                setFirstname(e.target.value)
                            }}/>
                            <Input mb={5} variant='filled' placeholder={'oke'} value={phonenumber} onChange={(e) => {
                                setFirstname(e.target.value)
                            }}/>
                        </CardBody>
                        <CardFooter alignSelf={"center"}>
                            <SubmitButton label={'save-profile-changes'} onClick={handleProfileChanges}>Save
                                Changes</SubmitButton>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem colSpan={1}>
                    <DashboardCard buttonWidth={'100px'} height={'280px'} label={'upload-identity'}
                                   buttonText={'Upload'} headerName={'Identity'}
                                   cardWidth={'300px'}
                                   optionalBodyOne={
                                       <Box bg={'#edf2f7'} height={'120px'} borderRadius={'20px'} width={'200px'}>
                                           <Image margin={'auto'}
                                                  maxH={'120px'}
                                                  src="images/img_identity.png"
                                                  alt="Placeholder for image of Identity"
                                           />
                                       </Box>
                                   }
                    />
                </GridItem>
                <GridItem colSpan={1}>
                    <DashboardCard buttonWidth={'150px'} height={'280px'} label={'upload-degree'}
                                   buttonText={'Upload'} headerName={'My Diploma'}
                                   cardWidth={'300px'} optionalBodyOne={
                        <Image
                            maxH={'120px'}
                            src="images/img_degree.png"
                            alt="Placeholder for image of Degree"
                        />}/></GridItem>
                <GridItem colSpan={1}>
                    <DashboardCard buttonWidth={'200px'} height={'280px'} label={'delete-account'}
                                   buttonText={'Delete my account'} headerName={'Delete My Account'}
                                   cardWidth={'300px'} optionalBodyOne={
                        <HStack bg={'#107385'} maxW={'70%'} textAlign={'center'} marginLeft={'40px'} marginTop={'20px'}
                                borderRadius={'20px'}>
                            <Radio colorScheme={'red'} value='1'/>
                            <Text padding={'5px'} color={'#FFFFFF'}>Yes, I am sure. Delete my account</Text>
                        </HStack>
                    }/></GridItem>
                <GridItem colSpan={1}>
                    <DashboardCard buttonWidth={'150px'} height={'280px'}
                                   label={'save-changes-adress'} buttonText={'Save changes'}
                                   headerName={'Adress + icon'} cardWidth={'300px'}
                                   optionalBodyOne={
                                       <InputField placeholder={'Wibautstraat 3'}
                                                   variant={'unstyled'} border={'1px solid #e2e8f0'} bg={'#e2e8f0'}
                                                   height={'var(--chakra-sizes-10)'}
                                                   color={'black'} mb={2} outline={'2px solid transparent'}
                                                   fontSize={'xs'} textIndent={'20px'}
                                                   borderRadius={'var(--chakra-radii-md)'}
                                                   label={'inputfield-adress'}/>}
                                   optionalBodyTwo={
                                       <InputField placeholder={'1015KG Amsterdam'}
                                                   variant={'unstyled'} border={'1px solid #e2e8f0'} bg={'#e2e8f0'}
                                                   height={'var(--chakra-sizes-10)'}
                                                   color={'black'} mb={2} outline={'2px solid transparent'}
                                                   fontSize={'xs'} textIndent={'20px'}
                                                   borderRadius={'var(--chakra-radii-md)'}
                                                   label={'inputfield-adress'}/>}/>
                </GridItem>
                <GridItem colSpan={1}>
                    <DashboardCard buttonWidth={'150px'} height={'280px'}
                                   label={'save-changes-password'} buttonText={'Save changes'}
                                   headerName={'Change Password'} cardWidth={'300px'}
                                   optionalBodyOne={<InputField placeholder={'Previous password'}
                                                                label={'inputfield-previous-password'}/>}
                                   optionalBodyTwo={<InputField placeholder={'New password'}
                                                                label={'inputfield-new-password'}/>}
                    /></GridItem>
            </Grid>
        </Box>

    )
}


export default Profile

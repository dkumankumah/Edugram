import React, {useEffect, useReducer, useState} from "react";
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
    Text,
    FormControl,
    FormHelperText, FormLabel, SimpleGrid, Radio,
} from "@chakra-ui/react";
import {SubmitButton} from "../components/shared/Buttons";
import {DashboardCard} from "../components/shared/DashboardCard";
import {InputField} from "../components/shared/InputField/InputField";
import {decodeJWT, getToken, isAuthenticated, isTutor} from "./api/api.storage";
import {TutorModel} from "../models/TutorModel";
import {useRouter} from "next/router";
import {RadioCard} from "./search/[subject]";

export const Profile = () => {
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [phoneNumber, setPhonenumber] = useState('')
    const [gender, setGender] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [streetName, setStreetName] = useState('')
    const [tutor, setTutor] = useState({} as TutorModel)
    const isError = firstName === ''
    const router = useRouter()

    useEffect(() => {
        isAuthenticated() && isTutor() ? getTutor(decodeJWT().id) : router.push('/')
    }, [])

    const getTutor = (id: string) => {
        fetch('http://localhost:8000/tutor/' + id, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:8000',
                'Authorization': 'Bearer ' + getToken()
            },
            redirect: 'follow'
        }).then(response => response.json()).then(result =>
            setTutor(result)

        )
    }

    const handleProfileChanges = () => {
        const formattedBirthDate = new Date(birthdate).toLocaleDateString('german', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        })
        console.log(formattedBirthDate)
        const profile = {
            firstName,
            lastName, formattedBirthDate, gender, phoneNumber
        }
        fetch('http://localhost:8000/tutor/' + tutor._id, {
            method: 'PUT',
            body: JSON.stringify({profile: profile}),
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:8000',
                'Authorization': 'Bearer ' + getToken()
            },
        }).then(response => response.json()).then(result =>
            console.log(result)
        )
        alert(JSON.stringify(profile))
    }

    const handleLivingPlaceChanges = () => {
        const livingPlace = {
            streetName, postalCode
        }
        fetch('http://localhost:8000/tutor/' + tutor._id, {
            method: 'PUT',
            body: JSON.stringify({livingPlace: livingPlace}),
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:8000',
                'Authorization': 'Bearer ' + getToken()
            },
        }).then(response => response.json()).then(result =>
            console.log(result)
        )
        alert(JSON.stringify(livingPlace))
    }

    const handleConfirmAction = () => {
        const confirmAction = confirm('Are you really really really sure about this? \n This action cannot be undone')
        confirmAction ? fetch('http://localhost:8000/tutor/' + tutor._id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:8000',
                'Authorization': 'Bearer ' + getToken()
            }
        }).then(response => response.json()).then(() =>
            alert('Thanks for using Edugram!')
        ).then(() => router.push('/register')).catch(err => {
            console.log(err)
        }) : alert("One user was saved today!")
    }

    return (
        <Box>
            <ProfileNavigation/>
            <SimpleGrid padding={'20px'}
                        columns={{sm: 2, md: 3}}
                        h='200px'
                        templateRows='repeat(1, 1fr)'
                        templateColumns='repeat(4, 1fr)'
                        gap={10}>
                <GridItem rowSpan={2} colSpan={1}>
                    <Card boxShadow={'xl'} borderRadius={20} bg={'white'}>
                        <CardHeader>
                            <Image margin={'auto'}
                                   src="images/placeholderImage.png"
                                   alt="Placeholder for image of Identity"
                            />
                        </CardHeader>
                        <CardBody>
                            <FormControl>
                                <FormLabel fontSize={'xs'}>Firstname</FormLabel>
                                <Input data-cy='firstName' mb={2} variant='filled' fontSize={'sm'}
                                       placeholder={tutor.firstName ? tutor.firstName : 'First name unknown'}
                                       value={firstName}
                                       onChange={(e) => {
                                           setFirstname(e.target.value)
                                       }}/>
                                <FormLabel fontSize={'xs'}>Lastname</FormLabel>
                                <Input data-cy='lastName' mb={2} variant='filled' fontSize={'sm'}
                                       placeholder={tutor.lastName ? tutor.lastName : 'Last name unknown'}
                                       value={lastName}
                                       onChange={(e) => {
                                           setLastname(e.target.value)
                                       }}/>
                                <FormLabel fontSize={'xs'}>Birthdate</FormLabel>
                                <Input data-cy='birthDate' mb={2} variant='filled' fontSize={'sm'} type={'date'}
                                       placeholder={tutor.dateOfBirth ? tutor.dateOfBirth : 'Birthdate unknown'}
                                       value={birthdate} onChange={(e) => {
                                    setBirthdate(e.target.value)
                                }}/>
                                <FormHelperText fontSize={'xs'} textAlign={'center'} mb={2} marginTop={'-5px'}>Current
                                    birthdate is: {tutor.dateOfBirth ? tutor.dateOfBirth : 'Unknown'}</FormHelperText>
                                <FormLabel fontSize={'xs'}>Gender</FormLabel>
                                <Input mb={2} variant='filled' fontSize={'sm'}
                                       placeholder={tutor.gender ? tutor.gender : 'Gender unknown'} value={gender}
                                       onChange={(e) => {
                                           setGender(e.target.value)
                                       }}/>
                                <FormLabel fontSize={'xs'}>Email</FormLabel>
                                <Input data-cy='email' mb={2} variant='filled' fontSize={'sm'} isReadOnly={true}
                                       placeholder={tutor.email ? tutor.email : 'Email unknown'}
                                       value={tutor.email}/>
                                <FormLabel fontSize={'xs'}>Phonenumber</FormLabel>
                                <Input data-cy='phoneNumber' mb={2} variant='filled' fontSize={'sm'} type={'number'} maxLength={10}
                                       placeholder={tutor.phoneNumber ? tutor.phoneNumber.toString() : 'Number unknown'}
                                       value={phoneNumber} onChange={(e) => {
                                    setPhonenumber(e.target.value)
                                }}/>
                            </FormControl>

                        </CardBody>
                        <CardFooter alignSelf={"center"}>
                            <SubmitButton label={'save-profile-changes'} onClick={handleProfileChanges}>Save
                                Changes</SubmitButton>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem colSpan={1} gap={1}>
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
                                   buttonText={'Delete my account'} headerName={'Delete My Account'} onClick={handleConfirmAction}
                                   cardWidth={'300px'} optionalBodyOne={
                        <HStack bg={'#107385'} maxW={'70%'} textAlign={'center'} marginLeft={'40px'} marginTop={'20px'}
                                borderRadius={'10px'}>
                            <Text padding={'5px'} color={'#FFFFFF'}>Deleting cannot be undone!</Text>
                        </HStack>
                    }/></GridItem>
                <GridItem colSpan={1}>
                    <DashboardCard buttonWidth={'150px'} height={'280px'} paddingTop={'15px'}
                                   label={'save-changes-adress'} buttonText={'Save changes'}
                                   headerName={'Adress + icon'} cardWidth={'300px'} onClick={handleLivingPlaceChanges}
                                   optionalBodyOne={<>
                                       <FormLabel margin={'0px'} fontSize={'xs'}>Streetname</FormLabel>
                                       <InputField placeholder={tutor.address ? tutor.address.toString() : 'Unknown'}
                                                   mb={1}
                                                   variant={'unstyled'} border={'1px solid #e2e8f0'} bg={'#e2e8f0'}
                                                   height={'var(--chakra-sizes-10)'}
                                                   color={'black'} outline={'2px solid transparent'}
                                                   fontSize={'xs'} textIndent={'20px'}
                                                   borderRadius={'var(--chakra-radii-md)'}
                                                   label={'inputfield-address'} value={streetName} onChange={(e) => {
                                           setStreetName(e.target.value)
                                       }}/>
                                   </>
                                   }
                                   optionalBodyTwo={
                                       <><FormLabel margin={'0px'} fontSize={'xs'}>Postcal code</FormLabel><InputField
                                           placeholder={tutor.address ? tutor.address.toString() : 'Unknown'}
                                           variant={'unstyled'} border={'1px solid #e2e8f0'} bg={'#e2e8f0'}
                                           height={'var(--chakra-sizes-10)'}
                                           color={'black'} outline={'2px solid transparent'}
                                           fontSize={'xs'} textIndent={'20px'}
                                           borderRadius={'var(--chakra-radii-md)'}
                                           label={'inputfield-address'} value={postalCode} onChange={(e) => {
                                           setPostalCode(e.target.value)
                                       }}/></>}/>
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
            </SimpleGrid>
        </Box>

    )
}


export default Profile

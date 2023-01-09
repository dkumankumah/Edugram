import React, {useEffect, useState} from "react";
import ProfileNavigation from "../components/shared/ProfileNavigation/ProfileNavigation";
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    GridItem,
    HStack,
    Image,
    Input,
    Text,
    FormControl,
    FormHelperText, FormLabel, SimpleGrid, useToast,
} from "@chakra-ui/react";
import {SubmitButton} from "../components/shared/Buttons";
import {DashboardCard} from "../components/shared/DashboardCard";
import {InputField} from "../components/shared/InputField/InputField";
import {getToken, isAdmin, isTutor} from "./api/api.storage";
import {TutorModel} from "../models/TutorModel";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {wait} from "next/dist/build/output/log";

interface PageProps {
    accessToken: string,
    data: TutorModel,
}

const INITIAL_STATE_PROFILE = {
    profileFirstName: "",
    profileLastName: "",
    profileDateOfBirth: "",
    profileGender: "",
    profilePhonenumber: "",
};

const INITIAL_STATE_ADDRESS = {
    addressStreetName: "",
    addressPostalCode: "",
}

export const Profile = ({data, accessToken}: PageProps) => {
    const [tutor, setTutor] = useState(data as TutorModel)
    const [user, setUser] = useState(INITIAL_STATE_PROFILE)
    const [address, setAddress] = useState(INITIAL_STATE_ADDRESS)
    const router = useRouter()
    const toast = useToast()

    useEffect(() => {
        console.log(data)
        console.log(isTutor(accessToken))
        console.log(isAdmin(accessToken))
        // setTutor(data)
    }, [])


    const handleInput = (e: any) => {
        setUser({...user, [e.target.name]: e.target.value});

    };


    const handleInputAddress = (e: any) => {
        setAddress({...address, [e.target.name]: e.target.value})
    };

    const handleProfileChanges = () => {
        fetch('http://localhost:8000/tutor/' + tutor._id, {
            method: 'PUT',
            body: JSON.stringify({user: user}),
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:8000',
                Cookie: accessToken
            },
            credentials: "include",
            mode: 'cors',
        }).then(() => {
                toast({description: 'Succesfuly changed profile', status: "success", position: "top-right", duration: 2000})
            }
        ).then(() => {
            wait(2000)
            window.location.reload()
        }).catch((err) => {
            console.log(err.response)
        })
    }

    const handleLivingPlaceChanges = () => {
        fetch('http://localhost:8000/tutor/address' + tutor._id, {
            method: 'PUT',
            body: JSON.stringify({user: address}),
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:8000',
                Cookie: accessToken
            },
            credentials: "include",
            mode: 'cors',
        }).then(response => {
            console.log(response)
            window.location.reload()
        }).catch(err => {
            console.log(err)
        })
        alert(JSON.stringify(address))
    }

    const handleConfirmAction = () => {
        const confirmAction = confirm('Are you really really really sure about this? \n This action cannot be undone')
        confirmAction ? fetch('http://localhost:8000/tutor/' + tutor._id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:8000',
                Cookie: accessToken
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
                                <Input data-cy='firstName' mb={2} variant='filled' fontSize={'sm'} name="profileFirstName"
                                       placeholder={tutor.firstName ? tutor.firstName : 'First name unknown'}
                                       value={user.profileFirstName}
                                       onChange={(e) => {
                                           handleInput(e)
                                       }
                                       }/>
                                <FormLabel fontSize={'xs'}>Lastname</FormLabel>
                                <Input data-cy='lastName' mb={2} variant='filled' fontSize={'sm'} name="profileLastName"
                                       placeholder={tutor.lastName ? tutor.lastName : 'Last name unknown'}
                                       value={user.profileLastName}
                                       onChange={(e) => {
                                           handleInput(e)
                                       }
                                       }/>
                                <FormLabel fontSize={'xs'}>Birthdate</FormLabel>
                                <Input data-cy='birthDate' mb={2} variant='filled' fontSize={'sm'} type={'date'}
                                       name="profileDateOfBirth"
                                       placeholder={tutor.dateOfBirth ? tutor.dateOfBirth : 'Birthdate unknown'}
                                       value={user.profileDateOfBirth} onChange={(e) => {
                                    handleInput(e)
                                }
                                }/>
                                <FormHelperText fontSize={'xs'} textAlign={'center'} mb={2} marginTop={'-5px'}>Current
                                    birthdate is: {tutor.dateOfBirth ? tutor.dateOfBirth : 'Unknown'}</FormHelperText>
                                <FormLabel fontSize={'xs'}>Gender</FormLabel>
                                <Input mb={2} variant='filled' fontSize={'sm'} name="profileGender"
                                       placeholder={tutor.gender ? tutor.gender : 'Gender unknown'} value={user.profileGender}
                                       onChange={(e) => {
                                           handleInput(e)
                                       }
                                       }/>
                                <FormLabel fontSize={'xs'}>Email</FormLabel>
                                <Input data-cy='email' mb={2} variant='filled' fontSize={'sm'} isReadOnly={true}
                                       name="profileEmail"
                                       placeholder={tutor.email ? tutor.email : 'Email unknown'}
                                       value={tutor.email}/>
                                <FormLabel fontSize={'xs'}>Phonenumber</FormLabel>
                                <Input data-cy='phoneNumber' mb={2} variant='filled' fontSize={'sm'} type={'number'}
                                       name="profilePhoneNumber"
                                       maxLength={10}
                                       placeholder={tutor.phoneNumber ? tutor.phoneNumber.toString() : 'Number unknown'}
                                       value={user.profilePhonenumber} onChange={(e) => {
                                    handleInput(e)
                                }
                                }/>
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
                                   buttonText={'Delete my account'} headerName={'Delete My Account'}
                                   onClick={handleConfirmAction}
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
                                       <FormLabel margin={'0px'} fontSize={'xs'}>Streetname + number</FormLabel>
                                       <InputField
                                           placeholder={tutor.address ? tutor.address.street.toString() + ' ' + tutor.address.houseNumber.toString() : 'Unknown'}
                                           mb={1}
                                           variant={'unstyled'} border={'1px solid #e2e8f0'} bg={'#e2e8f0'}
                                           height={'var(--chakra-sizes-10)'} name={'addressStreetName'}
                                           color={'black'} outline={'2px solid transparent'}
                                           fontSize={'xs'} textIndent={'20px'}
                                           borderRadius={'var(--chakra-radii-md)'}
                                           label={'inputfield-address'} value={address.addressStreetName}
                                           onChange={(e) => {
                                               handleInputAddress(e)
                                           }
                                           }/>
                                   </>
                                   }
                                   optionalBodyTwo={
                                       <><FormLabel margin={'0px'} fontSize={'xs'}>Postcal code</FormLabel><InputField
                                           placeholder={tutor.address ? tutor.address.postalCode.toString() : 'Unknown'}
                                           variant={'unstyled'} border={'1px solid #e2e8f0'} bg={'#e2e8f0'}
                                           height={'var(--chakra-sizes-10)'} name={'addressPostalCode'}
                                           color={'black'} outline={'2px solid transparent'}
                                           fontSize={'xs'} textIndent={'20px'}
                                           borderRadius={'var(--chakra-radii-md)'}
                                           label={'inputfield-address'} value={address.addressPostalCode} onChange={(e) => {
                                           handleInputAddress(e)
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
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const accessToken = JSON.stringify(ctx.req.cookies.access_token)
    const response = await fetch('http://localhost:8000/tutor/details', {
        method: "GET",
        credentials: "include",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Cookie: accessToken
        }
    });

    const data = await response.json()
    console.log(data)

    return {
        props: {data, accessToken},
    };
}

export default Profile

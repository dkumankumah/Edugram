import {
    Text,
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Icon,
    Image,
    Divider,
    SimpleGrid,
    useRadio,
    useRadioGroup,
    VStack,
    HStack,
    Tag,
    TagLabel,
    TagCloseButton,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Textarea,
    Alert,
    useBoolean,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Select,
    DrawerFooter,
    Button,
    Stack,
    useDisclosure,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper, NumberDecrementStepper, InputLeftAddon, InputGroup
} from "@chakra-ui/react";
import ProfileNavigation from "../components/shared/ProfileNavigation/ProfileNavigation";
import {AddIcon, CheckCircleIcon, CloseIcon, EditIcon, PlusSquareIcon} from "@chakra-ui/icons";
import React, {useEffect, useState} from "react";
import {TutorModel} from "../models/TutorModel";
import {Course} from "../models/CourseModel";
import {decodeJWT, getToken, isAuthenticated, isTutor} from "./api/api.storage";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import { SubmitButton } from "../components/shared/Buttons";


interface PageProps {
    accessToken: string,
    tutorData: TutorModel,
}

export default function courses ({tutorData, accessToken}: PageProps) {
    const [tutor, setTutor] = useState(tutorData as TutorModel)
    const router = useRouter()
    const [isEditing, setIsEditing] = useState(false)
    const [subject, setSubject] = useState({} as Course)
    const [value, setValue] = useState(subject.subject);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleChangeEvent = (event:any) => {
        setValue(event.target.value);
    };

    const options = tutor.course?.map(course => {
        return course.subject
    })

    const handleEdit = () => {
        setValue("")
        setIsEditing(!isEditing)
    }

    const handleSubmit = () => {
        setIsEditing(!isEditing)
        if (typeof value === "string") {
            subject.courseDescription = value;
        }
        setSubject(subject)
        setValue("")
        console.log(tutor.course)
    }

    const handleClick = (value: String) => {
        tutor.course?.map((course)=>{
            if(course.subject === value) {
                setSubject(course)
            }
        })
    }

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'subject',
        onChange: handleClick,
    })
    const group = getRootProps()

    // useEffect(() => {
    //     isAuthenticated() && isTutor(accessToken) ? getTutor(decodeJWT().id) : router.push('/')
    // }, [])

    return (
        <>
            <Box>
                <ProfileNavigation/>
                <Box p={5} display={{ lg: 'flex' }}>
                    <Box
                        flex={1}
                        mr={3}>
                        <Card
                            // border='2px'
                            cursor='pointer'
                            bg="blueGreen"
                            // bg="yellow"
                            onClick={onOpen}
                            mb={2}
                            borderRadius={10}>
                            <CardBody
                                pt={8}
                                pb={8}>
                                <Flex flexDirection="row" justifyContent={"space-between"} gap='4' alignItems='center' flexWrap='wrap'>
                                    <Box
                                        flex={2}>
                                        <Text
                                            color='white'
                                            fontWeight='bold'
                                            as = "h2">
                                            Add a new subject
                                        </Text>
                                    </Box>
                                    <Box
                                    >
                                        <Icon
                                            as={AddIcon}
                                            boxSize={6}
                                            color='white'
                                        />
                                    </Box>


                                </Flex>

                            </CardBody>
                        </Card>
                        <VStack {...group}
                        align="left">
                            {options?.map((value) => {
                                const radio = getRadioProps({ value })
                                return (
                                    <RadioCard key={value} {...radio}>
                                        {value}
                                    </RadioCard>
                                )
                            })}
                        </VStack>

                    </Box>
                    <Box flex={5}
                         mr={3}>
                        <Card
                            mb={5}
                            borderRadius={20} >
                            <CardHeader>
                                <Flex
                                    flex='1'
                                    flexDirection="row"
                                    justifyContent={"space-between"}
                                    gap='4'
                                    flexWrap='wrap'>
                                    <Text
                                        color='blueGreen'
                                        mt={3}
                                        fontSize={'larger'}
                                        fontWeight='bold'>
                                        Subjects you tutor
                                    </Text>
                                    <Icon
                                     as={PlusSquareIcon}
                                     alignSelf="center"
                                     color='blueGreen'
                                     boxSize={6}/>
                                </Flex>
                                <Divider
                                    mt={3}
                                />
                            </CardHeader>
                            <CardBody>
                                <HStack spacing={4}>
                                    {subject.subject}
                                    <Tag
                                        size={'lg'}
                                        key={'lg'}
                                        borderRadius='full'
                                        variant='solid'
                                        bg='blueGreen'
                                    >
                                        <TagLabel>Green</TagLabel>
                                        <TagCloseButton />
                                    </Tag>
                                </HStack>
                            </CardBody>
                        </Card>
                        <Card
                            mb={5}
                            borderRadius={20} >
                            <CardHeader>
                                <Flex
                                    flex='1'
                                    flexDirection="row"
                                    justifyContent={"space-between"}
                                    gap='4'
                                    flexWrap='wrap'>
                                    <Text
                                        color='blueGreen'
                                        mt={3}
                                        fontSize={'larger'}
                                        fontWeight='bold'>
                                        Short Add Description
                                    </Text>
                                    <Icon
                                        as={EditIcon}
                                        alignSelf="center"
                                        color='blueGreen'
                                        boxSize={6}
                                        cursor='pointer'
                                        onClick={handleEdit}/>
                                </Flex>
                                <Divider
                                    mt={3}
                                />
                            </CardHeader>
                            <CardBody>
                                <Text
                                    fontSize={'sm'}>
                                    {subject.courseDescription}
                                </Text>
                                <Box
                                    display={isEditing ? 'block' : 'none'}>
                                    <FormControl
                                        pt={2}>
                                        <Textarea
                                            fontSize={'sm'}
                                            value={value}
                                            onChange={handleChangeEvent}
                                        />
                                        <FormHelperText>Keep it brief but catching for a higher clickrate.</FormHelperText>
                                    </FormControl>
                                    <Flex justifyContent={'end'}>
                                        <SubmitButton
                                            label={'save-description'}
                                            onClick={handleSubmit}>
                                            Save Changes
                                        </SubmitButton>
                                    </Flex>
                                </Box>
                            </CardBody>
                        </Card>
                        <Card
                            borderRadius={20} >
                            <CardHeader>
                                <Flex
                                    flex='1'
                                    flexDirection="row"
                                    justifyContent={"space-between"}
                                    gap='4'
                                    flexWrap='wrap'>
                                    <Text
                                        color='blueGreen'
                                        mt={3}
                                        fontSize={'larger'}
                                        fontWeight='bold'>
                                        Location
                                    </Text>
                                    <Icon
                                        as={PlusSquareIcon}
                                        alignSelf="center"
                                        color='blueGreen'
                                        boxSize={6}/>
                                </Flex>
                                <Divider
                                    mt={3}
                                />
                            </CardHeader>
                            <CardBody>
                                <HStack spacing={4}>
                                    <Tag
                                        size={'lg'}
                                        variant='outline'
                                        borderColor='blue'
                                    >
                                        <TagLabel>Webcam</TagLabel>
                                        <TagCloseButton />
                                    </Tag>
                                </HStack>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box flex={1.3}>
                        <Card borderRadius={20} >
                            <CardHeader>
                                <Image
                                    // borderRadius='full'
                                    // boxSize='250px'
                                    src="images/placeholderImage.png"
                                    alt="Placeholder for image of Identity"
                                    fallbackSrc='https://via.placeholder.com/150'
                                />
                                <Text
                                    mt={3}
                                    textAlign='center'
                                    fontSize={'larger'}
                                    fontWeight='bold'>
                                    {tutor.firstName} {tutor.lastName}
                                </Text>
                                <Text
                                    textAlign='center'
                                    fontSize={'large'}
                                    fontWeight='bold'
                                    color='grey'>
                                    {tutor.address?.city}
                                </Text>
                                <Divider
                                    mt={3}
                                />
                            </CardHeader>
                            <CardBody>
                                <SimpleGrid columns={2} spacing={12}>
                                    <Text
                                        fontSize={'medium'}
                                        fontWeight='bold'>
                                        Hourly Rate
                                    </Text>
                                    <Text
                                        fontSize={'large'}
                                        fontWeight='bold'>
                                        €{subject.fee}
                                    </Text>
                                </SimpleGrid>

                            </CardBody>
                        </Card>
                    </Box>
                </Box>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='left'
                size={'md'}
                // initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader
                        borderBottomWidth='1px'
                        color='blueGreen'
                        fontSize={'md'}
                    >
                        Adding new course to profile
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Box>
                                <FormLabel
                                    fontSize={'sm'}
                                    htmlFor='subject'
                                    color='blueGreen'>
                                    Select Subject</FormLabel>
                                <Select id='subject' defaultValue='segun' fontSize={'sm'}
                                >
                                    <option value='segun'>Segun Adebayo</option>
                                    <option value='kola'>Kola Tioluwani</option>
                                </Select>
                            </Box>
                            <Box>
                                <FormLabel
                                    fontSize={'sm'}
                                    color='blueGreen'
                                    htmlFor='desc'>Description</FormLabel>
                                <Textarea id='desc'
                                          fontSize={'sm'}
                                />
                            </Box>
                            <Box>

                                <FormLabel
                                    fontSize={'sm'}
                                    color='blueGreen'
                                    htmlFor='rate'>Hourly Rate</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon fontSize={'sm'}>€</InputLeftAddon>
                                    <NumberInput defaultValue={20} min={10} max={99} fontSize={'xs'}>
                                        <NumberInputField fontSize={'sm'}/>
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </InputGroup>
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <SubmitButton
                            label={'add-course'}
                        >Add Course</SubmitButton>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
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

    const tutorData = await response.json()
    console.log(tutorData)

    return {
        props: {tutorData, accessToken},
    };
}

export function RadioCard(props: any) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Card
            as='label'
            {...checkbox}
            _hover={{
                bg: 'blue',
                color: 'white',
                borderColor: 'teal.600',
            }}
            _checked={{ bg: 'yellow',
                color: 'white',
            }}
            border='2px'
            cursor='pointer'
            borderColor="yellow"
            mb={2}
            borderRadius={10}>
            <CardBody
            >
                <input {...input} />
                <Text
                    fontWeight='bold'
                    as = "h2">
                    {props.children}
                </Text>
            </CardBody>
        </Card>
    )
}

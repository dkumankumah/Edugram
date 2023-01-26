/**
 * @author Bugra Karaaslan, 500830631, This is a register form.
 */
import {
    Flex,
    Text,
    FormErrorMessage,
    FormControl,
    Alert,
    AlertTitle,
    AlertDescription,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";

// component imports
import {InputField} from "../components/shared/InputField/InputField";
import {SubmitButton} from "../components/shared/Buttons/SubmitButton";
import {GoogleBtn} from "../components/shared/GoogleBtn";
import {PasswordInput} from "../components/shared/PasswordInput";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

export function RegisterFormTutor() {
    const [role, setRole] = useState("student");
    const [tutorClicked, setTutorClicked] = useState(false);
    const [studentClicked, setStudentClicked] = useState(true);
    const [validFirstName, setvalidFirstName] = useState(false);
    const [validLastName, setvalidLastName] = useState(false);
    const [validEmail, setvalidEmail] = useState(false);
    const [ValidPassword, setvalidPassword] = useState(false);
    const [message, setMessage] = useState("")
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: role,
    });
    const router = useRouter();
    let numberOfError = 0;
    const [errors, setErrors] = useState<any[]>([]);

    const createTutor = async (event: React.FormEvent) => {
        event.preventDefault();
        let tutor = user;
        console.log(tutor);

        if (tutor.firstName === "") {
            setvalidFirstName(true);
            setToastForEmptyField('Firstname')
            numberOfError++
        }
        if (tutor.lastName === "") {
            setvalidLastName(true);
            setToastForEmptyField('Lastname')
            numberOfError++
        }
        if (tutor.email === "") {
            setvalidEmail(true);
            setToastForEmptyField('Email')
            numberOfError++
        }
        if (tutor.password === "") {
            setvalidPassword(true);
            setToastForEmptyField('Password')
            numberOfError++
        }
        console.log(numberOfError)
        if (numberOfError == 0) {

            try {
                axios.post("http://localhost:8000/tutor", tutor).then((res) => {
                    console.log(res)
                    console.log("tutor created");
                }).catch((error) => {
                    if (error.response) {
                        console.log("er is een errrr: " + JSON.stringify(error.response))
                        console.log(error.response)
                        setErrors(error.response)
                        JSON.stringify(error.response.data.map((data: any) => {
                            setMessage(data.msg)
                            toast({
                                title: 'Warning',
                                description: data.msg,
                                status: 'warning',
                                duration: 49000,
                                isClosable: true,
                            })
                        }))

                    }
                });

            } catch (error) {
                console.log("error");
            }
        }
    };

    const setToastForEmptyField = (field: string) => {
        toast({
            title: 'Warning',
            description: field + ' must not be empty!',
            status: 'warning',
            duration: 5000,
            isClosable: true,
        })
    }

    /**
     *
     * @param event
     */
    const createStudent = async (event: React.FormEvent) => {
        event.preventDefault();
        let student = user;

        if (student.firstName === "") {
            setvalidFirstName(true);
            setToastForEmptyField('Firstname')
            numberOfError++
        }
        if (student.lastName === "") {
            setvalidLastName(true);
            setToastForEmptyField('Lastname')
            numberOfError++
        }
        if (student.email === "") {
            setvalidEmail(true);
            setToastForEmptyField('Email')
            numberOfError++
        }
        if (student.password === "") {
            setvalidPassword(true);
            setToastForEmptyField('Password')
            numberOfError++
        }

        if (numberOfError == 0) {
            try {
                axios.post("http://localhost:8000/student", student).then((res) => {
                    console.log(res)
                    console.log("Student created");
                }).catch(async (error) => {
                    if (error.response) {
                        await error.response
                        console.log("er is een errrr: " + JSON.stringify(error.response.data))
                        console.log(error.response)
                        setErrors(error.response)
                        JSON.stringify(error.response.data.map((data: any) => {
                            setMessage(data.msg)
                            toast({
                                title: 'Warning',
                                description: data.msg,
                                status: 'warning',
                                duration: 49000,
                                isClosable: true,
                            })
                        }))

                    }
                });
            } catch (error) {
                console.log("error");
            }
        }

    };

    const getTutorForm = () => {
        setTutorClicked(true);
        setStudentClicked(false);
        setRole("tutor");
    };

    const getStudentForm = () => {
        setTutorClicked(false);
        setStudentClicked(true);
        setRole("student");
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setUser((prevInput) => {
            return {
                ...prevInput,
                [name]: value.trim(),
            };
        });
    };
    const toast = useToast()

    return (

        <Flex flexDir="column" pb={{base: 8, lg: 0}}>
            <Flex
                minW={{sm: "330px", lg: "500px"}}
                height="750px"
                bg="blue"
                borderRadius={20}
                alignItems="center"
                flexDir="column"
                ml={{sm: "0px", md: "40px"}}
            >

                <Flex bg="yellow" minW="230px" minH="45px" borderRadius={20} mt={10}>
                    <Flex
                        bg={studentClicked ? "transparant" : "lightblue"}
                        minW="115px"
                        onClick={getStudentForm}
                        borderRadius={20}
                        justifyContent="center"
                        alignItems="center"
                        cursor="pointer"
                        fontWeight="600"
                        transition={"bg"}
                    >
                        Student
                    </Flex>
                    <Flex
                        bg={tutorClicked ? "transparant" : "lightblue"}
                        minW="115px"
                        onClick={getTutorForm}
                        borderRadius={20}
                        justifyContent="center"
                        alignItems="center"
                        cursor="pointer"
                        fontWeight="600"
                    >
                        Tutor
                    </Flex>
                </Flex>

                <Text color="eduWhite" mt={10} as="h1" fontSize={{sm: "md", lg: "lg"}}>
                    Create your {role} account
                </Text>

                <InputField
                    label="first name"
                    mt={10}
                    isRequired
                    name="firstName"
                    onChange={handleChange}
                    value={user.firstName}
                    placeholder="First name"
                    id="firstName"
                    isInvalid={validFirstName}
                />

                <InputField
                    label="last name"
                    isRequired
                    mt={9}
                    name="lastName"
                    onChange={handleChange}
                    value={user.lastName}
                    placeholder="Last name"
                    id="lastName"
                    isInvalid={validLastName}
                />

                <InputField
                    label="email"
                    isRequired
                    mt={8}
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                    type="email"
                    placeholder="Email"
                    id="email"
                    aria-describedby="email-helper-text"
                    isInvalid={validEmail}
                />
                {!validEmail ? (
                    <FormErrorMessage id="email-helper-text">
                        last name is required
                    </FormErrorMessage>
                ) : null}

                <PasswordInput
                    isRequired
                    label="password"
                    mt={8}
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                    placeholder="Password"
                    id="password"
                    isInvalid={ValidPassword}
                />

                <SubmitButton
                    label="create account"
                    mt={12}
                    id="submitButton"
                    mb={4}
                    onClick={tutorClicked ? createTutor : createStudent}
                >
                    Create
                </SubmitButton>
                <Text fontWeight="bold" color="eduWhite">
                    OR
                </Text>
                <GoogleBtn
                    label="Sign up with your Google account"
                    data-cy="googleBtn"
                    mt={8}
                >
                    Sign up with Google
                </GoogleBtn>
            </Flex>
        </Flex>

    );
}

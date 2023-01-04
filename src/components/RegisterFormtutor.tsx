/**
 * @author Bugra Karaaslan, 500830631, This is a register form.
 */
import { Flex, Text, FormErrorMessage, FormControl, Alert } from "@chakra-ui/react";
import axios from 'axios';

// component imports
import { InputField } from "../components/shared/InputField/InputField";
import { SubmitButton } from "../components/shared/Buttons/SubmitButton";
import { GoogleBtn } from "../components/shared/GoogleBtn";
import { PasswordInput } from "../components/shared/PasswordInput";
import React, { useState } from "react";
import { useRouter } from "next/router";

interface ComponentProps {
  errors?: Array<{msg: string}>
}

export function RegisterFormTutor({errors}: ComponentProps) {
  const [role, setRole] = useState("student");
  const [tutorClicked, setTutorClicked] = useState(false);
  const [studentClicked, setStudentClicked] = useState(true);
  const [validFirstName, setvalidFirstName] = useState(false);
  const [validLastName, setvalidLastName] = useState(false);
  const [validEmail, setvalidEmail] = useState(false);
  const [ValidPassword, setvalidPassword] = useState(false);
  const [tutor, setTutor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: role,
  });
  const router = useRouter();
  
  // const [errors, setErrors] = useState(null)

  const createTutor = async (event: React.FormEvent) => {
    event.preventDefault();
    let newTutor = tutor;
    console.log(newTutor);

    if (tutor.firstName === "") {
      setvalidFirstName(true);
    }
    if (tutor.lastName === "") {
      setvalidLastName(true);
    }
    if (tutor.email === "") {
      setvalidEmail(true);
    }
    if (tutor.password === "") {
      setvalidPassword(true);
    }
    axios.post("http://localhost:8000/tutor", newTutor)
    // router.push("http://localhost:3000/overview")

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
    const { name, value } = event.target;

    setTutor((prevInput) => {
      return {
        ...prevInput,
        [name]: value.trim(),
      };
    });
  };

  return (
    <>
    {errors?.map((error) => (
      <Alert status="error" key={error.msg}>
        {error.msg}
      </Alert>
    ))}
    <Flex
      minW={{ sm: "330px", lg: "500px" }}
      height="750px"
      bg="blue"
      borderRadius={20}
      alignItems="center"
      flexDir="column"
      ml={{ sm: "0px", md: "40px" }}
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
      <Text color="eduWhite" mt={10} as="h1" fontSize={{ sm: "md", lg: "lg" }}>
        Create your {role} account
      </Text>

 
        <InputField
          label="first name"
          mt={10}
          isRequired
          name="firstName"
          onChange={handleChange}
          value={tutor.firstName}
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
        value={tutor.lastName}
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
        value={tutor.email}
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
        value={tutor.password}
        placeholder="Password"
        id="password"
        isInvalid={ValidPassword}
      />

      <SubmitButton
        label="create account"
        mt={12}
        id="submitButton"
        mb={4}
        onClick={createTutor}
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
    </>
  );
  
}

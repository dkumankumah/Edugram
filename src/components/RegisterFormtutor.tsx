/**
 * @author Bugra Karaaslan, 500830631, This is a register form.
 */
import { Flex, Text } from "@chakra-ui/react";
import axios from "axios";

// component imports
import { InputField } from "../components/shared/InputField/InputField";
import { SubmitButton } from "../components/shared/Buttons/SubmitButton";
import { GoogleBtn } from "../components/shared/GoogleBtn";
import { PasswordInput } from "../components/shared/PasswordInput";
import React, { useState } from "react";

export function RegisterFormTutor() {

  const [tutor, setTutor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: 'tutor'
  });

  const createTutor = async (event: React.FormEvent) => {
    event.preventDefault();
    let newTutor = tutor;
    axios.post("http://localhost:8000/tutor", newTutor);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTutor((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  return (
      <Flex
          minW={{ sm: "330px", lg: "430px" }}
          maxW="430px"
          height="670px"
          bg="blue"
          borderRadius={20}
          alignItems="center"
          flexDir="column"
          ml={{ sm: "0px", md: "40px" }}
      >
        <Text color="eduWhite" mt={6} as="h1" fontSize={{ sm: "md", lg: "lg" }}>
          Create your account
        </Text>
        <InputField
            label="first name"
            mt={10}
            name="firstName"
            onChange={handleChange}
            value={tutor.firstName}
            placeholder="First name"
            id="firstName"
        />
        <InputField
            label="last name"
            mt={9}
            name="lastName"
            onChange={handleChange}
            value={tutor.lastName}
            placeholder="Last name"
            id="lastName"
        />
        <InputField
            label="email"
            mt={8}
            name="email"
            onChange={handleChange}
            value={tutor.email}
            type="email"
            placeholder="Email"
            id="email"
        />
        <PasswordInput
            label="password"
            mt={8}
            name="password"
            onChange={handleChange}
            value={tutor.password}
            placeholder="Password"
            id="password"
        />
        <SubmitButton label="create account" mt={12} id='submitButton' mb={4} onClick={createTutor}>
          Create
        </SubmitButton>
        <Text fontWeight="bold" color="eduWhite">
          OR
        </Text>
        <GoogleBtn label="Sign up with your Google account" data-cy='googleBtn' mt={8}>Sign up with Google</GoogleBtn>
      </Flex>
  );
}

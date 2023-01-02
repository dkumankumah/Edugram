/**
 * @author Bugra Karaaslan, 500830631, This is the tutorCard component.
 * On this page you can get detailed information about a tutor you are interested in.
 */
import {
  Flex,
  Text,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Box,
} from "@chakra-ui/react";
import * as icon from "react-icons/ai";
import { IconContext } from "react-icons";
import Image from "next/image";
import { TutorModel } from "../../models/TutorModel";
import Router, { useRouter } from "next/router";

// components
import { SubmitButton } from "../shared/Buttons";
import { useEffect, useState } from "react";
import { colors } from "../../theme/colors";


interface ComponentProps {
  tutor: TutorModel,
}

export function TutorCard({ tutor }: ComponentProps) {
  const lessons = ["English", "Maths", "Programming", "French", "Photoshop"];
  const [isVerified, setVerified] = useState(false);

  const router = useRouter()
  const { query : { subject }, } = router


  useEffect (() => {
    setVerified(tutor.verified!)
  }, [tutor.verified])

  return (
    <Flex
      bg="lightBlue"
      borderRadius={20}
      minW={{base: "350px" ,lg: "450px"}}
      justify="flex-start"
      flexDir="column"
      align="center"
      p="25px 0px"
      maxH={770}
    >
      <Box>
        <Image
          src="/images/default-profile-image.png"
          alt="Profile image"
          width={220}
          height={195}
          quality={100}
          style={{ borderRadius: "30px", marginTop: "50px", width: "220px", height: "195px" }}
        />
        <IconContext.Provider
          value={{
            style: {
              color: `${colors.blueGreen}`,
              top: "-5%",
              left: "80%",
              zIndex: 2,
              marginTop: "-20px",
              position: "relative",
              display: isVerified ? "block" : "none"
            },
          }}
        >
          <icon.AiFillCheckCircle size={40} />
        </IconContext.Provider>
      </Box>

      <Text as="h2" mt={2} fontWeight={600}>
        {tutor.firstName}
      </Text>

      <Flex flexDir="row" align="center">
        <IconContext.Provider value={{ style: { color: "yellow" } }}>
          <icon.AiFillStar />
          <Text ml={1} textDecoration="underline">
            4 (2 reviews)
          </Text>
        </IconContext.Provider>
      </Flex>

      <Flex mt={6} w={{base: 300,lg: 400}} h={{base: 250, lg:150}} flexFlow="wrap">
        {lessons.map((lesson, index) => {
          return (
            <Flex
              key={index}
              maxW={140}
              maxH="40px"
              justify="center"
              borderRadius={20}
              color="white"
              p={4}
              alignItems="center"
              bg="blueGreen"
              m={2}
            >
              {lesson}
            </Flex>
          );
        })}
      </Flex>

      <TableContainer>
        <Table variant="unstyled">
          <Tbody>
            <Tr>
              <Td>Hourly rate:</Td>
              {
                tutor.course?.map((course, index) => {
                  if (course.subject == subject)
                  return (
                    <Td key={index} isNumeric>${course.fee}</Td>
                  )
                })
              }
            </Tr>
            <Tr>
              <Td>Response time:</Td>
              <Td isNumeric>24h</Td>
            </Tr>
            <Tr>
              <Td>Number of students:</Td>
              <Td isNumeric>8</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <SubmitButton mt={6} label="book a lesson">
        Book a lesson
      </SubmitButton>
    </Flex>
  );
}

export default TutorCard;

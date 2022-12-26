/**
 * @author Bugra Karaaslan, 500830631, This is the tutorCard component.
 * On this page you can get detailed information about a tutor you are interested in.
 */
import { Flex, Text, TableContainer, Table, Tr, Td } from "@chakra-ui/react";
import * as icon from "react-icons/ai";
import { IconContext } from "react-icons";
import Image from "next/image";

// components
import { SubmitButton } from "../shared/Buttons";

interface ComponentProps {
  firstName: string;
  reviews: string[];
  tags: string[];
  hourlyRate: number;
  responseTime: number;
  numberOfstudents: number;
}

export function TutorCard() {
  const lessons = ["English", "Maths", "Programming", "French", "Photoshop"];

  return (
    <Flex
      bg="lightBlue"
      borderRadius={20}
      h="770px"
      minW="450px"
      justify="flex-start"
      flexDir="column"
      align="center"
    >
      <Image
        src="/images/default-profile-image.png"
        alt="Profile image"
        width={220}
        height={195}
        style={{borderRadius: "30px", marginTop: "50px"}}
      />
      <Text as="h2" mt={2} fontWeight={600}>
        Isabella
      </Text>

      <Flex flexDir="row" align="center">
        <IconContext.Provider value={{ style: { color: "yellow" } }}>
          <icon.AiFillStar />
          <Text ml={1} textDecoration="underline">
            4 (2 reviews)
          </Text>
        </IconContext.Provider>
      </Flex>

      <Flex mt={6} minW={400} maxW={400} h={150} flexFlow="wrap">
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
          <Tr>
            <Td>Hourly rate:</Td>
            <Td isNumeric>$25</Td>
          </Tr>
          <Tr>
            <Td>Response time:</Td>
            <Td isNumeric>24h</Td>
          </Tr>
          <Tr>
            <Td>Number of students:</Td>
            <Td isNumeric>8</Td>
          </Tr>
        </Table>
      </TableContainer>

      <SubmitButton mt={6} label="book a lesson">
        Book a lesson
      </SubmitButton>
    </Flex>
  );
}

export default TutorCard;

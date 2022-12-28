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

// components
import { SubmitButton } from "../shared/Buttons";
import { useState } from "react";
import { colors } from "../../theme/colors";


interface ComponentProps {
  tutor: TutorModel
}

export function TutorCard({ tutor }: ComponentProps) {
  const lessons = ["English", "Maths", "Programming", "French", "Photoshop"];
  const [isVerified, setVerified] = useState(true);

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
      <Box>
        <Image
          src="/images/default-profile-image.png"
          alt="Profile image"
          width={220}
          height={195}
          quality={100}
          style={{ borderRadius: "30px", marginTop: "50px" }}
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
          <Tbody>
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

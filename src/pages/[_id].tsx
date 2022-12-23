/**
 * @author Bugra Karaaslan, 500830631, This is the tutor information page.
 * On this page you can get detailed information about a tutor you are interested in.
 */
import { Flex, Text, Container } from "@chakra-ui/react";
import * as icon from "react-icons/ai";
import * as iconHi from "react-icons/hi";
import { IconContext } from "react-icons";
import {colors} from "../theme/colors"

// component imports
import TutorCard from "../components/tutorCard/tutorCard";

interface Pageprops {}

const TutorInfo = () => {
  return (
    <Container
      maxW="8xl"
      display="flex"
      border="1px solid blue"
      p={0}
      // h="100vh"
      flexDir={{base: "column-reverse", lg: "row"}}
    >
      <Flex
        w="100%"
        h="100%"
        border="1px solid blue"
        flexDir="column"
        mt="100px"
        p={2}
      >
        <Text as="h1">
          Lerares Engels met 7 jaar ervaring in het lesgeven aan tieners en
          volwassenen, biedt lessen en hulp bij huiswerk. Ik werk op een
          tweetalige en op een internationale school.
        </Text>
        <Flex flexDir="column" mt={8}>
          <Text fontWeight={600} mb={2}>
            Lesson location
          </Text>

          <Flex>
            <Flex
              minH="35px"
              minW="200px"
              alignItems="center"
              justifyContent="center"
              borderRadius={20}
              color="white"
              bg="blueGreen"
              mr={4}
            >
              <IconContext.Provider
                value={{
                  style: { marginRight: "0.5rem" },
                  className: "global-class-name",
                }}
              >
                <icon.AiOutlineCamera />
              </IconContext.Provider>
              Online via Webcam
            </Flex>

            <Flex
              minH="35px"
              minW="200px"
              alignItems="center"
              justifyContent="center"
              borderRadius={20}
              color="white"
              bg="blueGreen"
              mr={4}
            >
              <IconContext.Provider
                value={{
                  style: { marginRight: "0.5rem" },
                  className: "global-class-name",
                }}
              >
                <icon.AiFillHome />
              </IconContext.Provider>
              At your home
            </Flex>

            <Flex
              minH="35px"
              minW="200px"
              alignItems="center"
              justifyContent="center"
              borderRadius={20}
              color="white"
              bg="blueGreen"
            >
              <IconContext.Provider
                value={{
                  style: { marginRight: "0.5rem" },
                  className: "global-class-name",
                }}
              >
                <iconHi.HiLibrary />
              </IconContext.Provider>
              Library
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDir="column" mt={6}>
          <Text>About Isabella</Text>
          <Text mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </Text>
        </Flex>

        <Flex mt={6} flexDir="column">
          <Text mb={2} fontWeight={600}>Recommendations</Text>
          
          <Flex flexDir="column" borderRadius={20} bg="eduWhite" mb={4} p={2} border={`1px solid ${colors.blueGreen}`}>
            <Text fontWeight={550} mb={2}>James</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip.
            </Text>
          </Flex>

          <Flex flexDir="column" borderRadius={20} bg="eduWhite" p={2} border={`1px solid ${colors.blueGreen}`}>
            <Text fontWeight={550} mb={2}>James</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip.
            </Text>
          </Flex>
        
        </Flex>
      </Flex>

      <Flex w="100%" justify="center" h="100%" mt="100px" border="1px solid red">
        <TutorCard/>
      </Flex>
    </Container>
  );
};

export default TutorInfo;

/**
 * @author Bugra Karaaslan, 500830631, This is the tutor information page.
 * On this page an user could get detailed information about a tutor where he or she is interested in.
 */
import { Flex, Text, Container } from "@chakra-ui/react";
import * as icon from "react-icons/ai";
import * as iconHi from "react-icons/hi";
import { IconContext } from "react-icons";
import {colors} from "../../theme/colors"

// component imports
import TutorCard from "../../components/tutorCard/tutorCard";
import axios from "axios";
import { GetStaticPaths } from "next";
import { Context } from "react";
import { TutorModel } from "../../models/TutorModel";

interface Pageprops {
  tutor: TutorModel
}

const TutorInfo = ({tutor}: Pageprops) => {
  return (
    <Container
      maxW="8xl"
      display="flex"
      p={0}
      flexDir={{base: "column-reverse", lg: "row"}}
    >
      <Flex
        w="100%"
        h="100%"
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

          <Flex flexFlow={{base: "wrap"}} align="center" justify="space-between" minH={{base: 150, lg:0}}>
            <Flex
              h="35px"
              w="200px"
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
              h="35px"
              w="200px"
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
              h="35px"
              w="200px"
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
          <Text>About {tutor.firstName}</Text>
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

      <Flex w="100%" justify="center" h="100%" mt="100px">
        <TutorCard tutor={tutor} />
      </Flex>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const tutorResult = await fetch('http://localhost:8000/tutor').catch(error => {
    console.log(error);
    throw new Error('Something went wrong, when fetching data');
  })

  const data = await tutorResult.json()
  console.log('data: ' + data)

  const paths = data.map((tutor: any) => {
    return {
      params: { id: tutor._id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const res = await fetch(`http://localhost:8000/tutor/`+id)
  const data = await res.json()

  return {
    props: { tutor: data }
  }
}

export default TutorInfo;

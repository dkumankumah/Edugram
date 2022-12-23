/**
 * @author Bugra Karaaslan, 500830631, This is the tutorCard component.
 * On this page you can get detailed information about a tutor you are interested in.
 */
import { Flex, Text } from "@chakra-ui/react";
import * as icon from "react-icons/ai"
import { IconContext } from "react-icons";

export function TutorCard () {
    return (
        <Flex bg="blue" borderRadius={20} h="770px" minW="450px" justify="center" flexDir="column" align="center">
            <Flex bg="eduWhite" w="220px" h="195px" borderRadius={30}>

            </Flex>
            <Text mt={2} fontWeight={600}>Isabella</Text>
            <IconContext.Provider value={{ style: { color: "yellow", display: "flex", flexDirection: "row" }}}>
                <icon.AiFillStar/>
                <Text>4</Text>
            </IconContext.Provider>
        </Flex>
    )
}

export default TutorCard

/**
 * @author Bugra Karaaslan, 500830631, This is an inputfield component.
 */

import {
  BoxProps,
  Box,
  Flex,
  FlexProps,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

interface ComponentProps extends FlexProps {}

export function Navbar({ ...props }: ComponentProps) {
  return (
    <Flex bg="blueGreen" h="70">
      <Grid w="100%" templateColumns="20% 70% 10%">
        <GridItem w="100%" >
          <Flex justify="center" mt={3}>
            <Image
              maxW="200px"
              src="/images/edugram-logo.png"
              alt="logo of Edugram"
            />
          </Flex>
        </GridItem>
        <GridItem w="100%" border="1px solid blue">
          test
        </GridItem>
        <GridItem w="100%" border="1px solid red">
          test
        </GridItem>
      </Grid>
    </Flex>
  );
}

/**
 * @author Bugra Karaaslan, 500830631, This is an inputfield component.
 */
import { Flex, FlexProps, Grid, GridItem, Image } from "@chakra-ui/react";

// component imports
import { SearchField } from "../SearchField";

interface ComponentProps extends FlexProps {}

export function Navbar({ ...props }: ComponentProps) {
  return (
    <Flex bg="blueGreen" h="65px">
      <Grid w="100%" templateColumns={{sm: "80% 20%" ,smx: "20% 70% 10%"}}>
        <GridItem w="100%" display={{sm: "none", smx: "block"}}>
          <Flex justify="center" mt={4}>
            <Image
            ml={{sm:'50px', md: "0px"}}
              maxW={{sm: "120px" ,md: "150px"}}
              src="/images/edugram-logo.png"
              alt="logo of Edugram"
            />
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex justify={{sm: "center",md: "flex-end"}} mt={2}>
            <SearchField label="SearchField, What do you want to learn?" placeholder="What do you want to learn?" />
          </Flex>
        </GridItem>
        <GridItem w="100%" border="1px solid red">
          test
        </GridItem>
      </Grid>
    </Flex>
  );
}

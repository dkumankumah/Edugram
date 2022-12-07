/**
 * @author Bugra Karaaslan, 500830631, This is an inputfield component.
 */
import { Flex, FlexProps, Grid, GridItem, Image } from "@chakra-ui/react";
import Link from "next/link";

// component imports
import { SearchField } from "../SearchField";
import { ProfileBtn } from "../../ProfileBtn";

interface ComponentProps extends FlexProps {}

export function Navbar({ ...props }: ComponentProps) {
  return (
    <Flex bg="blueGreen" h="65px">
      <Grid w="100%" templateColumns={{ sm: "80% 20%", smx: "20% 70% 10%" }}>
        <GridItem w="100%" display={{ sm: "none", smx: "block" }}>
          <Flex justify="center" mt={4}>
            <Link href="/">
              <Image
                ml={{ sm: "50px", md: "0px" }}
                maxW={{ sm: "120px", md: "150px" }}
                src="/images/edugram-logo.png"
                alt="logo of Edugram"
              />
            </Link>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex justify={{ sm: "center", md: "flex-end" }} mt={2}>
            <SearchField
              label="SearchField, What do you want to learn?"
              placeholder="What do you want to learn?"
            />
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex justify="center" mt={2}>
            <ProfileBtn name="Bugra Karaaslan" label="profile button" />
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}

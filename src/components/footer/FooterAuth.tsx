/* eslint-disable */

import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import linkin from "../../assets/img/linkedin.png";
import insta from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";

export default function Footer() {
  let textColor = useColorModeValue("gray.400", "white");
  let linkColor = useColorModeValue({ base: "gray.400", lg: "white" }, "white");
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "0px" }}
      pb="30px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", lg: "0px" }}
      >
        {" "}
        &copy; {new Date().getFullYear()}
        <Text as="span" fontWeight="500" ms="6px">
          Shivinfotech . All Rights Reserved. Made with love by
          <Link
            mx="3px"
            color={textColor}
            href="https://shivinfotech.co/"
            target="_blank"
            fontWeight="700"
          >
            Aayush!
          </Link>
        </Text>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            fontWeight="500"
            color={textColor}
            href="https://www.linkedin.com/in/aayush-gamot-3a7638215/"
          >
            <img src={linkin} alt="" height={"30px"} width={"30px"} />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            fontWeight="500"
            color={textColor}
            href="https://www.facebook.com/"
          >
            <img src={facebook} alt="" height={"30px"} width={"30px"} />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            fontWeight="500"
            color={textColor}
            href="https://www.instagram.com/itzz_aayushhh_05/?next=%2F"
          >
            <img src={insta} alt="" height={"30px"} width={"30px"} />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            fontWeight="500"
            color={textColor}
            href="https://twitter.com/itzz_aayush_05"
          >
            <img src={twitter} alt="" height={"30px"} width={"30px"} />
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}

import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import shiv from "assets/img/layout/shiv.jpg";

export default function SidebarDocs() {
  const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  const borderColor = useColorModeValue("white", "navy.800");

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bg={bgColor}
      borderRadius="30px"
      me={{ base: "20px" }}
      position="relative"
    >
      <Flex
        border="5px solid"
        borderColor={borderColor}
        bg="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
        borderRadius="50%"
        w="94px"
        h="94px"
        align="center"
        justify="center"
        mx="auto"
        position="absolute"
        left="50%"
        top="-47px"
        transform="translate(-50%, 0%)"
      >
        <Image src={shiv} w="85px" h="85px" borderRadius="50%" />
      </Flex>
      <Flex
        direction="column"
        mb="12px"
        align="center"
        justify="center"
        px="15px"
        pt="55px"
      >
        <Text
          fontSize={{ base: "lg", xl: "18px" }}
          color="white"
          fontWeight="bold"
          lineHeight="150%"
          textAlign="center"
          px="10px"
          mb="14px"
        >
          Visit shivinfotech
        </Text>
        <Text
          fontSize="14px"
          color={"white"}
          px="10px"
          mb="14px"
          textAlign="center"
        >
          Improve your development skills and start doing more with
          Shivinfotech!
        </Text>
      </Flex>
      <Link href="https://shivinfotech.co/">
        <Button
          bg="whiteAlpha.300"
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.100" }}
          mb={{ sm: "16px", xl: "24px" }}
          color={"white"}
          fontWeight="regular"
          fontSize="sm"
          minW="185px"
          mx="auto"
        >
          Join Us Now!!
        </Button>
      </Link>
    </Flex>
  );
}

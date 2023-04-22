// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import logo from "../../../assets/img/online-library.png";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <img src={logo} alt="" width="100" height="20" />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;

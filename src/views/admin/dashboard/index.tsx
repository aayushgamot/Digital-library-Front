import { Box, SimpleGrid } from "@chakra-ui/react";
import logo from "../../../assets/img/Dashboard.jpg";
// Assets
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";

export default function UserReports() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid row={{ base: 1, md: 2, xl: 2 }} gap="20px">
        <img src={logo} alt="" height={"100%"} width={"1500px"} />

        <MiniCalendar h="100%" min="100%" selectRange={false} />
      </SimpleGrid>
    </Box>
  );
}

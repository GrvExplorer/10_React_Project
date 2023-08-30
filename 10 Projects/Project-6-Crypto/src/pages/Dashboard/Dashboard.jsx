import Sidenav from "../../components/Sidenav";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import TopBar from "../../components/TopBar";
import DashboardLay from "../../components/DashboardLay";

function Dashboard() {
  return (
    <div>
      <Box as="header">
        <Flex bg="#F3F3F7">
          <Sidenav />
          <Box flexGrow={1} display={"flex"} flexDir={"column"} gap="24px">
            <Box bg="white">
              <TopBar />
            </Box>
            <DashboardLay />
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default Dashboard;

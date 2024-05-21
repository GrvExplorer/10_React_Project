import { Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

function Layout() {
  return (
    <div className="relative flex w-full">
      <Navbar />
      <Box
        flexGrow={1}
        display={"flex"}
        flexDir={"column"}
        gap="24px"
        className="bg-Main hight_dash relative left-[200px] max-lg:left-[256px]"
      >
        <Box bg="white" className="shadow-sm">
          <TopBar />
        </Box>
        <Outlet />
      </Box>
    </div>
  );
}

export default Layout;

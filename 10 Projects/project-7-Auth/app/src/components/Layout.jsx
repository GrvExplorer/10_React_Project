import { Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../authContext/AuthContextProvider";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

function Layout() {
  const { token } = useAuthContext();
console.log(token);
  return (
    <div className="relative flex w-full">
      <Navbar />
      <Box
        flexGrow={1}
        display={"flex"}
        flexDir={"column"}
        gap="24px"
        className="hight_dash relative left-[200px] bg-Main max-lg:left-[256px]"
      >
        <Box bg="white" className="shadow-sm">
          <TopBar />
        </Box>
        {token ? <Outlet /> : <Navigate to="/auth/login" />}
      </Box>
    </div>
  );
}

export default Layout;

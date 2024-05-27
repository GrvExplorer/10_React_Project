import {
  Box,
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RxAvatar } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../authContext/AuthContextProvider";

function TopBar() {
  const { pathname } = useLocation();
  const { logout } = useAuthContext()

  return (
    <Box h="86px">
      <HStack
        maxW={"1024px"}
        mx={"auto"}
        px={[20, 20, 10, 10, 0]}
        justifyContent={"space-between"}
        h={"full"}
      >
        <Text
          fontSize={"28px"}
          letterSpacing={"1px"}
          fontWeight={"bold"}
          className="capitalize"
        >
          {pathname.split("/")}
          {pathname == "/" ? "Dashboard" : ""}
        </Text>
        <Menu>
          <MenuButton as={Button}>
            <Icon fontSize={"40px"} as={RxAvatar} />
          </MenuButton>
          <MenuList
            zIndex={"10"}
            bg="black"
            w="40"
            p="4px"
            maxW={"1024px"}
            mx="auto"
          >
            <MenuItem
              color="white"
              p="12px"
              _hover={{
                bg: "white",
                color: "black",
              }}
              onClick={() => logout()}
            >
              Logout
            </MenuItem>
            <MenuItem
              p="12px"
              color="white"
              _hover={{
                bg: "white",
                color: "black",
              }}
            >
              Support
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default TopBar;

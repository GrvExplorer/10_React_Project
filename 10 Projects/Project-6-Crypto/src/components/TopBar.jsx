import {
  Box,
  HStack,
  Text,
  Icon,
  Stack,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { RxAvatar } from "react-icons/rx";

function TopBar() {
  return (
    <Box
      h="86px"   
    >
      <HStack
      maxW={"1024px"}
      mx={"auto"}
      px={[20, 20, 10, 10, 0]}
      
      justifyContent={"space-between"} h={"full"}>
        <Text fontSize={"28px"} letterSpacing={"1px"} fontWeight={"bold"}>
          Dashboard
        </Text>
        <Menu>
  <MenuButton as={Button}>
    <Icon fontSize={'40px'} as={ RxAvatar} />
  </MenuButton>
  <MenuList bg='black' w='40' p='4px' maxW={'1024px'} mx='auto' >
    <MenuItem color='white' p='12px' _hover={{
      bg: 'white',
      color: 'black'
    }}>Logout</MenuItem>
    <MenuItem p='12px' color='white' _hover={{
      bg: 'white',
      color: 'black'
    }}>Support</MenuItem>
  </MenuList>
</Menu>

        
      </HStack>
    </Box>
  );
}

export default TopBar;

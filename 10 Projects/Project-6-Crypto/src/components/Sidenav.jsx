import { Box, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { MdAttachMoney } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function Sidenav() {
  const navLink = [
    {
      Icon: MdOutlineDashboardCustomize,
      Text: "Dashboard",
      Link: "/",
    },
    {
      Icon: MdAttachMoney,
      Text: "Transaction",
      Link: "/transaction",
    },
  ];

  return (
    <Box
      boxShadow={"lg"}
      as="nav"
      px={"12px"}
      bg='white'
      pt={"72px"}
      display={"flex"}
      height={"100vh"}
      flexDir={"column"}
      gap={"15px"}
    >
      <Heading
        as={"h1"}
        fontSize={"20px"}
        fontWeight={500}
        color="#5F00D9"
        pl={"16px"}
       
      >
        <Text
      cursor={'pointer'}
         borderBottom={'1px'}
         borderColor={'transparent'}
           _hover={{
             borderBottom: '1px' ,
             borderColor: '#5F00D9'        
           }}
        >
        @DOSOMECODING
          </Text>
      </Heading>
      <Stack h={"89%"} justifyContent={"space-between"}>
        <Stack gap={2} cursor={'pointer'}>
          {navLink.map((v, i) => (
            <Box
              key={i}
              display={"flex"}
              alignItems={'center'}
              gap={4}
              px={4}
              py={3}
              color={"#797E82"}
              boxShadow={"sm"}
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
            >
              <Icon  fontSize={'18px'} as={v.Icon} />
              <Box as="p" fontWeight="semibold" fontSize={'16px'}>
                {v.Text}
              </Box>
            </Box>
          ))}
        </Stack>
        <Box
        cursor={'pointer'}
          display={"flex"}
          alignItems={'center'}

          gap={4}
          px={4}
          py={3}
          boxShadow={"sm"}
          color={"#797E82"}
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
        >
          <Icon fontSize={'18px'} as={BiSupport} />
          <Text fontWeight={"semi-bold"}>Support</Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default Sidenav;

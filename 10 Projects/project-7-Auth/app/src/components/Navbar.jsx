import { Box, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";
import { MdAttachMoney, MdOutlineDashboardCustomize } from "react-icons/md";
import { Link, useLocation, useParams } from "react-router-dom";

function Sidenav() {

const {pathname} = useLocation()


  const navLink = [
    {
      Icon: MdOutlineDashboardCustomize,
      Text: "Dashboard",
      Link: "/",
    },
    {
      Icon: MdAttachMoney,
      Text: "Transactions",
      Link: "/transactions",
    },
  ];


  return (
    <Box
    className="w-[256px] fixed z-10"
      boxShadow={"lg"}
      as="nav"
      px={"12px"}
      bg="white"
      pt={"72px"}
      display={"flex"}
      height={"100vh"}
      flexDir={"column"}
      gap={"15px"}
      width={'800'}
    >
      <Heading
        as={"h1"}
        fontSize={"20px"}
        fontWeight={500}
        color="#5F00D9"
        pl={"16px"}
      >
        <Text
          cursor={"pointer"}
          borderBottom={"1px"}
          borderColor={"transparent"}
          _hover={{
            borderBottom: "1px",
            borderColor: "#5F00D9",
          }}
        >
          @GrvExplorer
        </Text>
      </Heading>
      <Stack h={"93%"} justifyContent={"space-between"}>
        <Stack gap={2} cursor={"pointer"}>
          {navLink.map((v, i) => (
            <Link key={i} to={v.Link}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={4}
                px={4}
                py={3}
                color={`${pathname==v.Link ? '#171717': '#797E82'}`}
                bg={`${pathname==v.Link ? '#F3F3F7': ''}`}
                boxShadow={"sm"}

                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
              >
                <Icon fontSize={"18px"} as={v.Icon} />
                <Box as="p" fontWeight="semibold" fontSize={"16px"}>
                  {v.Text}
                </Box>
              </Box>
            </Link>
          ))}
        </Stack>

        <Link to="/support">
          <Box
            cursor={"pointer"}
            display={"flex"}
            alignItems={"center"}
            gap={4}
            px={4}
            py={3}
            boxShadow={"sm"}
            color={`${pathname=='/support' ? '#171717': '#797E82'}`}
            bg={`${pathname=='/support' ? '#F3F3F7': ''}`}
            _hover={{
              bg: "#",
              color: "#171717",
            }}
          >
            <Icon fontSize={"18px"} as={BiSupport} />
            <Text fontWeight={"semi-bold"}>Support</Text>
          </Box>
        </Link>
      </Stack>
    </Box>
  );
}

export default Sidenav;

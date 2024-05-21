import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { GoDownload, GoUpload } from "react-icons/go";
import BlueButton from "./BlueButton";

function DashboardLay() {
  return (
    <div>
      <Box >
        <Stack
          flexDir={"row"}
          h="106px"
          borderRadius={"16px"}
          justifyContent={"center"}
          p="24px"
          bg="#fff"
        >
          <Stack flexGrow={1}>
            <Text color={"#535D66"} fontSize={"14px"} fontWeight={"medium"}>
              Total Portfolio Value
            </Text>
            <Text fontWeight={"semibold"} fontSize={"24px"}>
              ₹ 112,312.24
            </Text>
          </Stack>
          <Stack flexGrow={2} pr="113px">
            <Text color={"#535D66"} fontSize={"14px"} fontWeight={"medium"}>
              Total Portfolio Value
            </Text>
            <HStack gap="32px">
              <HStack gap="5px">
                <Text fontWeight={"semibold"} fontSize={"24px"}>
                  22.39401000
                </Text>
                <Text
                  color={"#535D66"}
                  fontSize={"12px"}
                  className="rounded-sm bg-slate-200 px-1"
                  fontWeight={"normal"}
                >
                  BTC
                </Text>
              </HStack>
              <HStack gap="5px">
                <Text fontWeight={"semibold"} fontSize={"24px"}>
                  ₹ 1,300.00
                </Text>
                <Text
                  color={"#535D66"}
                  fontSize={"12px"}
                  fontWeight={"normal"}
                  className="rounded-sm bg-slate-200 px-1"
                >
                  INR
                </Text>
              </HStack>
            </HStack>
          </Stack>
          <HStack>
            <BlueButton icon={<GoDownload />} text={"Deposit"} />
            <BlueButton icon={<GoUpload />} text={"Withdraw"} />
          </HStack>
        </Stack>
      </Box>
    </div>
  );
}

export default DashboardLay;

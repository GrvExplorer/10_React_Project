import {Box, Stack, Text, HStack} from '@chakra-ui/react'
import BlueButton from "./BlueButton";

function DashboardLay() {
  return (
    <div>
        <Box px={[20, 20, 10, 10, 0]}>
              <Stack
                flexDir={"row"}
                h="106px"
                borderRadius={"16px"}
                justifyContent={"center"}
                p="24px"
                bg="#fff"
                maxW={"1024px"}
                mx={"auto"}
              >
                <Stack flexGrow={1}>
                  <Text
                    color={"#535D66"}
                    fontSize={"14px"}
                    fontWeight={"medium"}
                  >
                    Total Portfolio Value
                  </Text>
                  <Text fontWeight={"semibold"} fontSize={"24px"}>
                    ₹ 112,312.24
                  </Text>
                </Stack>
                <Stack flexGrow={2}  pr="113px">
                  <Text
                    color={"#535D66"}
                    fontSize={"14px"}
                    fontWeight={"medium"}
                  >
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
                      >
                        INR
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
                <HStack>
                <BlueButton />
                </HStack>
              </Stack>
            </Box>
    </div>
  )
}

export default DashboardLay
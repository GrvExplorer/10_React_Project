import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

function RecentTransaction() {
  return (
    <div>
      <VStack bg="#fff" borderRadius={"16px"}
       w={'full'}>

        <Stack flexDir={"row"} p="24px" >
          <Stack>
            <Text
              color={"#535D66"}
              fontSize={"14px"}
              fontWeight={"medium"}
              mb={"2"}
              width={'full'}
            >
              Recent Transactions
            </Text>
            <div
              className=" flex flex-col gap-8
       "
            >
              <HStack  gap={"3"}>
                <Image src="./dollar.png" />
                <div className="flex w-full justify-between">
                  <div className="flex flex-col">
                    <Text fontWeight={"semibold"} fontSize={"16px"}>
                      INR Deposit
                    </Text>
                    <Text
                      className="text-Gray"
                      fontWeight={"semibold"}
                      fontSize={"14px"}
                    >
                      2022-06-09 7:06 PM
                    </Text>
                  </div>
                  <Text fontWeight={"bold"} fontSize={"16px"}>
                    + ₹81,123.10{" "}
                  </Text>
                </div>
              </HStack>
              <HStack  gap={"3"}>
                <Image src="./bit.png" />
                <div className="flex w-full justify-between">
                  <div className="flex flex-col">
                    <Text fontWeight={"semibold"} fontSize={"16px"}>
                      BTC Sell
                    </Text>
                    <Text
                      className="text-Gray"
                      fontWeight={"semibold"}
                      fontSize={"14px"}
                    >
                      2022-05-27 12:32 PM
                    </Text>
                  </div>
                  <Text fontWeight={"bold"} fontSize={"16px"}>
                    - 12.48513391 BTC
                    <Text
                      className="text-Gray"
                      fontWeight={"semibold"}
                      fontSize={"14px"}
                      textAlign={'end'}
                      w={'full'}
                    >
                      + $81,123.10
                    </Text>
                  </Text>
                </div>
              </HStack>
              <HStack  gap={"3"}>
                <Image src="./dollar.png" />
                <div className="flex w-full justify-between">
                  <div className="flex flex-col">
                    <Text fontWeight={"semibold"} fontSize={"16px"}>
                      INR Deposit
                    </Text>
                    <Text
                      className="text-Gray"
                      fontWeight={"semibold"}
                      fontSize={"14px"}
                    >
                      2022-06-09 7:06 PM
                    </Text>
                  </div>
                  <Text fontWeight={"bold"} fontSize={"16px"}>
                    + ₹81,123.10{" "}
                  </Text>
                </div>
              </HStack>
            </div>
          </Stack>
        </Stack>
      </VStack>
    </div>
  );
}

export default RecentTransaction;

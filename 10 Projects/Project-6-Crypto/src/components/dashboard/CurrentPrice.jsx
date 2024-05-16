import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";
import BlueButton from "./BlueButton";

const graphTimeline = [
  {
    time: "7:15 PM",
  },
  {
    time: "8:15 PM",
  },
  {
    time: "10:15 PM",
  },
  {
    time: "12:15 PM",
  },
  {
    time: "4:15 AM",
  },
];

function CurrentPrice() {
  return (
    <div>
      <VStack bg="#fff" borderRadius={"16px"}>
        <Stack
          flexDir={"row"}
          h="106px"
          justifyContent={"center"}
          p="24px"
          width={"462px"}
        >
          <HStack justifyContent={"space-between"} className="w-full">
            <Box>
              <Text color={"#535D66"} fontSize={"14px"} fodntWeight={"medium"}>
                Current Price
              </Text>
              <HStack>
                <Text fontWeight={"semibold"} fontSize={"24px"}>
                  ₹26,670.25
                </Text>
                <Text fontWeight={"bold"} color={"green.400"} fontSize={"14px"}>
                  0.46%
                </Text>
              </HStack>
            </Box>
            <Flex className=" h-full items-start gap-2 ">
              <BlueButton icon={<MdAdd />} text={"Buy"} />
              <BlueButton icon={<RiSubtractLine />} text={"Sell"} />
            </Flex>
          </HStack>
        </Stack>
        <Box className="relative flex flex-col-reverse gap-0 ">
          <Image src="./graph.svg" className="absolute" />
          <Image src="./graph_line.svg" />
        </Box>
        
        {/* TODO: CurrentPrice component (time fix) */}
        <Box className="m-3 flex w-full justify-center">
          {graphTimeline.map(({ time }, i) => (
            <div key={time + i} className="pr-8 text-sm text-Gray ">
              <p>{time}</p>
            </div>
          ))}
        </Box>
      </VStack>
    </div>
  );
}

export default CurrentPrice;

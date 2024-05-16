import { Flex } from "@chakra-ui/react";
import CurrentPrice from "../../components/dashboard/CurrentPrice";
import DashboardLay from "../../components/dashboard/PortfolioValue";
import RecentTransaction from "../../components/dashboard/RecentTransaction";

function Dashboard() {
  return (
    <>
      <Flex
        px={[20, 20, 10, 10, 0]}
        maxW={"1024px"}
        mx={"auto"}
        className="w-full flex-col  gap-6"
      >
        <DashboardLay />
        <Flex className="justify-between">
          <CurrentPrice />

          <RecentTransaction />
        </Flex>
      </Flex>
    </>
  );
}

export default Dashboard;

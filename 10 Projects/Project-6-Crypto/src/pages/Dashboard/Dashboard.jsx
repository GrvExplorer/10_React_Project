import { Flex } from "@chakra-ui/react";
import Contact from "../../components/dashboard/Contact";
import CurrentPrice from "../../components/dashboard/CurrentPrice";
import Loans from "../../components/dashboard/Loans";
import DashboardLay from "../../components/dashboard/PortfolioValue";
import RecentTransaction from "../../components/dashboard/RecentTransaction";

function Dashboard() {
  return (
    <>
      {/* TODO: Make this Responsive  */}
      <Flex
        px={[20, 20, 10, 10, 0]}
        maxW={"1024px"}
        mx={"auto"}
        className="w-full flex-col  gap-6"
      >
        <DashboardLay />
        <Flex className="w-full  gap-10">
          <CurrentPrice />

          <RecentTransaction />
        </Flex>
        <Flex className="w-full gap-10">
          <Loans />
          <Contact />
        </Flex>
      </Flex>
    </>
  );
}

export default Dashboard;

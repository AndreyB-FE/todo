import type { FC } from "react";

import Flex from "../components/flex";
import SideBar from "../components/sideBar";
import Header from "../components/header";
import FindSideBar from "../components/findSideBar";

interface homeProps {}

const Home: FC<homeProps> = ({}) => {
  return (
    <>
      <Header></Header>
      <Flex justify={"space-between"}>
        <SideBar></SideBar>
        <FindSideBar></FindSideBar>
      </Flex>
    </>
  );
};
export default Home;

import type { FC } from "react";

import Flex from "../components/flex";
import SideBar from "../components/sideBar";
import Header from "../components/header";

interface homeProps {}

const Home: FC<homeProps> = ({}) => {
  return (
    <>
      <Header></Header>
      <Flex>
        <SideBar></SideBar>
      </Flex>
    </>
  );
};
export default Home;

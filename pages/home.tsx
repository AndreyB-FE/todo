import type { FC } from "react";

import Flex from "../components/flex";
import SideBar from "../components/sideBar";

interface homeProps {}

const Home: FC<homeProps> = ({}) => {
  return (
    <>
      <Flex>
        <SideBar></SideBar>
      </Flex>
    </>
  );
};
export default Home;

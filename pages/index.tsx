import type { FC } from "react";
import Registration from "./registration";
import Flex from "../components/flex";
import SideBar from "../components/sideBar";
import Header from "../components/header";
import FindSideBar from "../components/findSideBar";
import { observer } from "mobx-react-lite";
import logState from "../store/logState";

interface homeProps {}

const Home = observer(() => {
  return (
    <>
      {logState.isLogged ? (
        <>
          <Header></Header>
          <Flex justify={"space-between"}>
            <SideBar></SideBar>
            <FindSideBar></FindSideBar>
          </Flex>
        </>
      ) : (
        <Registration></Registration>
      )}
    </>
  );
});
export default Home;

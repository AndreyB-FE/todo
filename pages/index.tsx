import type { FC } from "react";
import { useEffect } from "react";
import Flex from "../components/flex";
import SideBar from "../components/sideBar";
import Header from "../components/header";
import FindSideBar from "../components/findSideBar";
import { observer } from "mobx-react-lite";
import logState from "../store/logState";
import Calendar from "../components/calendar/calendar";
import { useRouter } from "next/router";
import Auth from "./login";

interface homeProps {}

const Home = observer(() => {
  const router = useRouter();
  useEffect(() => {
    if (!logState.isLogged) router.push("/login");
  });
  return (
    <>
      <Header></Header>
      <Flex justify={"space-between"}>
        <SideBar></SideBar>
        <Calendar></Calendar>
        <FindSideBar></FindSideBar>
      </Flex>
    </>
  );
});
export default Home;

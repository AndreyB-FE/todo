import type { FC } from "react";
import { useState, useRef } from "react";
import Flex from "./flex";
import Icon from "./icon";
import IconSlideInfo from "./iconSlideInfo";
import useClickOutSide from "./hooks/useClickOutSide";
import styled from "styled-components";

interface sideBarProps {}

const SideBar: FC<sideBarProps> = ({}) => {
  const [slideName, setSlideName] = useState("");
  const IconClickHandler = (name: string) => setSlideName(name);
  const wrapperRef = useRef(null);
  const clickOutsideHandler = () => setSlideName("");
  useClickOutSide(wrapperRef, clickOutsideHandler);
  return (
    <StyledSideBar ref={wrapperRef}>
      <Flex direction="column" gap="15px" padding="10px">
        <Icon
          name="Notes"
          backgroundImage="./images/icons8-notes-32.png"
          hintPosition={"right"}
          clickHandler={IconClickHandler}
        />
        <Icon
          name="Tasks"
          backgroundImage="./images/icons8-checkmark-32.png"
          hintPosition={"right"}
          clickHandler={IconClickHandler}
        />
        <Icon
          name="Contacts"
          backgroundImage="./images/icons8-google-contacts-32.png"
          hintPosition={"right"}
          clickHandler={IconClickHandler}
        />
      </Flex>
      {slideName && <IconSlideInfo name={slideName}></IconSlideInfo>}
    </StyledSideBar>
  );
};
export default SideBar;

const StyledSideBar = styled.div`
  display: flex;
  height: 100vh;
  box-shadow: 5px 0 5px -2px #888;
`;

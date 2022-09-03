import type { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import Checkbox from "./checkbox";

const StyledFindSideBar = styled.div<findSideBarProps>`
  box-shadow: -5px 5px 5px ${(props) => props.theme.colors.shadow};
  width: 200px;
  height: ${(props) => props.theme.height.sides}vh;
  background-color: white;
  text-align: center;
`;

interface findSideBarProps {}

const FindSideBar: FC<findSideBarProps> = (props) => {
  return (
    <StyledFindSideBar {...props}>
      <Checkbox label={"Checkbox"}></Checkbox>
    </StyledFindSideBar>
  );
};
export default FindSideBar;

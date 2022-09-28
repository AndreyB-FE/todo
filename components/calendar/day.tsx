import type { FC } from "react";
import styled from "styled-components";

const StyledDay = styled.div<dayProps>`
  height: 100px;
  line-height: 100px;
  font-size: 25px;
  text-align: center;
  background-color: ${(props) =>
    props.isCurrentMonth ? "white" : "lightgray"};
`;

interface dayProps {
  date: number;
  isCurrentMonth: boolean;
}

const Day: FC<dayProps> = (props) => {
  return <StyledDay {...props}>{props.date?.toString()}</StyledDay>;
};
export default Day;

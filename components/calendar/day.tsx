import type { FC } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDay = styled.div<dayProps>`
  border: 5px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 25px;
  text-align: center;
  background-color: ${(props) =>
    props.isCurrentMonth ? (props.isToday ? "pink" : "white") : "lightgray"};
  :hover {
    cursor: pointer;
    border-color: ${(props) =>
      props.isCurrentMonth ? "lightblue" : "darkgray"};
  }
`;

interface dayProps {
  isToday?: boolean;
  date: number;
  isCurrentMonth: boolean;
}

const Day: FC<dayProps> = (props) => {
  // console.log(props.isToday);
  const [isToday, setIsToday] = useState(false);
  return <StyledDay {...props}>{props.date?.toString()}</StyledDay>;
};
export default Day;

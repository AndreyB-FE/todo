import type { FC } from "react";
import styled from "styled-components";

const StyledDay = styled.div<dayProps>``;

interface dayProps {
  date: String;
}

const Day: FC<dayProps> = (props) => {
  return <StyledDay {...props}>{props.date}</StyledDay>;
};
export default Day;

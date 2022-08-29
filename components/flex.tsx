import type { FC } from "react";
import styled from "styled-components";

const StyledFlex = styled.div<flexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  margin: ${(props) => props.margin || "0"};
`;

type flexProps = {
  direction?: string;
  justify?: string;
  align?: string;
  margin?: string;
  children: JSX.Element | JSX.Element[];
};

const Flex: FC<flexProps> = (props) => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
};
export default Flex;

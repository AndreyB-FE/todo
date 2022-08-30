import type { FC } from "react";
import styled from "styled-components";

const StyledFlex = styled.div<flexProps>`
  display: flex;
  gap: ${(props) => props.gap || "0px"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

type flexProps = {
  direction?: string;
  justify?: string;
  align?: string;
  margin?: string;
  padding?: string;
  gap?: string;
  children: JSX.Element | JSX.Element[];
};

const Flex: FC<flexProps> = (props) => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
};
export default Flex;

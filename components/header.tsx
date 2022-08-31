import type { FC } from "react";
import styled from "styled-components";

const StyledHeader = styled.header<headerProps>`
  height: ${(props) => 100 - props.theme.height.sides}vh;
  box-shadow: 5px 0 5px 2px ${(props) => props.theme.colors.shadow};
`;

interface headerProps {}

const Header: FC<headerProps> = (props) => {
  return <StyledHeader {...props}></StyledHeader>;
};
export default Header;

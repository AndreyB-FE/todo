import type { FC } from "react";
import styled from "styled-components";

const StyledIcon = styled.i<iconProps>`
  width: ${(props) => props.width || "30px"};
  heigth: ${(props) => props.height || "30px"};
  border-radius: ${(props) => props.radius || "0px"};
  color: ${(props) => props.color || "black"};
  position: relative;
  background-color: white;
  $:after {
    position: absolute;
    top: -1px;
    left: 2px;
    color: #09ad7e;
    width: 70px;
    height: 70px;
  }
`;

interface iconProps {
  width?: string;
  height?: string;
  radius?: string;
  color?: string;
  children: JSX.Element;
}

const Icon: FC<iconProps> = (props) => {
  return <StyledIcon {...props}>{props.children}</StyledIcon>;
};
export default Icon;

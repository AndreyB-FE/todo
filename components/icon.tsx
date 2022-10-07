import type { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import HoverHint from "./hoverHint";

const StyledIcon = styled.i<iconProps>`
    position: relative;
    background: url(${(props) => props.backgroundImage});
    width: 40px;
    height: 40px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${(props) => props.size || "20px 20px"};
    border-radius: 50%;
    display: flex;
    align-items: center;
    transition: all .3s cubic-bezier(.4,0,.2,1);
    :hover{
      cursor:pointer;
      background-color: ${(props) =>
        props.color || props.theme.colors.iconsHover}
    }
  }
`;

interface iconProps {
  children?: JSX.Element;
  name: string;
  width?: string;
  height?: string;
  radius?: string;
  color?: string;
  clickHandler: Function;
  hintPosition?: "right" | "bottom";
  backgroundImage: string;
  size?: string;
}

const Icon: FC<iconProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <StyledIcon
      {...props}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onClick={() => props.clickHandler(props.name)}
    >
      {(props.hintPosition && (
        <HoverHint
          text={props.name}
          isHovered={isHovered}
          position={props.hintPosition}
        />
      )) ||
        props.children}
    </StyledIcon>
  );
};
export default Icon;

import type { FC } from "react";
import styled from "styled-components";

const StyledHoverHint = styled.i<hoverHintProps>`
  ${(props) => (props.isHovered ? "display: block" : "display: none")};
  ${(props) =>
    props.position === "right"
      ? "top: 9px;left:45px;"
      : "bottom: -27px;left:-10px;"}
  background-color: rgba(0, 0, 0, 0.3);
  font-style: normal;
  line-height: 1.2em;
  color: white;
  position: absolute;
  padding: 2px 10px;
  border-radius: 5px;
`;

type hoverHintProps = {
  text: string;
  isHovered: boolean;
  position: string;
};

const HoverHint: FC<hoverHintProps> = (props) => {
  return <StyledHoverHint {...props}>{props.text}</StyledHoverHint>;
};
export default HoverHint;

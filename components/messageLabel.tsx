import type { FC } from "react";
import styled from "styled-components";

const StyledMessageLabel = styled.label<messageLabelProps>`
  text-align: left;
  color: red;
  font-size: 0.6em;
  width: 100%;
  height: 1rem;
  text-shadow: 0px 0px 1px black;
`;

interface messageLabelProps {
  messageText?: string;
}

const MessageLabel: FC<messageLabelProps> = (props) => {
  return (
    <StyledMessageLabel {...props}>{props.messageText}</StyledMessageLabel>
  );
};
export default MessageLabel;

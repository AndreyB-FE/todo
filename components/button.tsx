import type { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button<buttonProps>`
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.colors.primaryDark};
  height: 3vh;
  width: 100px;
  border-radius: 3px;
  transition: box-shadow 0.2s ease-out;
  :hover {
    box-shadow: inset 0 0 5px black;
  }
`;

interface buttonProps {
  children: string;
  ClickHandler: Function;
}

const Button: FC<buttonProps> = (props) => {
  return (
    <StyledButton
      {...props}
      onClick={() => {
        props.ClickHandler();
      }}
    ></StyledButton>
  );
};
export default Button;

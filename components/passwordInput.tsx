import type { FC } from "react";
import styled from "styled-components";
import { useState } from "react";
import ShowPassword from "./showPassword";

const StyledPasswordInput = styled.div<passwordInputProps>`
  position: relative;
  width: 100%;
  input {
    font-family: verdana;
    width: 100%;
    height: 3vh;
    border: 1px solid ${(props) => props.theme.colors.primaryDark};
    border-radius: 3px;
    padding-left: 5px;
    outline: none;
    letter-spacing: 0.1em;
    :focus {
      border: 2px solid ${(props) => props.theme.colors.primaryDark};
    }
  }
`;

interface passwordInputProps {
  child?: JSX.Element;
  type?: string;
  name: string;
  placeholder?: string;
  ChangeHandler: Function;
  labelText?: string;
}

const PasswordInput: FC<passwordInputProps> = (props) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);
  const onIconClick = () => {
    setIsPasswordShowing(!isPasswordShowing);
  };
  return (
    <StyledPasswordInput {...props}>
      <input
        {...props}
        type={isPasswordShowing ? "text" : "password"}
        onChange={(e) => {
          props.ChangeHandler(e);
        }}
      ></input>
      <ShowPassword clickHandler={onIconClick}></ShowPassword>
    </StyledPasswordInput>
  );
};
export default PasswordInput;

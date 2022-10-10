import type { FC } from "react";
import styled from "styled-components";
import { useState } from "react";
import ShowPassword from "./showPassword";

const StyledPasswordInput = styled.div<passwordInputProps>`
  position: relative;
  width: 100%;
  text-align: left;
  font-size: 0.5em;
  input {
    font-family: verdana;
    width: 100%;
    height: 2rem;
    border: 1px solid ${(props) => props.theme.colors.primaryDark};
    border-radius: 3px;
    padding-left: 5px;
    outline: none;
    letter-spacing: 0.1em;
    :focus {
      border: 2px solid ${(props) => props.theme.colors.primaryDark};
    }
    ::placeholder {
      letter-spacing: 0;
    }
  }
  label {
    padding-left: 7px;
  }
`;

interface passwordInputProps {
  child?: JSX.Element;
  type?: string;
  name: string;
  placeholder?: string;
  inputHandler: Function;
  labelText?: string;
}

const PasswordInput: FC<passwordInputProps> = (props) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);
  const onIconClick = () => {
    setIsPasswordShowing(!isPasswordShowing);
  };
  return (
    <StyledPasswordInput {...props}>
      {props.labelText && <label>{props.labelText}</label>}
      <input
        placeholder={props.placeholder}
        name={props.name}
        type={isPasswordShowing ? "text" : "password"}
        onChange={(e) => {
          props.inputHandler(e);
        }}
      ></input>
      <ShowPassword clickHandler={onIconClick}></ShowPassword>
    </StyledPasswordInput>
  );
};
export default PasswordInput;

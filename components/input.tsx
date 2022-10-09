import type { FC } from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.div<inputProps>`
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
    :focus {
      border: 2px solid ${(props) => props.theme.colors.primaryDark};
    }
  }
`;

interface inputProps {
  child?: JSX.Element;
  type?: string;
  name: string;
  placeholder?: string;
  ChangeHandler: Function;
  labelText?: string;
}

const Input: FC<inputProps> = (props) => {
  return (
    <StyledInput {...props}>
      <input
        {...props}
        type={props.type}
        onChange={(e) => {
          props.ChangeHandler(e);
        }}
      ></input>
      {props.child && props.child}
    </StyledInput>
  );
};
export default Input;

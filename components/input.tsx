import type { FC } from "react";
import styled from "styled-components";

const StyledInput = styled.div<inputProps>`
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
    :focus {
      border: 2px solid ${(props) => props.theme.colors.primaryDark};
    }
  }
  label {
    padding-left: 7px;
  }
`;

interface inputProps {
  type?: string;
  name: string;
  placeholder?: string;
  inputHandler: Function;
  labelText?: string;
}

const Input: FC<inputProps> = (props) => {
  return (
    <StyledInput {...props}>
      {props.labelText && <label>{props.labelText}</label>}
      <input
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        onChange={(e) => {
          props.inputHandler(e);
        }}
      ></input>
    </StyledInput>
  );
};
export default Input;

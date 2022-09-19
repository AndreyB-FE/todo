import type { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import Icon from "./icon";

type checkboxProps = {
  color?: string;
  label?: string;
};

const Checkbox: FC<checkboxProps> = (props) => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <StyledCheckbox {...props} onClick={() => setIsChecked(!isChecked)}>
      <input type="checkbox" defaultChecked={isChecked} />
      <label>{props.label}</label>
    </StyledCheckbox>
  );
};
export default Checkbox;

const StyledCheckbox = styled.div`
  display: inline-block;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0 px;
      width: 18px;
      height: 18px;
      border: 1px solid #aaa;
      background: ${(props) => props.color || "white"};
      border-radius: 3px;
    }
    &:after {
      content: url('data:image/svg+xml;utf8,<svg width="12px" height="12    px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>');
      position: absolute;
      top: 0px;
      left: 4px;
      font-size: 16px;
      color: black;
      transition: all 0.2s;
    }
  }
  > input:not(:checked) + label {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }
  > input:disabled:not(:checked) + label {
    &:before {
      border-color: black;
      background-color: #ddd;
    }
  }
  > input:checked + label {
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`;

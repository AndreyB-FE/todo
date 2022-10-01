import type { FC } from "react";
import styled from "styled-components";

const StyledSelect = styled.select<selectProps>``;

interface selectProps {
  name: string;
  value: string;
  options: any[];
  onChangeHandler: Function;
}

const Select: FC<selectProps> = (props) => {
  return (
    <StyledSelect
      {...props}
      value={props.value}
      onChange={(e) => props.onChangeHandler(e)}
    >
      {props.options.map((el, id) => (
        <option key={id}>{el}</option>
      ))}
    </StyledSelect>
  );
};
export default Select;

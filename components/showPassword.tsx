import type { FC } from "react";
import styled from "styled-components";
import Icon from "./icon";
import { useState } from "react";

const StyledShowPassword = styled.div<showPasswordProps>`
  position: absolute;
  bottom: 17px;
  right: 15px;
  width: 20px;
  height: 20px;
  span {
    position: absolute;
    left: 18px;
    width: 2px;
    border-radius: 2px;
    height: 20px;
    background-color: ${(props) => props.theme.colors.primaryDark};
    transform: rotateZ(-45deg);
  }
`;

interface showPasswordProps {
  clickHandler: Function;
}

const ShowPassword: FC<showPasswordProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const onClickHandler = () => {
    setIsVisible(!isVisible);
  };
  return (
    <StyledShowPassword
      {...props}
      onClick={() => {
        props.clickHandler();
      }}
    >
      <Icon
        name={"eye"}
        backgroundImage={"./images/icons8-eye-40.png"}
        size={"15px 15px"}
        color={"rgba(82, 145, 163, 0.3)"}
        clickHandler={onClickHandler}
      >
        {!isVisible ? <span></span> : <></>}
      </Icon>
    </StyledShowPassword>
  );
};
export default ShowPassword;

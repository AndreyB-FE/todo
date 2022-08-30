import type { FC } from "react";
import { useState } from "react";
import Flex from "./flex";
import Icon from "./icon";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";
import Checkbox from "./checkbox";

interface sideBarProps {}

const sideBar: FC<sideBarProps> = ({}) => {
  const [check, setCheck] = useState(true);
  const clickHandler = (check: boolean) => setCheck(!check);
  return (
    <Flex>
      <Icon>
        <CheckCircle></CheckCircle>
      </Icon>
      <Icon>
        <CheckCircle></CheckCircle>
      </Icon>
      <Checkbox
        isChecked={check}
        clickHandler={clickHandler}
        label={"Checkbox"}
      ></Checkbox>
    </Flex>
  );
};
export default sideBar;

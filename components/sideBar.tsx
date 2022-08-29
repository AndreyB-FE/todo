import type { FC } from "react";
import { useState } from "react";
import Flex from "./flex";
import Icon from "./icon";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";
import Checkbox from "./checkbox";

interface sideBarProps {}

const sideBar: FC<sideBarProps> = ({}) => {
  const [check, setCheck] = useState(true);
  const onChange = (state: boolean) => setCheck(!check);
  return (
    <Flex>
      <Icon>
        <CheckCircle></CheckCircle>
      </Icon>
      <Icon>
        <CheckCircle></CheckCircle>
      </Icon>
      <Checkbox
        checked={check}
        onChange={onChange}
        label={"Checkbox"}
      ></Checkbox>
    </Flex>
  );
};
export default sideBar;

import type { FC } from "react";
import { useState } from "react";
import Flex from "./flex";
import Icon from "./icon";
import Checkbox from "./checkbox";

interface sideBarProps {}

const SideBar: FC<sideBarProps> = ({}) => {
  // const [check, setCheck] = useState(true);
  // const clickHandler = (check: boolean) => setCheck(!check);
  return (
    <Flex direction="column" gap="15px" padding="10px">
      <Icon
        name="Notes"
        backgroundImage="./images/icons8-notes-32.png"
        hintPosition={"right"}
      />
      <Icon
        name="Tasks"
        backgroundImage="./images/icons8-checkmark-32.png"
        hintPosition={"right"}
      />
      <Icon
        name="Contacts"
        backgroundImage="./images/icons8-google-contacts-32.png"
        hintPosition={"right"}
      />
      {/* <Icon>
        <CheckCircle></CheckCircle>
      </Icon>
      <Checkbox
        isChecked={check}
        clickHandler={clickHandler}
        label={"Checkbox"}
      ></Checkbox> */}
    </Flex>
  );
};
export default SideBar;

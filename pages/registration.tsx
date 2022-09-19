import type { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import logState from "../store/logState";
import { observer } from "mobx-react-lite";

const StyledRegistration = styled.div<registrationProps>``;

interface registrationProps {}
//props: FC<registrationProps>
const Registration = observer(() => {
  const [logForm, setLogForm] = useState({ user: "", password: "" });
  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setLogForm({ ...logForm, [name]: value });
  };
  return (
    <StyledRegistration>
      {`you logged in as ${logState.user}`}
      <input name="user" onChange={(e) => changeHandler(e)}></input>
      <input
        name="password"
        type="password"
        onChange={(e) => changeHandler(e)}
      ></input>
      <button
        onClick={() => {
          logState.logIn(logForm.user, logForm.password);
        }}
      >
        Log In
      </button>
    </StyledRegistration>
  );
});
export default Registration;

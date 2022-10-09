import type { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import logState from "../store/logState";
import { observer } from "mobx-react-lite";
import LogInForm from "../components/logInForm";

const StyledRegistration = styled.div<registrationProps>``;

interface registrationProps {}
const Registration = observer(() => {
  // const [logForm, setLogForm] = useState({ userName: "", password: "" });
  // const changeHandler = (e: any) => {
  //   const { name, value } = e.target;
  //   setLogForm({ ...logForm, [name]: value });
  // };

  // function logIn(logForm: object) {
  //   fetch("http://localhost:8000/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(logForm),
  //   })
  //     .then((data: Response) => {
  //       if (!data.ok) {
  //         throw Error(data.status.toString());
  //       }
  //       return data;
  //     })
  //     .then((data) => {
  //       if (data.status === 200) console.log("you are logged in");
  //       else console.log("incorrect user name or password");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  return (
    <StyledRegistration>
      <LogInForm></LogInForm>
    </StyledRegistration>
  );
});
export default Registration;

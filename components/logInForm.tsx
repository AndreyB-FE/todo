import type { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import Input from "./input";
import Button from "./button";
import Flex from "./flex";
import PasswordInput from "./passwordInput";
import logState from "../store/logState";

const StyledLogInForm = styled.div<logInFormProps>`
  margin: auto;
  margin-top: 30vh;
  left: 0;
  right: 0;
  text-align: center;
  width: 80%;
  max-width: 425px;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  font-family: sans-serif;
  color: ${(props) => props.theme.colors.primaryDark};
  font-size: 25px;
`;

interface logInFormProps {}

const LogInForm: FC<logInFormProps> = (props) => {
  const [logForm, setLogForm] = useState({ userName: "", password: "" });
  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setLogForm({ ...logForm, [name]: value });
  };

  function logIn() {
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logForm),
    })
      .then((data: Response) => {
        if (!data.ok) {
          throw Error(data.status.toString());
        }
        return data;
      })
      .then((data) => {
        if (data.status === 200) {
          console.log("you are logged in");
          logState.logIn(logForm);
          console.log(logState.user);
        } else console.log("incorrect user name or password");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <StyledLogInForm>
      Log In
      <Flex
        direction={"column"}
        gap={"12px"}
        align={"center"}
        margin={"15px 0px 0px 0px"}
      >
        <Input
          name={"userName"}
          placeholder={"User name"}
          ChangeHandler={onChangeHandler}
        ></Input>
        <PasswordInput
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          ChangeHandler={onChangeHandler}
        ></PasswordInput>
        <Button ClickHandler={logIn}>Log In</Button>
      </Flex>
    </StyledLogInForm>
  );
};
export default LogInForm;

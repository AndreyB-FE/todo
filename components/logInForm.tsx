import type { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import Input from "./input";
import Button from "./button";
import Flex from "./flex";
import PasswordInput from "./passwordInput";
import logState from "../store/logState";
import MessageLabel from "./messageLabel";

const StyledLogInForm = styled.div<logInFormProps>`
  position: relative;
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
  .loading {
    height: 100%;
    width: 100%;
    background-image: url("./images/Spinner-1s-200px.svg");
    background-color: black;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100px 100px;
    opacity: 0.5;
    position: absolute;
    top: 0;
    border-radius: 10px;
  }
`;

interface logInFormProps {}

interface loginForm {
  userName: string;
  password: string;
}

const LogInForm: FC<logInFormProps> = (props) => {
  const [logForm, setLogForm] = useState({ userName: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onChangeHandler = (e: any) => {
    setErrorMessage("");
    const { name, value } = e.target;
    setLogForm({ ...logForm, [name]: value });
  };

  const validateForm = (loginForm: loginForm) => {
    if (loginForm.userName.length < 3 || loginForm.userName.length > 16) {
      setErrorMessage("Your username must contain between 3-16 characters!");
      return false;
    }
    if (loginForm.password.length < 8) {
      setErrorMessage("Your password must contain at least 8 characters!");
      return false;
    }
    return true;
  };

  function logIn() {
    if (!validateForm(logForm)) return false;
    setIsLoading(true);
    const start = new Date().getTime();
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logForm),
    })
      .then((data: Response) => {
        if (!data) {
          throw Error();
        }
        return data;
      })
      .then((data) => {
        if (data.status === 200) {
          setIsLoading(false);
          console.log("you are logged in");
          logState.logIn(logForm);
          console.log(logState.user);
        } else if (data.status === 403) {
          const end = new Date().getTime();
          if (end - start < 1000) {
            console.log(1000 - end + start);
            setTimeout(() => {
              setIsLoading(false);
              setErrorMessage("Incorrect username or password");
            }, 1000 - end + start);
          } else {
            setIsLoading(false);
            setErrorMessage("Incorrect username or password");
          }

          console.log("incorrect user name or password");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <StyledLogInForm>
      Login
      <Flex
        direction={"column"}
        gap={"12px"}
        align={"center"}
        margin={"15px 0px 0px 0px"}
      >
        <Input
          name={"userName"}
          placeholder={"Type your username"}
          inputHandler={onChangeHandler}
          labelText={"Username"}
        ></Input>
        <PasswordInput
          name={"password"}
          type={"password"}
          placeholder={"Type your password"}
          inputHandler={onChangeHandler}
          labelText={"Password"}
        ></PasswordInput>
        <>{isLoading && <div className="loading"></div>}</>
        <MessageLabel messageText={errorMessage}></MessageLabel>
        <Button ClickHandler={logIn}>LOGIN</Button>
      </Flex>
      <Flex></Flex>
    </StyledLogInForm>
  );
};
export default LogInForm;

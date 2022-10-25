import type { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import Input from "./input";
import Button from "./button";
import Flex from "./flex";
import PasswordInput from "./passwordInput";
import logState from "../store/logState";
import MessageLabel from "./messageLabel";

const StyledRegistrationFrom = styled.div<registrationFormProps>`
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
    background-image: url("../images/Spinner-1s-200px.svg");
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

interface registrationFormProps {}

const RegistrationForm: FC<registrationFormProps> = (props) => {
  const regForm = {
    userName: "",
    userEmail: "",
    password: "",
    repeatPassword: "",
  };

  const [formData, setFormData] = useState(regForm);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e: any) => {
    setErrorMessage("");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function registrate() {
    // if (!validateForm(logForm)) return false;
    setIsLoading(true);
    const start = new Date().getTime();
    fetch("http://localhost:8000/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
          logState.logIn(formData);
        } else if (data.status === 409) {
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
    <StyledRegistrationFrom {...props}>
      SIGN UP
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
        <Input
          name={"userEmail"}
          placeholder={"Type your e-mail"}
          inputHandler={onChangeHandler}
          labelText={"Email"}
        ></Input>
        <PasswordInput
          name={"password"}
          type={"password"}
          placeholder={"Type your password"}
          inputHandler={onChangeHandler}
          labelText={"Password"}
        ></PasswordInput>
        <PasswordInput
          name={"repeatPassword"}
          type={"password"}
          placeholder={"Repeat your password"}
          inputHandler={onChangeHandler}
          labelText={"Repeat password"}
        ></PasswordInput>
        <>{isLoading && <div className="loading"></div>}</>
        <MessageLabel messageText={errorMessage}></MessageLabel>
        <Button ClickHandler={registrate}>SIGN UP</Button>
      </Flex>
    </StyledRegistrationFrom>
  );
};
export default RegistrationForm;

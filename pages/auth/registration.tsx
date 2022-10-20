import type { FC } from "react";
import styled from "styled-components";
import RegistrationFrom from "../../components/registrationForm";

const StyledRegistration = styled.div<registrationProps>``;

interface registrationProps {}

const Registration: FC<registrationProps> = (props) => {
  return (
    <StyledRegistration {...props}>
      <RegistrationFrom></RegistrationFrom>
    </StyledRegistration>
  );
};
export default Registration;

import type { FC } from "react";
import styled from "styled-components";
import Loading from "./loading";
import { useState, useEffect } from "react";

const StyledSlide = styled.div<iconSlideInfoProps>`
  display: flex;
  justify-content: center;
  transition: 0.3s;
  width: 250px;
  border-left: 1px solid #eee;
  padding: 1rem 1rem 0;
`;

interface iconSlideInfoProps {
  name: string;
}

const IconSlideInfo: FC<iconSlideInfoProps> = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
  }, [props.name]);
  //костыль

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [props.name]);
  return (
    <StyledSlide {...props}>
      {props.name}
      {isLoading && <Loading></Loading>}
    </StyledSlide>
  );
};
export default IconSlideInfo;

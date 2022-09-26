import type { FC } from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Flex from "../flex";
import Day from "./day";

const StyledCalendar = styled.div<calendarProps>`
  width: 100%;
  .manage {
    height: 50px;
    background-color: lightblue;
    margin-top: 10px;
  }
  .days {
    display: grid;
    column-count: ;
  }
`;

interface calendarProps {}

const Calendar: FC<calendarProps> = (props) => {
  const [currentDay, setCurrentDay] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setCurrentDay(new Date()), 10000);
    return () => clearInterval(timer);
  });
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return (
    <StyledCalendar {...props}>
      <div className="manage"></div>
      <Flex justify="space-around" margin="10px 0 0 0">
        {weekDays.map((el, id) => (
          <span key={id}>{el}</span>
        ))}
      </Flex>
      <div className="days"></div>
    </StyledCalendar>
  );
};
export default Calendar;

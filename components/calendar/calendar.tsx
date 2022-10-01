import type { FC } from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Select from "../select";
import Icon from "../icon";
import Day from "./day";

const StyledCalendar = styled.div<calendarProps>`
  width: 100%;
  button {
    background-color: transparent;
    border: none;
    font-size: 40px;
    otline: none;
    position: absolute;
  }
  .prev {
    left: 10px;
  }
  .next {
    right: 10px;
  }
  .manage {
    position relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 50px;
    background-color: lightblue;
    margin-top: 10px;
  }
  .days {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .day{
    text-align:center;
    font-size: 25px;
    margin: 10px 0;
  }
  select{ 
    padding:5px;
    background-color: ${(props) => props.theme.colors.shadow};
    border: 1px solid gray;
    border-radius: 5px;
    color: white;
  }
`;

interface calendarProps {}

const Calendar: FC<calendarProps> = (props) => {
  const getConstYears = () => {
    let result = [];
    const year = new Date().getFullYear();
    for (let i = year - 2; i < year + 10; i++) {
      result.push(i);
    }
    return result;
  };
  const defProps = {
    currentDate: new Date(),
    years: getConstYears(),
    months: [
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
    ],
    weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    numDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  };
  const clickPrevMonthHandler = () => {
    const newDate = new Date(
      dateState.date.getFullYear(),
      dateState.date.getMonth() - 1
    );
    if (newDate.getFullYear() >= defProps.years[0])
      setDateState({ ...dateState, date: newDate });
  };
  const clickNextMonthHandler = () => {
    const newDate = new Date(
      dateState.date.getFullYear(),
      dateState.date.getMonth() + 1
    );
    if (newDate.getFullYear() <= defProps.years[defProps.years.length - 1])
      setDateState({ ...dateState, date: newDate });
  };
  const getWeekDay = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getDaysArray = (date: Date) => {
    const getDaysInMonth = (thisMonth: Date) => {
      const isYearLeapFeb = (thisMonth: Date) => {
        if (thisMonth.getFullYear() % 4 === 0 && thisMonth.getMonth() === 1)
          return true;

        return false;
      };
      const daysInMonth = isYearLeapFeb(thisMonth)
        ? 29
        : defProps.numDays[thisMonth.getMonth()];
      return daysInMonth;
    };
    let key = 0;
    const getPrevMonthDays = (weekDay: number, date: Date) => {
      const newDate = new Date(date.getFullYear(), date.getMonth() - 1);
      let result = [];
      const daysInPrevMonth = getDaysInMonth(newDate);
      for (let i = daysInPrevMonth - weekDay + 1; i <= daysInPrevMonth; i++) {
        result.push(<Day date={i} isCurrentMonth={false} key={key++}></Day>);
      }
      return result;
    };
    const getNextMonthDays = (thisMonth: Date) => {
      let result = [];
      const daysInMonth = getDaysInMonth(thisMonth);
      const weekDay = new Date(
        thisMonth.getFullYear(),
        thisMonth.getMonth(),
        daysInMonth
      ).getDay();
      for (let i = 1; i <= 6 - weekDay; i++) {
        result.push(<Day date={i} isCurrentMonth={false} key={key++}></Day>);
      }
      return result;
    };
    const isToday = (date: Date) => {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    };

    const daysInMonth = getDaysInMonth(date);
    const weekDay = getWeekDay(date);
    let result = getPrevMonthDays(weekDay, date);
    let day = 1;
    for (let i = 0; i < (daysInMonth + weekDay) / 7; i++) {
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < weekDay) || day > daysInMonth) continue;
        else if (isToday(date) && day === date.getDate()) {
          result.push(
            <Day
              date={day++}
              isCurrentMonth={true}
              key={key++}
              isToday={true}
            ></Day>
          );
        } else {
          result.push(
            <Day date={day++} isCurrentMonth={true} key={key++}></Day>
          );
        }
      }
    }
    return result.concat(getNextMonthDays(date));
  };

  const [dateState, setDateState] = useState({
    date: new Date(),
    selectedDate: null,
  });

  // useEffect(() => {
  //   let timer = setInterval(() => setCurrentDate(new Date()), 10000);
  //   return () => clearInterval(timer);
  // });
  const onSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (name === "months") {
      let id = defProps.months.indexOf(value);
      setDateState({
        ...dateState,
        date: new Date(dateState.date.getFullYear(), id),
      });
    } else {
      setDateState({
        ...dateState,
        date: new Date(+value, dateState.date.getMonth()),
      });
    }
  };
  return (
    <StyledCalendar {...props}>
      <div className="manage">
        <Icon
          name=""
          backgroundImage="./images/icons8-back-48.png"
          clickHandler={clickPrevMonthHandler}
        />
        <Select
          name="months"
          value={defProps.months[dateState.date.getMonth()]}
          options={defProps.months}
          onChangeHandler={onSelectHandler}
        ></Select>
        <Select
          name="years"
          value={dateState.date.getFullYear().toString()}
          options={defProps.years}
          onChangeHandler={onSelectHandler}
        ></Select>
        <Icon
          name="Contacts"
          backgroundImage="./images/icons8-forward-48.png"
          clickHandler={clickNextMonthHandler}
        />
      </div>
      <div className="days">
        {defProps.weekDays.map((el, id) => (
          <span className="day" key={id}>
            {el}
          </span>
        ))}
        {getDaysArray(dateState.date).map((el) => el)}
      </div>
    </StyledCalendar>
  );
};
export default Calendar;

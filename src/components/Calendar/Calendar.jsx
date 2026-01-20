import { useState } from "react";
import {
  CalendarContainer,
  CalendarStyled,
  CalendarTitle,
  CalendarBlock,
  CalendarMonth,
  CalendarContent,
  CalendarDaysNames,
  DayName,
  CalendarCells,
  CalendarCell,
  Block,
} from "./Calendar.styled";

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  return firstDay === 0 ? 6 : firstDay - 1;
};

const generateMonth = (year, month, selectedDates, onDateClick) => {
  const totalDays = getDaysInMonth(year, month);
  const offset = getFirstDayOfMonth(year, month);
  const cells = [];

  for (let i = 0; i < offset; i++) {
    cells.push(<CalendarCell key={`empty-start-${i}`} $empty />);
  }

  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(year, month, day);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const isSelected = selectedDates.some(
      (d) => d.getTime() === date.getTime(),
    );

    cells.push(
      <CalendarCell
        key={day}
        $weekend={isWeekend}
        $selected={isSelected}
        onClick={() => onDateClick(day, month, year)}
      >
        {day}
      </CalendarCell>,
    );
  }

  const totalCells = cells.length;
  const remainingCells = (7 - (totalCells % 7)) % 7;
  for (let i = 0; i < remainingCells; i++) {
    cells.push(<CalendarCell key={`empty-end-${i}`} $empty />);
  }

  return {
    year,
    month,
    monthName: monthNames[month],
    cells,
  };
};

const generateMonths = (centerDate, selectedDates, onDateClick) => {
  const months = [];
  const year = centerDate.getFullYear();
  const month = centerDate.getMonth();

  for (let i = 0; i <= 2; i++) {
    const date = new Date(year, month + i);
    months.push(
      generateMonth(
        date.getFullYear(),
        date.getMonth(),
        selectedDates,
        onDateClick,
      ),
    );
  }

  return months;
};

const Calendar = ({ selectedDates, setSelectedDates }) => {
  const now = new Date();
  const [centerDate] = useState(now);

  const handleDateClick = (day, month, year) => {
    const clickedDate = new Date(year, month, day);
    clickedDate.setHours(0, 0, 0, 0);

    if (selectedDates.length === 0) {
      setSelectedDates([clickedDate]);
    } else if (selectedDates.length === 1) {
      const [start] = selectedDates;
      const end = clickedDate;
      const newRange = [start, end].sort((a, b) => a - b);
      const datesInRange = getDatesBetween(newRange[0], newRange[1]);
      setSelectedDates(datesInRange);
    } else {
      setSelectedDates([clickedDate]);
    }
  };

  const getDatesBetween = (start, end) => {
    const dates = [];
    let current = new Date(start);
    while (current <= end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const months = generateMonths(centerDate, selectedDates, handleDateClick);

  return (
    <CalendarContainer>
      <CalendarStyled>
        <div>
          <CalendarTitle>Период</CalendarTitle>
          <CalendarDaysNames>
            {["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map((day) => (
              <DayName key={day}>{day}</DayName>
            ))}
          </CalendarDaysNames>
        </div>
        <CalendarBlock>
          <CalendarContent>
            <CalendarCells>
              {months.map((m) => (
                <div key={`${m.year}-${m.month}`}>
                  <CalendarMonth $header>
                    {m.monthName} {m.year}
                  </CalendarMonth>
                  <Block>{m.cells}</Block>
                </div>
              ))}
            </CalendarCells>
          </CalendarContent>
        </CalendarBlock>
      </CalendarStyled>
    </CalendarContainer>
  );
};
export default Calendar;

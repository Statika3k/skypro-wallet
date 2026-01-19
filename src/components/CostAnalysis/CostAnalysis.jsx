import { useState } from "react";
import {
  Page,
  SectionTitle,
  CalendarContainer,
  CalendarStyled,
  CalendarTitle,
  CalendarBlock,
  CalendarMonth,
  CalendarContent,
  CalendarDaysNames,
  CalendarChart,
  DayName,
  CalendarCells,
  CalendarCell,
  ChartContainer,
  ChartHeader,
  ChartTabs,
  Chart,
  ChartFooter,
  PeriodLabel,
  TotalAmount,
} from "./CostAnalysis.styled";

import Header from "../Header/Header";

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

function formatDate(date) {
  return `${date.getDate()} ${
    [
      "янв",
      "фев",
      "мар",
      "апр",
      "май",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ][date.getMonth()]
  }`;
}

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
    cells.push(
      <CalendarCell key={`${year}-${month}-empty-start-${i}`} $empty />,
    );
  }

  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(year, month, day);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const isSelected = selectedDates.some(
      (d) => d.getTime() === date.getTime(),
    );

    cells.push(
      <CalendarCell
        key={`${year}-${month}-${day}`}
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
    cells.push(<CalendarCell key={`${year}-${month}-empty-end-${i}`} $empty />);
  }

  return {
    year,
    month,
    monthName: monthNames[month],
    cells,
  };
};

const generateMonths = (
  centerDate,
  countBefore = 1,
  countAfter = 1,
  selectedDates,
  onDateClick,
) => {
  const months = [];
  const year = centerDate.getFullYear();
  const month = centerDate.getMonth();

  for (let i = -countBefore; i <= countAfter; i++) {
    const date = new Date(year, month + i);
    const m = date.getMonth();
    const y = date.getFullYear();
    months.push(generateMonth(y, m, selectedDates, onDateClick));
  }

  return months;
};

export const Calendar = () => {
  const now = new Date();
  const [centerDate] = useState(now);
  const [selectedRange, setSelectedRange] = useState([]);

  const handleDateClick = (day, month, year) => {
    const clickedDate = new Date(year, month, day);
    clickedDate.setHours(0, 0, 0, 0);

    if (selectedRange.length === 0) {
      setSelectedRange([clickedDate]);
    } else if (selectedRange.length === 1) {
      const [start] = selectedRange;
      const end = clickedDate;

      const newRange = [start, end].sort((a, b) => a - b);
      const datesInRange = getDatesBetween(newRange[0], newRange[1]);

      setSelectedRange(datesInRange);
    } else {
      setSelectedRange([clickedDate]);
    }
  };

  const getDatesBetween = (start, end) => {
    const dates = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const months = generateMonths(
    centerDate,
    0,
    2,
    selectedRange,
    handleDateClick,
  );

  return (
    <>
      <Header />
      <Page>
        <SectionTitle>Анализ расходов</SectionTitle>
        <CalendarChart>
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
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(7, 1fr)",
                            gap: "4px",
                          }}
                        >
                          {m.cells}
                        </div>
                      </div>
                    ))}
                  </CalendarCells>
                </CalendarContent>
              </CalendarBlock>
            </CalendarStyled>
          </CalendarContainer>

          <ChartContainer>
            <ChartHeader>
              <ChartTabs>
                <PeriodLabel> ₽</PeriodLabel>

                <TotalAmount>
                  Расходы за{" "}
                  {selectedRange.length > 1
                    ? `${formatDate(selectedRange[0])} – ${formatDate(
                        selectedRange[selectedRange.length - 1],
                      )}`
                    : selectedRange.length === 1
                      ? formatDate(selectedRange[0])
                      : "не выбран"}
                </TotalAmount>
              </ChartTabs>
            </ChartHeader>
            <Chart>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-40"
                  y="75"
                  width="50"
                  height="128"
                  fill="rgba(217, 182, 255, 1)"
                  rx="4"
                />
                <rect
                  x="15"
                  y="35"
                  width="60"
                  height="165"
                  fill="rgba(255, 181, 61, 1)"
                  rx="4"
                />
                <rect
                  x="80"
                  y="195"
                  width="50"
                  height="4"
                  fill="rgba(110, 228, 254, 1)"
                  rx="4"
                />
                <rect
                  x="145"
                  y="0"
                  width="55"
                  height="200"
                  fill="rgba(176, 174, 255, 1)"
                  rx="4"
                />
                <rect
                  x="220"
                  y="195"
                  width="50"
                  height="4"
                  fill="rgba(188, 236, 48, 1)"
                  rx="4"
                />
                <rect
                  x="290"
                  y="15"
                  width="50"
                  height="185"
                  fill="rgba(255, 185, 184, 1)"
                  rx="4"
                />
              </svg>
            </Chart>
            <ChartFooter>
              <span>Еда</span>
              <span>Транспорт</span>
              <span>Жилье</span>
              <span>Развлечения</span>
              <span>Образование</span>
              <span>Другое</span>
            </ChartFooter>
          </ChartContainer>
        </CalendarChart>
      </Page>
    </>
  );
};

export default Calendar;

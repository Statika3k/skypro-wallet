import { useState } from "react";
import {
  Page,
  SectionTitle,
  CalendarChart,
  Period,
  ButtonPeriod,
} from "./CostAnalysis.styled";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import ChartComponent from "../Chart/Chart";

const fetchExpensesByPeriod = async (startDate, endDate) => {

  await new Promise((res) => setTimeout(res, 500));

  return [
    { category: "Еда", amount: Math.random() * 50 + 20 },
    { category: "Транспорт", amount: Math.random() * 30 + 10 },
    { category: "Жилье", amount: Math.random() * 100 + 50 },
    { category: "Развлечения", amount: Math.random() * 20 + 5 },
    { category: "Образование", amount: Math.random() * 15 + 3 },
    { category: "Другое", amount: Math.random() * 25 + 8 },
  ];
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useState(() => {
    const mediaQuery = window.matchMedia("(max-width: 376px)");
    const handleChange = (e) => setIsMobile(e.matches);
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
};

export const CostAnalysis = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [selectedDates, setSelectedDates] = useState([today]);
  const [periodData, setPeriodData] = useState([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const isMobile = useIsMobile();

  useState(() => {
    if (selectedDates.length === 0) {
      setPeriodData([]);
      return;
    }

    const startDate = selectedDates[0];
    const endDate = selectedDates[selectedDates.length - 1];

    fetchExpensesByPeriod(startDate, endDate).then((data) => {
      setPeriodData(data);
    });
  }, [selectedDates]);

  const handleOpenCalendar = () => {
    setIsCalendarOpen(true);
  };

  const handleCloseCalendar = () => {
    setIsCalendarOpen(false);
  };

  const handleDateSelect = (dates) => {
    setSelectedDates(dates);
  };

  const isTodaySelected =
    selectedDates.length === 1 &&
    selectedDates[0].toDateString() === today.toDateString();

  return (
    <>
      <Header />
      <Page>
        <SectionTitle $small={isCalendarOpen}>Анализ расходов</SectionTitle>
        <CalendarChart>
          {isMobile && isCalendarOpen && (
            <Calendar
              selectedDates={selectedDates}
              setSelectedDates={handleDateSelect}
            />
          )}
          {isMobile && !isCalendarOpen && (
            <ChartComponent
              selectedDates={selectedDates}
              periodData={periodData}
            />
          )}
          {!isMobile && (
            <>
              <Calendar
                selectedDates={selectedDates}
                setSelectedDates={setSelectedDates}
              />
              <ChartComponent
                selectedDates={selectedDates}
                periodData={periodData}
              />
            </>
          )}
        </CalendarChart>
        {isMobile && (
          <Period>
            <ButtonPeriod
              onClick={
                isCalendarOpen ? handleCloseCalendar : handleOpenCalendar
              }
            >
              {isCalendarOpen
                ? "Выбрать период"
                : isTodaySelected
                  ? "Выбрать другой период"
                  : "Изменить период"}
            </ButtonPeriod>
          </Period>
        )}
      </Page>
    </>
  );
};

export default CostAnalysis;

import { useContext, useEffect, useState } from "react";
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
import { TaskContext } from "../../context/TaskContext";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 376px)");
    const handleChange = (e) => setIsMobile(e.matches);
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
};

const parseServerDate = (dateString) => {
  if (!dateString) return null;

  if (dateString.includes("-")) {
    const [part1, part2, part3] = dateString.split("-").map(Number);

    if (part1 >= 1 && part1 <= 12 && part2 >= 1 && part2 <= 31 && part3 > 0) {
      return new Date(part3, part1 - 1, part2);
    }
  }

  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
};

export const CostAnalysis = () => {
  const { tasks } = useContext(TaskContext);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [selectedDates, setSelectedDates] = useState([today]);
  const [periodData, setPeriodData] = useState([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const isMobile = useIsMobile();

  const calculatePeriodData = (transactions, dates) => {
    if (dates.length === 0 || !transactions || transactions.length === 0) {
      return [];
    }

    const startDate = new Date(dates[0]);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(dates[dates.length - 1]);
    endDate.setHours(23, 59, 59, 999);

    const filteredTransactions = transactions.filter((task) => {
      if (!task || !task.date) return false;

      const taskDate = parseServerDate(task.date);
      if (!taskDate) return false;

      return taskDate >= startDate && taskDate <= endDate;
    });

    const categoryMap = {
      food: "Еда",
      transport: "Транспорт",
      housing: "Жилье",
      joy: "Развлечения",
      education: "Образование",
      others: "Другое",
    };

    const totals = {};
    

    Object.values(categoryMap).forEach(category => {
      totals[category] = 0;
    });

    filteredTransactions.forEach((task) => {
      if (!task || !task.category) return;
      
      const categoryName = categoryMap[task.category] || "Другое";
      totals[categoryName] = (totals[categoryName] || 0) + (parseFloat(task.sum) || 0);
    });

    return Object.entries(totals)
      .filter(([_, amount]) => amount > 0) 
      .map(([category, amount]) => ({
        category,
        amount: Math.round(amount * 100) / 100, 
      }));

  };

  useEffect(() => {
    if (selectedDates.length > 0 && tasks) {
      const data = calculatePeriodData(tasks, selectedDates);
      setPeriodData(data);
    } else {
      setPeriodData([]);
    }
  }, [selectedDates, tasks]);

  const handleOpenCalendar = () => {
    setIsCalendarOpen(true);
  };

  const handleCloseCalendar = () => {
    setIsCalendarOpen(false);
  };

  const handleDateSelect = (dates) => {
    if (dates && dates.length > 0) {
      setSelectedDates(dates);
      if (isMobile) {        
        setTimeout(() => setIsCalendarOpen(false), 300);
      }
    }
  };

  const isTodaySelected =
    selectedDates.length === 1 &&
    selectedDates[0].toDateString() === today.toDateString();

  return (
    <>
      <Header />
      <Page>
        {isMobile && isCalendarOpen ? (
          <SectionTitle $small={true}>
            <button
              type="button"
              onClick={handleCloseCalendar}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "inherit",
                background: "none",
                border: "none",
                padding: 0,
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <img src="../../../public/images/назад.svg" />
              Анализ расходов
            </button>
          </SectionTitle>
        ) : (
          <SectionTitle $small={isCalendarOpen}>Анализ расходов</SectionTitle>
        )}
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
        {isMobile && !isCalendarOpen && (
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

import { useState, useEffect } from "react";
import { Page, SectionTitle, CalendarChart } from "./CostAnalysis.styled";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import ChartComponent from "../Chart/Chart";

const fetchExpensesByPeriod = async (startDate, endDate) => {
  console.log("Запрос к API:", { startDate, endDate });

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

export const CostAnalysis = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [periodData, setPeriodData] = useState([]);

  useEffect(() => {
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

  return (
    <>
      <Header />
      <Page>
        <SectionTitle>Анализ расходов</SectionTitle>
        <CalendarChart>
          <Calendar
            selectedDates={selectedDates}
            setSelectedDates={setSelectedDates}
          />
          <ChartComponent
            selectedDates={selectedDates}
            periodData={periodData}
          />
        </CalendarChart>
      </Page>
    </>
  );
};

export default CostAnalysis;

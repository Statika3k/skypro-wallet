import { useState } from "react";
import { Page, SectionTitle, CalendarChart } from "./CostAnalysis.styled";

import Header from "../Header/Header";

import Calendar from "../Calendar/Calendar";
import ChartComponent from "../Chart/Chart";

export const CostAnalysis = () => {
  const [selectedDates, setSelectedDates] = useState([]);

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
          <ChartComponent selectedDates={selectedDates} />
        </CalendarChart>
      </Page>
    </>
  );
};

export default CostAnalysis;

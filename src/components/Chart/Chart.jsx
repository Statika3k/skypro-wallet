import {
  ChartContainer,
  ChartHeader,
  ChartTabs,
  Chart,
  ChartFooter,
  PeriodLabel,
  TotalAmount,
} from "./Chart.styled";

function formatDate(date) {
  const day = date.getDate();
  const month = [
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
  ][date.getMonth()];
  return `${day} ${month}`;
}

const ChartComponent = ({ selectedDates = [] }) => {
  const hasDates = selectedDates.length > 0;
  const periodText = hasDates
    ? selectedDates.length === 1
      ? formatDate(selectedDates[0])
      : `${formatDate(selectedDates[0])} – ${formatDate(
          selectedDates[selectedDates.length - 1],
        )}`
    : "";

  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTabs>
          <PeriodLabel> ₽</PeriodLabel>

          <TotalAmount>
            {hasDates ? `Расходы за ${periodText}` : "Период не выбран"}
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
  );
};
export default ChartComponent;

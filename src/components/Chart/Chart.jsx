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

const ChartComponent = ({ selectedDates = [], periodData = [] }) => {
  const hasDates = selectedDates.length > 0;
  const periodText = hasDates
    ? selectedDates.length === 1
      ? formatDate(selectedDates[0])
      : `${formatDate(selectedDates[0])} – ${formatDate(
          selectedDates[selectedDates.length - 1],
        )}`
    : "";

  const categories = [
    { name: "Еда", value: 45 },
    { name: "Транспорт", value: 20 },
    { name: "Жилье", value: 90 },
    { name: "Развлечения", value: 10 },
    { name: "Образование", value: 5 },
    { name: "Другое", value: 30 },
  ];

  const categoryMap = {
    Еда: 0,
    Транспорт: 1,
    Жилье: 2,
    Развлечения: 3,
    Образование: 4,
    Другое: 5,
  };

  const defaultData = [0, 0, 0, 0, 0, 0];

  const chartValues = periodData.reduce((acc, item) => {
    const index = categoryMap[item.category];
    if (index !== undefined) acc[index] = item.amount;
    return acc;
  }, defaultData);

  const maxValue = Math.max(...chartValues, 1);

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
          {chartValues.map((value, i) => {
            const height = (value / maxValue) * 180;
            const x = i * 45 + (45 - 30) / 2;
            return (
              <rect
                key={i}
                x={x}
                y={200 - height}
                width="30"
                height={height}
                fill={
                  [
                    "#d9b6ff",
                    "#ffb53d",
                    "#6ee4fe",
                    "#b0b0ff",
                    "#bcec30",
                    "#ffb9b8",
                  ][i]
                }
                rx="4"
              />
            );
          })}
        </svg>
      </Chart>
      <ChartFooter>
        {categories.map((cat) => (
          <span key={cat.name}>{cat.name}</span>
        ))}
      </ChartFooter>
    </ChartContainer>
  );
};
export default ChartComponent;

import {
  ChartContainer,
  ChartHeader,
  ChartTabs,
  Chart,
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

const formatNumber = (num) => {
  const intNum = Math.round(num);
  return intNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const categories = [
  { name: "Еда", color: "#d9b6ff" },
  { name: "Транспорт", color: "#ffb53d" },
  { name: "Жилье", color: "#6ee4fe" },
  { name: "Развлечения", color: "#b0b0ff" },
  { name: "Образование", color: "#bcec30" },
  { name: "Другое", color: "#ffb9b8" },
];

const ChartComponent = ({ selectedDates = [], periodData = [] }) => {
  const hasDates = selectedDates.length > 0;

  const periodText = hasDates
    ? selectedDates.length === 1
      ? formatDate(selectedDates[0])
      : `${formatDate(selectedDates[0])} – ${formatDate(
          selectedDates[selectedDates.length - 1],
        )}`
    : "";

  const values = categories.map((category) => {
    const data = periodData.find((item) => item.category === category.name);
    return data ? Math.round(data.amount) : 0;
  });

  const totalAmount = values.reduce((sum, val) => sum + val, 0);
  const formattedTotal = hasDates ? `${formatNumber(totalAmount)} ₽` : "0 ₽";

  const maxValue = Math.max(...values, 1);

  const barWidth = 94;
  const gap = 32;
  const chartWidth = 725;
  const chartHeight = 387;

  const leftPadding = 0;
  const textAboveGap = 10;
  const textBelowPadding = 32;

  const graphTop = 40;
  const graphBottom = textBelowPadding + 12;
  const graphHeight = chartHeight - graphTop - graphBottom;

  const startX = leftPadding;

  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTabs>
          <PeriodLabel>{formattedTotal}</PeriodLabel>
          <TotalAmount>
            {hasDates ? `Расходы за ${periodText}` : "Период не выбран"}
          </TotalAmount>
        </ChartTabs>
      </ChartHeader>
      <Chart>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {values.map((value, i) => {
            const x = startX + i * (barWidth + gap);
            const height = maxValue > 0 ? (value / maxValue) * graphHeight : 0;
            const y = graphTop + (graphHeight - height);

            const textX = x + barWidth / 2;
            const textY = y - textAboveGap;
            const labelY = chartHeight - textBelowPadding;

            return (
              <g key={categories[i].name}>
                {value > 0 && (
                  <text
                    x={textX}
                    y={textY}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#111"
                    fontWeight="500"
                  >
                    {formatNumber(value)} ₽
                  </text>
                )}
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={height}
                  fill={categories[i].color}
                  rx="8"
                />
                <text
                  x={textX}
                  y={labelY}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#94a6be"
                  fontWeight="500"
                >
                  {categories[i].name}
                </text>
              </g>
            );
          })}
        </svg>
      </Chart>
    </ChartContainer>
  );
};

export default ChartComponent;
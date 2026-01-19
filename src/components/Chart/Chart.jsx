// import {
//   ChartContainer,
//   ChartHeader,
//   ChartTabs,
//   Chart,
//   ChartFooter,
//   PeriodLabel,
//   TotalAmount,
// } from "./CostAnalysis.styled";

// export const ChartComponent = () => {

//   return (
//    <ChartContainer>
//               <ChartHeader>
//                 <ChartTabs>
//                   <PeriodLabel> ₽</PeriodLabel>

//                   <TotalAmount>
//                     Расходы за{" "}
//                     {selectedRange.length > 1
//                       ? `${formatDate(selectedRange[0])} – ${formatDate(
//                           selectedRange[selectedRange.length - 1],
//                         )}`
//                       : selectedRange.length === 1
//                         ? formatDate(selectedRange[0])
//                         : "не выбран"}
//                   </TotalAmount>
//                 </ChartTabs>
//               </ChartHeader>
//               <Chart>
//                 <svg
//                   width="100%"
//                   height="100%"
//                   viewBox="0 0 300 200"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect
//                     x="-40"
//                     y="75"
//                     width="50"
//                     height="128"
//                     fill="rgba(217, 182, 255, 1)"
//                     rx="4"
//                   />
//                   <rect
//                     x="15"
//                     y="35"
//                     width="60"
//                     height="165"
//                     fill="rgba(255, 181, 61, 1)"
//                     rx="4"
//                   />
//                   <rect
//                     x="80"
//                     y="195"
//                     width="50"
//                     height="4"
//                     fill="rgba(110, 228, 254, 1)"
//                     rx="4"
//                   />
//                   <rect
//                     x="145"
//                     y="0"
//                     width="55"
//                     height="200"
//                     fill="rgba(176, 174, 255, 1)"
//                     rx="4"
//                   />
//                   <rect
//                     x="220"
//                     y="195"
//                     width="50"
//                     height="4"
//                     fill="rgba(188, 236, 48, 1)"
//                     rx="4"
//                   />
//                   <rect
//                     x="290"
//                     y="15"
//                     width="50"
//                     height="185"
//                     fill="rgba(255, 185, 184, 1)"
//                     rx="4"
//                   />
//                 </svg>
//               </Chart>
//               <ChartFooter>
//                 <span>Еда</span>
//                 <span>Транспорт</span>
//                 <span>Жилье</span>
//                 <span>Развлечения</span>
//                 <span>Образование</span>
//                 <span>Другое</span>
//               </ChartFooter>
//             </ChartContainer>
//   );
// };

// src/components/Chart/Chart.jsx

import styled from "styled-components";

export const Page = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SectionTitle = styled.h1`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 32px;
  letter-spacing: 0px;
  padding-top: 24px;
`;

export const CalendarContainer = styled.div`
  width: 379px;
  height: 540px;
  border-radius: 30px;
  opacity: 1;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const CalendarStyled = styled.div`
  display: block;
  padding: 8px 33px;
`;

export const CalendarTitle = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  padding: 16px 0;
`;

export const CalendarBlock = styled.div`
  display: block;
  overflow-y: scroll;
  padding: 8px;
  scroll-behavior: smooth;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  width: 315px;
  gap: 10px;
  text-align: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #888;
  text-transform: lowercase;
  border-bottom: 0.5px solid rgba(153, 153, 153, 1);
`;

export const DayName = styled.div`
  width: 40px;
  height: 27px;
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const CalendarMonth = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  font-weight: 600;
  color: #000;
  margin: 16px 0 8px;
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
    props.$header &&
    `
    margin: 16px 0 8px;
    font-size: 16px;
  `}
`;
export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 381px;
`;

export const Block = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

export const CalendarCells = styled.div`
  display: flex;
  gap: 4px;
  height: 381px;
  padding: 8px 0;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 8px;
  }
`;

export const CalendarCell = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 60px;
  background: ${(props) =>
    props.$selected ? "#9c27b0" : "rgba(244, 245, 246, 1)"};
  color: ${(props) =>
    props.$selected ? "#fff" : props.$weekend ? "#d32f2f" : "#111"};
  font-weight: ${(props) => (props.$selected ? 600 : 400)};

  ${(props) =>
    props.$empty &&
    `
    background: transparent;
    cursor: default;
  `}
`;

export const SelectedPeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 10px 12px;
  background: ${(props) => (props.$selected ? "#9c27b0" : "#f0f0f0")};
  color: ${(props) => (props.$selected ? "#fff" : "#000")};
  border-radius: 8px;
  font-size: 14px;
`;

export const SelectedPeriodIcon = styled.div`
  width: 16px;
  height: 16px;
  background: ${(props) => (props.$selected ? "currentColor" : "#ccc")};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 50% 50%;
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 50% 50%;
`;
export const CalendarChart = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  margin-top: 36px;
`;
export const ChartContainer = styled.div`
  width: 789px;
  border-radius: 30px;
  opacity: 1;
  padding: 32px;

  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ChartTabs = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const ChartTab = styled.div`
  padding: 6px 12px;
  font-size: 14px;
  background: ${(props) => (props.$active ? "#9c27b0" : "transparent")};
  color: ${(props) => (props.$active ? "#fff" : "#666")};
  border-radius: 6px;
  cursor: pointer;
`;

export const Chart = styled.div`
  width: 732px;
  height: 387px;
`;

export const ChartFooter = styled.div`
  display: flex;
  gap: 32px;
  font-size: 12px;
  color: #888;
  margin-top: 8px;
  justify-content: space-around;
`;
export const PeriodLabel = styled.div`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const TotalAmount = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
`;

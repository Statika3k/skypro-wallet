import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 379px;
  height: 540px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 376px) {
    width: 100%;
    height: 513px;
    margin: 0;
    border-radius: 0 0 24px 24px;
    box-shadow: none;
    background: none;
    display: flex;
  }
`;

export const CalendarStyled = styled.div`
  flex: 1;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;

  @media (max-width: 376px) {
    padding: 0;
  }
`;

export const CalendarTitle = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  padding: 32px 0;
  margin: 0;

  @media (max-width: 376px) {
    padding: 20px 10px;
    padding-top: 0;
  }
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  border-bottom: 0.5px solid #999;
  color: #888;
  font-size: 12px;
  font-weight: 600;
  text-transform: lowercase;
`;

export const DayName = styled.div`
  flex: 1;
  height: 27px;
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
  display: block;
  padding: 8px;

  @media (max-width: 376px) {
    padding: 10px;
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 402px;
`;

export const CalendarCells = styled.div`
  flex: 1;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 8px;
  }
`;

export const CalendarMonth = styled.div`
  font-weight: 600;
  color: #000;
  cursor: default;
  text-align: start;

  ${(props) =>
    props.$header &&
    `
    margin: 16px 0 8px;
    font-size: 16px;
  `}
`;

export const Block = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  width: 100%;
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

  @media (max-width: 376px) {
    width: 44px;
    height: 44px;
  }
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

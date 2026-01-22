import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 789px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  padding: 32px;
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ChartTabs = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
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

export const Chart = styled.div`
  width: 725px;
  height: 387px;
  margin: 0 auto;
`;
import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 789px;
  margin: 0 auto;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 540px;

  @media (max-width: 376px) {
    width: 100vw;
    margin: 0;
    padding: 16px;
    border-radius: 0;
    background: none;
    box-shadow: none;
    gap: 24px;
  }
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
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
  line-height: 1.2;
  letter-spacing: 0;
  color: #000;

  @media (max-width: 376px) {
    font-size: 20px;
  }
`;

export const TotalAmount = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0;
  text-align: center;
  color: #555;

  @media (max-width: 376px) {
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }
`;

export const Chart = styled.div`
  flex: 1;
  min-height: 200px;
  display: flex;
  align-items: stretch;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    min-height: 100%;
  }

  @media (max-width: 376px) {
    width: 100%;
    height: 300px;
    overflow: visible;
  }
`;

export const ChartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: nowrap;
  font-size: 12px;
  color: #888;
  margin-top: 8px;
  flex-shrink: 0;

  span {
    font-size: 10px;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    text-align: center;
  }

  @media (max-width: 376px) {
    margin-top: 12px;
    gap: 4px;

    span {
      font-size: 9px;
      text-align: center;
    }
  }
`;

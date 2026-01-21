import styled from "styled-components";

export const Page = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const SectionTitle = styled.h1`
  font-weight: bold;
  font-size: 32px;
  letter-spacing: 0px;
  padding-top: 32px;
  padding-bottom: 32px;
  margin: 0;
`;

export const CalendarChart = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

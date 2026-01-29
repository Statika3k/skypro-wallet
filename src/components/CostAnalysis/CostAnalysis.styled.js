import styled from "styled-components";

export const Page = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 376px) {
    background: rgba(255, 255, 255, 1);
    padding: 0 10px;
    display: flex;
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h1`
  font-weight: bold;
  font-size: 32px;
  letter-spacing: 0px;
  padding-top: 32px;
  padding-bottom: 32px;
  margin: 0;

  @media (max-width: 376px) {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: start;
    vertical-align: middle;
    padding: 20px 10px;

    ${({ $small }) =>
      $small &&
      `
      font-size: 12px;
      padding: 10px 10px;
      color: #94a6be;
    `}
  }
`;

export const CalendarChart = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;


  @media (max-width: 376px) {
   display: flex;
    background: none;
 
`;

export const Period = styled.div`
  display: none;

  @media (max-width: 376px) {
    display: flex;
    width: 375px;
    height: 87px;
    position: fixed;
    top: 609px;
    left: -1px;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
    align-items: center;
    align-content: center;
    justify-content: center;
  }
`;

export const ButtonPeriod = styled.button`
  @media (max-width: 376px) {
    color: #fff;
    width: 343px;
    height: 39px;
    opacity: 1;
    gap: 12px;
    border-radius: 6px;
    border: 1px solid rgba(115, 52, 234, 1);
    padding: 12px;
    background: rgba(115, 52, 234, 1);
  }
`;

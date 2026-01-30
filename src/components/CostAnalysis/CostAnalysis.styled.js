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
    line-height: 100%;
    letter-spacing: 0px;
    text-align: start;
    vertical-align: middle;
    padding: 20px 10px;

    ${({ $small }) =>
      $small &&
      `
      font-size: 12px;
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
  }
`;

export const Period = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: -1px;
  right: 0;
  padding: 24px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
  z-index: 1000;

  @media screen and (max-width: 376px) {
    display: block;
  }
`;

export const ButtonPeriod = styled.button`
  @media (max-width: 376px) {
    color: #fff;
    width: 100%;
    height: 39px;
    opacity: 1;
    gap: 12px;
    border-radius: 6px;
    border: 1px solid rgba(115, 52, 234, 1);
    padding: 12px;
    background: rgba(115, 52, 234, 1);
  }
`;

export const SLoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
`;

export const SLoaderSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid rgba(115, 52, 234, 0.2);
  border-top-color: rgba(115, 52, 234, 1);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
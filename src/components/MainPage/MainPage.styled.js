import styled from 'styled-components';

export const SMain = styled.main`
    width: 100%;
    min-height: 100vh;
    background: rgba(244, 245, 246, 1);
`;

export const SPageTitle = styled.h1`
    width: 233px;
    height: 48px;
    color: rgba(0, 0, 0, 1);
    font-family: Montserrat;
    font-style: normal; /* исправлено с Bold на normal, так как это свойство не существует */
    font-size: 32px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: left;
    margin: 20px;
`;

export const SContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 34px;
    padding: 20px;
`;

export const STableContainer = styled.div`
    grid-column: 1 / span 8;
    position: relative;
`;

export const SStyledTable = styled.table`
    width:100vh;
    max-height: 618px;
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    background: rgba(255, 255, 255, 1);

`;

export const TableHeaderCell = styled.th`
    padding: 32px;
    font-family: Montserrat;
    font-style: Bold;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
    color: rgba(0, 0, 0, 1);
    border: none;
    text-align: left;
`;

export const HeaderCell = styled.th`
  padding-left: 32px;
  color: rgba(153, 153, 153, 1);
  border: none; 
  text-align: left;
`;

export const HeaderLine = styled.tr`
  height: 0; 
`;

export const HeaderLineBorder = styled.td`
  grid-column: 1 / -1;
  height: 0.5px;
  background-color: rgba(153, 153, 153, 1);
  border: none;
`;

export const SpacerRow = styled.tr`
  height: 4px;
`;


export const LineCell = styled.tr`
  height: 15px;
  gap: 14px;
`;

/* Ячейки с данными - без границ */
export const Cell = styled.td`
  height: 15px;
  padding: 14px 32px;
  border: none; 
  line-height: 15px;
`;

export const CellImg = styled.img`
  max-height: 15px;
  height: auto;
`;

export const SFormContainer = styled.div`
    grid-column: 9 / span 4; 
`;

export const SStyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 379px;
    height: 618px;
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    background: rgba(255, 255, 255, 1);
`;
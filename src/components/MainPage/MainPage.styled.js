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
  font-style: normal;
  font-size: 32px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0px;
  text-align: left;
  margin: 20px;
`;

export const SWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const SContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 34px;
  padding: 20px;
  width: 100%; 
  box-sizing: border-box;
`;

export const STableContainer = styled.div`
  grid-column: 1 / span 8;
  position: relative;
`;

export const SStyledTable = styled.table`
  width: 100%;
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
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
`;

export const SFormContent = styled.div`
  padding: 32px;
`;

export const SStyledForm = styled.form`
  width: 100%;
  max-height: 618px; 
  display: flex;
  flex-direction: column;  
`;

export const SFormTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  font-family: Montserrat;
  font-style: Bold;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0px;
`;

export const SFormLabel = styled.label`
  color: rgba(0, 0, 0, 1);
  font-family: Montserrat;
  font-style: SemiBold;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  margin-bottom: 16px;
`;

export const SFormInput = styled.input`
  outline: none;
  padding: 12px;
  color: #000;
  background: transparent;
  border: 0.5px solid rgba(153, 153, 153, 1);
  border-radius: 6px;
  font-size: 12px;
  font-family: Montserrat;
  margin-bottom: 24px;

  &::placeholder{
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(153, 153, 153, 1);
  letter-spacing: 0px;
  }

  &::-moz-placeholder{
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(153, 153, 153, 1);
  letter-spacing: 0px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom:24px;
`;


export const CategoryItem = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 30px;
  background: rgba(244, 245, 246, 1);
  width: fit-content;
  color: rgba(0, 0, 0, 1);
  font-family: Montserrat;
  font-style: Regular;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0%;
  text-align: center;
`;

export const CategoryImage = styled.img`
  margin-right: 10px;
`;

export const SFormButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12;
  padding: 12px;
  border: 0.5px solid rgba(115, 52, 234, 1);
  border-radius: 6px;
  background: rgba(115, 52, 234, 1);
  color: rgba(255, 255, 255, 1);
  font-family: Montserrat;
  font-style: SemiBold;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: center;

    &:hover {
    background-color: rgba(115, 52, 234, 0.8);
  }

  &:active {
    background-color: rgba(115, 52, 234, 0.6);
    transform: translateY(1px); 
  }
`;

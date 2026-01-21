import styled from 'styled-components';

export const SWrapper = styled.div`
  max-width: 1200px; 
  width: 100%;
  margin: 0 auto; 
  padding-left: 20px; 
  padding-right: 20px;
`;

export const SMain = styled.main`
  width: 100%;
  min-height: 100vh;
  margin-top: 36px;
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
  margin-bottom: 32px;
`;

export const SContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 34px;  
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
  padding-bottom: 24px;
  font-style: Bold;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0px;
`;

export const SFormLabel = styled.label`
  color: rgba(0, 0, 0, 1);  
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
  border: 0.5px solid ${(props) => (props.$isValid ? 'rgba(115, 52, 234, 1)' : 'rgba(242, 80, 80, 1)')};
  background-color: ${(props) => (props.$isValid ? 'rgba(241, 235, 253, 1)' : 'rgba(255, 235, 235, 1)')};
  border-radius: 6px;
  font-size: 12px;  
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
  background: ${(props) => (props.$isActive ? 'rgba(241, 235, 253, 1)' : 'rgba(244, 245, 246, 1)')};
  width: fit-content;
  color: ${(props) => (props.$isActive ? ' rgba(115, 52, 234, 1)' : 'rgba(0, 0, 0, 1)')};
  cursor: pointer; 
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
  gap: 12px;
  padding: 12px;
  border: 0.5px solid ${(props) => (props.$isActive ? 'rgba(115, 52, 234, 1)' : 'rgba(153, 153, 153, 1)')};
  border-radius: 6px;
  background: ${(props) => (props.$isActive ? 'rgba(115, 52, 234, 1)' : 'rgba(153, 153, 153, 1)')};
  color: rgba(255, 255, 255, 1);
  font-family: Montserrat;
  font-style: SemiBold;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: center;
  cursor: ${(props) => (props.$isActive ? 'pointer' : 'not-allowed')};
  opacity: ${(props) => (props.$isActive ? 1 : 0.6)};
  margin-top: 24px;

  &:hover {
    background-color: ${(props) => (props.$isActive ? 'rgba(115, 52, 234, 0.8)' : 'rgba(153, 153, 153, 1)')};
  }

  &:active {
    background-color: ${(props) => (props.$isActive ? 'rgba(115, 52, 234, 0.6)' : 'rgba(153, 153, 153, 1)')};
    transform: translateY(1px);
  }
`;
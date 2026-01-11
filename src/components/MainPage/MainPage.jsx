
import { Cell, CellImg, HeaderCell, HeaderLineBorder, LineCell, SContainer, SFormContainer, SMain, SpacerRow, SPageTitle, SStyledForm, SStyledTable, STableContainer, TableHeaderCell } from "./MainPage.styled";


function MainPage() {
  return (
    <SMain>     
      <SPageTitle>Мои расходы</SPageTitle>

      <SContainer>
        <STableContainer>
          <SStyledTable>
  <thead>
   {/* Заголовок таблицы */}
    <tr>
      <TableHeaderCell colSpan="5">Таблица расходов</TableHeaderCell>
    </tr>
    <tr>
      <HeaderCell>Описание</HeaderCell>
      <HeaderCell>Категория</HeaderCell>
      <HeaderCell>Дата</HeaderCell>
      <HeaderCell>Сумма</HeaderCell>
      <HeaderCell></HeaderCell>
    </tr>
    <tr>
      <HeaderLineBorder colSpan="5" />
    </tr>
    <SpacerRow />
  </thead>
  <tbody>
    <LineCell>
      <Cell>Пятерочка</Cell>
      <Cell>Еда</Cell>
      <Cell>03.07.2024</Cell>
      <Cell>3500</Cell>
      <Cell><img src="/images/корзина.svg" alt="корзина" /></Cell>
    </LineCell>
    <LineCell>
      <Cell>Яндекс Такси</Cell>
      <Cell>Транспорт</Cell>
      <Cell>03.07.2024</Cell>
      <Cell>730</Cell>
      <Cell><CellImg src="/images/корзина.svg" alt="корзина" /></Cell>
    </LineCell>
  </tbody>
</SStyledTable>
  </STableContainer>

        <SFormContainer>
          <SStyledForm>
          </SStyledForm>
        </SFormContainer>
      </SContainer>
    </SMain>
  );
}

export default MainPage;
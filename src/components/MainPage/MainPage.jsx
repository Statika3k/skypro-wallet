
import Header from "../Header/Header";
import {
  CategoryContainer,
  CategoryImage,
  CategoryItem,
  Cell,
  CellImg,
  HeaderCell,
  HeaderLineBorder,
  LineCell,
  SContainer,
  SFormButton,
  SFormContainer,
  SFormContent,
  SFormInput,
  SFormLabel,
  SFormTitle,
  SMain,
  SpacerRow,
  SPageTitle,
  SStyledForm,
  SStyledTable,
  STableContainer,  
  SWrapper,  
  TableHeaderCell,
} from "./MainPage.styled";

function MainPage() {
  return (
    <>
    <Header />
    <SWrapper>
      <SMain>        
          <SPageTitle>Мои расходы</SPageTitle>
          <SContainer>
            <STableContainer>
              <SStyledTable>
                <thead>
                  <tr>
                    <TableHeaderCell colSpan="5">
                      Таблица расходов
                    </TableHeaderCell>
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
                    <Cell>
                      <img src="/images/корзина.svg" alt="корзина" />
                    </Cell>
                  </LineCell>
                  <LineCell>
                    <Cell>Яндекс Такси</Cell>
                    <Cell>Транспорт</Cell>
                    <Cell>03.07.2024</Cell>
                    <Cell>730</Cell>
                    <Cell>
                      <CellImg src="/images/корзина.svg" alt="корзина" />
                    </Cell>
                  </LineCell>
                </tbody>
              </SStyledTable>
            </STableContainer>
            <SFormContainer>
              <SFormContent>
                <SStyledForm>
                  <SFormTitle>Новый расход</SFormTitle>
                  <SFormLabel>Описание</SFormLabel>
                  <SFormInput type="text" placeholder="Введите описание" />
                  <SFormLabel>Категория</SFormLabel>
                  <CategoryContainer>
                    <CategoryItem>
                      <CategoryImage src="images/еда.svg" alt="еда" />
                      Еда
                    </CategoryItem>
                    <CategoryItem>
                      <CategoryImage
                        src="images/транспорт.svg"
                        alt="транспорт"
                      />
                      Транспорт
                    </CategoryItem>
                    <CategoryItem>
                      <CategoryImage src="images/жилье.svg" alt="жилье" />
                      Жилье
                    </CategoryItem>
                    <CategoryItem>
                      <CategoryImage
                        src="images/развлечения.svg"
                        alt="развлечения"
                      />
                      Развлечения
                    </CategoryItem>
                    <CategoryItem>
                      <CategoryImage
                        src="images/образование.svg"
                        alt="образование"
                      />
                      Образование
                    </CategoryItem>
                    <CategoryItem>
                      <CategoryImage src="images/другое.svg" alt="другое" />
                      Другое
                    </CategoryItem>
                  </CategoryContainer>
                  <SFormLabel>Дата</SFormLabel>
                  <SFormInput type="date" placeholder="Введите дату" />
                  <SFormLabel>Сумма</SFormLabel>
                  <SFormInput type="number" placeholder="Введите сумму" />
                  <SFormButton>Добавить новый расход</SFormButton>
                </SStyledForm>
              </SFormContent>
            </SFormContainer>
          </SContainer>        
      </SMain>
    </SWrapper>
    </>
  );
}

export default MainPage;
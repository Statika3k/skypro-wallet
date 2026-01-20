
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
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
  const {tasks, loadTasks, addTask, deleteTaskFromState, isLoading,} = useContext(TaskContext);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [sum, setSum] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async () => {
    const newTask = {
      description,
      category,
      date,
      sum,
    };
    try {
      await addTask(newTask);
      await loadTasks();
    } catch (err) {
      console.error('Ошибка при добавлении:', err);
    }
  };

  const handleDelete = (taskId) => {
    deleteTaskFromState(taskId);
  };

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
                {tasks?.map((task, index) => (
  task && task.description ? (
                  <LineCell key={task.id || index}>
                    <Cell>{task.description}</Cell>
                    <Cell>{task.category}</Cell>
                    <Cell>{task.date}</Cell>
                    <Cell>{task.sum}</Cell>
                    <Cell>
                      <img src="/images/корзина.svg" alt="корзина" onClick={() => handleDelete(task._id)}/>
                    </Cell>
                  </LineCell>) : null
))
              }
                </tbody>
              </SStyledTable>
            </STableContainer>
            <SFormContainer>
              <SFormContent>
                <SStyledForm>
                  <SFormTitle>Новый расход</SFormTitle>
                  <SFormLabel>Описание</SFormLabel>
                  <SFormInput 
                    type="text" 
                    placeholder="Введите описание" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                  <SFormLabel>Категория</SFormLabel>
                  <CategoryContainer>
                    <CategoryItem>
                      <CategoryImage src="images/еда.svg" alt="еда" />
                      <input
                        type="radio"
                        name="category"
                        value="еда"
                        onChange={(e) => setCategory(e.target.value)}
                      />
                      Еда
                    </CategoryItem>
                    <CategoryItem>
                      <CategoryImage
                        src="images/транспорт.svg"
                        alt="транспорт"
                      />
                      <input
                        type="radio"
                        name="category"
                        value="транспорт"
                        onChange={(e) => setCategory(e.target.value)}
                      />
                      Транспорт
                    </CategoryItem>
                    <CategoryItem>
                      <CategoryImage src="images/жилье.svg" alt="жилье" />
                      <input
                        type="radio"
                        name="category"
                        value="жилье"
                        onChange={(e) => setCategory(e.target.value)}
                      />
                      Жилье
                    </CategoryItem>
                    <CategoryItem>
                      <CategoryImage
                        src="images/развлечения.svg"
                        alt="развлечения"
                      />
                      <input
                        type="radio"
                        name="category"
                        value="развлечения"
                        onChange={(e) => setCategory(e.target.value)}
                      />
                      Развлечения
                    </CategoryItem>
                    <CategoryItem>
                      <CategoryImage
                        src="images/образование.svg"
                        alt="образование"
                      />
                      <input
                        type="radio"
                        name="category"
                        value="образование"
                        onChange={(e) => setCategory(e.target.value)}
                      />
                      Образование
                    </CategoryItem>
                    <CategoryItem>
                      <CategoryImage src="images/другое.svg" alt="другое" />
                      <input
                        type="radio"
                        name="category"
                        value="другое"
                        onChange={(e) => setCategory(e.target.value)}
                      />
                      Другое
                    </CategoryItem>
                  </CategoryContainer>
                  <SFormLabel>Дата</SFormLabel>
                  <SFormInput 
                    type="date" 
                    placeholder="Введите дату" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}  
                    />
                  <SFormLabel>Сумма</SFormLabel>
                  <SFormInput 
                    type="number" 
                    placeholder="Введите сумму" 
                    value={sum}
                    onChange={(e) => setSum(e.target.value)}  
                    />
                  <SFormButton onClick={handleAddTask}>Добавить новый расход</SFormButton>
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
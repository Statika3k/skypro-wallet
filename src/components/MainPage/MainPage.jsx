
import { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import { TaskContext } from "../../context/TaskContext";
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
import { deleteTask } from "../../services/api";



function MainPage() {
 const {tasks, loadTasks, addTask, deleteTaskFromState, isLoading,} = useContext(TaskContext);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [sum, setSum] = useState('');

  const [isDescriptionValid, setIsDescriptionValid] = useState(null);
  const [isCategoryValid, setIsCategoryValid] = useState(null);
  const [isDateValid, setIsDateValid] = useState(null);
  const [isSumValid, setIsSumValid] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
  const descriptionValid = description.trim().length >= 4;
  setIsDescriptionValid(description.trim().length === 0 ? null : descriptionValid);

  const categoryValid = ['food', 'transport', 'housing', 'joy', 'education', 'others'].includes(category);
  setIsCategoryValid(category === '' ? null : categoryValid);

  const dateValid = !isNaN(new Date(date).getTime());
  setIsDateValid(date === '' ? null : dateValid);

  const sumNumber = parseFloat(sum);
  const sumValid = !isNaN(sumNumber) && sumNumber > 0;
  setIsSumValid(sum === '' ? null : sumValid);

  if (
    description.trim().length >= 4 &&
    ['food', 'transport', 'housing', 'joy', 'education', 'others'].includes(category) &&
    !isNaN(new Date(date).getTime()) &&
    sumNumber > 0
  ) {
    setIsFormValid(true);
  } else {
    setIsFormValid(false);
  }
}, [description, category, date, sum]);

  const handleAddTask = async (e) => {
  e.preventDefault();
    console.log("Клик по кнопке");
    const newTask = {
      description,
      category,
      date,
      sum,
    };
    try {
      await addTask(newTask);
      await loadTasks();
      setDescription('');
      setCategory('');
      setDate('');
      setSum('');
    } catch (err) {
      console.error('Ошибка при добавлении:', err);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      deleteTaskFromState(taskId);
    } catch (err) {
      console.error('Ошибка при удалении:', err);
    }
  };

  function formatDate(isoString) {
    if (!isoString) return '';
    const dateObj = new Date(isoString);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}.${month}.${year}`;
  }

  const categoryNames = {
    food: 'Еда',
    transport: 'Транспорт',
    housing: 'Жилье',
    joy: 'Развлечения',
    education: 'Образование',
    others: 'Другое',
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
                        <Cell>{categoryNames[task.category] || task.category}</Cell>
                        <Cell>{formatDate(task.date)}</Cell>
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
                    $isValid={isDescriptionValid}
                    />
                  <SFormLabel>Категория {category === '' && <span style={{color: 'red', marginLeft: '4px'}}>*</span>}</SFormLabel>
                 <CategoryContainer>
                    <CategoryItem
                      $isActive={category === 'food'}
                      onClick={() => setCategory('food')}
                    >
                      <CategoryImage src="images/еда.svg" alt="еда"/>
                      Еда
                    </CategoryItem>
                    <CategoryItem
                      $isActive={category === 'transport'}
                      onClick={() => setCategory('transport')}
                    >
                      <CategoryImage src="images/транспорт.svg" alt="транспорт" />
                      Транспорт
                    </CategoryItem>
                    <CategoryItem
                      $isActive={category === 'housing'}
                      onClick={() => setCategory('housing')}
                    >
                      <CategoryImage src="images/жилье.svg" alt="жилье" />
                      Жилье
                    </CategoryItem>
                    <CategoryItem
                      $isActive={category === 'joy'}
                      onClick={() => setCategory('joy')}
                    >
                      <CategoryImage src="images/развлечения.svg" alt="развлечения" />
                      Развлечения
                    </CategoryItem>
                    <CategoryItem
                      $isActive={category === 'education'}
                      onClick={() => setCategory('education')}
                    >
                      <CategoryImage src="images/образование.svg" alt="образование" />
                      Образование
                    </CategoryItem>
                    <CategoryItem
                      $isActive={category === 'others'}
                      onClick={() => setCategory('others')}
                    >
                      <CategoryImage src="images/другое.svg" alt="другое" />
                      Другое
                    </CategoryItem>
                  </CategoryContainer>
                  <SFormLabel>Дата</SFormLabel>
                  <SFormInput 
                    type="date" 
                    placeholder="Введите дату" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}  
                    $isValid={isDateValid}
                    />
                  <SFormLabel>Сумма</SFormLabel>
                  <SFormInput 
                    type="number" 
                    placeholder="Введите сумму" 
                    value={sum}
                    onChange={(e) => setSum(e.target.value)}  
                    $isValid={isSumValid}
                    />
                  <SFormButton type="button" onClick={handleAddTask} $isActive={isFormValid} disabled={!isFormValid}>Добавить новый расход</SFormButton>
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
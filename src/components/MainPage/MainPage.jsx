import { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import { TaskContext } from "../../context/TaskContext";
import { deleteTask } from "../../services/api";
import {
  CategoryContainer,
  CategoryImage,
  CategoryItem,
  Cell,
  CellImg,
  HeaderCell,
  HeaderLineBorder,
  LineCell,
  SAddButton,
  SAddButtonContainer,
  SContainer,
  SDeleteButton,
  SDeleteButtonContainer,
  SFormButton,
  SFormContainer,
  SFormContent,
  SFormInput,
  SFormLabel,
  SFormTitle,
  SLoaderOverlay,
  SLoaderSpinner,
  SMain,
  SpacerRow,
  SPage,
  SPageButton,
  SPageMyButton,
  SPageMyTransaction,
  SPageNewTransaction,
  SPageTitle,
  SStyledForm,
  SStyledTable,
  STableContainer,
  SWrapper,
  TableHeaderCell,
} from "./MainPage.styled";

function MainPage() {
  const {tasks, loadTasks, addTask, deleteTaskFromState, isLoading} = useContext(TaskContext);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [sum, setSum] = useState('');
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);  

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(max-width: 375px)');
    setIsMobile(mediaQuery.matches);
    
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  

  const descriptionValid = description.trim().length >= 4;
  const categoryValid = [
    "food",
    "transport",
    "housing",
    "joy",
    "education",
    "others",
  ].includes(category);
  const dateValid = date !== "" && !isNaN(new Date(date).getTime());
  const sumNumber = parseFloat(sum);
  const sumValid = sum !== "" && !isNaN(sumNumber) && sumNumber > 0;

  const isFormValid =
    descriptionValid &&
    categoryValid &&
    dateValid &&
    sumValid &&
    description.trim() !== "" &&
    category !== "" &&
    date !== "" &&
    sum !== "";

  const handleAddTask = async (e) => {
    e.preventDefault();

    if (isSubmitting || !isFormValid) return;
    setIsSubmitting(true);

    const newTask = {
      description,
      category,
      date,
      sum,
    };
    try {
      await addTask(newTask);           
      setDescription('');
      setCategory('');
      setDate('');
      setSum('');
      
      if (isMobile) {
        setIsAddFormOpen(false);
      }
    } catch (err) {
      console.error('Ошибка при добавлении:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      deleteTaskFromState(taskId);
      setSelectedTaskId(null);
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

  const handleRowClick = (taskId) => {
    if (isMobile && !isAddFormOpen) {
      setSelectedTaskId(prevId => (prevId === taskId ? null : taskId));
    }
  };
  
  const handleBackClick = () => {
    setIsAddFormOpen(false);
    setSelectedTaskId(null);    
    setDescription('');
    setCategory('');
    setDate('');
    setSum('');
  };

  return (
    <>
      <Header 
        isAddFormOpen={isAddFormOpen} 
        setIsAddFormOpen={setIsAddFormOpen}
      />
      {isLoading && (
        <SLoaderOverlay>
          <SLoaderSpinner />
        </SLoaderOverlay>
      )}
      <SWrapper>
        <SMain>
          <SPage>
            {isMobile && isAddFormOpen ? (
              <SPageMyTransaction onClick={handleBackClick}>
                <img src="/images/назад.svg" alt="назад" />
                <SPageMyButton>Мои расходы</SPageMyButton>
              </SPageMyTransaction>
            ) : (
              <>
                <SPageTitle>
                  {isMobile && isAddFormOpen ? "Новый расход" : "Мои расходы"}
                </SPageTitle>
                {isMobile && !isAddFormOpen && (
                  <SPageNewTransaction onClick={() => {
                    setIsAddFormOpen(true);
                    setSelectedTaskId(null);
                  }}>
                    <img src="/images/плюс.svg" alt="плюс" />
                    <SPageButton>Новый расход</SPageButton>
                  </SPageNewTransaction>
                )}
              </>
            )}
          </SPage>
          
          <SContainer>
            {isMobile ? (
              isAddFormOpen ? (
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
                        $isValid={description.trim() === '' ? null : descriptionValid}
                      />
                      <SFormLabel>
                        Категория{" "}
                        {category === '' && (
                          <span style={{ color: 'red', marginLeft: '4px' }}>*</span>
                        )}
                      </SFormLabel>
                      <CategoryContainer>
                        <CategoryItem
                          $isActive={category === 'food'}
                          onClick={() => setCategory('food')}
                        >
                          <CategoryImage src="images/еда.svg" alt="еда" />
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
                        $isValid={date === '' ? null : dateValid}
                      />
                      <SFormLabel>Сумма</SFormLabel>
                      <SFormInput
                        type="number"
                        placeholder="Введите сумму"
                        value={sum}
                        onChange={(e) => setSum(e.target.value)}
                        $isValid={sum === '' ? null : sumValid}
                      />
                    </SStyledForm>
                  </SFormContent>
                </SFormContainer>
              ) : (
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
                        <HeaderCell className="header_img"></HeaderCell>
                      </tr>
                      <tr>
                        <HeaderLineBorder colSpan="5" />
                      </tr>
                      <SpacerRow />
                    </thead>
                    <tbody>
                      {tasks?.map((task) => {
                        if (!task || !task.description) return null;
                        const isSelected = task._id === selectedTaskId;
                        return (
                          <LineCell
                            key={task._id}
                            $isSelected={isSelected}
                            onClick={() => handleRowClick(task._id)}
                          >
                            <Cell $isSelected={isSelected}>{task.description}</Cell>
                            <Cell $isSelected={isSelected}>{categoryNames[task.category] || task.category}</Cell>
                            <Cell $isSelected={isSelected}>{formatDate(task.date)}</Cell>
                            <Cell $isSelected={isSelected}>{task.sum}</Cell>
                            <Cell className="img">
                              <CellImg
                                src="/images/корзина.svg"
                                alt="корзина"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(task._id);
                                }}
                              />
                            </Cell>
                          </LineCell>
                        );
                      })}
                    </tbody>
                  </SStyledTable>
                </STableContainer>
              )
            ) : (              
              <>
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
                        <HeaderCell className="header_img"></HeaderCell>
                      </tr>
                      <tr>
                        <HeaderLineBorder colSpan="5" />
                      </tr>
                      <SpacerRow />
                    </thead>
                    <tbody>
                      {tasks?.map((task) => {
                        if (!task || !task.description) return null;
                        return (
                          <LineCell key={task._id}>
                            <Cell>{task.description}</Cell>
                            <Cell>{categoryNames[task.category] || task.category}</Cell>
                            <Cell>{formatDate(task.date)}</Cell>
                            <Cell>{task.sum}</Cell>
                            <Cell className="img">
                              <CellImg
                                src="/images/корзина.svg"
                                alt="корзина"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(task._id);
                                }}
                              />
                            </Cell>
                          </LineCell>
                        );
                      })}
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
                        $isValid={description.trim() === '' ? null : descriptionValid}
                      />
                      <SFormLabel>
                        Категория{" "}
                        {category === '' && (
                          <span style={{ color: 'red', marginLeft: '4px' }}>*</span>
                        )}
                      </SFormLabel>
                      <CategoryContainer>
                        <CategoryItem
                          $isActive={category === 'food'}
                          onClick={() => setCategory('food')}
                        >
                          <CategoryImage src="images/еда.svg" alt="еда" />
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
                        $isValid={date === '' ? null : dateValid}
                      />
                      <SFormLabel>Сумма</SFormLabel>
                      <SFormInput
                        type="number"
                        placeholder="Введите сумму"
                        value={sum}
                        onChange={(e) => setSum(e.target.value)}
                        $isValid={sum === '' ? null : sumValid}
                      />
                      <SFormButton
                        type="button"
                        onClick={handleAddTask}
                        $isActive={isFormValid && !isSubmitting}
                        disabled={!isFormValid || isSubmitting}
                      >
                        {isSubmitting ? 'Добавление...' : 'Добавить новый расход'}
                      </SFormButton>
                    </SStyledForm>
                  </SFormContent>
                </SFormContainer>
              </>
            )}
          </SContainer>
        </SMain>
      </SWrapper>
      
      {isMobile && !isAddFormOpen && selectedTaskId && (
        <SDeleteButtonContainer $isVisible={true}>
          <SDeleteButton onClick={() => handleDelete(selectedTaskId)}>
            Удалить расход
          </SDeleteButton>
        </SDeleteButtonContainer>
      )}
      
      {isMobile && isAddFormOpen && (
        <SAddButtonContainer>
          <SAddButton
            onClick={handleAddTask}
            disabled={!isFormValid || isSubmitting}
            style={{ 
              opacity: (isFormValid && !isSubmitting) ? 1 : 0.6, 
              cursor: (isFormValid && !isSubmitting) ? 'pointer' : 'not-allowed',
              background: (isFormValid && !isSubmitting) ? 'rgba(115, 52, 234, 1)' : 'rgba(153, 153, 153, 1)'
            }}
          >
            {isSubmitting ? 'Добавление...' : 'Добавить новый расход'}
          </SAddButton>
        </SAddButtonContainer>
      )}
    </>
  );
}

export default MainPage;
import axios from 'axios';

const API_URL = "https://wedev-api.sky.pro/api/transactions";

function getAuthHeaders() {
  const token = localStorage.getItem('authToken');
  console.log('Токен', token );
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// Получить список транзакций
export async function fetchTasks() {
  try {
    const response = await axios.get(API_URL, {
      headers: getAuthHeaders(),
    });
    console.log('Ответ сервера', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Ошибка при получении транзакций');
  }}

// Добавить новую транзакцию
export async function addTasks(taskData) {
  const sumValue = parseFloat(taskData.sum);
  if (isNaN(sumValue) || sumValue <= 0) {
    throw new Error('Некорректное значение суммы');
  }

  const dateObj = new Date(taskData.date);
  const month = dateObj.getMonth() + 1; 
  const day = dateObj.getDate();        
  const year = dateObj.getFullYear();

  const formattedDate = `${month}-${day}-${year}`; 

  const data = {
    description: taskData.description,
    sum: sumValue,
    category: taskData.category,
    date: formattedDate,
  };

  console.log('Отправляемые данные:', data);

  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        'Content-Type': 'text/plain', 
        ...getAuthHeaders(),
      },
    });
    console.log('Ответ сервера при добавлении:', response.data);
    return response.data.transaction; 
  } catch (error) {
    if (error.response) {
      console.error('Детали ошибки API:', error.response.data);
    }
    throw new Error('Ошибка при добавлении транзакции');
  }
}

// Удалить транзакцию по id
export async function deleteTask(id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: getAuthHeaders(),
    });
  } catch (error) {
    console.error('Ошибка при удалении транзакции:', error);
    if (error.response) {
      console.error('Ответ сервера:', error.response);
    }
    throw new Error('Ошибка при удалении транзакции');
  }
}

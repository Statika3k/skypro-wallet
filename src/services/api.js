import axios from 'axios';

const API_URL = "https://wedev-api.sky.pro/api/transactions";

function getAuthHeaders() {
  const token = localStorage.getItem('authToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// Получить список транзакций
export async function fetchTasks() {
  try {
    const response = await axios.get(API_URL, {
      headers: getAuthHeaders(),
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error('Ошибка при получении транзакций');
  }}

// Добавить новую транзакцию
export async function addTask(taskData) {
  const data = {
    description: taskData.description, 
    sum: taskData.sum,
    category: taskData.category,
    date: taskData.date || new Date().toISOString(),
  };

  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        'Content-Type': 'text/plain', 
        ...getAuthHeaders(),
      },
    });
    return response.data.tasks; 
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Некорректные данные для транзакции');
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
    return response.data.tasks;
  } catch (error) {
    console.error('Ошибка при удалении транзакции:', error);
    if (error.response) {
      console.error('Ответ сервера:', error.response);
    }
    throw new Error('Ошибка при удалении транзакции');
  }
}
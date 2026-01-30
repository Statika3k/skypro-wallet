import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/transactions";

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function fetchTasks() {
  try {
    const response = await axios.get(API_URL, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении транзакций:", error);
    throw new Error("Ошибка при получении транзакций");
  }
}

export async function addTasks(taskData) {
  const sumValue = parseFloat(taskData.sum);
  if (isNaN(sumValue) || sumValue <= 0) {
    throw new Error("Некорректное значение суммы");
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

  try {    
    const response = await axios.post(API_URL, data, {
      headers: {
        "Content-Type": "",
        ...getAuthHeaders(),
      },
    });    

    if (
      response.data.transactions &&
      Array.isArray(response.data.transactions)
    ) {
      return response.data.transactions;
    }

    return response.data.transaction || response.data;
  } catch (error) {
    console.error("Ошибка при добавлении транзакции:", error);
    if (error.response) {
      console.error("Детали ошибки:", error.response.data);
    }
    throw new Error("Ошибка при добавлении транзакции");
  }
}

export async function deleteTask(id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при удалении транзакции:", error);
    if (error.response) {
      console.error("Ответ сервера:", error.response);
    }
    throw new Error("Ошибка при удалении транзакции");
  }
}

import { useState } from "react";
import { addTasks, fetchTasks } from "../services/api";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadTasks = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const data = await fetchTasks();
      console.log("Полученные транзакции:", data);
      setTasks(data);
    } catch (err) {
      console.error("Ошибка при загрузке задач:", err);
    } finally {
      setIsLoading(false);
    }
  } else {
    console.warn("Токен не найден");
    setIsLoading(false);
  }
};

 const addTask = async (taskData) => {
  try {
    const newTask = await addTasks(taskData);
    setTasks((prev) => [...prev, newTask]);
  } catch (error) {
    console.error("Ошибка при добавлении транзакции:", error);
  }
};

  const deleteTaskFromState = (taskId) => {
    setTasks((prev) => prev.filter((task) => task._id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        deleteTaskFromState,
        loadTasks,
        isLoading,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
import { useState } from "react";
import { fetchTasks } from "../services/api";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadTasks = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      fetchTasks()
        .then((data) => {
          setTasks(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Ошибка при загрузке задач:", err);
          setIsLoading(false);
        });
    } else {
      console.warn("Токен не найден");
      setIsLoading(false);
    }
  };

  const addTask = (taskData) => {
    setTasks((prev) => [...prev, taskData]);
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

import { useCallback, useState } from "react";
import { addTasks, fetchTasks } from "../services/api";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadTasks = useCallback(async () => {
    try {
      const data = await fetchTasks();      
      if (!Array.isArray(data)) {
        console.error('Данные не являются массивом:', data);
        setTasks([]);
      } else {
      setTasks(data);
      }
    } catch (err) {
      console.error("Ошибка при загрузке задач:", err);
      setTasks([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

 const addTask = useCallback (async (taskData) => {
  try {    
    const newTask = await addTasks(taskData);    

     if (Array.isArray(newTask)) {
        setTasks(newTask);        
        return newTask[newTask.length - 1]; 
      }


    setTasks((prev) => {
      const updated = [...prev, newTask];        
        return updated;
      });    
    return newTask;
  } catch (error) {
    console.error("Ошибка при добавлении транзакции:", error);
    throw error;
  }
}, []);

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
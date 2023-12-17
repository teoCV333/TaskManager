import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const {
      item: tasks,
      saveItem: saveTask,
      loading,
      error,
    } = useLocalStorage('TASKLIST_V1', [])
    const [filterWord, setFilterWord] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completed = tasks.filter((task) => !!task.completed) //doble negacion convierte en booleano
    const tasksCompleted = completed.length;
    const total = tasks.length;

    const filtered = tasks.filter((task) => {
      const taskText = task.text.toLowerCase();
      const filterValue = filterWord.toLowerCase();
      return taskText.includes(filterValue); 
    });

    const addTask = (text) => {
      const newTasks = [...tasks];
      newTasks.push({
        text,
        completed: false,
      })
      saveTask(newTasks);
    }

    const changeTaskStatus = (index) => {
      const newTasks = [...tasks]
      newTasks[index].completed = !newTasks[index].completed
      saveTask(newTasks)
    }

    const deleteTask = (index) => {
      const newTasks = [...tasks]
      newTasks.splice(index, 1)
      saveTask(newTasks)
    }

    return (
      <TodoContext.Provider
        value={{
          loading,
          error,
          tasksCompleted,
          tasks,
          total,
          filterWord,
          setFilterWord,
          filtered,
          deleteTask,
          changeTaskStatus,
          openModal,
          setOpenModal,
          addTask
        }}
      >
        {children}
      </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };
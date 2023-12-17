import './App.css';
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodosLoading } from '../TodosLoading'
//import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext'
import React from 'react'
import { Modal } from '../Modal'
import { DeleteIcon } from '../TaskIcon/DeleteIcon'
import { TodoForm } from '../TodoForm';

function AppUI() {

  const {
    loading,
    error,
    tasks,
    filtered,
    deleteTask,
    changeTaskStatus,
    openModal,
    setOpenModal

  } = React.useContext(TodoContext);

  return (
    <>
      <div className="row">
        <div className="header-info">
          <TodoCounter />
          <TodoSearch />
          <div>
            <CreateTodoButton />
            {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
            )}
          </div>
        </div>
        <div className="todo-list">
          <TodoList>
            {loading &&
              (Array.from({ length: 9 }, (_, index) => (
                <TodosLoading key={index} />
              )))}
            {/*  {{error &&<TodosError/>}   */}
            {!loading && tasks.length === 0 && <EmptyTodos />}
            {filtered.map((task, index) => (
              <TodoItem
                key={task.text}
                text={task.text}
                completed={task.completed}
                onComplete={() => changeTaskStatus(index)}
                onDelete={() => deleteTask(index)}
              />
            ))}
          </TodoList>
        </div>
      </div>
    </>
  )
}

export { AppUI }

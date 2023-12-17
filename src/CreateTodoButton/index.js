import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {

    const { setOpenModal } = React.useContext(TodoContext);

    return (
        <button className="create-todo"
        onClick={() => { setOpenModal(state => !state)}}>Agregar nueva tarea</button>
    );
}

export { CreateTodoButton };
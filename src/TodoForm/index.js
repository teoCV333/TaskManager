import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';
 
function TodoForm() {

    const { addTask, setOpenModal } = React.useContext(TodoContext);
    const [ newTaskValue, setNewTaskValue ] = React.useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(newTaskValue);
        addTask(newTaskValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTaskValue(event.target.value);
    };

    return (
      <form onSubmit={onSubmit}>
        <div className="TodoForm-inputContainer">
          <label>Ingresa tu nueva tarea</label>
          <textarea 
          type="text"
          placeholder="Sacar al perro"
          value={newTaskValue}
          onChange={onChange} 
           />
        </div>
        <div className="TodoForm-buttonContainer">
          <button
            className="TodoForm-button--cancel"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button type='submit' className="TodoForm-button--add">Aceptar</button>
        </div>
      </form>
    )
}

export { TodoForm };    
import React from 'react'; 
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {

    const { tasksCompleted, total } = React.useContext(TodoContext);
    

    return (
      <div className="list-counter-container">
        <ul className="list-counter">
          <li>Completadas: {tasksCompleted}</li>
          <li>Pendientes: {total - tasksCompleted}</li>
          <li>Total: {total}</li>
        </ul>
      </div>
    )
}

export { TodoCounter };
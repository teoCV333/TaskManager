import React from 'react';
import './TodoItem.css'
import { CheckIcon } from '../TaskIcon/CheckIcon';
import { DeleteIcon } from '../TaskIcon/DeleteIcon';

function TodoItem(props) {

  return (
    <li className="todo-item">
      <div  
        className="select-item"
        onClick={props.onComplete}> 
        <CheckIcon completed={props.completed}/>
        <p className={`item-text ${props.completed && 'item-text-complete'}`}>
          {props.text}
        </p>
      </div>
      <div className="delete-item" onClick={props.onDelete}>
       <DeleteIcon/>
      </div>
    </li>
  )
}

export { TodoItem }

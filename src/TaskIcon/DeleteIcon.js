import React from 'react'
import { TaskIcon } from '.';

function DeleteIcon({ onDelete }) {
  return (
    <TaskIcon 
      type="delete" 
      color="black"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon }

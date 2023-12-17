import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {

   const { filterWord, setFilterWord } = React.useContext(TodoContext);

    return (
      <input
        placeholder="Buscar tarea"
        value={filterWord}
        onChange={(event) => setFilterWord(event.target.value)}
      />
    )
}

export { TodoSearch };
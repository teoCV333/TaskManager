import React from 'react';

function useLocalStorage(itemName, initValue) {

  const [item, setItem] = React.useState(initValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  let parsedItems;

  React.useEffect(() => {
    setTimeout(() => {
      try {

        const localItems = localStorage.getItem(itemName);

        if (!localItems) {
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItems = initValue;
          setItem(parsedItems);
        } else {
          parsedItems = JSON.parse(localItems);
          setItem(parsedItems);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 3000);
  }, []);

  const saveItem = (newTasks) => {
    localStorage.setItem(itemName, JSON.stringify(newTasks))
    setItem(newTasks)
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage };

/* const defTodos = [
  { text: 'Pasear el perro', completed: true },
  { text: 'Estudiar ingles', completed: false },
  { text: 'Estudiar Biorobotica', completed: false },
  { text: 'Prender velitas', completed: true },
  { text: 'Prueba', completed: true },
]; */

/* localStorage.setItem('TASKLIST_V1', JSON.stringify(defTodos)); */
/* localStorage.removeItem('TASKLIST_V1'); */
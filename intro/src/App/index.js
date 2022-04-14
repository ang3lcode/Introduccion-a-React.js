import React from 'react';
import { AppUi } from './AppUi';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed:false }
]

function App() { // componente  con la sintaxis de react
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed ).length;
  const totalTodos = todos.length;
  
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLowercase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
    // todos[todoIndex].completed = true;
    
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  };



  return (     // en react nos pide usar solo una etiqueta, si ponemos mas no nos permite//
  <AppUi 
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo ={completeTodo}
    deleteTodo={deleteTodo}
  />
  );
}

export default App;
// {} con las llaves , llamamos variables en js,
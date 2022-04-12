import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem'; 
import { CreateTodoButton} from './CreateTodoButton';
// import './App.css';


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
  
  return (     // en react nos pide usar solo una etiqueta, si ponemos mas no nos permite//
    <React.Fragment> 
    {/* una etiqueta por componente */}
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}

      />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
// {} con las llaves , llamamos variables en js,
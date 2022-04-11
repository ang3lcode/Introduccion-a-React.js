import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem'; 
import { CreateTodoButton} from './CreateTodoButton';
// import './App.css';


const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed:false },
  { text: 'Llorar con la llorona', completed:false }
]

function App() { // componente  con la sintaxis de react
  return (     // en react nos pide usar solo una etiqueta, si ponemos mas no nos permite//
    <React.Fragment> 
    {/* una etiqueta por componente */}
      <TodoCounter />
      <TodoSearch />
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
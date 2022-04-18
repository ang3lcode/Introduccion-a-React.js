import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem'; 
import { CreateTodoButton} from '../CreateTodoButton';
// import './App.css';

function AppUi({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
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
          {/* estado de carga */}
            {loading && <p>Estamos cargando</p>}
            {error && <p>me da anciedad...</p>}
            {(!loading && !searchedTodos.length) && <p>menos ansiedad</p>} 


            {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              ondelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <CreateTodoButton />
        </React.Fragment>
    );
}

export {AppUi};
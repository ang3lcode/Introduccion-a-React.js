import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem'; 
import { CreateTodoButton} from '../CreateTodoButton';
// import './App.css';

function AppUi() {
    return (
        <React.Fragment> 
        {/* una etiqueta por componente */}
          <TodoCounter/>
          <TodoSearch/>
          
          <TodoContext.Consumer>
            { ({
              error,
              loading,
              completeTodo,
              deleteTodo,
              searchedTodos 
              }) => (
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
                )}
          </TodoContext.Consumer>
          
          <CreateTodoButton />
        </React.Fragment>
    );
}

export {AppUi};
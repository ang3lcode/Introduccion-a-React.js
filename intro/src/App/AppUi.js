import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem'; 
import { TodoForm } from '../TodoForm'; 
import { CreateTodoButton} from '../CreateTodoButton';
import { Modal } from '../Modal';
// import './App.css';

function AppUi() {
  const {
    error,
    loading,
    completeTodo,
    deleteTodo,
    searchedTodos,
    openModal, 
    setOpenModal, 
    } = React.useContext(TodoContext);

    return (
        <React.Fragment> 
        {/* una etiqueta por componente */}
          <TodoCounter/>
          <TodoSearch/>
          
          
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

              {!!openModal && (
                <Modal>
                  <TodoForm />
                </Modal>    
              )}
          
          <CreateTodoButton 
          setOpenModal= {setOpenModal} 
          openModal={openModal} />
        </React.Fragment>
  );
}

export {AppUi};
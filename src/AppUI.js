import React from 'react';
import  { TodoContext }  from './todoContext';
import  TodoCounter  from './components/TodoCounter';
import  TodoSearch  from './components/TodoSearch';
import  TodoList  from './components/TodoList';
import  TodoItem  from './components/TodoItem';
import  CreateTodoButton  from './components/CreateTodoButton';
import TodoForm from './components/Form';
import {Modal} from './components/modal';
import { EmptyTodos }  from './components/Skeleton/EmptyTodos'
import { TodosError } from './components/Skeleton/TodosError'
import { TodosLoading } from './components/Skeleton/TodosLoading'
import './components/css/appUi.css'
function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
 
  
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal &&(
<Modal >
<TodoForm />
</Modal>

      )}

      <CreateTodoButton 
      setOpenModal={setOpenModal}
      />
    </>
  );
}
export  { AppUI }
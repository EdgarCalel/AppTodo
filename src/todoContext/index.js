import React from "react";
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props) {
 const {
    item:todosList, 
    saveItem: saveTodos,
  loading, error}= useLocalStorage('TODOS_V1',[]);
  
    const [search, setSearch] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    
    
    const completeTodos = todosList.filter(todo=> !!todo.completed).length
    const totalTodos =todosList.length
    
    let searchedTodos = []
  
    if (!search.length >=1) {
      searchedTodos = todosList
    }else{
      searchedTodos = todosList.filter(todo=>{
        const todoText = todo.text.toLowerCase()
        const searchText = search.toLowerCase()
       return  todoText.includes(searchText)
      })
    }
  
    const addTodo=(text)=>{
      const newTodos =[...todosList]
      newTodos.push({
        completed:false,
        text

      })
      saveTodos(newTodos)
          }
    const completeTodo=(text)=>{
      const todoIndex = todosList.findIndex(todo =>todo.text === text)
      const newTodos =[...todosList]
      newTodos[todoIndex].completed=true;
      saveTodos(newTodos)
          }
  
      const deleteTodo=(text)=>{
      const todoIndex = todosList.findIndex(todo =>todo.text === text)
      const newTodos =[...todosList]
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos)
          }
  return (
  
      <TodoContext.Provider value={{
 error,
 loading,
 completeTodos,
 totalTodos,
 search, 
 setSearch,
 searchedTodos,
 deleteTodo,
 completeTodo,
 openModal,
 setOpenModal,
 addTodo
      }}>
          {props.children}
      </TodoContext.Provider>
 
  )
}

export { TodoContext, TodoProvider}

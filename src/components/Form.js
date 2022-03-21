import React from 'react'
import { TodoContext } from '../todoContext'
import './css/todoForms.css'

function Form() {
  const [ newTodoValue, setNewTodoValue ] = React.useState('')
    const {
       addTodo, 
       setOpenModal
       } = React.useContext(TodoContext)
   
    const onChange =(event)=>setNewTodoValue(event.target.value)

    const onCancel = ()=>{
      setOpenModal(false)
    }
    const onSubmit = (e)=>{
    e.preventDefault()
      addTodo(newTodoValue)
      setOpenModal(false)

    }
  return (
    <>
    <form onSubmit={onSubmit}>
<label >Escribe tu nueva tarea.</label>
<textarea name="" id="" cols="30" rows="10" 
value={newTodoValue}
onChange={onChange}
placeholder='Escribe la nueva tarea'
/>
<div className="TodoForm-buttonContainer">
    <button 
    type='button' 
    onClick={onCancel}
    className="TodoForm-button TodoForm-button-cancel"
    > cancelar </button>

    <button 
    type='submit' 
    className="TodoForm-button TodoForm-button-add"
    > Añadir </button>
</div>
    </form>

    </>
  )
}

export default Form
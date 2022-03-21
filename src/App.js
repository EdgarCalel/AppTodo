import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from './todoContext/index'

// import './App.css';
// const defaulttodos=[
//   {text:'Cortar cebolla', completed:true},
//   {text:'Tormar el curso de intro a react', completed:true},
//   {text:'manzanasss', completed:false},
//   {text:'manzas', completed:false}
// ];



function App() {
  return (
    <TodoProvider>
 <AppUI />
    </TodoProvider>
  );
}

export default App;

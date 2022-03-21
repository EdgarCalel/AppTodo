import React from 'react';
import '../css/todosLoading.css'
import LogoFondo from '../../assets/undraw_mobile_development_re_wwsn.svg'

function TodosLoading({error}) {

 return (
     <>
     <div className='Principal_loading'>
     <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <i class="fa-solid fa-spinner"></i><p className="LoadingTodo-text">Cargando to Dos...</p>
        <span className="LoadingTodo-deleteIcon"></span>
    </div><br />
    <img className='Principal_loading--img' src={LogoFondo} alt="" width={300} />
     </div>
     </>
 )
}
export { TodosLoading };
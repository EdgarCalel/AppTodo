import React from "react";
import './css/TodoItem.css'
function TodoItem(props){


    return(
      <>
      <div className="Principal_item">
        <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
        >
        <i className="fa-solid fa-check"></i>
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
   
   >
          {props.text}
        </p>
        <span className="Icon Icon-delete"
        onClick={props.onDelete}>
       <i className="fa-solid fa-xmark"></i>
        </span>
      </li>
          </div>
      </>
    );
}



export default TodoItem
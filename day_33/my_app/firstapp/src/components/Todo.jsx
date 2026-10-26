import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
export const Todo = ({task, toggleComplete}) => {
  return (
    <div className="todo">
      <P onClick={() => toggleComplete(task.id)} className ={`${task.completed ? 'completed': " "}`} >{task.task}</P>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className="pen-to-square" />
        <FontAwesomeIcon icon={faTrash} className="trash" />
      </div>
    </div>
  );
};

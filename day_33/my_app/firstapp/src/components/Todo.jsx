import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
export const Todo = ({task}) => {
  return (
    <div className="todo">
      <P>{task.task}</P>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className="pen-to-square" />
        <FontAwesomeIcon icon={faTrash} className="trash" />
      </div>
    </div>
  );
};

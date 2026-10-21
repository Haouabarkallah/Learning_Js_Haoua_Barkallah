import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
export const Todo = () => {
  return (
    <div className="todo">
      <P>Go to school</P>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className="pen-to-square" />
        <FontAwesomeIcon icon={faTrash} className="trash" />
      </div>
    </div>
  );
};

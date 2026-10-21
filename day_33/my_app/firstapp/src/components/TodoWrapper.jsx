import React, {useState} from 'react';
import { TodoForm } from './TodoForm';

export const TodoWrapper = () => {
  const [todos, settodos] = useState([]);
  return (
    <div className="todo-wrapper">
      <TodoForm />
    </div>
  );
};

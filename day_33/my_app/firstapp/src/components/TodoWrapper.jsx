import React, {useState} from 'react';
import { TodoForm } from './TodoForm';

export const TodoWrapper = () => {
  const [todos, settodos] = useState([]);
  const addTodo = (todo) => {
    settodos([...todos, {id: uuidv4(), task: todo, 
    completed: false, isEditing: false}]);
  };
  return (
    <div className="todo-wrapper">
      <TodoForm addTodo ={addTodo}/>
    </div>
  );
};

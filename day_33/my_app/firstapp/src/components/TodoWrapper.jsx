import React, {useState} from 'react';
import { TodoForm } from './TodoForm';

import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
uuidv4();

export const TodoWrapper = () => {
  const [todos, settodos] = useState([]);

  const addTodo = todo => {
    settodos([...todos, {id: uuidv4(), task: todo, 
    completed: false, isEditing: false}]);
    console.log(todos)
  };
  
  return (
    <div className="todo-wrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo ={addTodo}/>
      {todos.map ((todo, index) => (
          <Todo task = {todo} key = {index} toggleComplete={toggleComplete}/>
      ))};
     
    </div>
  );
};

import React from 'react';

export const TodoForm = () => {
    return (
       <form className="todo-form">
            <input type="text" placeholder="Add a new todo..." />
            <button type="submit">Add</button>
       </form>
    );
};

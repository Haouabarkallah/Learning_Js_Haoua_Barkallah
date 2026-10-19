import React from 'react';

export const TodoForm = () => {
    return (
       <form className="todo-form">
            <input type="text" className="todo-input" placeholder="What needs to be done?" />
            <button type="submit" className='todo-btn'>Add</button>
       </form>
    );
};

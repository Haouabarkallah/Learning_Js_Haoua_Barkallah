import React from 'react';

export const TodoForm = () => {
    return (
        <div className="todo-form">
            <h2>Add Todo</h2>
            <form>
                <input type="text" placeholder="Add a new todo..." />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

import React, {useState} from 'react';

export const TodoForm = ( {addTodo} ) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(inputValue);
        setInputValue("");
    }
    return (
       <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="What needs to be done?" onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit" className='todo-btn'>Add</button>
       </form>
    );
};

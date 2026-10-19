import React, {useState} from 'react';

export const TodoForm = () => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        setInputValue("");
    }
    return (
       <form className="todo-form">
            <input type="text" className="todo-input" placeholder="What needs to be done?" onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit" className='todo-btn'>Add</button>
       </form>
    );
};

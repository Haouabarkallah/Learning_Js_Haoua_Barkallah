import React from "react";

export const EditTodoForm = () => {
  return (
    <div className="edit-todo-form">
      <h2>Edit Todo</h2>
      <form>
        <input type="text" placeholder="Edit todo..." />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

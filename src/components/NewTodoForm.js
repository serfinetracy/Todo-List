import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function NewTodoForm(props) {
  const [item, setItem] = useState({ task: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createTodo({ ...item, id: uuid() });
    setItem({ task: "" });
  };

  const handleChange = (event) => {
      setItem({ task: event.target.value });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newtodo">New-Todo</label>
        <input
          type="text"
          placeholder="new todo"
          name="task"
          value={item.task}
          onChange={handleChange}
        />
        <button>add-todo</button>
      </form>
    </div>
  );
}
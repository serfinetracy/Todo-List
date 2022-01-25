import React, {useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
    const [todos, setTodos] = useState([
        {task: "visit paris"},
        {task: "visit berlin"},
    ]);

    const todosData = todos.map((todo) => {
        return <Todo item ={todo.task} />;
    });
    
    return (
        <div>
        <h1>React App</h1>
        <ul>{todosData}</ul>

        {/* <div>
        <input type="text" value={"Visit Paris"}/>;
        <input type="text" value={"Visit Berlin"}/>
        </div> */}
        
        </div>  
            );
} 


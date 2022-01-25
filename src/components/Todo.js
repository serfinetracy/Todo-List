import React from "react";

export default function Todo(props) {
  return (
    <div>
    <li>{props.item}</li>
    <button>Edit</button>
    <button>x</button>
    
</div>
);
}

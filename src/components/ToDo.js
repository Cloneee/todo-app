import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

function ToDo({ todos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => {
    return (
      <div
        className={todo.isComplete ? "todo-row complete border-2 border-indigo-600 p-2 flex items-center mb-4 rounded-lg" : "todo-row border-2 border-indigo-600 p-2 flex items-center mb-4 rounded-lg"}
        key={index}
      >
        <p
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
          className="text-2xl inline flex-grow"
        >
          {todo.text}
        </p>
        <button className="icon inline mr-4">
          <i className="fa-solid fa-pen-to-square text-2xl"></i>
        </button>
        <button className="icon inline">
          <i className="fa-solid fa-circle-xmark text-2xl text-red-600"></i>
        </button>
      </div>
    );
  });
}

export default ToDo;

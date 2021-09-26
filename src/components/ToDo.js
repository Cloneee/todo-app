import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

function ToDo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = value => {
      updateTodo(edit.id, value)
      setEdit({
          id: null,
          value: ''
      })
  }

  if (edit.id){
      return <ToDoForm edit={edit} onSubmit={submitUpdate}/>
  }

  return todos.map((todo, index) => {
    return (
      <div
        className={`todo-row p-2 flex items-center mb-4 rounded-lg ${!todo.isComplete? 'bg-gradient-to-l from-yellow-400 to-pink-500' : 'bg-gradient-to-r from-blue-400 to-green-500'}`}
        key={index}
      >
        <p
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
          className="text-2xl inline flex-grow text-white font-semibold"
        >
          {todo.text}
        </p>
        <button className="icon inline mr-4" onClick={()=>setEdit({id: todo.id, value: todo.text})}>
          <i className="fa-solid fa-pen-to-square text-2xl text-white"></i>
        </button>
        <button className="icon inline" onClick={()=>removeTodo(todo.id)}>
          <i className="fa-solid fa-circle-xmark text-2xl text-white"></i>
        </button>
      </div>
    );
  });
}

export default ToDo;

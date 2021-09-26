import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const h1Style = "text-center text-4xl font-bold";

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const completeTodo = id =>{
      let updatedTodos = todos.map(todo =>{
          if (todo.id === id){
              todo.isComplete = !todo.isComplete
          }
      })
      setTodos(updatedTodos)
  }

  return (
    <div>
      <h1 className={`${h1Style}`}>Add to your todo list</h1>
      <ToDoForm onSubmit={addTodo} />
      <ToDo todos={todos} completeTodo={completeTodo}/>
    </div>
  );
}

export default ToDoList;

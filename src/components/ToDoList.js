import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const h1Style = "text-center text-4xl font-bold text-white";

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = id => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo
    });
    setTodos(updatedTodo);
  };

  return (
    <div className="flex-shrink">
      <h1 className={`${h1Style}`}>Add to your todo list</h1>
      <ToDoForm onSubmit={addTodo} />
      <ToDo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default ToDoList;

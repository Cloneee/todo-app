import React, { useState } from "react";

function ToDoForm(props) {
  const [input, setInput] = useState("");
  const styleInput =
    "rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent";
  const styleButton =
    "flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200";

    const handleSubmit = (e) => {
        e.preventDefault()
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }
    const handleChange = (e) =>{
        setInput(e.target.value)
    }

  return (
    <form className="todo-form my-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className={`todo-input ${styleInput}`}
        onChange={handleChange}
      />
      <button className={`todo-button ${styleButton} mt-4`}>Add todo</button>
    </form>
  );
}

export default ToDoForm;

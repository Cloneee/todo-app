import React, { useState, useEffect, useRef } from "react";

function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const styleInput =
    "rounded-lg flex-1 appearance-none w-full py-2 px-4 text-white placeholder-gray-400 shadow-sm text-base focus:outline-none";
  const styleButton =
    "flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200";

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });

    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form my-4 flex" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Edit your todo"
            value={input}
            name="text"
            className={`todo-input ${styleInput} text-lg font-semibold`}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className={`todo-button ${styleButton} ml-4`}>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className={`todo-input ${styleInput} text-lg font-semibold`}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className={`todo-button ${styleButton} ml-4`}>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default ToDoForm;

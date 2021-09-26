import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

class App extends React.Component {
  render() {
    return (
      <div className="flex m-auto p-4 todo-app shadow rounded-lg">
        <ToDoList/>
      </div>
    )
  }
}

export default App;
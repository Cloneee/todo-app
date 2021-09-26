import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

// const title = "React";

// function App() {
// 	return (
// 		<div class="container">
// 			<Panel title={title}/>
// 		</div>
// 	);
// }

class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto mt-4 p-4 todo-app shadow">
        <ToDoList/>
      </div>
    )
  }
}

export default App;
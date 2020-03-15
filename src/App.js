import React from "react";
import "./App.css";
import InputBar from "./components/InputBar";
import TodoList from "./components/TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="left-lane"></div>
        <div className="middle-lane">
          <InputBar />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;

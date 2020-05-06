import React from "react";
import "./App.css";
import InputBar from "./components/InputBar";
import TodoList from "./components/TodoList";
import StatusToggle from "./components/StatusToggle";
import GroupSelector from "./components/GroupSelector";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="left-lane">
          <GroupSelector />
        </div>
        <div className="middle-lane">
          <InputBar />
          <StatusToggle />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import InputBar from "./InputBar";
import TodoList from "./TodoList";
import StatusToggle from "./StatusToggle";
import GroupSelector from "./GroupSelector";

export default function Main(props) {
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

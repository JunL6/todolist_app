import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { addTodoItem } from "../actions";
import { SelectedGroupContext } from "./SelectedGroupContext";

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let text = this.state.text.trim();
    if (!text) {
      return;
    }

    // api part
    this.insertTodo(text);

    // empty input bar text
    this.setState({ text: "" });
    console.log("add to do: " + text);
  }

  insertTodo(todoContent) {
    const [selectedGroupId, setSelectedGroupId] = this.context;
    axios
      .post("/api/insertTodo", {
        groupId: selectedGroupId,
        todoContent,
        createdTime: new Date(),
      })
      .then(() => {
        this.props.setCount((prevCount) => prevCount + 1);
      });
  }

  render() {
    return (
      <div className="input-bar">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Enter text"
            onChange={this.onInputChange}
            value={this.state.text}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

InputBar.contextType = SelectedGroupContext;
export default InputBar;

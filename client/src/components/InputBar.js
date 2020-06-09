import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { addTodoItem } from "../actions";

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

    // redux part
    let timestamp = Date.now();
    this.props.addTodoItem(text, timestamp, this.props.groupSelected);
    this.setState({ text: "" });
    console.log("add to do: " + text);

    // api part
    this.insertTodo(text, this.props.groupSelected);
  }

  insertTodo(todoContent, groupName) {
    axios
      .post("/api/insertTodo", {
        groupId: this.props.groupSelected.toString(),
        groupName,
        todoContent,
        createdTime: new Date(),
      })
      .then(() => {
        this.props.setCount((prevCount) => prevCount + 1);
      });
  }

  render() {
    // console.log(this.state);
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

const mapDispatchToProps = { addTodoItem };

function mapStateToProps(state) {
  return {
    groupSelected: state.groupSelected,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputBar);

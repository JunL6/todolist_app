import React from "react";
import { connect } from "react-redux";
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
    let timestamp = Date.now();
    this.props.addTodoItem(text, timestamp);
    this.setState({ text: "" });
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

const mapDispatchToProps = {
  addTodoItem
};

export default connect(null, mapDispatchToProps)(InputBar);

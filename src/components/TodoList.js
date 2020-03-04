import React from "react";
import { connect } from "react-redux";

class TodoList extends React.Component {
  renderList(list) {
    console.log(list);
    return list.map(item => <li key={item.id}>{item.text}</li>);
  }
  render() {
    return (
      <div>
        <ul>{this.renderList(this.props.todoList)}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todoList: state.todoList };
}

export default connect(mapStateToProps)(TodoList);

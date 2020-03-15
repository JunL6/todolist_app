import React from "react";
import { connect } from "react-redux";
import { toggle_todoItem } from "../actions";

class TodoList extends React.Component {
  renderList(list) {
    console.log(list);
    return list.map(item => (
      <li
        key={item.id}
        className={
          item.isCompleted
            ? "todo-list_li--completed"
            : "todo-list_li--incomplete"
        }
        onClick={() => {
          this.props.toggle_todoItem(item.id);
        }}
      >
        {item.text}
      </li>
    ));
  }
  render() {
    return (
      <div className="todo-list">
        {console.log("hello")}
        <ul>{this.renderList(this.props.todoList)}</ul>
      </div>
    );
  }
}

const mapDispatchToProps = { toggle_todoItem };

function mapStateToProps(state) {
  return { todoList: state.todoList };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

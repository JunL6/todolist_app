import React from "react";
import { connect } from "react-redux";
import { toggleTodoItem } from "../actions";
import getTodoListFromSelection from "../utilty/getTodoList";

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
          this.props.toggleTodoItem(item.id);
        }}
      >
        {item.text}
      </li>
    ));
  }
  render() {
    return (
      <div className="todo-list">
        {/* {getTodoListFromSelection(this.props.todoList, this.props.visibility, this.props.group)} */}
        <ul>
          {this.renderList(
            getTodoListFromSelection(
              this.props.todoList,
              this.props.visibility,
              "g1"
            )
          )}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = { toggleTodoItem };

function mapStateToProps(state) {
  return { todoList: state.todoList, visibility: state.visibility };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

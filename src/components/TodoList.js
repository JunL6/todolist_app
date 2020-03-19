import React from "react";
import { connect } from "react-redux";
import { toggleTodoItem } from "../actions";
import getTodoListFromSelection from "../utils/getTodoList";

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
          {console.log(this.props.todoList)}
          {this.renderList(
            getTodoListFromSelection(
              this.props.todoList,
              this.props.visibility,
              this.props.groupSelected
            )
          )}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = { toggleTodoItem };

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
    visibility: state.visibility,
    groupSelected: state.groupSelected
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

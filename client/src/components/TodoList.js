import React from "react";
import { connect } from "react-redux";
import axios from "axios";
// import { toggleTodoItem } from "../actions";
import { URL_UPDATE_TODO } from "../config/urls";
import getTodoListFromSelection from "../utils/getTodoList";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.OnToggleTodoItem = this.OnToggleTodoItem.bind(this);
  }

  OnToggleTodoItem(todoId) {
    axios
      .post(URL_UPDATE_TODO, {
        todoId,
        isToggled: true,
      })
      .then((response) => {
        this.props.setCount((prevCount) => prevCount + 1);
      });
  }

  renderList(list) {
    return list.map((item) => (
      <li
        key={item._id}
        className={
          item.isCompleted
            ? "todo-list_li--completed"
            : "todo-list_li--incomplete"
        }
        onClick={() => {
          this.OnToggleTodoItem(item._id);
        }}
      >
        {item.todoContent}
      </li>
    ));
  }
  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.renderList(
            getTodoListFromSelection(
              // this.props.todoList,
              this.props.list,
              this.props.visibility,
              this.props.groupSelected.toString()
            )
          )}
        </ul>
      </div>
    );
  }
}

// const mapDispatchToProps = { toggleTodoItem };

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
    visibility: state.visibility,
    groupSelected: state.groupSelected,
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps)(TodoList);

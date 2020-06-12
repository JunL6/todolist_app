import React, { useContext } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import { toggleTodoItem } from "../actions";
import { SelectedGroupContext } from "./SelectedGroupContext";
import { URL_UPDATE_TODO } from "../config/urls";
import getTodoListFromSelection from "../utils/getTodoList";

function TodoList(props) {
  const [selectedGroupId, setSelectedGroupId] = useContext(
    SelectedGroupContext
  );

  function OnToggleTodoItem(todoId) {
    axios
      .post(URL_UPDATE_TODO, {
        todoId,
        isToggled: true,
      })
      .then((response) => {
        props.setCount((prevCount) => prevCount + 1);
      });
  }

  function renderList(list) {
    return list.map((item) => (
      <li
        key={item._id}
        className={
          item.isCompleted
            ? "todo-list_li--completed"
            : "todo-list_li--incomplete"
        }
        onClick={() => {
          OnToggleTodoItem(item._id);
        }}
      >
        {item.todoContent}
      </li>
    ));
  }

  return (
    <div className="todo-list">
      <ul>
        {renderList(
          getTodoListFromSelection(
            // this.props.todoList,
            props.list,
            props.visibility,
            selectedGroupId
          )
        )}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    visibility: state.visibility,
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps)(TodoList);

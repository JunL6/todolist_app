import { combineReducers } from "redux";
import todoListReducer from "./todoListReducer";
import visibilityReducer from "./visibilityReducer";
import groupSelectedReducer from "./groupSelectedReducer";
import groupListReducer from "./groupListReducer";

const rootReducer = combineReducers({
  todoList: todoListReducer,
  visibility: visibilityReducer,
  groupSelected: groupSelectedReducer,
  groupList: groupListReducer
});

export default rootReducer;

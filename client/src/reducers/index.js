import { combineReducers } from "redux";
import todoListReducer from "./todoListReducer";
import visibilityReducer from "./visibilityReducer";
import groupSelectedReducer from "./groupSelectedReducer";
import groupListReducer from "./groupListReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  todoList: todoListReducer,
  visibility: visibilityReducer,
  groupSelected: groupSelectedReducer,
  groupList: groupListReducer,
  form: formReducer,
});

export default rootReducer;

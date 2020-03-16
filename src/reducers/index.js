import { combineReducers } from "redux";
import todoListReducer from "./todoListReducer";
import visibilityReducer from "./visibilityReducer";

const rootReducer = combineReducers({
  todoList: todoListReducer,
  visibility: visibilityReducer
});

export default rootReducer;

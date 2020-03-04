import { ADD_TODOITEM } from "../actions/types";

export default function(todoList = [], action) {
  switch (action.type) {
    case ADD_TODOITEM:
      return [...todoList, action.payload];
    default:
      return todoList;
  }
}

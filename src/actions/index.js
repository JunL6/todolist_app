import { ADD_TODOITEM, TOGGLE_TODOITEM } from "./types";

let nextTodoId = 0;
export const addTodoItem = (text, timestamp) => {
  return {
    type: ADD_TODOITEM,
    payload: {
      id: nextTodoId++,
      text,
      timeCreated: timestamp,
      isCompleted: false,
      group: null
    }
  };
};

export const toggle_todoItem = id => {
  return {
    type: TOGGLE_TODOITEM,
    payload: id
  };
};

// export const toggleTodoItem

import { ADD_TODOITEM } from "./types";

let nextTodoId = 0;
export const addTodoItem = (text, timestamp) => {
  return {
    type: ADD_TODOITEM,
    payload: {
      id: nextTodoId++,
      text,
      timeCreated: timestamp,
      completed: false,
      group: null
    }
  };
};

// export const toggleTodoItem

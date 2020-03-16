import { ADD_TODOITEM, TOGGLE_TODOITEM, SWITCH_VISIBILITY } from "./types";

let nextTodoId = 0;
const INITIAL_GROUP = "g1";

export const addTodoItem = (text, timestamp) => {
  return {
    type: ADD_TODOITEM,
    payload: {
      id: nextTodoId++,
      text,
      timeCreated: timestamp,
      isCompleted: false,
      group: INITIAL_GROUP
    }
  };
};

export const toggleTodoItem = id => {
  return {
    type: TOGGLE_TODOITEM,
    payload: id
  };
};

export const switchVisibility = visibility => {
  return { type: SWITCH_VISIBILITY, payload: visibility };
};

// export const visibility

// export const toggleTodoItem

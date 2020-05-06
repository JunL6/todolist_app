import {
  ADD_TODOITEM,
  TOGGLE_TODOITEM,
  SWITCH_VISIBILITY,
  SELECT_GROUP,
  ADD_GROUP
} from "./types";

let nextTodoId = 0;
let nextGroupId = 1;

export const addTodoItem = (text, timestamp, currentGroupId) => {
  return {
    type: ADD_TODOITEM,
    payload: {
      id: nextTodoId++,
      text,
      timeCreated: timestamp,
      isCompleted: false,
      groupId: currentGroupId
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

export const selectGroup = groupId => {
  return {
    type: SELECT_GROUP,
    payload: groupId
  };
};

export const addGroup = groupName => {
  return {
    type: ADD_GROUP,
    payload: {
      groupName,
      groupId: nextGroupId++
    }
  };
};

import {
  ADD_TODOITEM,
  TOGGLE_TODOITEM,
  SWITCH_VISIBILITY,
  SELECT_GROUP,
  CREATE_GROUP
} from "./types";

let nextTodoId = 0;
// const INITIAL_GROUPID = -1;
let nextGroupId = 0;

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

export const createGroup = groupName => {
  return {
    type: CREATE_GROUP,
    payload: {
      groupName,
      groupId: nextGroupId++
    }
  };
};

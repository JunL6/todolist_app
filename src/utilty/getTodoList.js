import { STATUS_ALL, STATUS_TODO, STATUS_DONE } from "./const";

export default function getTodoListFromSelection(fullList, visibility, group) {
  switch (visibility) {
    case STATUS_ALL:
      return fullList.filter(todo => todo.group === group);
    case STATUS_TODO:
      return fullList.filter(
        todo => todo.group === group && todo.isCompleted === false
      );
    case STATUS_DONE:
      return fullList.filter(
        todo => todo.group === group && todo.isCompleted === true
      );
  }
}

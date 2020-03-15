import { ADD_TODOITEM, TOGGLE_TODOITEM } from "../actions/types";

const INITIALSTATE_TODOLIST = [
  // {
  //   id: -1,
  //   text: "drink water",
  //   timeCreated: 1584135899914,
  //   isCompleted: false,
  //   group: null
  // },
  // {
  //   id: -2,
  //   text: "wash hands",
  //   timeCreated: 1584135992855,
  //   isCompleted: true,
  //   group: null
  // }
];

export default function(todoList = INITIALSTATE_TODOLIST, action) {
  switch (action.type) {
    case ADD_TODOITEM:
      return [...todoList, action.payload];
    case TOGGLE_TODOITEM:
      // console.log(todoList.find(todo => todo.id === action.payload));
      // return [...todoList, todoList.find(todo => todo.id === action.payload)];
      let newTodoList = todoList.map(
        todo =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        /**  以上是更好的写法 
        // if (todo.id === action.payload) {
        //   return {...todo, isComplete = !todo.isComplete}
        // } else {
        //   return todo
        // }
         */
      );
      return newTodoList;
    default:
      return todoList;
  }
}

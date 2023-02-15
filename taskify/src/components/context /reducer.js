import { ADD_TO_DO, REMOVE_TO_DO, TOGGLE_TASK_STATE } from "./action";
import { v4 as uuidv4 } from "uuid";
const ToDoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_DO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: action.payload,
            isCompleted: false,
            id: uuidv4(),
          },
        ],
      };
    }
    case REMOVE_TO_DO: {
      return {
        ...state,
        todos: state.todos.filter((items) => items.id !== action.payload),
      };
    }
    case TOGGLE_TASK_STATE: {
      return {
        ...state,
        todos: state.todos.map((items) =>
          items.id === action.payload.id
            ? { ...items, isCompleted: !items.isCompleted }
            : items
        ),
      };
    }

    default:
      break;
  }
};
export default ToDoReducer;

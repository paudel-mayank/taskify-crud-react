import { createContext, useContext, useReducer } from "react";
import { ADD_TO_DO, REMOVE_TO_DO, TOGGLE_TASK_STATE } from "./action";
import ToDoReducer from "./reducer";
export const TodoContext = createContext();

const initialState = {
  todos: [],
};
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  const addTodo = (item) => {
    dispatch({ type: ADD_TO_DO, payload: item });
  };
  const deleteTodo = (id) => {
    dispatch({ type: REMOVE_TO_DO, payload: id });
  };
  const toggleCompleted = (items) => {
    dispatch({ type: TOGGLE_TASK_STATE, payload: items });
  };
  return (
    <TodoContext.Provider
      value={{ state, addTodo, deleteTodo, toggleCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoGloablContext = () => {
  return useContext(TodoContext);
};
export default TodoProvider;

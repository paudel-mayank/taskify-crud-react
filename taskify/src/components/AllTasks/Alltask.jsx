import React from "react";
import { useTodoGloablContext } from "../context /context";
import { FaTrash } from "react-icons/fa";
import "../AllTasks/alltaks.css";
export const Alltask = () => {
  const { state, deleteTodo, toggleCompleted } = useTodoGloablContext();
  console.log(state);
  const handleChange = (items) => {
    toggleCompleted(items);
  };
  return (
    <div className="container allTask">
      {state.todos.length > 0 ? (
        state.todos.map((items) => {
          return (
            <div className="todoItem" key={items.id}>
              <div className="task">
                <input
                  type="checkbox"
                  checked={items.isCompleted}
                  onChange={() => handleChange(items)}
                />
                <p className={items.isCompleted ? "textdecorate" : "text"}>
                  {items.task}
                </p>
              </div>
              <div className="buttons">
                <FaTrash onClick={() => deleteTodo(items.id)} />
              </div>
            </div>
          );
        })
      ) : (
        <p className="footNote"> No Tasks to do</p>
      )}
    </div>
  );
};

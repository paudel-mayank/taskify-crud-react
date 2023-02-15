import React, { useState } from "react";
import "../NewTask/form.css";
import { useTodoGloablContext } from "../context /context";
const Form = () => {
  const [task, settask] = useState("");
  const { addTodo } = useTodoGloablContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    settask("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add new task..."
          value={task}
          onChange={(e) => settask(e.target.value)}
          required
        />
        <button className="submit" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Form;

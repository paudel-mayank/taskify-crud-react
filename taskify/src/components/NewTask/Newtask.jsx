import React from "react";
import "../NewTask/Newtask.css";
import { FaPlus } from "react-icons/fa";
import Form from "./Form";
const Newtask = () => {
  const [formVisibilty, setFormVisibility] = React.useState(false);

  return (
    <div className="container my-4">
      <button
        onClick={(e) => setFormVisibility(!formVisibilty)}
        className="mainButton"
      >
        Add New Task <FaPlus />
      </button>
      <div className="addnew my-4">{formVisibilty && <Form />}</div>
    </div>
  );
};

export default Newtask;

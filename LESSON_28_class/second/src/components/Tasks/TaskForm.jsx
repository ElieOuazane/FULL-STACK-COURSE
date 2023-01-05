import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { createId } from "../../utils";
export default function TaskForm(props) {
  // const [inputValue,setInputValue]= useState("")
  // const [descriptionInputValue, setDescriptionInputValue] = useState("")
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  function valuesChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    console.log(name, value);
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function onSubmit(event) {
    // event.preventDefault();
    
    const newTask ={
      ...values,
      completed:false,
      id: createId()
    }

    props.addTask(newTask);
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          name="title"
          type="text"
          onChange={valuesChange}
          placeholder="Enter task"
          value={values.title}
        />
        <input
          name="description"
          type="text"
          placeholder="Enter description"
          value={values.description}
          onChange={valuesChange}
        ></input>
        <button>Add</button>
      </form>
      <button className="btnClear" onClick={() => props.deleteAll()}>
        ClearList
      </button>
    </div>
  );
}
TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  deleteAll: PropTypes.func.isRequired,
};

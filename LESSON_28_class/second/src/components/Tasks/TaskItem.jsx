import React from "react";
// import { useState } from "react";
import { PropTypes } from "prop-types";
export default function TaskItem(props) {

  function colorChange() {
    props.completedTask(props.task.id)
  }

  return (
    <div style={{ color: props.task.completed ? "#9fff00":"black"}} className="item">
      <input checked={props.task.completed} type="checkbox" onChange={colorChange} />
      <span> {props.task.title}</span>&nbsp;
      <span> {props.task.description}</span>&nbsp;
      <button onClick={() => props.deleteTask(props.task.id)}>X</button>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask:PropTypes.func.isRequired,
  completedTask: PropTypes.func.isRequired,
};

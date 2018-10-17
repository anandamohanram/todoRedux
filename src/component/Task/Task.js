import React from "react";

import "./Task.css";

const Task = props => {
  let assignedClass = "singleTask ";
  if (props.complete) {
    assignedClass = "singleTask complete";
  }

  return (
    <div>
      <div className={assignedClass} onClick={props.click}>
        {props.children}
      </div>
      <span
        className={
          props.deleteButton === "hidden" ? "taskClose" : "taskClose hidden"
        }
        onClick={props.close}
      >
        {" "}
        &times;{" "}
      </span>
    </div>
  );
};

export default Task;

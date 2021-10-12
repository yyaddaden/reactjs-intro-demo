import React from "react";

const Task = (props) => {
  const remove = () => {
    props.removeTask(props.task.id);
  };

  const complete = () => {
    props.completeTask(props.task.id);
  };

  return (
    <div>
      <input
        onChange={complete}
        type="checkbox"
        checked={props.task.status ? "checked" : ""}
      />
      <span onClick={remove}>
        {props.task.status ? <s>{props.task.title}</s> : props.task.title}
      </span>
    </div>
  );
};

export default Task;

import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  return props.tasks.map((task) => {
    return (
      <Task
        removeTask={props.removeTask}
        completeTask={props.completeTask}
        key={task.id}
        task={task}
      />
    );
  });
};

export default Tasks;

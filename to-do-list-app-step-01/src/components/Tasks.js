import React from "react";

import Task from "./Task";

const Tasks = (props) => {
  return props.data.map((task) => (
    <Task
      task={task}
      key={task.id}
      removeTask={props.removeTask}
      completeTask={props.completeTask}
      editTask={props.editTask}
    />
  ));
};

export default Tasks;

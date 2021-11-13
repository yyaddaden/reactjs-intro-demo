import React from "react";
import Task from "./Task";

import { connect } from "react-redux";

const Tasks = (props) => {
  return props.tasks.map((task) => {
    return (
      <div key={task.id}>
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          status={task.status}
          modify={task.modify}
        />{" "}
        <br />
      </div>
    );
  });
};

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(Tasks);

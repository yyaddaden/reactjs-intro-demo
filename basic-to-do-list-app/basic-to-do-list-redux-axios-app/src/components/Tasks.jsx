import React from "react";
import Task from "./Task";

import { connect } from "react-redux";

import { useEffect } from "react";
import { getTasks } from "../actions/TasksAction";

const Tasks = (props) => {
  useEffect(() => {
    props.getTasks();
  }, []);

  return props.tasks.map((task) => {
    return (
      <div key={task.id}>
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          status={task.status}
        />{" "}
        <br />
      </div>
    );
  });
};

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps, { getTasks: getTasks })(Tasks);

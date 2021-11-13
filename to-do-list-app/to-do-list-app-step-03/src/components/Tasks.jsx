import React from "react";

import Task from "./Task";

import { connect } from "react-redux";

const Tasks = (props) => {
  return props.data.map((task) => (
    <Task
      task={task}
      key={task.id}
    />
  ));
};

const mapStateToProps = (state) => {
  return { data: state.tasks }
};

export default connect(mapStateToProps)(Tasks);

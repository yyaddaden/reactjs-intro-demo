import React from "react";
import { useEffect } from "react";

import Task from "./Task";

import { connect } from "react-redux";

import { getTasks } from "../actions/TasksActions";

const Tasks = (props) => {
  useEffect(() => {
    props.getTasks();
  }, []);

  return props.data.map((task) => <Task task={task} key={task.code} />);
};

const mapStateToProps = (state) => {
  return { data: state.tasks };
};

export default connect(mapStateToProps, { getTasks: getTasks })(Tasks);

import React from "react";
import Proptypes from "prop-types";

import { connect } from "react-redux";
import { addTask } from "../actions/TasksAction";

const AddTask = (props) => {
  let _title;

  return (
    <div>
      <input type="text" ref={(input) => (_title = input)} /> <span> </span>
      <button onClick={() => props.add(_title.value)}>Ajouter</button>
    </div>
  );
};

AddTask.propTypes = {
  add: Proptypes.func,
};

const mapDispatchToProps = {
  add: addTask,
};

export default connect(null, mapDispatchToProps)(AddTask);

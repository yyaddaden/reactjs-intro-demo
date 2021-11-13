import React from "react";

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

export default connect(null, { add: addTask })(AddTask);

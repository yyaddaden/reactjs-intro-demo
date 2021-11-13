import React from "react";

import { connect } from "react-redux";
import { addTask } from "../actions/TasksAction";

const AddTask = (props) => {
  let _title;

  return (
    <div>
      <input type="text" ref={(input) => (_title = input)} /> <span> </span>
      <button onClick={() => props.add(_title.value)}>Ajouter</button>
      <span> </span>
      <span>
        <i>{props.status}</i>
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { status: state.status };
};

export default connect(mapStateToProps, { add: addTask })(AddTask);

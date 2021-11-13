import React from "react";
import Proptypes from "prop-types";

import { connect } from "react-redux";
import { removeTask, completeTask, editTask } from "../actions/TasksAction";

const Task = (props) => {
  let _title = "";

  return (
    <div>
      <button onClick={() => props.complete(props.id)}>Completer</button>
      <span> </span>
      <button onClick={() => props.edit(props.id, _title.value)}>
        {props.modify ? "Appliquer" : "Éditer"}
      </button>
      <span> </span>
      <button onClick={() => props.remove(props.id)}>Supprimer</button>
      <span> </span>|<span> </span>
      {props.modify ? (
        <input
          type="text"
          ref={(input) => (_title = input)}
          placeholder={props.title}
        />
      ) : (
        <span>{props.status ? <s>{props.title}</s> : props.title}</span>
      )}
    </div>
  );
};

Task.propTypes = {
  remove: Proptypes.func,
  complete: Proptypes.func,
  edit: Proptypes.func,

  id: Proptypes.number,
  title: Proptypes.string,
  modify: Proptypes.bool,
  status: Proptypes.bool,
};

const mapDispatchToProps = {
  remove: removeTask,
  complete: completeTask,
  edit: editTask,
};

export default connect(null, mapDispatchToProps)(Task);

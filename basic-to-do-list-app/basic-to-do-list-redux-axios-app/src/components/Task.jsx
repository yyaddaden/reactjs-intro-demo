import React from "react";

import { connect } from "react-redux";
import { removeTask, editTask } from "../actions/TasksAction";

import { useState } from "react";

const Task = (props) => {
  let _title = "";

  const [modify, setModify] = useState(false);

  return (
    <div>
      <button onClick={() => props.edit(props.id, props.title, !props.status)}>
        Completer
      </button>
      <span> </span>
      <button
        onClick={() => {
          if (modify) {
            if (_title.value) {
              props.edit(props.id, _title.value, props.status);
            }
            setModify(false);
          } else {
            setModify(true);
          }
        }}
      >
        {modify ? "Appliquer" : "Éditer"}
      </button>
      <span> </span>
      <button onClick={() => props.remove(props.id)}>Supprimer</button>
      <span> </span>|<span> </span>
      {modify ? (
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

export default connect(null, {
  remove: removeTask,
  edit: editTask,
})(Task);

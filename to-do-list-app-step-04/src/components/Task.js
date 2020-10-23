import React from "react";
import { useState } from "react";

import { Row, Col, Button, Form } from "react-bootstrap";

import { FaCheck, FaTrash, FaEdit, FaSave } from "react-icons/fa";

import { connect } from "react-redux";

import { removeTask, completeTask, editTask } from "../actions/TasksActions";

const Task = (props) => {
  let _title;
  const [edit_mode, setEdit] = useState(false);

  const remove = () => {
    props.removeTask(props.task.task_id);
  };

  const complete = () => {
    props.completeTask(props.task.task_id);
  };

  const completeStyle = () => {
    if (props.task.status) {
      return {
        textDecorationLine: "line-through",
      };
    } else {
      return {
        textDecorationLine: "none",
      };
    }
  };

  const edit = () => {
    if (edit_mode) {
      props.editTask(props.task.task_id, _title.value);
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <Row style={{ marginTop: "5px" }}>
      <Col xs={8} style={completeStyle()}>
        {" "}
        {edit_mode ? (
          <Form.Control
            type="text"
            placeholder={props.task.title}
            ref={(input) => (_title = input)}
          />
        ) : (
          props.task.title
        )}
      </Col>
      <Col xs={1}>
        <Button onClick={complete} variant="success">
          <FaCheck />
        </Button>
      </Col>
      <Col xs={1}>
        <Button onClick={edit} variant="primary">
          {edit_mode ? <FaSave /> : <FaEdit />}
        </Button>
      </Col>
      <Col xs={1}>
        <Button onClick={remove} variant="danger">
          <FaTrash />
        </Button>
      </Col>
    </Row>
  );
};

export default connect(null, {
  completeTask: completeTask,
  editTask: editTask,
  removeTask: removeTask,
})(Task);

import React from "react";

import { Row, Col, Button, Form } from "react-bootstrap";

import { FaCheck, FaTrash, FaEdit, FaSave } from "react-icons/fa";

const Task = (props) => {
  let _title;

  const remove = () => {
    props.removeTask(props.task.id);
  };

  const complete = () => {
    props.completeTask(props.task.id);
  };

  const completeStyle = () => {
    if (props.task.complete) {
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
    if (props.task.edit && _title.value) {
      props.editTask(props.task.id, _title.value);
    } else {
      props.editTask(props.task.id, props.task.title);
    }
  };

  return (
    <Row style={{ marginTop: "5px" }}>
      <Col xs={8} style={completeStyle()}>
        {" "}
        {props.task.edit ? (
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
          {props.task.edit ? <FaSave /> : <FaEdit />}
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

export default Task;

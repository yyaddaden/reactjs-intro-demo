import React from "react";

import { Row, Col, Form, Button } from "react-bootstrap";

import { FaPlus } from "react-icons/fa";

const AddTask = (props) => {
  let _title;

  const add = () => {
    if (_title.value) {
      props.addTask(_title.value);
      _title.value = "";
    }
  };

  return (
    <Row>
      <Col xs={10}>
        <Form.Control
          type="text"
          placeholder="Enter task title"
          ref={(input) => (_title = input)}
        />
      </Col>
      <Col xs={2}>
        <Button variant="primary" onClick={add}>
          <FaPlus />
        </Button>
      </Col>
    </Row>
  );
};

export default AddTask;

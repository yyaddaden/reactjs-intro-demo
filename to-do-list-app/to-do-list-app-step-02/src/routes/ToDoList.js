import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaList } from "react-icons/fa";

import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

const ToDoList = (props) => {
  return (
    <Container style={{ marginTop: "150px" }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header as="h5">
              <FaList /> To Do List App
            </Card.Header>
            <Card.Body>
              <AddTask addTask={props.addTask} />
              <hr />
              <Tasks
                data={props.data}
                removeTask={props.removeTask}
                completeTask={props.completeTask}
                editTask={props.editTask}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ToDoList;

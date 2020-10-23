import React from "react";

import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import {
  FaList,
  FaCheckCircle,
  FaRegTimesCircle,
  FaHourglassHalf,
} from "react-icons/fa";

import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

import { connect } from "react-redux";

const ToDoList = (props) => {
  const setStatus = () => {
    switch (props.status) {
      case "success":
        return (
          <Badge variant="success">
            <FaCheckCircle />
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="info">
            <FaHourglassHalf />
          </Badge>
        );
      case "error":
        return (
          <Badge variant="danger">
            <FaRegTimesCircle />
          </Badge>
        );
      default:
        return "";
    }
  };

  return (
    <Container style={{ marginTop: "150px" }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header as="h5">
              <FaList /> To Do List App | Status : {setStatus()}
            </Card.Header>
            <Card.Body>
              <AddTask />
              <hr />
              <Tasks />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { status: state.status };
};

export default connect(mapStateToProps)(ToDoList);

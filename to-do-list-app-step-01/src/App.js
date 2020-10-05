import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaList } from "react-icons/fa";

import { v4 } from "uuid";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: "997f2964-c0a5-4890-92aa-c9c6894248b6",
          title: "My first task",
          complete: false,
          edit: false,
        },
        {
          id: "c70c20d7-67db-4eba-9b8e-99accff6018a",
          title: "My second task",
          complete: true,
          edit: false,
        },
        {
          id: "a21885a0-218f-4855-81fa-70065044a443",
          title: "My third task",
          complete: false,
          edit: false,
        },
      ],
    };
  }

  /* Add task action */
  addTask = (title) => {
    const newTask = {
      id: v4(),
      title: title,
      complete: false,
      edit: false,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  /* Remove task action */
  removeTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id != id),
    });
  };

  /* Complete task action */
  completeTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id == id) {
          task.complete = !task.complete;
        }

        return task;
      }),
    });
  };

  /* Edit task action */
  editTask = (id, title) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id == id) {
          if (task.edit) {
            task.title = title;
            task.edit = false;
          } else {
            task.edit = true;
          }
        }

        return task;
      }),
    });
  };

  render() {
    return (
      <Container style={{ marginTop: "150px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header as="h5">
                <FaList /> To Do List App
              </Card.Header>
              <Card.Body>
                <AddTask addTask={this.addTask} />
                <hr />
                <Tasks
                  data={this.state.tasks}
                  removeTask={this.removeTask}
                  completeTask={this.completeTask}
                  editTask={this.editTask}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

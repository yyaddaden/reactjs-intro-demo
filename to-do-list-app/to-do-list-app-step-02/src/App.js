import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import ToDoList from "./routes/ToDoList";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Menu from "./components/Menu";

import { v4 } from "uuid";
import { HashRouter, Route, Switch } from "react-router-dom";

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
      <HashRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/todolist"
            component={() => (
              <ToDoList
                addTask={this.addTask}
                data={this.state.tasks}
                removeTask={this.removeTask}
                completeTask={this.completeTask}
                editTask={this.editTask}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

import React from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          title: "first task",
          status: false,
        },
        {
          id: 2,
          title: "second task",
          status: true,
        },
      ],
    };
  }

  removeTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id != id),
    });
  };

  completeTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id == id) {
          task.status = !task.status;
        }
        return task;
      }),
    });
  };

  addTask = (title) => {
    let newTask = {
      id:
        this.state.tasks.length > 0
          ? this.state.tasks[this.state.tasks.length - 1].id + 1
          : 1,
      title: title,
      status: false,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  render() {
    return (
      <div>
        <h1>Basic To Do List</h1>
        <AddTask addTask={this.addTask} />
        <Tasks
          completeTask={this.completeTask}
          removeTask={this.removeTask}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;

import React from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  return (
    <div data-testid="app-testid">
      <h1>Basic To Do List</h1>
      <AddTask />
      <hr />
      <Tasks />
    </div>
  );
};

export default App;

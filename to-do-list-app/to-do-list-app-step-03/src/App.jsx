import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import ToDoList from "./routes/ToDoList";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Menu from "./components/Menu";

import { HashRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todolist" component={ToDoList} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

export default App;

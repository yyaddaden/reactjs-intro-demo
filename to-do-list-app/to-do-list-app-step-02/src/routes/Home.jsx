import React from "react";

import { Jumbotron, Button } from "react-bootstrap";
import { FaHome, FaList } from "react-icons/fa";

import { Link } from "react-router-dom";

const Home = (props) => (
  <Jumbotron>
    <h1>
      <FaHome /> <b>Home</b> page.
    </h1>

    <p>
      Welcome to our <b>To Do List</b> application.
    </p>

    <Button variant="primary" to="/todolist" as={Link}>
      <FaList /> To Do List
    </Button>
  </Jumbotron>
);

export default Home;

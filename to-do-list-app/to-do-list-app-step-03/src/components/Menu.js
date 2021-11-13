import React from "react";

import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import { FaHome, FaList } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Menu = (props) => (
  <NavBar bg="dark" variant="dark">
    <Nav>
      <Nav.Link to="/" exact replace as={NavLink}>
        <FaHome /> Home
      </Nav.Link>
      <Nav.Link to="/todolist" replace as={NavLink}>
        <FaList /> To Do List
      </Nav.Link>
    </Nav>
  </NavBar>
);

export default Menu;

import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import { TasksReducer } from "./reducers/TasksReducer";

const reducers = combineReducers({
  tasks: TasksReducer,
});

const store = createStore(reducers);

describe("TEST BLOC : App Component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const app = screen.getByTestId("app-testid");

  it("test on component rendering", () => {
    expect(app).toBeInTheDocument();
  });

  it("test on component containing text", () => {
    expect(app).toHaveTextContent("Basic To Do List");
  });
});

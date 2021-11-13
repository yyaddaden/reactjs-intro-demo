import { TasksReducer } from "./TasksReducer";
import {
  addTask,
  removeTask,
  completeTask,
  editTask,
} from "../actions/TasksAction";

import deepfreeze from "deep-freeze";

describe("TEST BLOC : TasksReducer", () => {
  it("test on getting the state initial value", () => {

    expect(TasksReducer(undefined, {})).toEqual([
      {
        id: 1,
        title: "first task",
        status: false,
        modify: false,
      },
    ]);
  });

  it("test on adding a new task", () => {
    const initialState = [];
    const action = addTask("first task");

    deepfreeze(initialState);
    deepfreeze(action);

    expect(TasksReducer(initialState, action)).toEqual([
      {
        id: 1,
        title: "first task",
        status: false,
        modify: false,
      },
    ]);
  });

  it("test on removing a task", () => {
    expect(TasksReducer(undefined, removeTask(1))).toEqual([]);
  });

  it("test on completing a task", () => {
    const initialState = [
      {
        id: 1,
        title: "first task",
        status: false,
        modify: false,
      },
    ];

    const action = completeTask(1);

    deepfreeze(initialState);
    deepfreeze(action);

    expect(TasksReducer(initialState, action)).toEqual([
      {
        id: 1,
        title: "first task",
        status: true,
        modify: false,
      },
    ]);
  });

  it("test on editing (initial) a task", () => {
    const initialState = [
      {
        id: 1,
        title: "first task",
        status: true,
        modify: false,
      },
    ];

    const action = editTask(1, "");

    deepfreeze(initialState);
    deepfreeze(action);

    expect(TasksReducer(initialState, action)).toEqual([
      {
        id: 1,
        title: "first task",
        status: true,
        modify: true,
      },
    ]);
  });

  it("test on editing (final) a task", () => {
    const initialState = [
      {
        id: 1,
        title: "first task",
        status: true,
        modify: true,
      },
    ];

    const action = editTask(1, "new first task");

    deepfreeze(initialState);
    deepfreeze(action);

    expect(TasksReducer(initialState, action)).toEqual([
      {
        id: 1,
        title: "new first task",
        status: true,
        modify: false,
      },
    ]);
  });
});

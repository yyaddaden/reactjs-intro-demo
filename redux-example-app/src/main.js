import { createStore, combineReducers } from "redux";

/* REDUX DEFINITION */

/* tasks reducer */
const tasksReducer = (tasks = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...tasks, action.payload];
    case "REMOVE_TASK":
      return tasks.filter((task) => task.id != action.payload.id);
    case "COMPLETE_TASK":
      return tasks.map((task) => {
        if (task.id == action.payload.id) {
          task.status = !task.status;
        }

        return task;
      });
    default:
      return tasks;
  }
};

/* all reducers */
const reducers = combineReducers({
  tasksReducer: tasksReducer,
});

/* store */
const store = createStore(reducers);

/* action creator */
const addTask = (title) => {
  let new_id =
    store.getState().tasksReducer.length > 0
      ? store.getState().tasksReducer[store.getState().tasksReducer.length - 1]
          .id + 1
      : 1;

  return {
    type: "ADD_TASK",
    payload: {
      id: new_id,
      title: title,
      status: false,
    },
  };
};

const removeTask = (id) => {
  return {
    type: "REMOVE_TASK",
    payload: {
      id: id,
    },
  };
};

const completeTask = (id) => {
  return {
    type: "COMPLETE_TASK",
    payload: {
      id: id,
    },
  };
};

/* REDUX TEST */

/* create task */
let action = addTask("first task");
store.dispatch(action);

action = addTask("second task");
store.dispatch(action);

console.log(JSON.stringify(store.getState().tasksReducer, null, 2));

/* delete task */
action = removeTask(1);
store.dispatch(action);

console.log(JSON.stringify(store.getState().tasksReducer, null, 2));

/* complete task */
action = completeTask(2);
store.dispatch(action);

console.log(JSON.stringify(store.getState().tasksReducer, null, 2));

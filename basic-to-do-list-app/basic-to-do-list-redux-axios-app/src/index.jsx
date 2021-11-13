import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import { TasksReducer } from "./reducers/TasksReducer";
import { StatusReducer } from "./reducers/StatusReducer";

const reducers = combineReducers({
  tasks: TasksReducer,
  status: StatusReducer,
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

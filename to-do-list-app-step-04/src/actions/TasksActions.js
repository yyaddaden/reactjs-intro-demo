import taskReducer from "../reducers/TaskReducer";

import axios from "axios";

const user_key = "7e996b07-2ce4-49be-be65-d2140b9c5bc7";
const baseUrl = `https://yyacine.pythonanywhere.com/tasks/${user_key}`;

export const getTasks = () => {
  return (dispatch) => {
    dispatch({ type: "SET_PENDING" });

    axios.get(`${baseUrl}/tasks`).then(
      (response) => {
        dispatch({ type: "GET_TASKS", payload: response.data });
        dispatch({ type: "SET_SUCCESS" });
      },
      (error) => {
        dispatch({ type: "GET_TASKS", payload: { data: [] } });
        dispatch({ type: "SET_ERROR" });
      }
    );
  };
};

export const addTask = (title) => {
  return (dispatch) => {
    dispatch({ type: "ADD_TASK" });
    dispatch({ type: "SET_PENDING" });

    axios
      .post(
        `${baseUrl}/tasks`,
        taskReducer({}, { type: "ADD_TASK", payload: { title: title } })
      )
      .then(
        (response) => {
          dispatch({ type: "SET_SUCCESS" });
          dispatch(getTasks());
        },
        (error) => {
          dispatch({ type: "SET_ERROR" });
        }
      );
  };
};

export const removeTask = (task_id) => {
  return (dispatch) => {
    dispatch({ type: "REMOVE_TASK" });
    dispatch({ type: "SET_PENDING" });

    axios.delete(`${baseUrl}/tasks/${task_id}`).then(
      (response) => {
        dispatch({ type: "SET_SUCCESS" });
        dispatch(getTasks());
      },
      (error) => {
        dispatch({ type: "SET_ERROR" });
      }
    );
  };
};

export const editTask = (task_id, title) => {
  return (dispatch, getState) => {
    dispatch({ type: "EDIT_TASKS" });
    dispatch({ type: "SET_PENDING" });

    const task_to_edit = getState().tasks.filter(
      (task) => task.task_id == task_id
    )[0];

    axios
      .patch(
        `${baseUrl}/tasks/${task_id}`,
        taskReducer(task_to_edit, {
          type: "EDIT_TASK",
          payload: { title: title },
        })
      )
      .then(
        (response) => {
          dispatch({ type: "SET_SUCCESS" });
          dispatch(getTasks());
        },
        (error) => {
          dispatch({ type: "SET_ERROR" });
        }
      );
  };
};

export const completeTask = (task_id) => {
  return (dispatch, getState) => {
    dispatch({ type: "COMPLETE_TASK" });
    dispatch({ type: "SET_PENDING" });

    const task_to_complete = getState().tasks.filter(
      (task) => task.task_id == task_id
    )[0];

    axios
      .patch(
        `${baseUrl}/tasks/${task_id}`,
        taskReducer(task_to_complete, { type: "COMPLETE_TASK" })
      )
      .then(
        (response) => {
          dispatch({ type: "SET_SUCCESS" });
          dispatch(getTasks());
        },
        (error) => {
          dispatch({ type: "SET_ERROR" });
        }
      );
  };
};

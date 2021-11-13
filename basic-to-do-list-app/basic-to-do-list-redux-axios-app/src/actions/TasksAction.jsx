import axios from "axios";

const baseUrl =
  "https://to-do-list-rest-api.herokuapp.com/api/1af41d63-43ea-4693-b0d3-38b1f5753512";

export const getTasks = () => {
  return (dispatch) => {
    dispatch({ type: "SET_PENDING" });
    axios.get(`${baseUrl}/tasks`).then(
      (response) => {
        dispatch({ type: "GET_TASKS", payload: response.data });
        dispatch({ type: "SET_SUCCESS" });
      },
      (error) => {
        dispatch({ type: "GET_TASKS", payload: [] });
        dispatch({ type: "SET_ERROR" });
      }
    );
  };
};

export const removeTask = (id) => {
  return (dispatch) => {
    dispatch({ type: "REMOVE_TASK" });
    dispatch({ type: "SET_PENDING" });
    axios.delete(`${baseUrl}/task/${id}`).then(
      (response) => {
        dispatch(getTasks());
        dispatch({ type: "SET_SUCCESS" });
      },
      (error) => {
        dispatch({ type: "SET_ERROR" });
      }
    );
  };
};

export const addTask = (title) => {
  return (dispatch) => {
    dispatch({ type: "ADD_TASK" });
    dispatch({ type: "SET_PENDING" });
    axios.post(`${baseUrl}/tasks`, { title: title, status: false }).then(
      (response) => {
        dispatch(getTasks());
        dispatch({ type: "SET_SUCCESS" });
      },
      (error) => {
        dispatch({ type: "SET_ERROR" });
      }
    );
  };
};

export const editTask = (id, title, status) => {
  return (dispatch) => {
    dispatch({ type: "EDIT_TASK" });
    dispatch({ type: "SET_PENDING" });
    axios.put(`${baseUrl}/task/${id}`, { title: title, status: status }).then(
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

const tasksReducer = (tasks = [], action) => {
  switch (action.type) {
    case "GET_TASKS":
      return action.payload.data;
    case "ADD_TASK":
      return tasks;
    case "REMOVE_TASK":
      return tasks;
    case "EDIT_TASK":
      return tasks;
    case "COMPLETE_TASK":
      return tasks;
    default:
      return tasks;
  }
};

export default tasksReducer;

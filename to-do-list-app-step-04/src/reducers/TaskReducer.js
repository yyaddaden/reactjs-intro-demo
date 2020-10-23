import { v4 } from "uuid";

const taskReducer = (task = {}, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        code: v4(),
        title: action.payload.title,
        status: false,
      };
    case "EDIT_TASK":
      return {
        code: task.code,
        title: action.payload.title,
        status: task.status,
      };
    case "COMPLETE_TASK":
      return {
        code: task.code,
        title: task.title,
        status: !task.status,
      };
    default:
      return task;
  }
};

export default taskReducer;

import { v4 } from "uuid";

const taskReducer = (task = {}, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        id: v4(),
        title: action.payload.title,
        complete: false,
        edit: false,
      };
    case "COMPLETE_TASK":
      return task.id != action.payload.id
        ? task
        : {
            id: task.id,
            title: task.title,
            complete: !task.complete,
            edit: task.edit,
          };
    case "EDIT_TASK":
      return task.id != action.payload.id
        ? task
        : task.edit
        ? {
            id: task.id,
            title: action.payload.title,
            complete: task.complete,
            edit: false,
          }
        : {
            id: task.id,
            title: task.title,
            complete: task.complete,
            edit: true,
          };
    default:
      return task;
  }
};

export default taskReducer;

const tasks_init = [
  {
    id: 1,
    title: "first task",
    status: false,
    modify: false,
  },
];

export const TasksReducer = (tasks = tasks_init, action) => {
  switch (action.type) {
    case "REMOVE_TASK":
      return tasks.filter((task) => task.id !== action.payload.id);
    case "COMPLETE_TASK":
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, status: !task.status };
        }
        return task;
      });
    case "ADD_TASK": {
      let newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        title: action.payload.title,
        status: false,
        modify: false,
      };

      if (action.payload.title) {
        return [...tasks, newTask];
      } else {
        return tasks;
      }
    }
    case "EDIT_TASK": {
      let editTask = tasks.filter((task) => task.id === action.payload.id)[0];

      if (editTask.modify) {
        return tasks.map((task) => {
          if (action.payload.title) {
            if (task.id === action.payload.id) {
              return { ...task, title: action.payload.title, modify: false };
            }
          } else {
            return { ...task, modify: false };
          }
          return task;
        });
      } else {
        return tasks.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, modify: true }; 
          }
          return task;
        });
      }
    }
    default:
      return tasks;
  }
};

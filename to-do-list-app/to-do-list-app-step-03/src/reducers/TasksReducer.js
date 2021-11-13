import taskReducer from "./TaskReducer";

let initial_tasks = [
  {
    id: "997f2964-c0a5-4890-92aa-c9c6894248b6",
    title: "My first task",
    complete: false,
    edit: false,
  },
  {
    id: "c70c20d7-67db-4eba-9b8e-99accff6018a",
    title: "My second task",
    complete: true,
    edit: false,
  },
  {
    id: "a21885a0-218f-4855-81fa-70065044a443",
    title: "My third task",
    complete: false,
    edit: false,
  },
];

const tasksReducer = (tasks = initial_tasks, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...tasks, taskReducer({}, action)];
    case "EDIT_TASK":
      return tasks.map((task) => taskReducer(task, action));
    case "COMPLETE_TASK":
      return tasks.map((task) => taskReducer(task, action));
    case "REMOVE_TASK":
      return tasks.filter((task) => task.id != action.payload.id);
    default:
      return tasks;
  }
};

export default tasksReducer;

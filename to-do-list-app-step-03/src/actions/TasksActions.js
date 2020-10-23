export const addTask = (title) => {
  return {
    type: "ADD_TASK",
    payload: {
      title: title,
    },
  };
};

export const editTask = (id, title) => {
  return {
    type: "EDIT_TASK",
    payload: {
      id: id,
      title: title,
    },
  };
};

export const completeTask = (id) => {
  return {
    type: "COMPLETE_TASK",
    payload: {
      id: id,
    },
  };
};

export const removeTask = (id) => {
  return {
    type: "REMOVE_TASK",
    payload: {
      id: id,
    },
  };
};

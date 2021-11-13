// @flow

export const removeTask = (
  id: number
): { type: string, payload: { id: number } } => {
  return {
    type: "REMOVE_TASK",
    payload: {
      id: id,
    },
  };
};

export const completeTask = (
  id: number
): { type: string, payload: { id: number } } => {
  return {
    type: "COMPLETE_TASK",
    payload: {
      id: id,
    },
  };
};

export const addTask = (
  title: string
): { type: string, payload: { title: string } } => {
  return {
    type: "ADD_TASK",
    payload: {
      title: title,
    },
  };
};

export const editTask = (
  id: number,
  title: string
): { type: string, payload: { id: number, title: string } } => {
  return {
    type: "EDIT_TASK",
    payload: {
      id: id,
      title: title,
    },
  };
};

export const ADD = "addTask";
export const TOGGLE = "toggleTaskStat";
export const DELETE = "deleteTask";
export const FILTER = "filter";
let taskid = 0;

export const addTask = task => {
  return {
    type: ADD,
    payload: { id: taskid++, task: task, complete: false }
  };
};

export const toggleTask = (id, complete) => {
  return {
    type: TOGGLE,
    payload: { id: id, complete: complete }
  };
};

export const deleteTask = id => {
  return {
    type: DELETE,
    payload: { id: id }
  };
};

export const filter = filter => {
  return {
    type: FILTER,
    payload: { filter: filter }
  };
};

export const filters = {
  ALL: "All",
  TODO: "To-do",
  COMPLETE: "Completed"
};

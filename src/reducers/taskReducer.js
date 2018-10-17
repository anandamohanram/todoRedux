import { ADD, TOGGLE, DELETE } from "../actions/actions";

const taskReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [
        ...state,
        {
          id: payload.id,
          task: payload.task,
          complete: payload.complete
        }
      ];

    case TOGGLE:
      return state.map(
        task =>
          task.id === payload.id
            ? { ...task, complete: !payload.complete }
            : task
      );

    case DELETE:
      return state.filter(task => task.id !== payload.id);

    default:
      return state;
  }
};

export default taskReducer;

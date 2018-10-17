import { FILTER } from "../actions/actions";

const filterReducer = (filter = "All", { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload.filter;

    default:
      return filter;
  }
};

export default filterReducer;

import { CREATE_USER, DELETE_USER, READ_USER, UPDATE_USER } from "./Userlist";

const Initialstate = {
  users: [],
};

export const RootReducer = (state = Initialstate, action) => {
  switch (action.payload) {
    case CREATE_USER:
      break;
    case UPDATE_USER:
      break;
    case READ_USER:
      break;
    case DELETE_USER:
      break;
    default:
      return state;
  }
};

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: ["Ram", "Vijay", "Himesh"],
};
const UserSlice = createSlice({
  name: "users",

  initialState: initialState,
  reducers: {
    createuser: (state, action) => {
      state.users.push(action.payload);
    },

    deleteuser: (state, action) => {
      state.users = state.users.filter((usr) => usr !== action.payload);
    },
    updateuser: (state, action) => {
      const { index, newuser } = action.payload;
      if (index >= 0 && index < state.users.length)
        state.users[index] = newuser;
    },
  },
});
export default UserSlice.reducer;
export const { createuser, deleteuser, updateuser } = UserSlice.actions;

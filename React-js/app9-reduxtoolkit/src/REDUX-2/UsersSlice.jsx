import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "usersDetails",
  initialState,
  reducers: {
    createuser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteuser: (state, action) => {
      state.users = state.users.filter(
        (user, index) => index !== action.payload
      );
    },
    updateuser: (state, action) => {
      const { index, newuser } = action.payload;
      state.users[index] = newuser;
    },
  },
});

export const { createuser, deleteuser, updateuser } = usersSlice.actions;
export default usersSlice.reducer;

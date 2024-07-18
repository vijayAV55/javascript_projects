import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};

const getAllUsers = async () => {
  const response = await (await fetch("http://localhost:3000/Hari")).json();
  return response;
};

export const getUserFormServer = createAsyncThunk(
  "users/getUserFormServer",
  async () => {
    return await getAllUsers();
  }
);

export const deleteUserFromServer = createAsyncThunk(
  "users/deleteUserFromServer",
  async (user) => {
    const response = await fetch("http://localhost:3000/Hari/" + user.id, {
      method: "DELETE",
    });
    return await getAllUsers();
  }
);

export const updateUserFromServer = createAsyncThunk();
export const createUserFromServer = createAsyncThunk(
  "users/createUserFromServer",
  async (user) => {
    const response = await fetch("http://localhost:3000/Hari", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await getAllUsers();
  }
);

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: () => {},
    readUser: () => {},
    updateUser: () => {},
    deleteUser: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getUserFormServer.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(getUserFormServer.rejected, (state, action) => {
      console.log("Some ERROR Happened");
      state.users = [];
    });

    builder.addCase(deleteUserFromServer.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    // builder.addCase(updateUserFromServer.fulfilled, (state, action) => {});
    // builder.addCase(createUserFromServer.fulfilled, (state, action) => {});
  },
});

export default UsersSlice.reducer;

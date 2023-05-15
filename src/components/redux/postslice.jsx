import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk("add", async (data) => {
  try {
    const result = await axios.post(
      `https://64606b60fe8d6fb29e307890.mockapi.io/crud`,
      {
        name: data.name,
        email: data.email,
        age: data.age,
        // username: data.username,
        // address: {
        // street: data.address,
        // },
      }
    );
    const res = result.data;
  } catch (error) {
    console.log(error, "createUser Error");
  }
});

export const showUser = createAsyncThunk("showUser", async () => {
  const response = await axios.get(
    "https://64606b60fe8d6fb29e307890.mockapi.io/crud"
  );

  try {
    const result = response.data;
    return result;
  } catch (error) {
    return error;
  }
});

export const deleteUser = createAsyncThunk("delete", async (id) => {
  const response = await axios.delete(
    `https://64606b60fe8d6fb29e307890.mockapi.io/crud/${id}`
  );

  try {
    const result = response.data;
    return result;
  } catch (error) {
    return error;
  }
});

export const updateUser = createAsyncThunk("update", async (data) => {
  console.log(data, "datadatadata");
  const response = await axios.put(
    `https://64606b60fe8d6fb29e307890.mockapi.io/crud/${data.id}`,
    { name: data.name, email: data.email, age: data.age }
  );

  try {
    const result = response.data;
    return result;
  } catch (error) {
    return error;
  }
});

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    loading: false,
    user: [],
    error: null,
    searchUser: [],
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchUser = action.payload;
    },
  },

  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = [...action.payload];
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      console.log(action,'action');
      state.loading = false;
      state.user = state.user.map((ele) => {
        return ele.id === action.payload.id ? action.payload : ele;
      });
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.user = state.user.filter((ele) => ele.id !== id);
      }
    },
  },
});

export default postSlice.reducer;
export const { searchUser } = postSlice.actions;

/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import create from "./thunk";

const message = createSlice({
  name: "message",
  initialState: {
    data: {},
    error: "",
  },
  reducers: {},
  extraReducers: {
    [create.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.error = "";
    },
    [create.rejected]: (state, action) => {
      state.data = {};
      state.error = action.payload.error;
    },
  },
});

export { default as create } from "./thunk";

export default message.reducer;

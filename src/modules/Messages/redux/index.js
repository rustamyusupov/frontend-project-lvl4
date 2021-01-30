/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import create from "./thunk";

const messages = createSlice({
  name: "messages",
  initialState: {
    items: [],
    error: "",
  },
  reducers: {},
  extraReducers: {
    [create.rejected]: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export { default as create } from "./thunk";

export default messages.reducer;

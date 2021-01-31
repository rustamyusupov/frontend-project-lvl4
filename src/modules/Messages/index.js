/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import create from "./thunk";

const messages = createSlice({
  name: "messages",
  initialState: {
    items: [],
    error: "",
  },
  reducers: {
    addMessage: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: {
    [create.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export { default as create } from "./thunk";

export const { addMessage } = messages.actions;

export default messages.reducer;

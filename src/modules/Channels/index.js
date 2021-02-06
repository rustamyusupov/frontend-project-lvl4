/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const channels = createSlice({
  name: "channels",
  initialState: {
    currentChannelId: 1,
    items: [],
  },
  reducers: {
    setCurrentChannel: (state, action) => {
      state.currentChannelId = action.payload;
    },
    addChannel: (state, action) => {
      state.items.push(action.payload.attributes);
    },
    renameChannel: (state, action) => {
      // state.items = items.map(({ name, ...rest }) => ({
      //   name: name === action.payload.name,
      // }));
    },
    removeChannel: (state, action) => {
      console.log(action.payload.id);
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
  },
});

export { default as create } from "./create";
export { default as rename } from "./rename";
export { default as remove } from "./remove";

export const {
  setCurrentChannel,
  addChannel,
  renameChannel,
  removeChannel,
} = channels.actions;

export default channels.reducer;

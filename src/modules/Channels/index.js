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
    reducers: {
      addChannel: (state, action) => {
        state.items.push(action.payload);
      },
    },
  },
});

export const { setCurrentChannel, addChannel } = channels.actions;

export default channels.reducer;

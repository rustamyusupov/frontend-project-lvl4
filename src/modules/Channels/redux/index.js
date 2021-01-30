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
  },
});

export const { setCurrentChannel } = channels.actions;

export default channels.reducer;

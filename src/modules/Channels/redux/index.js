/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const channels = createSlice({
  name: "channels",
  initialState: {
    currentChannelId: 1,
    items: [],
    error: "",
  },
  reducers: {},
});

export default channels.reducer;

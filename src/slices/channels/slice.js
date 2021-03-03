/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { createChannel, removeChannel, renameChannel } from './thunk';

const initialChannel = 1;

const channels = createSlice({
  name: 'channels',
  initialState: {
    currentChannelId: initialChannel,
    items: null,
    error: null,
  },
  reducers: {
    setCurrentChannel: (state, action) => {
      state.currentChannelId = action.payload;
    },
    addChannel: (state, action) => {
      state.items.push(action.payload.attributes);
    },
    renameChannel: (state, action) => {
      const { id, attributes: { name } } = action.payload;
      const channel = state.items.find((item) => item.id === id);

      channel.name = name;
    },
    removeChannel: (state, action) => {
      if (state.currentChannelId === action.payload.id) {
        state.currentChannelId = initialChannel;
      }

      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
  },
  extraReducers: {
    [createChannel.fulfilled]: (state, action) => {
      state.currentChannelId = action.payload?.id;
    },
    [createChannel.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [removeChannel.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [renameChannel.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const channelActions = channels.actions;

export default channels.reducer;

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
      state.items = state.items.map(({ id, name, ...rest }) => ({
        name: id === action.payload.id ? action.payload.attributes.name : name,
        id,
        ...rest,
      }));
    },
    removeChannel: (state, action) => {
      if (state.currentChannelId === action.payload.id) {
        state.currentChannelId = initialChannel;
      }

      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
  },
  extraReducers: {
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

export const channelActions = { ...channels.actions };

export default channels.reducer;

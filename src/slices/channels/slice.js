/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { createChannel, removeChannel, renameChannel } from './thunk';

const initialChannel = 1;

const channels = createSlice({
  name: 'channels',
  initialState: {
    currentChannelId: initialChannel,
    items: [],
    error: '',
  },
  reducers: {
    setCurrent: (state, action) => {
      state.currentChannelId = action.payload;
    },
    add: (state, action) => {
      state.items.push(action.payload.attributes);
    },
    rename: (state, action) => {
      state.items = state.items.map(({ id, name, ...rest }) => ({
        name: id === action.payload.id ? action.payload.attributes.name : name,
        id,
        ...rest,
      }));
    },
    remove: (state, action) => {
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

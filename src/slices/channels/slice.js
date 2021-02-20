/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const channels = createSlice({
  name: 'channels',
  initialState: {
    currentChannelId: 1,
    items: [],
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
});

export const channelActions = { ...channels.actions };

export default channels.reducer;

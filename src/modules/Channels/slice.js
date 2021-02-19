/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const channels = createSlice({
  name: 'channels',
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
      state.items = state.items.map(({ id, name, ...rest }) => ({
        name: id === action.payload.id ? action.payload.attributes.name : name,
        id,
        ...rest,
      }));
    },
    removeChannel: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
  },
});

export { default as create } from './create';
export { default as rename } from './rename';
export { default as remove } from './remove';

export const {
  setCurrentChannel,
  addChannel,
  renameChannel,
  removeChannel,
} = channels.actions;

export default channels.reducer;

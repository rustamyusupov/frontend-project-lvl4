/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import create from './thunk';

const messages = createSlice({
  name: 'messages',
  initialState: {
    items: [],
    error: '',
  },
  reducers: {
    addMessage: (state, action) => {
      state.items.push(action.payload.attributes);
    },
    removeMessages: (state, action) => {
      state.items = state.items.filter(
        ({ channelId }) => channelId !== action.payload,
      );
    },
  },
  extraReducers: {
    [create.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const { actions } = messages;

export default messages.reducer;

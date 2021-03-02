/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import createMessage from './thunk';

const messages = createSlice({
  name: 'messages',
  initialState: {
    items: null,
    error: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.items.push(action.payload.attributes);
    },
    removeMessage: (state, action) => {
      state.items = state.items.filter(
        ({ channelId }) => channelId !== action.payload,
      );
    },
  },
  extraReducers: {
    [createMessage.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const messageActions = messages.actions;

export default messages.reducer;

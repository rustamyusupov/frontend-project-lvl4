/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import create from './create';

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

export { default as createMessage } from './create';

export const messagesActions = { ...messages.actions };

export default messages.reducer;

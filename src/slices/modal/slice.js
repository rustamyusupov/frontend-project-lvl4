/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  type: null,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.show = true;
      state.type = action.payload.type;
      state.data = action.payload.data;
    },
    hideModal: () => initialState,
  },
});

export const modalActions = { ...modal.actions };

export default modal.reducer;

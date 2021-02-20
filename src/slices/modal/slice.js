import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  type: '',
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state, action) => {
      state.show = true;
      state.type = action.payload.type;
      state.data = action.payload.data;
    },
    hide: () => initialState,
  },
});

export const modalActions = { ...modal.actions };

export default modal.reducer;

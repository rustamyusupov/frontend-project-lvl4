/* eslint-disable consistent-return */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeMessages } from "modules/Messages";
import { setCurrentChannel } from "modules/Channels";
import { getCurrentChannel } from "modules/Channels/selectors";

const remove = createAsyncThunk(
  "channels/remove",
  async ({ id }, { dispatch, getState, extra: { request } }) => {
    const state = getState();
    const currentChannel = getCurrentChannel(state);
    const url = `/api/v1/channels/${id}`;
    const options = {
      method: "delete",
      params: { id },
    };

    if (currentChannel.id === id) {
      dispatch(setCurrentChannel(1));
    }

    await request(url, options);
    dispatch(removeMessages(id));
  }
);

export default remove;

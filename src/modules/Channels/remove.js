/* eslint-disable consistent-return */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeMessages } from "modules/Messages";

const create = createAsyncThunk(
  "channels/remove",
  async ({ id }, { dispatch, extra: { request } }) => {
    const url = `/api/v1/channels/${id}`;
    const options = {
      method: "delete",
      params: { id },
    };

    await request(url, options);
    dispatch(removeMessages(id));
  }
);

export default create;

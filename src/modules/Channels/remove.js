/* eslint-disable consistent-return */
import { createAsyncThunk } from "@reduxjs/toolkit";

const create = createAsyncThunk(
  "channels/remove",
  async ({ id }, { extra: { request } }) => {
    const url = `/api/v1/channels/${id}`;
    const options = {
      method: "delete",
      params: { id },
    };

    await request(url, options);
  }
);

export default create;

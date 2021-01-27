/* eslint-disable consistent-return */
import { createAsyncThunk } from "@reduxjs/toolkit";

const create = createAsyncThunk(
  "message/create",
  async ({ channel, userName, text }, { extra: { request } }) => {
    const url = `/api/v1/channels/${channel}/messages`;
    const options = {
      method: "post",
      data: { attributes: { userName, text } },
    };

    const response = await request(url, options);

    return response;
  }
);

export default create;

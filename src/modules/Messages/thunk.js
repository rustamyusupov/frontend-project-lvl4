/* eslint-disable consistent-return */
import { createAsyncThunk } from "@reduxjs/toolkit";

const create = createAsyncThunk(
  "messages/create",
  async ({ channel, userName, text }, { extra: { request } }) => {
    const url = `/api/v1/channels/${channel}/messages`;
    const options = {
      method: "post",
      data: { attributes: { userName, text } },
    };

    await request(url, options);
  }
);

export default create;

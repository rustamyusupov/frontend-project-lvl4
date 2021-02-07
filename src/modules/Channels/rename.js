/* eslint-disable consistent-return */
import { createAsyncThunk } from "@reduxjs/toolkit";

const rename = createAsyncThunk(
  "channels/rename",
  async ({ id, name }, { extra: { request } }) => {
    const url = `/api/v1/channels/${id}`;
    const options = {
      method: "patch",
      data: { attributes: { name } },
    };

    await request(url, options);
  }
);

export default rename;

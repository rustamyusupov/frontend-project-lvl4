/* eslint-disable consistent-return */
import { createAsyncThunk } from "@reduxjs/toolkit";

const create = createAsyncThunk(
  "channels/rename",
  async ({ name }, { extra: { request } }) => {
    const url = `/api/v1/channels`;
    const options = {
      method: "post",
      data: { attributes: { name } },
    };

    await request(url, options);
  }
);

export default create;

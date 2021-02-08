/* eslint-disable consistent-return */
import { createAsyncThunk } from "@reduxjs/toolkit";

import routes from "routes";

const create = createAsyncThunk(
  "messages/create",
  async ({ channel, userName, text }, { extra: { request } }) => {
    const url = routes.channelMessagesPath(channel);
    const options = {
      method: "post",
      data: { attributes: { userName, text } },
    };

    await request(url, options);
  }
);

export default create;

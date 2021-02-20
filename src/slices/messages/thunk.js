import { createAsyncThunk } from '@reduxjs/toolkit';

const create = createAsyncThunk(
  'messages/create',
  async ({ channel, userName, text }, { extra: { routes, request } }) => {
    const url = routes.channelMessagesPath(channel);
    const options = {
      method: 'post',
      data: { attributes: { userName, text } },
    };

    await request(url, options);
  },
);

export default { create };

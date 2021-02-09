/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';

import routes from 'routes';

const rename = createAsyncThunk(
  'channels/rename',
  async ({ id, name }, { extra: { request } }) => {
    const url = routes.channelPath(id);
    const options = {
      method: 'patch',
      data: { attributes: { name } },
    };

    await request(url, options);
  },
);

export default rename;

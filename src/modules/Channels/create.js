/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';

import routes from 'routes';

const create = createAsyncThunk(
  'channels/create',
  async ({ name }, { extra: { request } }) => {
    const url = routes.channelsPath();
    const options = {
      method: 'post',
      data: { attributes: { name } },
    };

    await request(url, options);
  },
);

export default create;

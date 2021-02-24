import { createAsyncThunk } from '@reduxjs/toolkit';

import { messageActions } from 'slices/messages/slice';
import { currentChannelSelector } from 'slices/channels/selectors';

export const createChannel = createAsyncThunk(
  'channels/create',
  async ({ name }, { extra: { routes, request } }) => {
    const url = routes.channelsPath();
    const options = {
      method: 'post',
      data: { attributes: { name } },
    };

    await request(url, options);
  },
);

export const removeChannel = createAsyncThunk(
  'channels/remove',
  async ({ id }, { dispatch, extra: { routes, request } }) => {
    const url = routes.channelPath(id);
    const options = {
      method: 'delete',
      params: { id },
    };

    await request(url, options);
    dispatch(messageActions.remove(id));
  },
);

export const renameChannel = createAsyncThunk(
  'channels/rename',
  async ({ id, name }, { extra: { routes, request } }) => {
    const url = routes.channelPath(id);
    const options = {
      method: 'patch',
      data: { attributes: { name } },
    };

    await request(url, options);
  },
);

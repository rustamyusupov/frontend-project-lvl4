import { createAsyncThunk } from '@reduxjs/toolkit';

import { messageActions } from 'slices/messages';
import { channelActions, channelSelectors } from 'slices/channels';

const create = createAsyncThunk(
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

const remove = createAsyncThunk(
  'channels/remove',
  async ({ id }, { dispatch, getState, extra: { routes, request } }) => {
    const state = getState();
    const currentChannel = channelSelectors.getCurrentChannel(state);
    const url = routes.channelPath(id);
    const options = {
      method: 'delete',
      params: { id },
    };

    if (currentChannel.id === id) {
      dispatch(channelActions.setCurrentChannel(1));
    }

    await request(url, options);
    dispatch(messageActions.removeMessages(id));
  },
);

const rename = createAsyncThunk(
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

export default { create, remove, rename };

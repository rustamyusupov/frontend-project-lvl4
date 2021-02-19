import { createAsyncThunk } from '@reduxjs/toolkit';

import routes from 'routes';
import { messagesActions } from 'modules/Messages/slice';
import { channelActions } from 'modules/Channels/slice';
import { getCurrentChannel } from 'modules/Channels/selectors';

const remove = createAsyncThunk(
  'channels/remove',
  async ({ id }, { dispatch, getState, extra: { request } }) => {
    const state = getState();
    const currentChannel = getCurrentChannel(state);
    const url = routes.channelPath(id);
    const options = {
      method: 'delete',
      params: { id },
    };

    if (currentChannel.id === id) {
      dispatch(channelActions.setCurrentChannel(1));
    }

    await request(url, options);
    dispatch(messagesActions.removeMessages(id));
  },
);

export default remove;

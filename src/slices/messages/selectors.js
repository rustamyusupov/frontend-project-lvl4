import { get } from 'lodash/fp';
import { createSelector } from '@reduxjs/toolkit';

import { getCurrentChannel } from 'slices/channels/selectors';

const getMessages = createSelector(
  get('messages.items'),
  getCurrentChannel,
  (items, currentChannel) => items.filter(({ channelId }) => channelId === currentChannel.id),
);

export default getMessages;

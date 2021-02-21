import { get } from 'lodash/fp';
import { createSelector } from '@reduxjs/toolkit';

import { currentChannelSelector } from 'slices/channels/selectors';

const messagesSelector = createSelector(
  get('messages.items'),
  currentChannelSelector,
  (items, currentChannel) => items.filter(({ channelId }) => channelId === currentChannel.id),
);

export default messagesSelector;

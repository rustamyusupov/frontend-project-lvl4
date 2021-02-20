import { get } from 'lodash/fp';
import { createSelector } from '@reduxjs/toolkit';

import { channelSelectors } from 'slices/channels';

const getMessages = createSelector(
  get('messages.items'),
  channelSelectors.getCurrentChannel,
  (items, currentChannel) => items.filter(({ channelId }) => channelId === currentChannel.id),
);

export default { getMessages };

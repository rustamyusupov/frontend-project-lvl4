import { get, find } from 'lodash/fp';
import { createSelector } from '@reduxjs/toolkit';

const getCurrentChannel = createSelector(
  get('channels.items'),
  get('channels.currentChannelId'),
  (items, currentId) => find({ id: currentId })(items),
);

const getChannels = createSelector(
  get('channels.items'),
  getCurrentChannel,
  (items, current) => items.map(({ id, ...rest }) => ({ id, active: id === current.id, ...rest })),
);

export default { getChannels, getCurrentChannel };

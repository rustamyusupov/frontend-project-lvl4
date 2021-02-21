import { get, find } from 'lodash/fp';
import { createSelector } from '@reduxjs/toolkit';

export const currentChannelSelector = createSelector(
  get('channels.items'),
  get('channels.currentChannelId'),
  (items, currentId) => find({ id: currentId })(items),
);

export const channelsSelector = createSelector(
  get('channels.items'),
  currentChannelSelector,
  (items, current) => items.map(({ id, ...rest }) => ({ id, active: id === current.id, ...rest })),
);

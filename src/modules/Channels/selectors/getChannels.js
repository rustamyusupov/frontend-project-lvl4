import { get } from 'lodash/fp';
import { createSelector } from '@reduxjs/toolkit';

import getCurrentChannel from './getCurrentChannel';

const getChannels = createSelector(
  get('channels.items'),
  getCurrentChannel,
  (items, current) => items.map(({ id, ...rest }) => ({ id, active: id === current.id, ...rest })),
);

export default getChannels;

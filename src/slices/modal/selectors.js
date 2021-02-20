import { get, identity } from 'lodash/fp';
import { createSelector } from '@reduxjs/toolkit';

const getMessages = createSelector(get('modal'), identity);

export default getMessages;

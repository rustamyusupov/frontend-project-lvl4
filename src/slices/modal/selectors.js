import { get, identity } from 'lodash/fp';
import { createSelector } from '@reduxjs/toolkit';

const modalSelector = createSelector(get('modal'), identity);

export default modalSelector;

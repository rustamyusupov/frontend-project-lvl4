import { combineReducers } from 'redux';

import channels from 'slices/channels/slice';
import messages from 'slices/messages/slice';
import modal from 'slices/modal/slice';

const createReducer = combineReducers({ channels, messages, modal });

export default createReducer;

import { combineReducers } from 'redux';

import channels from 'slices/channels';
import messages from 'slices/messages';
import modal from 'slices/modal';

const createReducer = combineReducers({ channels, messages, modal });

export default createReducer;

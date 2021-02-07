import { combineReducers } from "redux";

import channels from "modules/Channels";
import messages from "modules/Messages";
import modal from "modules/Modal";

const createReducer = combineReducers({ channels, messages, modal });

export default createReducer;

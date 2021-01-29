import { combineReducers } from "redux";

import channels from "../modules/Channels/redux";
import messages from "../modules/Messages/redux";

const createReducer = combineReducers({ channels, messages });

export default createReducer;

import { combineReducers } from "redux";

import channels from "../modules/Channels";
import messages from "../modules/Messages";

const createReducer = combineReducers({ channels, messages });

export default createReducer;

import { combineReducers } from "redux";

import message from "../modules/Message/redux";

const createReducer = combineReducers({ message });

export default createReducer;

import { combineReducers } from "redux";

import message from "../modules/Message";

const createReducer = combineReducers({ message });

export default createReducer;

import { get, identity } from "lodash/fp";
import { createSelector } from "@reduxjs/toolkit";

const getMessages = createSelector(get("messages.items"), identity);

export default getMessages;

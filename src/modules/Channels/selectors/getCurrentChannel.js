import { get, find } from "lodash/fp";
import { createSelector } from "@reduxjs/toolkit";

const getCurrentChannel = createSelector(
  get("channels.items"),
  get("channels.currentChannelId"),
  (items, currentId) => find({ id: currentId })(items)
);

export default getCurrentChannel;

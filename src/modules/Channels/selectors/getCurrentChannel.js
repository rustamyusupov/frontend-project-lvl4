import { get, identity } from "lodash/fp";
import { createSelector } from "@reduxjs/toolkit";

const getCurrentChannel = createSelector(
  get("channels.currentChannelId"),
  identity
);

export default getCurrentChannel;

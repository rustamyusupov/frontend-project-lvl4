import { get, filter } from "lodash/fp";
import { createSelector } from "@reduxjs/toolkit";

import { getCurrentChannel } from "modules/Channels/selectors";

const getMessages = createSelector(
  get("messages.items"),
  getCurrentChannel,
  (items, currentChannel) =>
    filter(({ channelId, ...rest }) => channelId === currentChannel)(items)
);

export default getMessages;
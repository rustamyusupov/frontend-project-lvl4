import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentChannel } from "modules/Channels";
import { getChannels } from "modules/Channels/selectors";
import Navigation from "components/Navigation";

const Sidebar = () => {
  const dispatch = useDispatch();
  const channels = useSelector(getChannels);

  const handleClick = (id) => dispatch(setCurrentChannel(id));

  return <Navigation items={channels} onClick={handleClick} />;
};

export default Sidebar;

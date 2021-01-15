import React from "react";
import PropTypes from "prop-types";
import gon from "gon";

import Channels from "../../components/Channels";

const App = () => {
  return <Channels list={gon.channels} />;
};

export default App;

import React, { useState } from "react";
import PropTypes from "prop-types";

import Navigation from "../../components/Navigation";

const App = ({ channels }) => {
  const [activeChannel, setActiveChannel] = useState("general");

  const items = channels.map(({ name, ...rest }) => ({
    active: name === activeChannel,
    name,
    ...rest,
  }));

  const handleChannelClick = (name) => setActiveChannel(name);

  return (
    <div className="row h-100 pb-3">
      <div className="col-3 border-right">
        <div className="d-flex mb-2">
          <span>Channels</span>
          <button type="button" className="ml-auto p-0 btn btn-link">
            +
          </button>
        </div>
        <Navigation items={items} onClick={handleChannelClick} />
      </div>
      <main className="col h-100"></main>
    </div>
  );
};

App.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default App;

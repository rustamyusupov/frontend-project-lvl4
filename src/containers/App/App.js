import React, { useState } from "react";
import PropTypes from "prop-types";

import Navigation from "../../components/Navigation";
import MessageForm from "../../components/MessageForm";

const App = ({ channels }) => {
  const [activeChannel, setActiveChannel] = useState("general");

  const items = channels.map(({ name, ...rest }) => ({
    active: name === activeChannel,
    name,
    ...rest,
  }));

  const handleChannelClick = (name) => setActiveChannel(name);

  const handleSubmit = (value) => console.log(value);

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
      <main className="col h-100">
        <div className="d-flex flex-column h-100">
          <div id="messages-box" className="chat-messages overflow-auto mb-3" />
          <div className="mt-auto">
            <MessageForm onSubmit={handleSubmit} />
          </div>
        </div>
      </main>
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

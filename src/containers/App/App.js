import React, { useState } from "react";
import PropTypes from "prop-types";

import { useUser } from "../../modules/User/context";
import Input from "../../modules/Message/containers/Input";
import Chat from "../../components/Chat";
import Navigation from "../../components/Navigation";

const App = ({ channels, currentChannelId, messages }) => {
  const userName = useUser();
  const [activeChannel, setActiveChannel] = useState(currentChannelId);

  const items = channels.map(({ id, ...rest }) => ({
    active: id === activeChannel,
    id,
    ...rest,
  }));

  const handleChannelClick = (id) => setActiveChannel(id);

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
          <div id="messages-box" className="chat-messages overflow-auto mb-3">
            <Chat messages={messages} />
          </div>
          <div className="mt-auto">
            <Input activeChannel={activeChannel} userName={userName} />
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
      removable: PropTypes.bool,
    })
  ).isRequired,
  currentChannelId: PropTypes.number.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      channelId: PropTypes.number,
      userName: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

App.defaultProps = {
  messages: [],
};

export default App;

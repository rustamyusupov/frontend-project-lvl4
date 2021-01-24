import React from "react";
import PropTypes from "prop-types";

const Chat = ({ messages }) => (
  <div id="messages-box" className="chat-messages overflow-auto mb-3">
    {messages.map(({ userName, value }) => (
      <div className="text-break">
        <b>{userName}</b>: {value}
      </div>
    ))}
  </div>
);

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      channelId: PropTypes.number,
      userName: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

Chat.defaultProps = {
  messages: [],
};

export default Chat;

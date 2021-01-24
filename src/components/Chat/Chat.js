import React from "react";
import PropTypes from "prop-types";

const Chat = ({ messages }) =>
  messages.map(({ id, userName, value }) => (
    <div key={id} className="text-break">
      <b>{userName}</b>: {value}
    </div>
  ));

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

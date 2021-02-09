import React from 'react';
import PropTypes from 'prop-types';

const Chat = ({ messages }) => messages.map(({ id, userName, text }) => (
  <div key={id} className="text-break">
    <b>{userName}</b>
    :
    {' '}
    {text}
  </div>
));

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      channelId: PropTypes.number,
      userName: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

Chat.defaultProps = {
  messages: [],
};

export default Chat;

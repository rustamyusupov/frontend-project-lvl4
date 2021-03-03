import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import messagesSelector from 'slices/messages/selectors';

const Chat = () => {
  const anchorRef = useRef(null);
  const messages = useSelector(messagesSelector);

  useEffect(() => anchorRef.current?.scrollIntoView(), [messages]);

  return (
    messages.map(({ id, userName, text }, index) => (
      <div key={id} className="text-break" ref={messages.length - 1 === index ? anchorRef : null}>
        <b>{userName}</b>
        :
        {' '}
        {text}
      </div>
    )));
};

export default Chat;

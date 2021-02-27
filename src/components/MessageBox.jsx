import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import messagesSelector from 'slices/messages/selectors';
import Chat from 'components/Chat';

const MessageBox = () => {
  const tagRef = useRef(null);
  const messages = useSelector(messagesSelector);

  const scrollToBottom = () => tagRef.current?.scrollIntoView();

  useEffect(() => {
    const timerId = setTimeout(() => scrollToBottom(), 0);

    return () => clearTimeout(timerId);
  });

  return (
    <>
      <Chat messages={messages} />
      <div ref={tagRef} />
    </>
  );
};

export default MessageBox;

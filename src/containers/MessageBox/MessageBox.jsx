import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import getMessages from 'modules/Messages/selectors';
import Chat from 'components/Chat';

const MessageBox = () => {
  const tagRef = useRef(null);
  const messages = useSelector(getMessages);

  const scrollToBottom = () => tagRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const id = setTimeout(() => scrollToBottom(), 0);

    return () => clearTimeout(id);
  });

  return (
    <>
      <Chat messages={messages} />
      <div ref={tagRef} />
    </>
  );
};

export default MessageBox;

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import React from 'react';
import { channels, currentChannelId, messages } from 'gon';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

import '../assets/application.scss';
import configureStore from 'redux/configureStore';
import { channelActions } from 'slices/channels';
import { messageActions } from 'slices/messages';
import App from 'components/App';
import { UserProvider } from './context';

const initialState = {
  channels: { items: channels, currentChannelId },
  messages: { items: messages },
};
const store = configureStore(initialState);
const mountNode = document.getElementById('chat');
const socket = io();
const { addChannel, removeChannel, renameChannel } = channelActions;

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>,
    mountNode,
  );
};

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

socket.on('newChannel', (data) => store.dispatch(addChannel(data)));
socket.on('removeChannel', (data) => store.dispatch(removeChannel(data)));
socket.on('renameChannel', (data) => store.dispatch(renameChannel(data)));
socket.on('newMessage', (data) => store.dispatch(messageActions.addMessage(data)));

render();

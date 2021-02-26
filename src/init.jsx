import 'core-js/stable';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import React from 'react';
import { channels, currentChannelId, messages } from 'gon';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

import '../assets/application.scss';
import configureStore from 'redux/configureStore';
import { channelActions } from 'slices/channels/slice';
import { messageActions } from 'slices/messages/slice';
import App from 'components/App';
import enTranslation from 'en.json';
import { UserProvider } from './context';

const init = () => {
  const resources = {
    en: {
      translation: enTranslation,
    },
  };
  const initialState = {
    channels: { items: channels, currentChannelId },
    messages: { items: messages },
  };
  const store = configureStore(initialState);
  const mountNode = document.getElementById('chat');
  const socket = io();

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

  i18n
    .use(initReactI18next)
    .init({
      resources,
      load: 'languageOnly',
      fallbackLng: false,
      lng: 'en',
    });

  socket.on('newChannel', (data) => store.dispatch(channelActions.addChannel(data)));
  socket.on('removeChannel', (data) => store.dispatch(channelActions.removeChannel(data)));
  socket.on('renameChannel', (data) => store.dispatch(channelActions.renameChannel(data)));
  socket.on('newMessage', (data) => store.dispatch(messageActions.addMessage(data)));

  render();
};

export default init;

import ReactDOM from 'react-dom';
import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import cookie from 'js-cookie';
import faker from 'faker';

import '../assets/application.scss';
import configureStore from 'redux/configureStore';
import { channelActions } from 'slices/channels/slice';
import { messageActions } from 'slices/messages/slice';
import App from 'components/App';
import enTranslation from 'en.json';
import { UserProvider } from './userContext';

const init = async ({ channels, currentChannelId, messages }) => {
  const resources = {
    en: {
      translation: enTranslation,
    },
  };
  const initialState = {
    channels: { items: channels, currentChannelId },
    messages: { items: messages },
  };
  const i18Instance = i18n.createInstance();
  const store = configureStore(initialState);
  const mountNode = document.getElementById('chat');
  const socket = io();

  await i18Instance
    .use(initReactI18next)
    .init({
      resources,
      load: 'languageOnly',
      fallbackLng: false,
      lng: 'en',
    });

  if (!cookie.get('username')) {
    const userName = faker.internet.userName();

    cookie.set('username', userName);
  }

  socket.on('newChannel', (data) => store.dispatch(channelActions.addChannel(data)));
  socket.on('removeChannel', (data) => store.dispatch(channelActions.removeChannel(data)));
  socket.on('renameChannel', (data) => store.dispatch(channelActions.renameChannel(data)));
  socket.on('newMessage', (data) => store.dispatch(messageActions.addMessage(data)));

  ReactDOM.render(
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>,
    mountNode,
  );
};

export default init;

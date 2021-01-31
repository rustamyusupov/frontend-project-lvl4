import "core-js/stable";
import "regenerator-runtime/runtime";
import ReactDOM from "react-dom";
import React from "react";
import { channels, currentChannelId, messages } from "gon";
import { Provider } from "react-redux";
import io from "socket.io-client";

import "../assets/application.scss";
import configureStore from "redux/configureStore";
import { addMessage } from "modules/Messages";
import { UserProvider } from "modules/User/context";
import App from "containers/App";

const initialState = {
  channels: { items: channels, currentChannelId },
  messages: { items: messages },
};
const store = configureStore(initialState);
const mountNode = document.getElementById("chat");
const socket = io();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>,
    mountNode
  );
};

if (process.env.NODE_ENV !== "production") {
  localStorage.debug = "chat:*";
}

socket.on("newMessage", ({ attributes }) =>
  store.dispatch(addMessage(attributes))
);

render();

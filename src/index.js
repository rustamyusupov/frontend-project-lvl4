import "core-js/stable";
import "regenerator-runtime/runtime";
import ReactDOM from "react-dom";
import React from "react";
import gon from "gon";
import { Provider } from "react-redux";

import "../assets/application.scss";
import configureStore from "./redux/configureStore";
import { UserProvider } from "./modules/User/context";
import App from "./containers/App";

if (process.env.NODE_ENV !== "production") {
  localStorage.debug = "chat:*";
}

const initialState = {};
const store = configureStore(initialState);
const mountNode = document.getElementById("chat");

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <UserProvider>
        <App {...gon} />
      </UserProvider>
    </Provider>,
    mountNode
  );
};

render();

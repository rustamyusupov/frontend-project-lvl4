import "core-js/stable";
import "regenerator-runtime/runtime";
import ReactDOM from "react-dom";
import React from "react";
import gon from "gon";

import "../assets/application.scss";
import App from "./containers/App";
import { UserProvider } from "./modules/User/context";

if (process.env.NODE_ENV !== "production") {
  localStorage.debug = "chat:*";
}

const mountNode = document.getElementById("chat");

const render = () => {
  ReactDOM.render(
    <UserProvider>
      <App channels={gon.channels} />
    </UserProvider>,
    mountNode
  );
};

render();

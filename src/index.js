// @ts-check

import "core-js/stable";
import "regenerator-runtime/runtime";
import ReactDOM from "react-dom";
import React from "react";

import "../assets/application.scss";
import App from "./containers/App";

if (process.env.NODE_ENV !== "production") {
  localStorage.debug = "chat:*";
}

ReactDOM.render(<App />, document.getElementById("chat"));

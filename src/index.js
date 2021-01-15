// @ts-check

import "core-js/stable";
import "regenerator-runtime/runtime";
import ReactDOM from "react-dom";
import React from "react";
import gon from "gon";

import "../assets/application.scss";
import Channels from "./components/Channels";

if (process.env.NODE_ENV !== "production") {
  localStorage.debug = "chat:*";
}

ReactDOM.render(
  <Channels list={gon.channels} />,
  document.getElementById("chat")
);

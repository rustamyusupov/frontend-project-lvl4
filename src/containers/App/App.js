import React from "react";
import PropTypes from "prop-types";
import gon from "gon";

import Navigation from "../../components/Navigation";

const App = () => (
  <div className="row h-100 pb-3">
    <div className="col-3 border-right">
      <div className="d-flex mb-2">
        <span>Channels</span>
        <button type="button" className="ml-auto p-0 btn btn-link">
          +
        </button>
      </div>
      <Navigation items={gon.channels} />
    </div>
    <main className="col h-100"></main>
  </div>
);

export default App;

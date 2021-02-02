import React from "react";

import InputForm from "containers/InputForm";
import MessageBox from "containers/MessageBox";
import Sidebar from "containers/Sidebar";

const App = () => {
  return (
    <div className="row h-100 pb-3">
      <div className="col-3 border-right">
        <Sidebar />
      </div>
      <main className="col h-100">
        <div className="d-flex flex-column h-100">
          <div id="messages-box" className="chat-messages overflow-auto mb-3">
            <MessageBox />
          </div>
          <div className="mt-auto">
            <InputForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

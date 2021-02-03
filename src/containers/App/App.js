import React from "react";
import { Row, Col } from "react-bootstrap";

import InputForm from "containers/InputForm";
import MessageBox from "containers/MessageBox";
import Sidebar from "containers/Sidebar";

const App = () => (
  <Row className="h-100 pb-3">
    <Col xs="3" className="border-right" style={{ minWidth: "110px" }}>
      <Sidebar />
    </Col>
    <Col className="h-100">
      <div className="d-flex flex-column h-100">
        <div id="messages-box" className="chat-messages overflow-auto mb-3">
          <MessageBox />
        </div>
        <div className="mt-auto">
          <InputForm />
        </div>
      </div>
    </Col>
  </Row>
);

export default App;

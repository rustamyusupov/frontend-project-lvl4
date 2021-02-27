import React from 'react';
import { Row, Col } from 'react-bootstrap';

import InputForm from 'components/InputForm';
import MessageBox from 'components/MessageBox';
import Popup from 'components/Popup';
import Sidebar from 'components/Sidebar';

const App = () => (
  <Row className="h-100 pb-3">
    <Col xs="3" className="border-right">
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
    <Popup type="add" />
    <Popup type="rename" />
    <Popup type="remove" />
  </Row>
);

export default App;

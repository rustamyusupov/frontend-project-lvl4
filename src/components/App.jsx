import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ActionModal from 'components/ActionModal';
import Chat from 'components/Chat';
import MessageForm from 'components/MessageForm';
import Sidebar from 'components/Sidebar';

const App = () => (
  <Row className="h-100 pb-3">
    <Col xs="3" className="border-right">
      <Sidebar />
    </Col>
    <Col className="h-100">
      <div className="d-flex flex-column h-100">
        <div id="messages-box" className="chat-messages overflow-auto mb-3">
          <Chat />
        </div>
        <div className="mt-auto">
          <MessageForm />
        </div>
      </div>
    </Col>
    <ActionModal />
  </Row>
);

export default App;

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import modalSelector from 'slices/modal/selectors';
import MessageForm from 'components/MessageForm';
import Chat from 'components/Chat';
import ActionForm from 'components/ActionForm';
import Sidebar from 'components/Sidebar';

const App = () => {
  const { show, type } = useSelector(modalSelector);

  return (
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
      {show && <ActionForm type={type} />}
    </Row>
  );
};

export default App;

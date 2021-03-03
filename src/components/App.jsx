import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import modalSelector from 'slices/modal/selectors';
import AddForm from 'components/AddForm';
import Chat from 'components/Chat';
import MessageForm from 'components/MessageForm';
import RemoveForm from 'components/RemoveForm';
import RenameForm from 'components/RenameForm';

import Sidebar from 'components/Sidebar';

const formMap = {
  add: AddForm,
  remove: RemoveForm,
  rename: RenameForm,
};

const App = () => {
  const { show, type } = useSelector(modalSelector);
  const Form = formMap[type];

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
      {show && <Form />}
    </Row>
  );
};

export default App;

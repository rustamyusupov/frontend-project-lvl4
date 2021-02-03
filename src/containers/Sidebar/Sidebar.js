import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

import { setCurrentChannel, create as createChannel } from "modules/Channels";
import { getChannels } from "modules/Channels/selectors";
import AddChannel from "components/AddChannel";
import Modal from "components/Modal";
import Navigation from "components/Navigation";

const Sidebar = () => {
  const dispatch = useDispatch();
  const channels = useSelector(getChannels);

  const handleAction = (type) => (id) => dispatch(showModal({ type, id }));
  const handleChannelClick = (id) => dispatch(setCurrentChannel(id));

  const handleClose = () => dispatch(hideModal());
  const handleSubmit = (name) => dispatch(createChannel({ name }));

  // 1. move modals to App
  // 2. think about decomposition
  // 3. show modals actions, content

  return (
    <>
      <div className="d-flex mb-2">
        <span>Channels</span>
        <Button
          variant="link"
          className="ml-auto p-0"
          onClick={handleAction("add")}
        >
          +
        </Button>
      </div>
      <Navigation
        items={channels}
        onClick={handleChannelClick}
        onRename={handleAction("rename")}
        onRemove={handleAction("remove")}
      />
      <Modal
        title="Add channel"
        show={show}
        content={<AddChannel onClose={handleClose} onSubmit={handleSubmit} />}
        onClose={handleClose}
      />
    </>
  );
};

export default Sidebar;

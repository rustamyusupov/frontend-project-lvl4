import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

import { setCurrentChannel } from "modules/Channels";
import { getChannels } from "modules/Channels/selectors";
import AddChannel from "containers/AddChannel";
import Modal from "components/Modal";
import Navigation from "components/Navigation";

const Sidebar = () => {
  const dispatch = useDispatch();
  const channels = useSelector(getChannels);
  const [show, setShow] = useState(false);

  const handleActionClick = (type) => (id) =>
    console.log({ type, id }) || setShow(true);
  const handleCloseClick = () => setShow(false);
  const handleChannelClick = (id) => dispatch(setCurrentChannel(id));

  // 1. think about decomposition
  // 2. move modals to App
  // 3. show modals actions, content

  return (
    <>
      <div className="d-flex mb-2">
        <span>Channels</span>
        <Button
          variant="link"
          className="ml-auto p-0"
          onClick={handleActionClick("add")}
        >
          +
        </Button>
      </div>
      <Navigation
        items={channels}
        onClick={handleChannelClick}
        onRename={handleActionClick("rename")}
        onRemove={handleActionClick("remove")}
      />
      <Modal
        content={
          <AddChannel onClose={handleCloseClick} onSubmit={handleCloseClick} />
        }
        show={show}
        title="Add channel"
        onClose={handleCloseClick}
      />
    </>
  );
};

export default Sidebar;

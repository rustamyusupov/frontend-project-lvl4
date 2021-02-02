import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentChannel } from "modules/Channels";
import { getChannels } from "modules/Channels/selectors";
import AddChannel from "containers/AddChannel";
import Modal from "components/Modal";
import Navigation from "components/Navigation";

const Sidebar = () => {
  const dispatch = useDispatch();
  const channels = useSelector(getChannels);
  const [show, setShow] = useState(false);

  const handlePlusClick = () => setShow(true);
  const handleCloseClick = () => setShow(false);
  const handleChannelClick = (id) => dispatch(setCurrentChannel(id));

  return (
    <>
      <div className="d-flex mb-2">
        <span>Channels</span>
        <button
          type="button"
          className="ml-auto p-0 btn btn-link"
          onClick={handlePlusClick}
        >
          +
        </button>
      </div>
      <Navigation items={channels} onClick={handleChannelClick} />
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

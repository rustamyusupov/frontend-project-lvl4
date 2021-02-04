import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

import { setCurrentChannel, create as createChannel } from "modules/Channels";
import { getChannels } from "modules/Channels/selectors";
import AddChannelForm from "components/AddChannelForm";
import Form from "components/Form";
import Modal from "components/Modal";
import Navigation from "components/Navigation";

const renderModal = ({ title, show, Component, onClose, onSubmit }) => (
  <Modal
    title={title}
    show={show}
    content={
      <Form Component={Component} onClose={onClose} onSubmit={onSubmit} />
    }
    onClose={onClose}
  />
);

const Sidebar = () => {
  const dispatch = useDispatch();
  const channels = useSelector(getChannels);
  const [show, setShow] = useState("");

  const handleShow = (name) => () => setShow(name);
  const handleClose = () => setShow("");
  const handleChannelClick = (id) => dispatch(setCurrentChannel(id));
  const handleAdd = (name) => dispatch(createChannel({ name }));
  const handleRename = (name) => console.log("rename", name); // action
  const handleRemove = (name) => console.log("remove", name); // action

  return (
    <>
      <div className="d-flex mb-2">
        <span>Channels</span>
        <Button
          variant="link"
          className="ml-auto p-0"
          onClick={handleShow("add")}
        >
          +
        </Button>
      </div>
      <Navigation
        items={channels}
        onClick={handleChannelClick}
        onRename={handleShow("rename")}
        onRemove={handleShow("remove")}
      />
      {renderModal({
        title: "Add channel",
        show: show === "add",
        Component: AddChannelForm,
        onClose: handleClose,
        onSubmit: handleAdd,
      })}
      {renderModal({
        // initialValues
        title: "Rename channel",
        show: show === "rename",
        Component: AddChannelForm,
        onClose: handleClose,
        onSubmit: handleRename,
      })}
      {renderModal({
        title: "Remove channel",
        show: show === "remove",
        Component: AddChannelForm,
        onClose: handleClose,
        onSubmit: handleRemove,
      })}
    </>
  );
};

export default Sidebar;

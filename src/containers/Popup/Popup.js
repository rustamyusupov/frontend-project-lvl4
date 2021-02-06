import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { create, rename, remove } from "modules/Channels";
import { hide } from "modules/Modal";
import { getCurrent } from "modules/Modal/selectors";
import AddChannelForm from "components/AddChannelForm";
import Form from "components/Form";
import Modal from "components/Modal";

const map = {
  add: {
    Component: AddChannelForm,
    title: "Add channel",
    onSubmit: create,
  },
  rename: {
    Component: AddChannelForm,
    title: "Rename channel",
    onSubmit: rename,
  },
  remove: {
    Component: AddChannelForm,
    title: "Remove channel",
    onSubmit: remove,
  },
};

const Popup = ({ type }) => {
  const dispatch = useDispatch();
  const modal = useSelector(getCurrent);

  const show = modal.show && modal.type === type;
  const { Component, title, onSubmit } = map[type];
  const initialValues = { ...modal.data };

  const handleClose = () => dispatch(hide());
  const handleSubmit = (name) => dispatch(onSubmit({ name, ...modal.data }));

  return (
    <Modal
      show={show}
      title={title}
      content={
        <Form
          Component={Component}
          initialValues={initialValues}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      }
      onClose={handleClose}
    />
  );
};

Popup.propTypes = {
  type: PropTypes.oneOf(["add", "rename", "remove"]).isRequired,
};

export default Popup;

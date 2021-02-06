import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

import validate from "utils/validate";
import { create, rename, remove } from "modules/Channels";
import { hide } from "modules/Modal";
import { getCurrent } from "modules/Modal/selectors";
import AddChannelForm from "components/AddChannelForm";
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
  const inputEl = useRef(null);

  const show = modal.show && modal.type === type;
  const { Component, title, onSubmit } = map[type];

  useEffect(() => {
    inputEl.current?.focus();
  }, [show]);

  const handleClose = () => dispatch(hide());
  const handleSubmit = ({ name }) => {
    dispatch(onSubmit({ name, ...modal.data }));
    dispatch(hide());
  };

  return (
    <Modal
      show={show}
      title={title}
      content={
        <Formik
          initialValues={{ name: modal.data?.name ?? "" }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Component ref={inputEl} onClose={handleClose} {...props} />
          )}
        </Formik>
      }
      onClose={handleClose}
    />
  );
};

Popup.propTypes = {
  type: PropTypes.oneOf(["add", "rename", "remove"]).isRequired,
};

export default Popup;

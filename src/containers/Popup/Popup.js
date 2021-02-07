import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

import validate from "utils/validate";
import { create, rename, remove } from "modules/Channels";
import { hide } from "modules/Modal";
import { getCurrent } from "modules/Modal/selectors";
import ActionForm from "components/ActionForm";
import Modal from "components/Modal";

const map = {
  add: {
    action: "Submit",
    button: "primary",
    input: true,
    title: "Add channel",
    onSubmit: create,
  },
  remove: {
    action: "Confirm",
    button: "danger",
    input: false,
    title: "Remove channel",
    onSubmit: remove,
  },
  rename: {
    action: "Submit",
    button: "primary",
    input: true,
    title: "Rename channel",
    onSubmit: rename,
  },
};

const Popup = ({ type }) => {
  const dispatch = useDispatch();
  const modal = useSelector(getCurrent);
  const inputEl = useRef(null);

  const show = modal.show && modal.type === type;
  const { title, onSubmit, ...rest } = map[type];

  useEffect(() => {
    inputEl.current?.focus();
  }, [show]);

  const handleClose = () => dispatch(hide());
  const handleSubmit = async ({ name }, { setSubmitting }) => {
    const response = await dispatch(onSubmit({ id: modal.data?.id, name }));

    setSubmitting(false);

    if (!response.error) {
      dispatch(hide());
    }
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
            <ActionForm
              type={type}
              ref={inputEl}
              onClose={handleClose}
              {...props}
              {...rest}
            />
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

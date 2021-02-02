import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

import { create as createChannel } from "modules/Channels";
import AddChannelForm from "components/AddChannelForm";

const initialValues = {
  name: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  return errors;
};

const AddChannel = ({ onClose, onSubmit }) => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name }, { resetForm, setSubmitting }) => {
    dispatch(createChannel({ name }));
    setSubmitting(false);
    resetForm();
    onSubmit();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <AddChannelForm onClose={onClose} />
    </Formik>
  );
};

AddChannel.propTypes = {
  onClose: PropTypes.func,
};

AddChannel.defaultProps = {
  onClose: () => {},
};

export default AddChannel;

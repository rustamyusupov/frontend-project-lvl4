import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

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
  const handleSubmit = ({ name }, { resetForm, setSubmitting }) => {
    onSubmit(name);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {(props) => <AddChannelForm onClose={onClose} {...props} />}
    </Formik>
  );
};

AddChannel.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddChannel;

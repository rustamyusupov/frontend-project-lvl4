import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

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

const Form = ({ Component, onClose, onSubmit }) => {
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
      {(props) => <Component onClose={onClose} {...props} />}
    </Formik>
  );
};

Form.propTypes = {
  Component: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;

import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

import { create as createMessage } from "../../redux";
import Form from "../../components/Form";

const initialValues = {
  message: "",
};

const Input = ({ activeChannel, userName }) => {
  const dispatch = useDispatch();

  const handleSubmit = ({ message }, { resetForm, setSubmitting }) => {
    dispatch(
      createMessage({ channel: activeChannel, userName, text: message })
    );
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => <Form isSubmitting={isSubmitting} />}
    </Formik>
  );
};

Input.propTypes = {
  activeChannel: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Input;

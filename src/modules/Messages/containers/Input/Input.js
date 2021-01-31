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

  const handleSubmit = async (
    { message },
    { setFieldError, resetForm, setSubmitting }
  ) => {
    const response = await dispatch(
      createMessage({ channel: activeChannel, userName, text: message })
    );

    setSubmitting(false);

    if (response.error) {
      setFieldError("message", response.error?.message, false);
      return;
    }

    resetForm();
  };

  return (
    <Formik
      component={Form}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    />
  );
};

Input.propTypes = {
  activeChannel: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Input;

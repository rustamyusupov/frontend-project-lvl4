import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

import { getCurrentChannel } from "modules/Channels/selectors";
import { create as createMessage } from "modules/Messages";
import { useUser } from "modules/User/context";
import MessageForm from "components/MessageForm";

const initialValues = {
  message: "",
};

const InputForm = () => {
  const dispatch = useDispatch();
  const activeChannel = useSelector(getCurrentChannel);
  const userName = useUser();

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
      component={MessageForm}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    />
  );
};

export default InputForm;
